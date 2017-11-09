/**
 * Created by tangsq on 16-10-8.
 */
define(function (require, exports, module){
    // 
    var template = require("../plugins/template");
    //域名地址配置
    require("../common");
    require("./caidan_pageInit");
    require("../util/util.js");
    require("../process/processlist.js");
    var xcarui = require('../UI/oaui');

    $.ajaxSetup({ cache: false });
    /**
     * 查询参数
     * @type
     */
    var param = {
        roleName:cookie.get("roleEnName"),
        batchCode:"",
        approvalFromDate:"",
        approvalToDate:"",
        pageNo: 1,
        pageSize:10
    };

    var opt = {
        ctr:".pagination",
        current:1,
        jump:{
            text:"跳转"
        },
        pageSize:10,
        totalPageCount:10,
        fun: function (result) {
            param.pageNo = result;
            query();
        }
    };
    function setListParam() {
        param.pageNo = 1;
        param.approvalFromDate = $("input[name='approvalFromDate']").val();
        param.approvalToDate = $("input[name='approvalToDate']").val();
        param.batchCode = $("input[name='batchCode']").val();
    }
    function setPage(param,result) {
        opt.current = param.pageNo;
        opt.pageSize = param.pageSize;
        opt.totalPageCount = result.body.totalCount;
        $('#totalCount').text(result.body.totalCount);
        pagination(opt);
    }
    function renderTable(data) {
        var tpl = require('../template/pendingApprovedPackageList.tpl');
        var render = template.compile(tpl);
        var html = render({lst: data.body.lst});
        $('.table_tbody').empty().append(html);
        if(data.body.totalCount==0){
            $(".table_tbody").html('<tr><td align="center" colspan="5">暂无数据！</td></tr>');
        }
    }

    /**
     * 初始化查询
     * @param opt
     */
    function query() {
//        console.debug(param);
        $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');

        $.ajax({
            type:'get',
            url:PER_REI_DOMAIN+'/approalPendingController/queryApprovalPendingBatchList',
            data:param,
            contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {
                // console.debug(result);
                if(result.code=="0001"){
                    // var html = template('batchList',result.body);
//                    console.debug(result.body.totalCount);
//                    renderTable(result);
                    renderTable(result);

                    setPage(param,result);
                }
            }
        });
    }
    var batchIdsArray = [];
    $(function() {
        setListParam();
        query();

        $( "#datepicker" ).datepicker({
            calendarParent:'.process'
        });
        $( "#datepicker1" ).datepicker({
            calendarParent:'.process'
        });
        $( "#datepicker2" ).datepicker({
            calendarParent:'.process'
        });
        $( "#datepicker3" ).datepicker({
            calendarParent:'.process'
        });
        $("button[name='findBtn']").on('click',function(){
            $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');
            setListParam();
            query();
        });
        $("div[name='pageSize']").on('click', $("span[name='span-num']"), function (e) {
            param.pageSize = $(e.target).text();
            $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');
            setListParam();
            query();
            $('.span-num.click_span').removeClass('click_span');
            $(e.target).addClass('click_span');
            e.stopPropagation();
        });
        //--------------1-begin----------------
        $("button[name='batchApproveBtn'],button[name='batchRejectBtn']").on('click', function (e) {
            var checkedItems = $("span[class='design-bg-icons3 app-checkbox checked'][codeValue]");
            if (checkedItems.length == 0) {
                // alert(1111);
                xcarui.alert({title:"没有选中任何项目,请重新选择！",type:1});
                return;
            }
            batchIdsArray = [];//审批和驳回使用
            $.each(checkedItems, function (n, data) {
                batchIdsArray.push($(data).attr('batchId'));
            });
            if (e.target.name == 'batchApproveBtn') {
                    xcarui.confirm({'title':'<div class="ct-ly-tips">是否审批通过？</div>','body':''},function(submit) {
                            approve();
                            submit.close();
                        }
                    )
                return;
            }
            if (e.target.name == 'batchRejectBtn') {
                reject();
                return;
            }
        });
        $(".table_tbody").on('click', "a", myHandler);

        //--------------1-end----------------



    });

//--------------2-begin----------------


    function myHandler(event) {
        if (event.target.name != 'approve' && event.target.name != 'reject')
            return;
        batchIdsArray = [];
        batchIdsArray.push($(event.target).attr('batchId'));
        event.preventDefault();
        event.stopPropagation();
        if (event.target.name == 'approve') {
            xcarui.confirm({'title':'<div class="ct-ly-tips">是否审批通过？</div>','body':''},function(submit) {
                    approve();
                    submit.close();
                }
            )
            return;
        }
        if (event.target.name == 'reject') {
            reject();
            return;
        }
    }
    //同意
    function approve() {
        var url = '/perReimburseBatchApprove/approve';
        var param = {batchIds: batchIdsArray.join(","), token: cookie.get("token")};
        ajaxHandleApproveOrReject(url, param);
    }
    //拒绝
    function reject() {
        ShowApproveDialogBox({
            title: "驳回",
            showType: 2,
            defaultText: '驳回'
        });
    }
    //审批操作（同意或拒绝）
    function ajaxHandleApproveOrReject(url, param) {
        $.ajax({
            type: 'POST',
            url: PER_REI_DOMAIN + url,
            data: param,
            success: function (data) {
                if (data.code == '0002') {
                    xcarui.alert({title:"操作失败,"+ data.body,type:1});
                    return;
                }
                xcarui.alert({title:"操作成功！",type:2});
                $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');
                setListParam();
                query();
            },
            dataType: "json",
            async: false
        });
    }
    //--------------2-end----------------
    // $(".ipt_btn").click(function(){
    //     ShowApproveDialogBox({
    //         title: "驳回",
    //         showType: 2,
    //         defaultText: '驳回'
    //     });
    //
    // })
    function  ShowApproveDialogBox(setting){
        var box_tpl = require('../template/approve-box.tpl');
        var box_render = template.compile(box_tpl);
        var box_htm = box_render({
            boxTitle: setting.title,
            action: setting.action,
            defaultText: setting.defaultText
        });
        var box = xcarui.showNoTitle({
            cont: box_htm,
            success: function () {
                $(".apdlbox a.com_center_delete_concel,.approveDialogTitle span.ad_close").click(function () {
                    box.close()
                });
                $("#txt_area_advice").focus(function () {
                    $(this).removeClass("dftgraycolor");
                });
                //else if (setting.showType == 2) { /*审批状态*/
                $(".apdlbox a.com_center_delete_confirm").click(function () {
                    var _this = this;
                    var _advice = advice = $.trim($("#txt_area_advice").val() || '');
                    if (_advice.length > 200) {
                        xcarui.alert({title: "超过200字符限制", type: 1});
                        return;
                    }
                    if (_advice.length == "0") {
                        xcarui.alert({title: "驳回意见不能为空!", type: 1});
                        return;
                    }
                    // 回调函数
                    rejectCallBack(_advice);
                    //关闭当前窗口
                    box.close();
                    // xcarui.alert({title: "驳回操作成功!", type: 2});
                    //setTimeout(function (){
                    //    window.location.reload();
                    //},1500)

                });
            }
        });
    }
    function rejectCallBack(_advice) {
        var param = {Ids: batchIdsArray.join(","), comment: _advice, token: cookie.get("token")};
        var url = '/perReimburseApply/batchApplyReject';
        ajaxHandleApproveOrReject(url, param);

    }
})