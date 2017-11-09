/**
 * Created by root on 10/9/16.
 */
define(function(require,exports){
    var template = require("../plugins/template");
    require("../util/util");

    $.ajaxSetup({ cache: false });
//报销申请页面模块域名地址
    var baseIfo_Url = PER_REI_DOMAIN+'/processImg/list/';
    function getProcessImg(){
        var b=_urlParamToJson(window.location.search,"applyId");
        $.ajax({
            type:'get',
            url:baseIfo_Url+b,
            // data:b,
            // contentType:'application/json;charset=utf-8',
            dataType:'json',//服务器返回的结果类型
            success:function (result) {

                if (result.code == "0001") {
                    // alert(result.body.length);


                    if (result.body.length != 0) {
                        var tpl = require('../template/processImg.tpl');
                        var render = template.compile(tpl);
                        var _procName = render({data_list: result.body});
                        $("#processImg").html(_procName);
                    }
                }
            }
        });
    }
    getProcessImg();
})