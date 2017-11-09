/**
 * Created by ryf on 2016/9/24.
 */

define(function(require, exports){
    require("../util/util");
    var draftModule = require('./control-draft');
    var xcarui = require('../UI/oaui');


    $.ajaxSetup({ cache: false });
    //拼接form表单字符串
    var getbase_infoObj = function (){
        var base_infoObj = {};
        base_infoObj["applyUserId"] = $.trim($("div[name='applyUserId']").text());
        base_infoObj["companyId"] = $.trim($("div[name='companyId']").text());
        base_infoObj["reimburseType"] = $.trim($("div[name='reimburseType']").text());
        var applyId = _urlParamToJson(window.location.search,"applyId");
        if(applyId){
            base_infoObj["perReApplyId"] = applyId;
        }
        return base_infoObj;
    }

    var getapply_infoObj = function (jQuery_parentname){
        var result = {};
        //var dateTime = jQuery_parentname.find(".hasDatepicker").val();
        var UserId = jQuery_parentname.find(".apply_userId").val();
        //result["applydate"] = $.trim(dateTime);
        result["applyUserId"] = UserId;
        return result;
    }
    //先遍历tabs,在遍历tabs下的form表单 保存草稿



    //拼接json串.
    var form_getJson = function (commitTrue){
        var o = {
            "ifCommit":commitTrue,
            "perRemiburseDetailVoList":"",
            "personalReimburseApply":""
        };
        var perlist = [];
        o.perRemiburseDetailVoList = perlist;
        $(".ui-tabs-panel").each(function (index,elem){
            var personalReimburseInvoiceInfoList = [];
            var personalReimburseDetail = {
                //applyDate : getapply_infoObj($(elem)).applydate,
                userId : getapply_infoObj($(elem)).applyUserId
            };
            $(elem).find(".bill_form").each(function(ind,item){
                var formdata_obj = $(item).serializeJson();
                personalReimburseInvoiceInfoList.push(formdata_obj);
            });
            perlist[index] = {
                "personalReimburseDetail" : personalReimburseDetail,
                "personalReimburseInvoiceInfoList" : personalReimburseInvoiceInfoList
            }
        });
        o.personalReimburseApply = getbase_infoObj();
        console.log(o);
        //console.log(JSON.stringify(o));
        return JSON.stringify(o);
    };

    /*
     保存草稿操作
     */
    function fnDraftandle(Url){
        $(".save_btn").on("click",function(){
            var _$me = $(".save_btn");
            if(_$me.attr('disable_submit') == 'disable'){
                return false;
            }

            var _procUserId = $(".user_person").val();
            if (!_procUserId) {
                xcarui.alert({title: "请选择报销人！"});
                return;
            }


            if ($(".ui-tabs-panel").length > 1) {
                if(isSamePerson()){
                    return;
                }
            }

            _$me.text('保存中..').addClass('app_pubprocess_content_submited');
            var _data = form_getJson(false),
                _option = {};
            var _errorHandle = function(){
                xcarui.error('保存失败');
                _$me.removeAttr('disable_submit').removeClass('app_pubprocess_content_submited');
                _$me.text('保存草稿');
            }
            _option.data = _data;
            _option.complete = function(){

            }
            _option.beforeSend = function(){
                //  alert('beforeSend');
                _$me.attr('disable_submit','disable');
            }
            _option.callback = function (data) {
                if (data.code =="0001") {
                    xcarui.write('保存草稿成功！');
                    setTimeout("window.location.href = './index.html'",2000);
                }else if(data.code =="0002"){
                    xcarui.alert({title: data.body});
                    _$me.text('保存草稿');
                    _$me.removeAttr('disable_submit').removeClass('app_pubprocess_content_submited');
                }
            }
            _option.err = function () {
                _errorHandle();
            }
            _option._url = Url;
            draftModule.SubmitData(_option);
        })
    }


    //拼接json串 中必要数据
    var ifCommit_submit = true;

    //点击下一步 提交时间处理
    var fnSubmitProcessHandle = function (Url) {
        /*流程提交事件绑定开始*/
        $(".submit_btn").click(function () {
            var _this = this;
            if($(_this).attr('disable_submit') == 'disable'){
                return false;
            }
            if(!verifyForm()){
                return;
            };
            //提交

            var jsondata = form_getJson(ifCommit_submit);
            var Sendurl = encodeURI("../PersonalReimburse/perReimburseApply/"+jsondata+"/"+Url+"?token="+cookie.get("token"));

            $.ajax({
                url:Sendurl,
                type: 'post',
                //data:,jsondata,
                dataType: 'json',
                cache:true,
                beforeSend:function (){
                    $(_this).attr('disable_submit','disable');
                },
                success:function(data){
                    if(data.code=="0001"){
                        if(ifCommit_submit) {
                            xcarui.write('提交成功！');
                        }else{
                            xcarui.write('正在进入下一页！');
                        };

                        setTimeout(function(){
                            if(ifCommit_submit){
                                window.location.href = './index.html';
                            }else{
                                window.location.href = './Rtj_filllist.html?root=index.html&applyId='+data.body;
                            }
                        },1500);

                    }else{
                        xcarui.error('提交失败！'+data.body);
                        $(_this).removeAttr('disable_submit');
                    }
                },
                error:function (){
                    xcarui.error('提交失败,请检查网络');
                    $(_this).removeAttr('disable_submit');
                }
            })
        })
    };
    //提交验证
    function verifyForm() {
        var goSubmit = true;
        var cycleElement = ".ui-tabs-panel";
        var PersonArr = [];
        if ($(cycleElement).length > 0) {
            $(cycleElement).each(function () {
                var curCtrl = $(this);
                curCtrl.find(".varify_input").removeClass('varify_input');
                //var apply_date = $(curCtrl).find("input.hasDatepicker");
                //var dateVal = $.trim(apply_date.val());
                //if(dateVal==""){
                //    saytip("单据日期未输入！",apply_date);
                //    goSubmit = false;
                //    return false;
                //}
                var apply_user = $(curCtrl).find("input.apply_userId");
                var apply_userId = $.trim(apply_user.val());
                if(apply_userId==""){
                    saytip("报销人未选择！",$(curCtrl).find("input.user_person"));
                    goSubmit = false;
                    return false;
                }else{
                    var isInArray = $.inArray(apply_userId,PersonArr);
                    if(PersonArr.length>0){
                        if(isInArray=="-1"){
                            PersonArr.push(apply_userId);
                        }else{
                            saytip("申请报销人不能重复",$(curCtrl).find("input.user_person"));
                            PersonArr = [];
                            goSubmit = false;
                            return false;
                        }
                    }else{
                        PersonArr.push(apply_userId);
                    }
                }


                $(curCtrl).find(".add-bill-table").each(function(){
                    var elec_inv = $(this).find("input.elec_inv");
                    var elec_invVal = $.trim(elec_inv.val());
                    var elec_invAttr = elec_inv.attr("disabled");
                    if(elec_invAttr!="disabled"&&elec_invVal==""){
                        saytip("电子发票号未输入！",elec_inv);
                        goSubmit = false;
                        return false;
                    }
                    var exchangeRate = $(this).find("input[name='exchangeRate']");
                    var exchangeRateVal = $.trim(exchangeRate.val());
                    var exchangeRateAttr = exchangeRate.attr("disabled");
                    if(exchangeRateAttr!="disabled"&&exchangeRateVal==""){
                        saytip("汇率未输入！",exchangeRate);
                        goSubmit = false;
                        return false;
                    }
                    var shuilv_fapiao = $(this).find("select.shuilv_fapiao");
                    var shuilv_fapiaoVal = shuilv_fapiao.val();
                    var shuilv_fapiaoAttr = shuilv_fapiao.attr("disabled");
                    if(shuilv_fapiaoAttr!="disabled"&&shuilv_fapiaoVal=="0"){
                        saytip("税率未选择！",shuilv_fapiao);
                        goSubmit = false;
                        return false;
                    }
                    var apply_ = $(this).find("input.ipt_applyCpnut");
                    var apply_num = $.trim(apply_.val());
                    if(apply_num=="0"){
                        saytip("请输入申请金额！",apply_);
                        goSubmit = false;
                        return false;
                    }

                    var reimburseItemVal = $(this).find("select[name='reimburseType']").find("option:selected").text();
                    if(reimburseItemVal=="交通费"||reimburseItemVal=="办公用品"){
                        ifCommit_submit = false;
                    }
                })

            })
        }
        return goSubmit;
    }
    function saytip(msg,jqueryObj){
        xcarui.alert({title: msg});
        jqueryObj.addClass("varify_input");
    }

    //保存草稿不能相同报销人
    function isSamePerson(){
        var cycleElement = ".ui-tabs-panel";
        var PersonArr = [];
        var isSamePerson = false;
            $(cycleElement).each(function () {
                var curCtrl = $(this);
                var apply_user = $(curCtrl).find("input.apply_userId");
                var apply_userId = $.trim(apply_user.val());
                if(apply_userId!=""){
                    var isInArray = $.inArray(apply_userId,PersonArr);
                    if(PersonArr.length>0){
                        if(isInArray=="-1"){
                            PersonArr.push(apply_userId);
                        }else{
                            saytip("报销人不能重复,请重新选择报销人",$(curCtrl).find("input.user_person"));
                            PersonArr = [];
                            isSamePerson = true;
                            return false;
                        }
                    }else{
                        PersonArr.push(apply_userId);
                    }
                }else{
                    saytip("请填写报销人",$(curCtrl).find("input.user_person"));
                    isSamePerson = true;
                }
            });
        return isSamePerson;
    }
    exports.fnSubmitSave = fnSubmitProcessHandle;
    exports.DraftSave= fnDraftandle;
})