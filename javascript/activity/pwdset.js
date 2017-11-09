/**
 * Created by ryf on 2016/10/4.
 */
define(function (require, exports, module){
    //域名地址配置
    require("../common");
    //通用js
    require("./caidan_pageInit");
    var xcarui = require('../UI/oaui');
    $.ajaxSetup({ cache: false });

    var pwdset_Url = HUMAN_BASIC+"/auth/modifyPassword";
    //提交表单
    $('.btn1').on('click',function(){
        ChangePwd();
    })
    //清除表单
    $('.btn2').on('click',function(){
        $("#user_password").val("");
        $("#new_user_password").val("");
        $("#confirmPassWord").val("");
        return false;
    })

    function ChangePwd() {
        var oldPassword = $("#user_password").val();
        var newPassword = $("#new_user_password").val();
        var repwd = $("#confirmPassWord").val();
        if (oldPassword == null || oldPassword == ""){
            $("#resultFront").html("旧密码不能为空！");
            return false;
        }
        if(newPassword == null || newPassword ==""){
            $("#resultFront").html("新密码不能为空！");
            return false;
        }
        if(repwd == null || repwd ==""){
            $("#resultFront").html("确认密码不能为空！");
            return false;
        }
        if(!/^[0-9a-zA-Z]*$/.test(newPassword)) {
            $("#resultFront").html("密码只能是数字或者字母！");
            return false;
        }
        var length = newPassword.length;
        if( parseInt("6") >parseInt(length) || parseInt(length) >parseInt("10") ){
            $("#resultFront").html("密码为6-10位字母或数字！");
            return false;
        }
        if(newPassword!=repwd){
            xcarui.error(" ！");
            return false;
        }
        if(newPassword==oldPassword){
            xcarui.error("新密码和旧密码不能相同！");
            return false;
        }
        ChangePassword(oldPassword,newPassword);
        $("#user_password").val("");
        $("#new_user_password").val("");
        $("#confirmPassWord").val("");
        return false;
    }
    function ChangePassword(oldPassword,newPassword) {
        var userId = cookie.get("user_uid");
        $.ajax({
            url: pwdset_Url,
            type: "post",
            dataType: "json",
            data: { "userId": userId,"oldPassword": oldPassword, "newPassword": newPassword},
            success: function (data, textStatus) {
                if (data.code=="0001") {
                    xcarui.successMask("恭喜！修改密码成功");
                    setTimeout(function (){
                        cookie.clear();
                        store.clear();
                        window.location.href = "./login.html";
                    },1500)
                }
                else {
                    xcarui.error(data.body);
                }
            },
            error: function (e1, e2, e3) {
                // xcarui.error("旧密码书写错误!");
            }
        });
    }


})