/**
 * Created by ryf on 2016/9/19.
 */
define(function (require, exports, module){
    require("./common");
    var template = require("../plugins/template");
    var taken = cookie.get("token");

    $.ajax({
        url: "leftDir/getDirTree",
        type: 'get',
        dataType: 'json',
        cache:true,
        async:false,
        data:{
            "token":taken
        },
        success: function (data) {
            console.log(data.body);
            if(data.code=="0001"){
                var tpl = require('../template/caidanlist.tpl');
                var render = template.compile(tpl);
                var _procName = render({data_list: data.body});
                $("#js_left_menu").html(_procName);
                getUI();
            }else if(data.code=="0002"){
                $("#js_left_menu").empty().html('data.body');
            }

        }, error: function (e1, e2, e3) {
            $("#js_left_menu").empty().html('请检查网络！！');
        }
    })

    function getUI(){
        var urlstr = window.location.href;
        var urlstatus=false;
        $("#menu_list_ul a").each(function () {
            if ((urlstr + '/').indexOf($(this).attr('href').substring(2)) > -1&&$(this).attr('href')!='') {
                $(this).addClass('true'); urlstatus = true;
            } else {
                $(this).removeClass('true');
            }
        });
        if (urlstatus) {$("#menu_list_ul").parent().find("a.first_A").eq(0).css({'color':'#fff'}); }else{
            //$("#menu_list_ul").parent().removeClass("true").addClass("false");
        }
    }
})