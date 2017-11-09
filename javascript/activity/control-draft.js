/**
 * Created by chent696 on 2015/2/2.
 */
define(function(require,exports){
    var ajaxBasePath = '/webajax/process/draft';
    $.ajaxSetup({ cache: false });
    var _submitData = function(option){
        var _option = option || {};
        var _callback = _option.callback,
            _err = _option.err,
            _data = _option.data,
            _beforeSend = _option.beforeSend,
            _complete = _option.complete;
            _urlString = _option._url;
        console.log(_data+"_data");
        //debugger;
        var Sendurl = encodeURI("../PersonalReimburse/perReimburseApply/"+_data+"/"+_urlString+"?token="+cookie.get("token"));
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: Sendurl,
            //data: _data,
            beforeSend:function(){
                if($.isFunction(_beforeSend)){
                    _beforeSend();
                }
            },complete:function(){
                if($.isFunction(_complete)) {
                    _complete();
                }
            }
        }).done(function (data) {
            if($.isFunction(_callback)) {
                _callback(data);
            }
        }).fail(function(msg){

            if($.isFunction(_err))
            {
                _err(msg);
            }
        });
    }






    /*
    草稿数据同步加载
     */
    var _getDraftInfo = function(option){


        var _option = option || {};
        var _callback = _option.callback,
            _err = _option.err,
            _data = _option.data;
        $.ajax({
            type: 'get',
            dataType: 'json',
            async:false,
            url: ajaxBasePath+'/ajaxGetDraftInfo',
            data: _data
        }).done(function (data) {
            if($.isFunction(_callback)) {
                _callback(data);
            }
        }).fail(function(msg){

            if($.isFunction(_err))
            {
                _err(msg);
            }
        });
    }

    var _deleteDraftById = function(option){

        var _option = option || {};
        var _callback = _option.callback,
            _err = _option.err,
            _data = _option.data;
        $.ajax({
            type: 'get',
            dataType: 'JSON',
            url: ajaxBasePath+'/ajaxDeleteDraftById',
            data: _data
        }).done(function (data) {
            if($.isFunction(_callback)){
                _callback(data);
            }
        }).fail(function(msg){

            if($.isFunction(_err))
            {
                _err(msg);
            }
        });
    }

    var _getDraftList = function(option){


        var _option = option || {};
        var _callback = _option.callback,
            _err = _option.err,
            _data = _option.data;
        $.ajax({
            type: 'get',
            dataType: 'JSON',
            url: ajaxBasePath+'/ajaxGetDraftList',
            data: _data
        }).done(function (data) {
            if($.isFunction(_callback)) {
                _callback(data);
            }
        }).fail(function(msg){

            if($.isFunction(_err))
            {
                _err(msg);
            }
        });
    }

    exports.SubmitData = _submitData;
    exports.GetDraftInfo = _getDraftInfo;
    exports.DeleteDraftById = _deleteDraftById;
    exports.GetDraftList = _getDraftList;
});