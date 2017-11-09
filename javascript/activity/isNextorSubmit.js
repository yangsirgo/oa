/**
 * Created by Xcar on 2016/10/13.
 */

define(function(require, exports){
    function isNextorSubmit(obj){
        var bx_Type =obj.find("option:selected").text();
        $(".submit_btn").text("提交");
        if(bx_Type=="交通费"||bx_Type=="办公用品"){
            $(".submit_btn").text("保存并进入下一步");
            return false;
        }
        console.log("判断开始了")
    }
    exports.isNextorSubmit = isNextorSubmit;
})
