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

    $.ajaxSetup({
        cache: false
    });
    var roleEnNames = cookie.get("roleEnName").split(',');
    $.each(roleEnNames, function (n, data) {
        if(data == 'financialCommison') {
            $("span[name='packBtn']").show();
        }
    });
    var lstParam = {
        pageNo: 1,
        pageSize: 10,
        applyCode: "",
        status: "3",
        applyApplyUserName: "",
        applyTimeStartStr: "",
        applyTimeEndStr: "",
        approvedTimeStartStr: "",
        approvedTimeEndStr: "",
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
        lstParam.applyApplyUserName = $("input[name='applyApplyUserName']").val();
        lstParam.applyCode = $("input[name='applyCode']").val();
        lstParam.applyTimeStartStr = $("input[name='applyTimeStartStr']").val();
        lstParam.applyTimeEndStr = $("input[name='applyTimeEndStr']").val();
        lstParam.approvedTimeStartStr = $("input[name='approvedTimeStartStr']").val();
        lstParam.approvedTimeEndStr = $("input[name='approvedTimeEndStr']").val();
        lstParam.status = $("select[name='taskStatus']").val();
    }
    function renderTable(data) {
        var tpl = require('../template/waitApproveApplyList.tpl');
        var render = template.compile(tpl);
        var html = render({lst: data.body.lst});
        $('#table tr:gt(0)').remove();
        $('.table_body').empty().append(html);
        if(data.body.totalCount=="0"){
            $(".table_body").html('<tr><td align="center" colspan="7">暂无数据！</td></tr>')
        }
    }
    function loadList() {
        $('.table_body').html('<tr ><td colspan="7" align="center"><div class="list-loading">正在加载......</div></td></tr>');
        $.ajax({
            type: 'get',
            url: PER_REI_DOMAIN + '/perReimburseApplyWaitApprove/queryPersonalReimburseApplyList',
            data: lstParam,
            success: function (data, status) {
                        renderTable(data);
                        setPage(lstParam, data);
            },
            dataType: "json",
            cache: false
        });

    }
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
            lstParam.pageNo = 1;
            setFormParam();
            loadList();
        });
        $("span[name='batchApproveBtn'],span[name='batchRejectBtn'],span[name='packBtn']").on('click', function (e) {
            var checkedItems = $("span[class='design-bg-icons3 app-checkbox checked'][codeValue]");
            if (checkedItems.length == 0) {
                xcarui.alert({title:"没有选中任何项目,请重新选择！",type:1});
                return;
            }
            applyIdsArray = [];//审批和驳回使用
            companyIdsArray = [];//锁定使用
            applyCodesArray = [];//锁定使用
            applyStatusArray = [];//锁定使用
            $.each(checkedItems, function (n, data) {
                applyIdsArray.push($(data).attr('applyId'));
                companyIdsArray.push($(data).attr('companyId'));
                applyCodesArray.push($(data).attr('codeValue'));
                applyStatusArray.push($(data).attr('status'));
            });
            if ($(e.target).hasClass('batchApproveBtn')) {
                try {
                    validateStatus();
                    approve();
                } catch (e) {
                    xcarui.alert({title:e.message,type:1});
                    return;
                }
            }
            if ($(e.target).hasClass('batchRejectBtn')) {
                try {
                    validateStatus();
                    reject();
                } catch (e) {
                    xcarui.alert({title:e.message,type:1});
                    return;
                }
            }
            if ($(e.target).hasClass('packBtn')) {
                pack();
                return;
            }
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
        $("#table").on('click', "a", myHandler);
    });
    function validateStatus() {
        $.each(applyStatusArray, function (n, data) {
            if(data == '审批驳回' || data == '审批通过' || data=='待打包') {
                throw new Error('申请记录状态必须都是待审批状态!');
            }
        });
    }
    function myHandler(event) {
        if (event.target.name != 'approve' && event.target.name != 'reject')
            return;
        applyIdsArray = [];
        applyIdsArray.push($(event.target).attr('applyId'));
        event.preventDefault();
        event.stopPropagation();
        if (event.target.name == 'approve') {
            approve();
            return;
        }
        if (event.target.name == 'reject') {
            reject();
            return;
        }
    }
    var applyIdsArray = [];
    var applyCodesArray = [];
    var companyIdsArray = [];
    var applyStatusArray = [];
    function pack() {
        if(unique(companyIdsArray).length > 1) {
            xcarui.alert({title:"打包的申请人必须是同一公司!",type:1});
            return;
        }
        var isAllWaitPackStatus = true;
        $.each(applyStatusArray, function (n, data) {
            if(data != '待打包') {
                isAllWaitPackStatus = false;
                return false;
            }
        });
        if (!isAllWaitPackStatus) {
            xcarui.alert({title:"错误:打包申请必须都是待打包状态!",type:1});
            return;
        }
        var companyId = unique(companyIdsArray)[0];
        var param = {
            companyId:companyId,
            applyCodeArray:applyCodesArray.join(","),
            token: cookie.get("token")
        };
        var url = '/perReimburseApply/packApply';
        ajaxHandleApproveOrReject(url, param);
    }
    function approve() {
        xcarui.confirm({'title':'<div class="ct-ly-tips">是否审批通过？</div>','body':''},function(submit) {
            var url = '/perReimburseApply/departApprove';
            var param = {applyIds: applyIdsArray.join(","), token: cookie.get("token")};
            ajaxHandleApproveOrReject(url, param);
                submit.close();
            }
        )
    }
    function reject() {
        ShowApproveDialogBox({
            title: "驳回",
            showType: 2,
            defaultText: '驳回'
        });

    }
    function ajaxHandleApproveOrReject(url, param) {
        $.ajax({
            type: 'POST',
            url: PER_REI_DOMAIN + url,
            data: param,
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
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
    //-------------------------弹框--begin-------------------------------
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
                });
            }
        });
    }
    function rejectCallBack(_advice) {
        var url = '/approalPendingController/rejectApply';
        var param = {Ids: applyIdsArray.join(","), comment: _advice, token: cookie.get("token")};
        ajaxHandleApproveOrReject(url, param);
    }
    //-------------------------弹框--end-------------------------------
})