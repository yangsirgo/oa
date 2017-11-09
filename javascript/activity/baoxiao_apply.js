/**
 * Created by Xcar on 2016/9/20.
 */

define(function (require, exports) {
    require("./caidan_pageInit");
    //配置路径
    require("../common.js");
    require("../util/util");
    // require("./processImg");

    var selector = require("./oa_selector");
    var template = require("../plugins/template");
    var ApplyEditordataJson = require("./getApplyEditordataJson");
    var getselect = require("./getselect_option");
    var addperson = require("./addPersontabs");
    var getjsonSave= require("./getjson");
    var isNext = require("./isNextorSubmit");
    //加载select option
    var select_xm = require('../template/select_xm_option.tpl');
    var select_sl = require('../template/select_sl_option.tpl');
    var select_hl = require('../template/select_hl_option.tpl');
    $.ajaxSetup({ cache: false });


    //判断是否进入了编辑页面通过applyId
    var draftId = _urlParamToJson(location.href,'applyId');
    var isEditable = (!!draftId);
    if(isEditable){
        ApplyEditordataJson.getApplyEditordataJson(draftId);
    }

    //报销申请页面模块域名地址

    var baseIfo_Url = PER_REI_DOMAIN+'/perReimburseApply/selectPerReimApplyUserInfo';
    var select_xmUrl = PER_REI_DOMAIN+"/personalReimburseItem/queryPersonalReimburseItemList";
    var sl_Url = PER_REI_DOMAIN+'/tax/queryTaxList';
    var hl_Url = PER_REI_DOMAIN+'/currency/queryCurrencyList';

    var ajaxCount = 1 ;
    var ajaxFinished = function(){
            if(ajaxCount <= 0){
                $(".app_pubprocess_loading").hide();
                $(".app_pubprocess_notloading").show();
            }
        }

        //日期input不可编辑
        $("input.hasDatepicker").live('keydown',function(){
            return false;
        });
        if(!isEditable){
            //初始情况下 人民币 汇率是disabled
            $("table").find(".ex-rate .ipt-td-tbody").attr("disabled","disabled");
        }

        //选人控件
        selector.selector_fun();

        if(!isEditable){
            if( $("#date_1").datepicker){
                $("#date_1").datepicker({
                    calendarParent:'.process'
                });
            }
            addperson.addpersontab(2);
        }
        /*
         * 验证发票为否，input是disabled
         * */
        $("#tabs").on("change","select",function(){
            //电子发票是disabled
            var result = $(this).find("option:selected").attr("test-invoice");
            //验证发票类型普通发票，税率是disabled
            var invoice_type = $(this).find("option:selected").attr("special-invoice");
            //验证币种是人民币，汇率是disabled
            var curr = $(this).find("option:selected").attr("rmb");

            if(result=="no"){
                $(this).parents(".add-bill-table").find(".ipt-parent .ipt-td-tbody").attr("disabled","disabled").val("");
            }else if(result=="yes"){
                $(this).parents(".add-bill-table").find(".ipt-parent .ipt-td-tbody").removeAttr("disabled");

            }

            if(invoice_type=="no"){
                $(this).parents(".add-bill-table").find(".tax-rate select").attr("disabled","disabled").val("none");
            }else if(invoice_type=="yes"){
                $(this).parents(".add-bill-table").find(".tax-rate select").removeAttr("disabled");
            }

            if(curr=="yes"){
                $(this).parents(".add-bill-table").find(".ex-rate .ipt-td-tbody").attr("disabled","disabled").val("");
                //判断在人民币金额和申请金额有值得时候，要重新计算人民币金额
                var priceVal = $(this).parents(".bill_form").find("input[name='price']");
                var RMBpriceVal = $(this).parents(".bill_form").find(".RMB-total input");
                var totolNumjQuery = $(this).parents("div[role='tabpanel']").find(".all-total span");
                if(priceVal.val()!=0){
                    RMBpriceVal.val(priceVal.val());
                    totolNumjQuery.html(RMBpriceVal.val());
                }
            }else if(curr=="no"){
                $(this).parents(".add-bill-table").find(".ex-rate .ipt-td-tbody").removeAttr("disabled");
            }
        });


        //新增和删除发票信息
        var countIndex = 0;
        $("#tabs").on("click",".add_coin" ,function () {
            var data = {
                index: countIndex
            };
            var html_addpillinfo = template('template-billinfo', data);
            var parent_Jquery = $(this).parents("div[role='tabpanel']")
            parent_Jquery.find(".all-total").before(html_addpillinfo);


            //报销类型
            getselect.getselectOpt(select_xmUrl,{"token":cookie.get("token")},true,$('.par_baoxiao'+countIndex),select_xm,ButtonisNext);
            //税率
            getselect.getselectOpt(sl_Url,{},true,$('.shuilv_fapiao'+countIndex),select_sl);
            //汇率
            getselect.getselectOpt(hl_Url,{},true,$(".hl_currency"+countIndex),select_hl);

            //增加元素动画效果
                $(".bill_"+countIndex).show('slow');
                $("#content").animate({
                    scrollTop:$("#content")[0].scrollHeight
                },'slow');
                //新增发票信息 class定位
                countIndex++;
        });



        //增加报销人，判断当前发票类型是否是办公用品和交通费
        function ButtonisNext(obj){
            var objText = obj.find("option:selected").text();
            if(objText=="交通费"||objText=="办公用品"){
                $(".submit_btn").text("保存并进入下一步");
            }
            console.log("增加发票目录")
        }

        $("#tabs").on("click",".add-bill-table span.delete_coin" ,function () {
            var parent = $(this).parent().parent().parent().parent().parent();
            var _that = $(this);
            _that.parents(".bill_form").hide("slow",function(){
                _that.parents(".bill_form").remove();
            });

            totalSouFund(parent,1);
            $("select[name='reimburseType']").each(function(){
                isNext.isNextorSubmit($(this));
                console.log("删除发票信息");
            })
        });

        //helper 按钮 鼠标经过事件
        $("#tabs").on("mouseover","i.helper_i",function(){
            $(this).parent().find(".helpertext").css("display","block");
        })
        $("#tabs").on("mouseout","i.helper_i",function(){
            $(this).parent().find(".helpertext").css("display","none");
        })

        //费用总计
        //人民币金额 判断
        $("#tabs").on("keyup",".add-bill-table input.ipt_target",function(){
            getNumValue($(this));
            RMBtotalFund($(this));
            totalSouFund($(this),0);
        })
        //让申请金额为0
        $("#tabs").on("blur",".add-bill-table input[name='price']",function(){
            if($(this).val()==""||($(this).val().substr(0,1)=="0"&&$(this).val().substr(1,1)==".")){
                $(this).val("0");
                var thisVal = $(this).val();
                $(this).parents(".bill_form").find(".RMB-total input").val(thisVal);
            }

        })

        $("#tabs").on("focus ",".add-bill-table input.ipt_target",function(){
            if($(this).val()=="0"){
                $(this).val("");
            }
        })

        //电子发票号 只能是数字类型数据
        $("#tabs").on("keyup",".add-bill-table input.elec_inv",function(){
            var num = $(this).val();
            if (validateInput(num)) {
                $(this).val(num);
            }else {
                $(this).val("");
            }
        })
        function RMBtotalFund(target_ipt){
        var totalSou = 0;
        //人民币金额对象
        var RMB_ipt = target_ipt.parents(".add-bill-table").find(".RMB-total .ipt-td-tbody");
        //申请金额对象
        var apllicaiton_ipt = target_ipt.parents(".add-bill-table").find(".ex-application .ipt-td-tbody");
        //   汇率对象
        var ex_rate =target_ipt.parents(".add-bill-table").find(".ex-rate .ipt-td-tbody");
        //申请金额取值
        var apllicaiton_num =apllicaiton_ipt.val();
        if(typeof(ex_rate.attr("disabled"))=="undefined"){
            var str = ex_rate.val();
            var totalSou = apllicaiton_ipt.val()*(str);//计算式
            RMB_ipt.val(Number(totalSou.toFixed(4)));
        }else{
            RMB_ipt.val(apllicaiton_num);
        }
    }
    function totalSouFund(target_ipt,type) {
        var totalSou = 0;
        if(type==0){
            var RMB_total_ipt = target_ipt.parent().parent().parent().parent().parent().parent().parent().find("td.RMB-total");
            var all_total_p = target_ipt.parents("div[role='tabpanel']").find(".all-total span");
        }else if(type==1){
            var RMB_total_ipt = target_ipt.find("td.RMB-total");
            var all_total_p = target_ipt.find(".all-total span");
        }


        RMB_total_ipt.each(function (index,element) {
            totalSou += getNumValue($(this).find("input.ipt-td-tbody"));
            all_total_p.html(Number(totalSou.toFixed(4)));
        });
    }
    function getNumValue(controlid) {
        var num = controlid.val();
        if(num.length>=2&&num.substr(0,1)=="0"&&num.substr(1,1)!="."){
            controlid.val("");
            num = 0;
        }
        if (validateInput(num)) {
            num = parseFloat(num);
        }else {
            controlid.val("");
            num = 0;
        }
        return num;
    }
    function validateInput(inputstr) {
        var flag = false;
        if (inputstr != "") {
            if (isNaN(inputstr)) {
                flag = false; //如果输入字符不是数字
            }
            else {//输入数字但是小于0
                if (parseFloat(inputstr) < 0)
                    flag = false;
                else
                    flag = true;
            }
        }
        return flag;
    }
        //汇率是两位小数
        $("#tabs").on("blur",".ex-rate input.ipt_target",function(){
            var b = $(this).val();
            if(validateInput(b)){
                $(this).val(parseFloat(b).toFixed(2));
            }else{
                $(this).val("");
            }
        })

        $("#tabs").on("change","select[name='reimburseType']",function(){
            $("select[name='reimburseType']").each(function (){
                var bx_Type =$(this).find("option:selected").text();
                $(".submit_btn").text("提交");
                if(bx_Type=="交通费"||bx_Type=="办公用品"){
                    $(".submit_btn").text("保存并进入下一步");
                    return false;
                }
            })
        })

        if(!isEditable){
            getselect.getselect_option(false);
            isNext.isNextorSubmit($("select[name='reimburseType']"));
        }

        //基本信息渲染
        selectPerReimApplyUserInfo();
        function selectPerReimApplyUserInfo(){
            var b={"userId":cookie.get("user_uid")};
            $.ajax({
                type:'get',
                //url:'../per/perReimburseApply/selectPerReimApplyUserInfo',
                url:baseIfo_Url,
                data:b,
                contentType:'application/json;charset=utf-8',
                dataType:'json',//服务器返回的结果类型
                success:function (result) {
                    if(result.code=="0001"){
                        var data_info = {
                            list:result.body
                        };
                        var tpl = require('../template/apply_info.tpl');
                        var render = template.compile(tpl);
                        var html_tpl = render(data_info);
                        $("#data_info").html(html_tpl);
                    }
                }
            }).then(function (){
                ajaxCount --;
                ajaxFinished();
            });
        }

    if(isEditable){
        getjsonSave.fnSubmitSave("editForSaveApply");
        getjsonSave.DraftSave("editForSaveApply");
    }else{
        getjsonSave.fnSubmitSave("saveApply");
        getjsonSave.DraftSave("saveApply");
    }

})