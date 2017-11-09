/**
 * Created by ryf on 2016/10/6.
 */
define(function (require, exports, module){
    //域名地址配置
    require("../common");
    //通用js
    require("./caidan_pageInit");
    require("../util/util");
    //require("./processImg");

    var xcarui = require('../UI/oaui');
    var template = require("../plugins/template");
    $.ajaxSetup({ cache: false });

    var ajaxCount = 3;
    var ajaxFinished = function(){
        if(ajaxCount <= 0){
            $(".app_pubprocess_loading").hide();
            $(".app_pubprocess_notloading").show();
        }
    }

    var baseIfo_Url = PER_REI_DOMAIN+'/perReimburseApply/selectPerReimApplyUserInfo';
    init();
    // getComment();
    function init() {
        var root = _urlParamToJson(window.location.href,'root');


        //基本信息渲染
        selectPerReimApplyUserInfo();
        getComment();
        function selectPerReimApplyUserInfo(){
            var b;
            // alert('root='+root);
            if(root=='myapplication.html'){
                b={"userId":cookie.get("user_uid")};
            }else{
                b={"userId":_urlParamToJson(window.location.href,'applyUserId')};
            }
            // alert("userId="+b.userId);
            $.ajax({
                type:'get',
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
    // getComment();
    var getSummaryData = function (){
        var applyId = _urlParamToJson(window.location.search,"applyId");
        var rootHtml = _urlParamToJson(window.location.search,"root");
        $.ajax({
            type:'get',
            url:PER_REI_DOMAIN+'/reimburseInfo/listReimburseUsers',
            data:{"applyId":applyId},
            //data:{"applyId":7},
            contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {
                if(result.code=="0001"){
                    var apply_tabs = {
                        person_Info:result.body
                    }
                    var applyDetailtpltabs = require('../template/myapplySummarytabs.tpl');
                    var render = template.compile(applyDetailtpltabs);
                    var tabstpl = render(apply_tabs);
                    $(".person-tabs-ul").empty().append(tabstpl);
                    var data_tabsList ={
                        Apply_person:result.body,
                        applyId:_urlParamToJson(window.location.search,"applyId"),
                        applyUserId:_urlParamToJson(window.location.search,"applyUserId"),
                        root:rootHtml
                    }
                    var applyDetailtpl = require('../template/myapplySummaryTotal.tpl');
                    var render = template.compile(applyDetailtpl);
                    var html = render(data_tabsList);
                    $("#tabs").find("#tabs-1").remove();
                    $("#tabs").append(html);
                    var applyDetailtpl_Person = require('../template/myapplySummaryPerson.tpl');
                    var render_person = template.compile(applyDetailtpl_Person);
                    var html_person = render_person(data_tabsList);
                    $("#tabs").append(html_person);
                    var tabs = $( "#tabs" ).tabs({
                    show: { opacity: "toggle",duration:300}
                    });
                    $( "#tabs" ).tabs( "refresh" );
                    var jqNumToMoney_value = jqNumToMoney($(".NumMoney").text());
                    $(".NumtoMoney").html(jqNumToMoney_value);
                }else{
                    xcarui.alert({title:"002"});
                }
            },
            error:function(){
                xcarui.alert({title:"无法连接到服务器"});
            }
        }).then(function (){
            ajaxCount --;
            ajaxFinished();
        });
    }
    getSummaryData();
    // var comment_url = ;
    function getComment() {
        var b = {"applyId":_urlParamToJson(window.location.href,'applyId'),
            "taskId":_urlParamToJson(window.location.href,'taskId')};
        // alert(b.taskId);
        $.ajax({
            type:'get',
            url:PER_REI_DOMAIN+'/approalPendingController/getRejectCommens',
            data:b,
            contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {
                console.log(result.body);
                // alert('result:'+result.body);
                if(result.code=="0001"){
                    if(result.body!=""){
                        $('#Comment').show();
                        $("#applyComment").html(result.body);
                    }else {
                        $('#Comment').hide();
                    }
                }else {
                    $('#Comment').hide();
                }
            }
        });
    }

    //报销申请页面模块域名地址
    var baseIfo_Url = PER_REI_DOMAIN+'/processImg/list/';
    function getProcessImg(){
        var b=_urlParamToJson(window.location.search,"applyId");
        $.ajax({
            type:'get',
            url:baseIfo_Url+b,
            cache:false,
            // data:b,
            // contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {

                if (result.code == "0001") {
                    if (result.body.length != 0) {
                        var tpl = require('../template/processImg.tpl');
                        var render = template.compile(tpl);
                        var _procName = render({data_list: result.body});
                        $("#processImg").html(_procName);
                    }
                }
            }
        }).then(function (){
            ajaxCount --;
            ajaxFinished();
        });
    }
    getProcessImg();

})