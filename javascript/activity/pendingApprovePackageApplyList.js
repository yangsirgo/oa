/**
 * Created by fuwei on 16-10-8.
 */
define(function (require, exports, module){
    var template = require("../plugins/template");
    //域名地址配置
    require("../common");
    require("./caidan_pageInit");
    require("../util/util.js");
    require("../process/processlist.js");
    var xcarui = require('../UI/oaui');

    $.ajaxSetup({ cache: false });
    var lstParam = {
        pageNo: 1,
        pageSize: 10,
        applyStatus:"",
        applyNumber:"",
        applyFromDate:"",
        applyToDate:"",
        batchId:"",
        applyUserName: "",
        token: cookie.get("token")
    };
    var opt = {
        ctr: ".pagination",
        current: 1,
        jump: {
            text: "跳转"
        },
        pageSize: 1,
        totalPageCount: 0,
        fun: function (data, pagination) {
            lstParam.pageNo = data;
            loadList();
        }
    };
    function setPage(lstParam, data) {
        opt.current = lstParam.pageNo;
        opt.pageSize = lstParam.pageSize;
        opt.totalPageCount = data.body.totalCount;
        $('#totalCount').text(data.body.totalCount);
        pagination(opt);
    }
    function setFormParam() {
        lstParam.pageNo=1;
        lstParam.applyUserName = $("input[name='applyUserName']").val();
        lstParam.applyNumber = $("input[name='applyNumber']").val();
        lstParam.applyFromDate = $("input[name='applyFromDate']").val();
        lstParam.applyToDate = $("input[name='applyToDate']").val();
        lstParam.applyStatus = $("select[name='applyStatus']").val();
        lstParam.batchId = _urlParamToJson(window.location.href,'batchId');
    }
    function renderTable(data) {
        var tpl = require('../template/pendingApprovedPackageApplyList.tpl');
        var render = template.compile(tpl);
        var html = render({lst: data.body.lst});
        $('#table tr:gt(0)').remove();
        $('.table_body').empty().append(html);
        if(data.body.totalCount==0){
            $(".table_body").html('<tr><td align="center" colspan="6">暂无数据！</td></tr>');
        }
    }
    function loadList() {
        $('.table_body').html('<tr ><td colspan="6" align="center"><div class="list-loading">正在加载......</div></td></tr>');

        $.get(
            PER_REI_DOMAIN + '/perReimburseApply/queryPersonalReimburseApplyList',
            lstParam,
            function (data, status) {
                console.debug(data);
                renderTable(data);
                setPage(lstParam, data);
            },
            "json"
        );
    }
    var applyIdsArray = [];
    $(function () {
        setFormParam();
        loadList();
        $("#datepicker").datepicker({
            calendarParent: '.process'
        });
        $("#datepicker1").datepicker({
            calendarParent: '.process'
        });
        $("#datepicker2").datepicker({
            calendarParent: '.process'
        });
        $("#datepicker3").datepicker({
            calendarParent: '.process'
        });
        $("button[name='findBtn']").on('click', function () {
            $('.table_body').html('<tr ><td colspan="6" align="center"><div class="list-loading">正在加载......</div></td></tr>');

            lstParam.pageNo = 1;
            setFormParam();
            loadList();
        });
        $("div[name='pageSize']").on('click', $("span[name='span-num']"), function (e) {
            lstParam.pageNo = 1;
            lstParam.pageSize = $(e.target).text();
            setFormParam();
            loadList();
            $('.span-num.click_span').removeClass('click_span');
            $(e.target).addClass('click_span');
            e.stopPropagation();
        });
        $("button[name='batchRejectBtn']").on('click', function (e) {
            var checkedItems = $("span[class='design-bg-icons3 app-checkbox checked'][codeValue]");
            if (checkedItems.length == 0) {
                xcarui.alert({title:"没有选中任何项目,请重新选择！",type:1});
                return;
            }
            applyIdsArray = [];//审批和驳回使用

            $.each(checkedItems, function (n, data) {
                applyIdsArray.push($(data).attr('perReApplyId'));
                return;
            });
            if (e.target.name == 'batchRejectBtn') {
                reject();
                return;
            }

        });
        $("#table").on('click', "a", myHandler);
    });
    function myHandler(event) {
        if (event.target.name != 'approve' && event.target.name != 'reject')
            return;
        applyIdsArray = [];
        applyIdsArray.push($(event.target).attr('perReApplyId'));
        event.preventDefault();
        event.stopPropagation();
        if (event.target.name == 'reject') {
            reject();
            return;
        }
    }

    function reject() {
        ShowApproveDialogBox({
            title: "驳回",
            showType: 2,
            defaultText: '驳回'
        });

    }
    function rejectCallBack(rejectComment){
        var url = '/approalPendingController/rejectApplyOfBatch';
        var param = {Ids: applyIdsArray.join(","), comment: rejectComment, token: cookie.get("token")};
        ajaxHandleApproveOrReject(url, param);

    }
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
                setFormParam();
                loadList();
            },
            dataType: "json",
            async: false
        });
    }
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
                    //setTimeout(function (){
                    //    window.location.reload();
                    //},1500)

                });
            }
        });
    }
})