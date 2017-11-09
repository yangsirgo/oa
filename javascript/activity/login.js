/**
 * Created by Xcar on 2016/9/20.
 */
define(function (require, exports, module){
    require("./login_holder");
    $.ajaxSetup({ cache: false });
    //提交验证
    $("#user_number").on("keypress",function(e){
        var curKey = e.which;
        if(curKey == "13") {
            $('#submitBtn').click();
        }
    })
    $("#user_password").on("keypress",function(e){
        var curKey = e.which;
        if(curKey == "13") {
            $('#submitBtn').click();
        }
    })
    $("#submitBtn").on("click",function(){
        validateLoginInfo($(this));
        return false;
    })
    //$("body").keydown(function(event) {
    //    if (event.keyCode == "13") {//keyCode=13是回车键
    //        $('submitBtn').click();
    //    }
    //});

    //function doSearch(e) {
    //    var e=window.event||arguments.callee.caller.arguments[0];
    //    if (e.keyCode == 13) {
    //        var fun = document.getElementById("submitBtn").click();
    //    }
    //}

    function validateLoginInfo(_this){
        //避免重复点击.禁止表单重复提交
        if($(_this).hasClass("disabled")) {
            return false;
        };

        var reg = new RegExp("/^[0-9a-zA-Z]*$/g");
        var user_number = $("#user_number").val();
        var user_password = $("#user_password").val();

        if (user_number == null ||user_number ==""){
            $("#resultFront").html("员工编号不能为空！")
                .stop(true, true)
                .fadeIn(500)
                .delay(1500)
                .fadeOut(500);
            return;
        }

        if(!/^[0-9]*$/.test(user_number)){
            $("#resultFront").html("员工编号只能是数字！")
                .stop(true, true)
                .fadeIn(500)
                .delay(1500)
                .fadeOut(500);
            return;
        }

        if (user_password == null||user_password == ""){
            $("#resultFront").html("密码不能为空！")
                .stop(true, true)
                .fadeIn(500)
                .delay(1500)
                .fadeOut(500);
            return;
        }
        if(!/^[0-9a-zA-Z]*$/.test(user_password)){
            $("#resultFront").html("密码只能是数字或者字母!")
                .stop(true, true)
                .fadeIn(500)
                .delay(1500)
                .fadeOut(500);
            return;
        }

        _this.html("正在登录...").addClass("disabled");
        //$("#form1").submit();
            $.ajax({
                type: 'post',
                url: 'auth/login',
                //timeout:105000,
                data: {
                    'unumber': user_number,
                    'pwd': user_password
                },
                success:function(data){
                    if(!data){
                        $("#resultFront").html("无此用户！请检查用户名和密码")
                            .stop(true, true)
                            .fadeIn(500)
                            .delay(1500)
                            .fadeOut(500);
                        //请求完成了让状态还原
                        $("#submitBtn").html("登&emsp;&emsp;录").removeClass("disabled");
                        return false;
                    }
                    var roleEnNameArray = [];
                        if(data.code=='0001'){//如果返回来的信息说明提交的信息为正确的
                            var user_name = data.body.uname;
                            var token = data.body.token;
                            var user_uid =  data.body.uid;
                            var roleEnName;
                            // console.debug(data.body.roles);
                            // console.debug($(data.body.roles));
                            $.each($(data.body.roles), function (n, data) {
                                roleEnNameArray.push(data.roleEnName);
                            });
                            cookie.set("user_name",user_name,30);
                            cookie.set("token",token,30);
                            cookie.set("user_uid",user_uid,30);
                            cookie.set("roleEnName",roleEnNameArray.join(','),30);
                            //window.location.href='http://localhost:63342/webapp/index.html';
                            window.location.href='./index.html';
                        }else if(data.code=='0002'){
                                $("#resultFront").html("用户名或者密码错误！")
                                    .stop(true, true)
                                .fadeIn(500)
                                .delay(1500)
                                .fadeOut(500);
                            //请求完成了让状态还原
                            $("#submitBtn").html("登&emsp;&emsp;录").removeClass("disabled");
                                return false;
                        }
                },
                error: function () {
                    $("#resultFront").html("请检查网络，数据无法发送！")
                        .stop(true, true)
                        .fadeIn(500)
                        .delay(1500)
                        .fadeOut(500);
                    //请求完成了让状态还原
                    $("#submitBtn").html("登&emsp;&emsp;录").removeClass("disabled");
                }
        });
    }
})