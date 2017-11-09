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
    $.ajaxSetup({ cache: false });
    var lstParam = {
        pageNo: 1,
        pageSize: 10,
        applyCode: "",
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
    }
    function renderTable(data) {
        var tpl = require('../template/approvedApplyList.tpl');
        var render = template.compile(tpl);
        var html = render({lst: data.body.lst});
        $('#table tr:gt(0)').remove();
        $('.table_body').empty().append(html);
        if(data.body.totalCount==0){
            $(".table_body").html('<tr><td align="center" colspan="8">暂无数据！</td></tr>')
        }
    }
    function loadList() {
        $('.table_body').html('<tr ><td colspan="8" align="center"><div class="list-loading">正在加载......</div></td></tr>');

        $.get(
            PER_REI_DOMAIN + '/perReimburseApplyApproved/queryPersonalReimburseApplyList',
            lstParam,
            function (data, status) {
                renderTable(data);
                setPage(lstParam, data);
            },
            "json"
        );
    }
    $(function () {
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
            $('.table_body').html('<tr ><td colspan="8" align="center"><div class="list-loading">正在加载......</div></td></tr>');
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
    });
})