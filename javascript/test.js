/**
 * Created by ryf on 2016/10/9.
 */
define(function (require, exports, module){
    var xcarui = require('./UI/oaui');
    var template = require("./plugins/template");
    $(".btn").click(function(){
        xcarui.confirm({'title':'<div class="ct-ly-tips">是否审批通过？</div>','body':''},function(submit) {
            xcarui.alert({title:"操作成功！",type:2});
            //快速关闭对话框
            submit.close();
        }
        //     ,function (){
        //     xcarui.alert({title: "失败弹窗",type:1});
        // }
        )
    })
    $(".ipt_btn").click(function(){
        ShowApproveDialogBox({
            title: "驳回",
            showType: 2,
            defaultText: '驳回'
        });

    })
    function  ShowApproveDialogBox(setting){
        var box_tpl = require('./template/approve-box.tpl');
        var box_render = template.compile(box_tpl);
        var box_htm = box_render({
            boxTitle: setting.title,
            action: setting.action,
            defaultText: setting.defaultText
        });

        var box = xcarui.showNoTitle({
            cont: box_htm,
            success: function () {
                $(".apdlbox a.com_center_delete_concel,.approveDialogTitle span.ad_close").click(function () {
                    box.close()
                });
                $("#txt_area_advice").focus(function () {
                    $(this).removeClass("dftgraycolor");
                });


                //else if (setting.showType == 2) { /*审批状态*/
                $(".apdlbox a.com_center_delete_confirm").click(function () {
                    var _this = this;
                    var _advice = advice = $.trim($("#txt_area_advice").val() || '');
                    if (_advice.length > 5) {
                        xcarui.alert({title: "超过50字符限制", type: 2});
                        return;
                    }
                    if (_advice.length == "0") {
                        xcarui.alert({title: "不能为空!", type: 2});
                        return;
                    }
                    // 在这里可以写回调函数
                    //关闭当前窗口
                    box.close();
                    xcarui.alert({title: "驳回操作成功!", type: 2});
                    setTimeout(function (){
                        window.location.refresh();
                    },1500)

                });
            }
        });
    }
})