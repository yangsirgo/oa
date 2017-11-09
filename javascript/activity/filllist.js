/**
 * Created by Xcar on 2016/9/29.
 */
define(function (require, exports, module){
    //域名地址配置
    require("../common");
    //通用js
    require("./caidan_pageInit");
    require("../util/util");
    // require("./processImg");

    var xcarui = require('../UI/oaui');
    var template = require("../plugins/template");

    $.ajaxSetup({ cache: false });

    var ajaxCount = 2 ;
    var ajaxFinished = function(){
        if(ajaxCount <= 0){
            $(".app_pubprocess_loading").hide();
            $(".app_pubprocess_notloading").show();
        }
    }

    window.onbeforeunload = function (e) {
        e = e || window.event;
        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = "退出后数据将不在保存，确定退出吗？";
        }
        // For Safari
        return '退出后数据将不在保存，确定退出吗？';
    };

    //报销申请页面模块域名地址
    var baseIfo_Url = PER_REI_DOMAIN+'/perReimburseApply/selectPerReimApplyUserInfo';
    var applySecondPagegetData = PER_REI_DOMAIN+"/perReimburseApply/getReimUsersAndReimInfos";
    init();
    function init() {
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
                            $(".base-info").html(html_tpl);
                        }
                    }
                }).then(function (){
                    ajaxCount --;
                    ajaxFinished();
                });
            }
    }
    //日期input不可编辑
    $("table input.hasDatepicker").live('keydown',function(){
        return false;
    });
    $("div input.hasDatepicker").live('keydown',function(){
        return false;
    })

    //请求ajax
    var getapplyDetailsData = function (){
        $.ajax({
            data:{
                "applyId":_urlParamToJson(window.location.search,"applyId")
            },
            url:applySecondPagegetData,
            dataType:"json",
            type:"get",
            success:function(result){
                console.log(result);
                if(result.code=="0001"){
                    var apply_tabs = {
                        person_Info:result.body.userTaglst
                    }
                    var applyDetailtpltabs = require('../template/applyDetaildatatabs.tpl');
                    var render = template.compile(applyDetailtpltabs);
                    var tabstpl = render(apply_tabs);
                    $(".person-tabs-ul").empty().append(tabstpl);

                    var data_tabsList ={
                        Apply_person:result.body.detailsLst
                    }
                    var applyDetailtpl = require('../template/applyDetaildata.tpl');
                    var render = template.compile(applyDetailtpl);
                    var html = render(data_tabsList);
                    $("#tabs").append(html);
                    var tabs = $( "#tabs" ).tabs({
                        show: { opacity: "toggle",duration:300}
                    });
                    $("#tabs").tabs( "refresh");
                    $( ".date_1" ).datepicker({
                        calendarParent:'.process'
                    });
                    //日期input不可编辑
                    $("table input.hasDatepicker").live('keydown',function(){
                        return false;
                    });
                    $("div input.hasDatepicker").live('keydown',function(){
                        return false;
                    })
                }
            }
        }).then(function (){
            ajaxCount --;
            ajaxFinished();
        });
    }



    $(".submit_btn").click(function(){
        var _this = this;
        if($(_this).attr('disable_submit') == 'disable'){
            return false;
        }
        if(!verifyForm_fill()){
            return;
        };
        //提交
        var jsondata = form_filllstgetJson();
        var Sendurl = encodeURI("../PersonalReimburse/perReimburseApply/"+jsondata+"/saveTrafficAndOsDetail"+"?token="+cookie.get("token"));
            $.ajax({
                url:Sendurl,
                type: 'post',
                dataType: 'json',
                cache:true,
                beforeSend:function (){
                    $(_this).attr('disable_submit','disable');
                },
                success:function(data){
                    if(data.code=="0001"){
                        xcarui.write('提交成功！');
                        //setTimeout(closeNotAlert,2000 );
                        window.onbeforeunload = null;
                        setTimeout("window.location.href = './index.html'",1500);
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



    //窗口延时关闭
    function closeNotAlert(flag) {
        var _flag = true;
        if(typeof flag == 'undefined'){
            _flag = true;
        }
        _flag = !!_flag;
    }


    //办公用品数量 只能是数字类型数据
    $("#tabs").on("keyup",".os_billDetails input[name='osCount']",function(){
        getNumValue($(this));
    })
    function validateInput(inputstr) {
        var flag = false;
        if (inputstr != "") {
            if (isNaN(inputstr)) {
                flag = false; //如果输入字符不是数字
            }
            else {//输入数字但是小于0
                if (parseFloat(inputstr) <= 0)
                    flag = false;
                else
                    flag = true;
            }
        }
        return flag;
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

    //拼接form表单字符串
    var getbase_userId = function (){
        var base_infoObj = {};
        base_infoObj["applyUserId"] = $.trim($("div[name='applyUserId']").text());
        base_infoObj["perReApplyId"] = _urlParamToJson(window.location.search,"applyId");
        return base_infoObj;
    }


    //拼接json
    function form_filllstgetJson(){
        var o ={
            "personalReimburseTrafficList":"",
            "personalReimburseOsList":""
        };
        var per_TrafficArray = [];
        var per_OSArray = [];
        o.personalReimburseTrafficList = per_TrafficArray;
        o.personalReimburseOsList = per_OSArray;
        $(".ui-tabs-panel").each(function (index,elem){
            $(elem).find(".os_billDetails").each(function(ind,item){
                var formdata_obj = $(item).serializeJson();
                per_OSArray.push(formdata_obj);
            });
            $(elem).find(".traffic_billDetails").each(function(ind,item){
                var formdata_obj = $(item).serializeJson();
                per_TrafficArray.push(formdata_obj);
            })
        })
        o.personalReimburseApply = getbase_userId();
        console.log(o)
        return JSON.stringify(o);
    }

    //提交验证
    function verifyForm_fill() {
        var goSubmit = true;
        var cycleElement = ".ui-tabs-panel";
        if ($(cycleElement).length > 0) {
            $(cycleElement).each(function () {
                var curCtrl = $(this);
                curCtrl.find(".varify_input").removeClass('varify_input');
                $(curCtrl).find(".traffic_billDetails").each(function(){
                    var date = $(this).find("input.hasDatepicker");
                    var dateVal = $.trim(date.val());
                    if(dateVal==""){
                        saytip("日期未输入！",date);
                        goSubmit = false;
                        return false;
                    }
                    var reason = $(this).find("input[name='reason']");
                    var reasonVal = $.trim(reason.val());
                    if(reasonVal==""){
                        saytip("外出事由未输入！",reason);
                        goSubmit = false;
                        return false;
                    }
                    var starting = $(this).find("input[name='starting']");
                    var startingVal = $.trim(starting.val());
                    if(startingVal==""){
                        saytip("出发地未输入！",starting);
                        goSubmit = false;
                        return false;
                    }
                    var destination = $(this).find("input[name='destination']");
                    var destinationVal = $.trim(destination.val());
                    if(destinationVal==""){
                        saytip("目的地未输入！",destination);
                        goSubmit = false;
                        return false;
                    }
                })
                $(curCtrl).find(".os_billDetails").each(function(){
                    var date = $(this).find("input.hasDatepicker");
                    var dateVal = $.trim(date.val());
                    if(dateVal==""){
                        saytip("费用日期未输入！",date);
                        goSubmit = false;
                        return false;
                    }
                    var osName = $(this).find("input[name='osName']");
                    var osNameVal = $.trim(osName.val());
                    if(osNameVal==""){
                        saytip("物品名称未输入！",osName);
                        goSubmit = false;
                        return false;
                    }

                    var osCount = $(this).find("input[name='osCount']")
                    var osCountVal = $.trim(osCount.val());
                    if(osCountVal==""){
                        saytip("数量未输入！",osCount);
                        goSubmit = false;
                        return false;
                    }

                    var osUser = $(this).find("input[name='osUser']");
                    var osUserVal = $.trim(osUser.val());
                    if(osUserVal==""){
                        saytip("使用人未输入！",osUser);
                        goSubmit = false;
                        return false;
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

    getapplyDetailsData();
})


