/**
 * Created by ryf on 2016/10/6.
 */
define(function (require, exports, module){
    //域名地址配置
    require("../common");
    //通用js
    require("./caidan_pageInit");
    require("../util/util");
    var xcarui = require('../UI/oaui');


    //require("./processImg");

    var template = require("../plugins/template");

    $.ajaxSetup({ cache: false });
    $("#tabs").tabs();

    var ajaxCount = 3 ;
    var ajaxFinished = function(){
        if(ajaxCount <= 0){
            $(".app_pubprocess_loading").hide();
            $(".app_pubprocess_notloading").show();
        }
    }

    var baseIfo_Url = PER_REI_DOMAIN+'/perReimburseApply/selectPerReimApplyUserInfo';

    init();
    function init() {
        //基本信息渲染

        selectPerReimApplyUserInfo();

        function selectPerReimApplyUserInfo(){
            var root = _urlParamToJson(window.location.href,'root');
            var b;
            // alert('root='+root);
            if(root=='myapplication.html'){
                b={"userId":cookie.get("user_uid")};
            }else{
                b={"userId":_urlParamToJson(window.location.href,'applyUserId')};
            }
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

    applyDetailsOsorTrafic();
    function applyDetailsOsorTrafic(){
        var b={"invoiceId":_urlParamToJson(window.location.search,"invoiceId")};
        $.ajax({
            type:'get',
            url:PER_REI_DOMAIN+'/reimburseInfo/detail',
            data:b,
            contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {
                if(result.code=="0001"){
                    console.log("1")
                    var data_info = {
                        obj:result.body
                    };
                    var tpl = require('../template/myapplyDetails.tpl');
                    var render = template.compile(tpl);
                    var html_tpl = render(data_info);
                    $("#tabs-1").html(html_tpl);
                }
            }
        }).then(function (){
            ajaxCount --;
            ajaxFinished();
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