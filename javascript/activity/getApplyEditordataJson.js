/**
 * Created by Xcar on 2016/10/10.
 */
define(function(require,exports){

    var template = require("../plugins/template");
    var getselect = require("./getselect_option");
    var addperson = require("./addPersontabs");
    var isNext = require("./isNextorSubmit");


    $.ajaxSetup({ cache: false });
    function _getApplyEditordataJson(draftId){
        $.ajax({
            type: 'get',
            url: '../PersonalReimburse/reimburseInfo/reimburseAllUser',
            timeout:1000,
            async:false,
            data: {
                'applyId': draftId
            },
            success:function(result){
                if(result.code=='0001'){//如果返回来的信息说明提交的信息为正确的
                    var apply_tabs = {
                        person_Info:result.body
                    }
                    var applyDetailtpltabs = require('../template/myapplyEditordatatabs.tpl');
                    var render = template.compile(applyDetailtpltabs);
                    var tabstpl = render(apply_tabs);
                    $(".person-tabs-ul").empty().append(tabstpl);
                    var data_tabsList ={
                        Apply_person:result.body
                    }
                    var applyDetailtpl = require('../template/myapplyEditordataList.tpl');
                    var render = template.compile(applyDetailtpl);
                    var html = render(data_tabsList);
                    $("#tabs-1").remove();
                    $("#tabs").append(html);
                    var tabs = $( "#tabs" ).tabs();
                    tabs.tabs( "refresh" );
                    getselect.getselect_option(false);

                    $.each(result.body,function(index,item){
                        var num = index+1;
                        //debugger;
                        if($("#date_"+num).datepicker){
                            $("#date_"+num).datepicker({
                                calendarParent:'.process'
                            });
                        }
                        $.each(item.invoiceList.lst,function(Lstindex,elem){
                            $(".applyItem"+index+Lstindex).get(0).value = elem.invoiceItemId;
                            $(".applyType"+index+Lstindex).get(0).value = elem.invoiceItemTypeId;
                            $(".applyexchangeRate"+index+Lstindex).get(0).value = elem.currencyId;
                            if(elem.currencyStr=="人民币"){
                                $(".applyexchangeRate"+index+Lstindex).parents(".bill_form").find(".ex-rate input").attr("disabled","disabled");
                            }
                            $(".applyTax"+index+Lstindex).get(0).value = elem.taxId;
                            $(".isElecInvoice"+index+Lstindex).get(0).value = elem.invoiceIsEle;
                            if(elem.invoiceisEleStr=="否"){
                                $(".isElecInvoice"+index+Lstindex).parents(".bill_form").find(".elec_inv").attr("disabled","disabled");
                            }
                            $(".typeInvoice"+index+Lstindex).get(0).value =(elem.invoiceType);
                            if(elem.invoiceType=="普通发票"){
                                var targetObj =  $(".typeInvoice"+index+Lstindex).parents(".bill_form").find(".shuilv_fapiao");
                                targetObj.get(0).value = 0;
                                targetObj.attr("disabled","disabled");
                            }
                        })
                    })
                    isNext.isNextorSubmit($("select[name='reimburseType']"));
                    addperson.addpersontab(result.body.length+1);
                }else if(result.code=='0002'){

                }
            },
            error: function () {

            }
        });
    }
    exports.getApplyEditordataJson=_getApplyEditordataJson;
})