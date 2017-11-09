/**
 * Created by Xcar on 2016/10/10.
 */
define(function(require,exports){
    var template = require("../plugins/template");
    var getselect = require("./getselect_option");
    var selector = require("./oa_selector");
    var isNext = require("./isNextorSubmit");

    var select_xmUrl = PER_REI_DOMAIN+"/personalReimburseItem/queryPersonalReimburseItemList";
    var sl_Url = PER_REI_DOMAIN+'/tax/queryTaxList';
    var hl_Url = PER_REI_DOMAIN+'/currency/queryCurrencyList';
    //加载select option
    var select_xm = require('../template/select_xm_option.tpl');
    var select_sl = require('../template/select_sl_option.tpl');
    var select_hl = require('../template/select_hl_option.tpl');

    $.ajaxSetup({ cache: false });

    var addpersontab = function (tabCounter,clickJquery){
        /*
         * 报销明细中的新增报销人功能
         */

        var tabTemplate = "<li><a href='#{href}'>#{label}</a><span class='ui-icon ui-icon-close' role='presentation'></span></li>";
        var tabs = $( "#tabs" ).tabs();

        // 实际的 addTab 函数：使用上面表单的输入添加新的标签页
        function addTab(){
            var string = "date_"+tabCounter;
            var selectClass = "S"+tabCounter;
            var data = {
                date:"date_"+tabCounter,
                selectNum:"S"+tabCounter
            };
            var html_addperson = template('template-person', data);
            var label = "报销人" + tabCounter,
                id = "tabs-" + tabCounter,
                li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
                tabContentHtml = html_addperson;
            tabs.find( ".ui-tabs-nav" ).append( li );
            tabs.append( "<div id='" + id + "'>" + tabContentHtml + "</div>" );
            tabs.tabs( "refresh" );
            tabs.tabs({
                show: { opacity: "toggle",duration: 400}
            });
            if($("#"+string).datepicker){
                $("#"+string).datepicker({
                    calendarParent:'.process'
                });
            }

            //加载select option
            //报销类型
            getselect.getselectOpt(select_xmUrl,{"token":cookie.get("token")},true,$('.par_baoxiao'+selectClass),select_xm,ButtonisNext);
            //税率
            getselect.getselectOpt(sl_Url,{},true,$('.shuilv_fapiao'+selectClass),select_sl);
            //汇率
            getselect.getselectOpt(hl_Url,{},true,$(".hl_currency"+selectClass),select_hl);
            tabCounter++;
        }
        // addTab 按钮：值打开对话框
        (clickJquery||$("#add-pillperson")).click(function() {
                addTab();
                //新增报销人的背景颜色设置tabs-x 背景颜色
                $("div[role='tabpanel']").css({"background-color":"#fff"});
                //选人控件启用
                selector.selector_fun();
                var biaoji = '#tabs-'+(tabCounter-1);
                if(($('a[href='+biaoji+']').length>0)){
                    $('a[href='+biaoji+']').click();
                    tabs.tabs({
                        show: { opacity: "toggle",duration:0}
                    })
                }
            });
        // 关闭图标：当点击时移除标签页
        tabs.delegate( "span.ui-icon-close", "click", function() {
            var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
            $( "#" + panelId ).remove();
            tabs.tabs( "refresh" );
            $("select[name='reimburseType']").each(function(){
                isNext.isNextorSubmit($(this));
                console.log("删除tabsPerson");
            })
        });
    }



    //增加报销人，判断当前发票类型是否是办公用品和交通费
    function ButtonisNext(obj){
        var objText = obj.find("option:selected").text();
        if(objText=="交通费"||objText=="办公用品"){
            $(".submit_btn").text("保存并进入下一步");
        }
        console.log("增加报销人")
    }
    exports.addpersontab=addpersontab;
})