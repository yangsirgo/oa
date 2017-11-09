/**
 * Created by tangsq on 16-10-8.
 */
define(function (require, exports, module){
    var template = require("../plugins/template");
    //域名地址配置
    require("../common");
    require("./caidan_pageInit");
    require("../util/util.js");

    $.ajaxSetup({ cache: false });
    /**
     * 查询参数
     * @type
     */
    var perReimMyApplyQuery = {
        userId:cookie.get("user_uid"),
        applyStatus:"",
        applyNumber:"",
        applyFromDate:"",
        applyToDate:"",
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
        //totalPageCount:10,
        fun: function (result, pagination) {
            perReimMyApplyQuery.pageNo = result;
            query(opt,perReimMyApplyQuery);
        }
    };
    // var userId = cookie.get("user_uid");
    /**
     * 初始化查询
     * @param opt
     */
    function queryInit(opt) {
        $.ajax({
            type:'get',
            url:PER_REI_DOMAIN+'/perReimburseApply/queryPersonalReimburseApplyList?userId='+perReimMyApplyQuery.userId,
//            data:userId,
            contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {
                console.debug(result);
                if(result.code=="0001"){

                    console.debug(result.code);
//                     var html = template('applyList',result.body);
// //                    console.debug(result.body.totalCount);
//                     $('.table_tbody').empty().append(html);
                    renderTable(result);
                    opt.current = 1;
                    opt.totalPageCount = result.body.totalCount;
                    $('#totalCount').text(result.body.totalCount);
                    pagination(opt);
                    if(result.body.totalCount==0){
                        $(".table_tbody").html('<tr><td align="center" colspan="5">暂无数据！</td></tr>')
                    }
                }
            }
        });
    }

    function setListParam(perReimMyApplyQuery) {
        perReimMyApplyQuery.pageNo = 1;
        perReimMyApplyQuery.applyNumber = $("input[name='applyNumber']").val();
        perReimMyApplyQuery.applyFromDate = $("input[name='applyFromDate']").val();
        perReimMyApplyQuery.applyToDate = $("input[name='applyToDate']").val();
        perReimMyApplyQuery.applyStatus = $("select[name='applyStatus']").val();
    }
    function setPage(opt,perReimMyApplyQuery,result) {
        opt.current = perReimMyApplyQuery.pageNo;
        opt.pageSize = perReimMyApplyQuery.pageSize;
        opt.totalPageCount = result.body.totalCount;
        $('#totalCount').text(result.body.totalCount);
        pagination(opt);
    }

    function renderTable(data) {
        var tpl = require('../template/myApplication.tpl');
        var render = template.compile(tpl);
        var html = render({lst: data.body.lst});
        $('.table_tbody').empty().append(html);
    }

    /**
     * 条件查询
     * @param opt
     * @param perReimMyApplyQuery
     */
    function query(opt,perReimMyApplyQuery){
        // console.debug(perReimMyApplyQuery);
        $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');
        $.ajax({
            type:'get',
            url:PER_REI_DOMAIN+'/perReimburseApply/queryPersonalReimburseApplyList',
            data:perReimMyApplyQuery,
            contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {
                if(result.code=="0001"){
                    renderTable(result);
                    setPage(opt,perReimMyApplyQuery,result);
                    if(result.body.totalCount==0){
                        $(".table_tbody").html('<tr><td align="center" colspan="5">暂无数据！</td></tr>')
                    }
                }
            }
        });

    }
    $(function() {
        queryInit(opt);
        $( "#datepicker" ).datepicker({
            calendarParent:'.process'
        });
        $( "#datepicker1" ).datepicker({
            calendarParent:'.process'
        });
        $("button[name='findBtn']").on('click',function(){
            $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');
            setListParam(perReimMyApplyQuery);
            query(opt,perReimMyApplyQuery);
        });
        $("div[name='pageSize']").on('click', $("span[name='span-num']"), function (e) {
            $(".table_tbody").html('<tr ><td colspan="5" align="center"><div class="list-loading">正在加载......</div></td></tr>');
            perReimMyApplyQuery.pageNo = 1;
            perReimMyApplyQuery.pageSize = $(e.target).text();
            setListParam(perReimMyApplyQuery);
            query(opt,perReimMyApplyQuery);
            $('.span-num.click_span').removeClass('click_span');
            $(e.target).addClass('click_span');
            e.stopPropagation();
        });
    });



})