/**
 * Created by Xcar on 2016/9/1.
 */
$(function(){
    $(window).on("resize",function(){
        var domHeight = $(window).height()-$(".app-header").height()+"px";
        $(".set-menu").css("height",domHeight);
        $('#content-size-OA').css('height', $(window).height() - $('.app-header').height() - $('.set-page-mbx').height());
        $('#content').css('height',$(window).height()-$('.app-header').height());
    }).trigger("resize");


    $("#js_left_menu a.first_A").die().live("click",function (event) {
        console.log(event.target)
        if($(event.target).hasClass("first_A")){
            if($(this).parent("li.ex").hasClass('true')){
                $(this).parent("li.ex").removeClass('true').addClass("false");
            }else{
                $(this).parent("li.ex").removeClass('false').addClass("true");
            }
        }
        event.stopPropagation();
    })

    $(".user-name").on("click", "a", function() {
        var a = $(this).attr("href");
        if(a=="./login.html"){
            cookie.clear();
            store.clear();
            window.location.reload(a);
        }else{
            "" != a && window.location.reload(a);
        }
    })

    //获取本地cookie用户名
    $(".person_name").html(cookie.get("user_name"));


});