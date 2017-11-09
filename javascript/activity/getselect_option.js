/**
 * Created by Xcar on 2016/10/10.
 */
define(function(require,exports){
    //配置路径
    require("../common.js");
    var template = require("../plugins/template");
    var select_xmUrl = PER_REI_DOMAIN+"/personalReimburseItem/queryPersonalReimburseItemList";
    var sl_Url = PER_REI_DOMAIN+'/tax/queryTaxList';
    var hl_Url = PER_REI_DOMAIN+'/currency/queryCurrencyList';


    $.ajaxSetup({ cache: false });
    //获取报销项目，报销类型，税率，页面初始化
    var _getselect_option = function(isasync){
        //报销类型
        var select_xm = require('../template/select_xm_option.tpl');
        var select_sl = require('../template/select_sl_option.tpl');
        var select_hl = require('../template/select_hl_option.tpl');
        getselectOpt(select_xmUrl,{"token":cookie.get("token")},isasync,$(".par_baoxiao"),select_xm);
        //税率
        getselectOpt(sl_Url,{},isasync,$('.shuilv_fapiao'),select_sl);
        //汇率
        getselectOpt(hl_Url,{},isasync,$(".hl_currency"),select_hl);
    }

    //selectoption ajax函数
    function getselectOpt (url_name,data_list,isasync,jQuery_name,moduleTpl,callback){
        $.ajax({
            url:url_name,
            type: 'get',
            data:data_list,
            dataType: 'json',
            cache:true,
            async:isasync,
            success:function(data){
                if(data.code=="0002"){
                    jQuery_name.empty().append("");
                    return;
                }
                var data = {
                    list:data.body
                }
                var render = template.compile(moduleTpl);
                var tpl = render(data);
                jQuery_name.empty().html(tpl);
                console.log(data);
                callback&&callback(jQuery_name.parents(".bill_form").find("select[name='reimburseType']"));
                $('.typeselect').chosen({
                    width:'180px'
                }).trigger("liszt:updated");
            }
        })
    }
    exports.getselect_option=_getselect_option;
    exports.getselectOpt=getselectOpt;
})