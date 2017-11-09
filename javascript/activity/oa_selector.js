/**
 * Created by Xcar on 2016/9/21.
 */
define(function(require, exports){

var selector_fun = function (){
    var getNameUrl = HUMAN_BASIC+"/humanFulltimeUser/selectListByName";
    var getCardNum = PER_REI_DOMAIN+"/perReimburseApply/selectPerReimUserInfo";
    $.ajaxSetup({ cache: false });
    $( ".user_person" ).autocomplete({
        delay:400,
        source: function( request, response ) {
            $.ajax({
                url: getNameUrl,
                dataType: "json",
                data: {
                    "userName": request.term
                },
                success: function( data ) {
                    response( $.map( data, function( item ) {
                        return {
                            value: item.userName+"("+item.userNumber+")",
                            id: item.userId
                        }
                    }));
                }
            });
        },
        minLength: 1,
        select: function( event, ui ) {
            var user_id = ui.item.id;
            //debugger;
            //将user_id存在隐藏的input上
            $(this).parent().find(".apply_userId").val(user_id);
            console.log(user_id);
            $( ".user_person").blur();
            //获取银行卡号和地址信息
            //console.log(this);
            //console.log($(this).parent().find(".apply_userId"));
            //console.log($(this).parent().find(".apply_userId").val(user_id));
            var _this = this;
            if(user_id){
                $.ajax({
                    cache:true,
                    url: getCardNum,
                    dataType: "json",
                    data: {
                        "userId": user_id
                    },
                    success: function( data ) {
                        console.log(data);
                        if(data.code!="0001"){
                            alert("获取银行卡信息超时，请重新选择！");
                            return;
                        }
                        if(data.code=="0001"){
                            $(_this).parents(".person-tabs-table").find(".yinhang_add").html(data.body.perReimUserBankName);
                            $(_this).parents(".person-tabs-table").find(".yinhang_admin").html(data.body.perReimUserAccountNum);
                        }
                    } ,
                    error: function(e1,e2,e3){
                        alert("获取银行卡信息超时，请检查网络！！")
                    }
                });
            }else{
                alert("请重新选择人员！");
            }
        },
        open: function() {
            $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
        },
        close: function() {
            $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
        }
    }).bind("input.autocomplete", function () {
        $(this).autocomplete("search", this.value);
    });
    }

    exports.selector_fun = selector_fun;
})
