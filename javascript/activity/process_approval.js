/**
 *
 * Created by chent696 on 2014/11/23.
 */

/**
 * approveAction
 * 审批 4 拒绝 11 加签 10 转签9
 * 同意-投票环节 6  执行环节 5
 * 流程操作
 */

define(function(require,exports){
    /* 同意-投票环节 6  执行环节 5 审批 4  */
   var util_com = require('../common/util');
    $.ajaxSetup({ cache: false });
    var _fProcessReturnToBack =  function(option,callback,err){
        var params = option || {};
        var _procinstid=params.procinstid;
        $.ajax({
                type: "get",
                dataType: "json",
              //  data:     {'procinstid':procinstid},
                url: i8_session.ajaxWfHost + 'webajax/process/ajaxgetcommentbyprocinstid?procinstid='+_procinstid,//cpec_sessioajaxWfHostst + 'Handler/Workflow/WorkflowDataHandler.ashx?action=startprocess',      //提交到一般处理程序请求数据
                success:  function (data) {
                    if($.isFunction(callback)){
                        callback(data);
                    }
                }
            }
        );
    }

    var _fProcessCustomSubmit = function(option,callback,err){

        var params = option || {};
        var _postFormData = params.postFormData;
        $.ajax({
            type: "post",
            dataType: "json",
            data: _postFormData,
            url: i8_session.ajaxWfHost  + 'webajax/process/ajaxSubmitCustomProcess',//cpec_sessioajaxWfHostst + 'Handler/Workflow/WorkflowDataHandler.ashx?action=startprocess',      //提交到一般处理程序请求数据
            success: function (data) {
                if (data.Result) {
                    if($.isFunction(callback))
                    {
                        callback(data);
                    }
                 //   i8ui.alert({"title": "流程发起成功！"});
                    //$(_this).text("提交完成!");
                    //var locUrl = $("#APPMenuList").find("li:eq(0) a").attr("href");
                    //setTimeout(function () { window.open(applyPageUrl, "_self"); }, 2000);
                  //  setTimeout(closeNotAlert, 2000);
                }
                else {
                    if($.isFunction(err))
                    {
                        err(data);
                    }
                    //i8ui.alert({"title": data.Description});
                    //$(_this).removeClass("app_pubprocess_content_submited").text("提　交");
                }
            },
            error: function (data) {
                if($.isFunction(err))
                {
                    err(data);
                }
                //i8ui.alert({"title": "流程发起失败，网络或服务器端错误!"});
                //$(_this).removeClass("app_pubprocess_content_submited").text("提　交");
            }
        });
    }

    var _fProcessProSubmit = function(option,callback,err){
        var params = option || {};
        var _postFormData = params.postFormData;
        $.ajax({
            type: "post",
            dataType: "json",
            data: _postFormData,
            url: i8_session.ajaxWfHost + 'webajax/process/ajaxSubmitProProcess',      //提交到一般处理程序请求数据
            success: function (data) {
                if (data.Result) {
                    if($.isFunction(callback))
                    {
                        callback(data);
                    }
                    //i8ui.alert({"title": "流程发起成功！"});
                    ////setTimeout(function () { window.open(applyPageUrl, "_self"); }, 2000);
                    //setTimeout(closeNotAlert, 2000);
                }
                else {
                    if($.isFunction(err))
                    {
                        err(data);
                    }
                    //i8ui.showNoTitle({"cont": data.Description});
                    //$(_this).removeClass("app_pubprocess_content_submited").text("提　交");
                    //setTimeout(closeNotAlert, 2000);
                }
            },
            error: function (data) {
                // i8ui.showNoTitle({"cont":"流程发起失败，网络或服务器端错误!"});
                //i8ui.alert({"title": "流程发起失败，网络或服务器端错误!"});
                if($.isFunction(err))
                {
                    err(data);
                }
                //$(_this).removeClass("app_pubprocess_content_submited").text("提　交");
            }
        });
    }

    var _fProcessApprove = function (options, callback,err) {

        var params = options || {};

        var _procinstanceId = params.procinstanceId,
            _workItemID = params.workItemID,
            _filedata = params.filedata,
            _action = params.action,
            _existfiledata = params.existFiledata,
            _advice =  encodeURIComponent(params.advice || ''),
            _backactid = params.backactid,
            _editFieldData = params.editFieldData || null,
            _receive = params.receive;

        $.post(i8_session.ajaxWfHost + 'webajax/process/ajaxProcessApprove', //fw_globalConfig.root + 'Handler/Workflow/WorkflowDataHandler.ashx?action=appvoer',
            {
                //  'fileid': file_id, 'filedata': file_data, 'ar': approveR, 'com': encodeURIComponent(advice), 'procinsid': ProcInfo.ProcInstID, 'wid': ProcInfo.WorkItemID, 'action': approvers, 'pCreator': ProcInfo.ProcCreator
                'procInstanceId': _procinstanceId,
                'workItemId': _workItemID,
                'actionDesc': '',//params.actionDesc,
                'comments':_advice,
                 'backactid':_backactid,
                'existFiledata':_existfiledata,
                'receivers': _receive || null,
                'editFieldData':_editFieldData,
                //  'editFieldData':fnGetEditableData(function(){}),
                'filedata': _filedata, // fnGetFileData() || null,//,
                'action': _action //params.approveAction
            }, function (response) {


                if ($.isFunction(callback)) {
                    callback(response);
                }

            }, "json").error(function(msg){
                if($.isFunction(err))
                {
                    err(msg);
                }
            });
    }
    //退回到指定环节
    var _fProcGotoAct = function (options, callback,err) {

        var params = options || {};

        var _procinstanceId = params.procinstanceId,
            _workItemID = params.workItemID,
            _actionDesc = params.actionDesc,
            _backactid = params.backactid,
            _comments = params.comments;
        $.post(i8_session.ajaxWfHost + 'webajax/process/ajaxProcGotoAct', //fw_globalConfig.root + 'Handler/Workflow/WorkflowDataHandler.ashx?action=appvoer',
            {
                //  'fileid': file_id, 'filedata': file_data, 'ar': approveR, 'com': encodeURIComponent(advice), 'procinsid': ProcInfo.ProcInstID, 'wid': ProcInfo.WorkItemID, 'action': approvers, 'pCreator': ProcInfo.ProcCreator
                'procInstanceId': _procinstanceId,
                'workItemId': _workItemID,
                'actionDesc': _actionDesc,
                'backactid':_backactid,
                'comments':_comments
            }, function (response) {
                if ($.isFunction(callback)) {
                    callback(response);
                }
            }, "json").error(function(msg){
                if($.isFunction(err))
                {
                    err(msg);
                }
            });
    }
    /**
     * approveAction
     * 审批 4 拒绝 6加签 10 转签8
     * 流程操作
     */
    var _fProcessApproveAdd = function (options, callback,err) {

        var params = options || {};

        var _procinstanceId = params.procinstanceId,
            _workItemID = params.workItemID,
            _attachment = params.attachments|| null,
            _action = params.action,
            _advice = encodeURIComponent(params.advice|| ''),
            _joinUsers = params.joinUsers || null,
            _editFieldData = params.editFieldData,
            _receive = params.receive;

        $.post(i8_session.ajaxWfHost + 'webajax/process/ajaxProcessApproveAdd', //fw_globalConfig.root + 'Handler/Workflow/WorkflowDataHandler.ashx?action=appvoer',
            {
                //  'fileid': file_id, 'filedata': file_data, 'ar': approveR, 'com': encodeURIComponent(advice), 'procinsid': ProcInfo.ProcInstID, 'wid': ProcInfo.WorkItemID, 'action': approvers, 'pCreator': ProcInfo.ProcCreator
                'procInstanceId': _procinstanceId,
                'workItemId': _workItemID,
                'actionDesc': '',//params.actionDesc,
                'comments':_advice,
                'joinUsers': _joinUsers,
                'editFieldData':_editFieldData,
                //  'editFieldData':fnGetEditableData(function(){}),
                'filedata': _attachment ,//,
                'action':10
            }, function (response) {
                if ($.isFunction(callback)) {
                    callback(response);
                }
            }, "json").error(function(msg){
                if($.isFunction(err))
                {
                    err(msg);
                }
            });
    }

    /**
     * approveAction
     * 审批 4 拒绝 6加签 10 转签8
     * 流程操作
     */
    var _fProcessApproveRedirect = function (options, callback,err) {

        var params = options || {};

        var _procinstanceId = params.procinstanceId,
            _workItemID = params.workItemID,
            _attachment = params.attachments|| null,
            _action = params.action,
            _advice = encodeURIComponent(params.advice|| ''),
            _toUser = params.toUser || null,
            _receive = params.receive,
            _editFieldData = params.editFieldData;

        $.post(i8_session.ajaxWfHost + 'webajax/process/ajaxProcessApproveRedirect', //fw_globalConfig.root + 'Handler/Workflow/WorkflowDataHandler.ashx?action=appvoer',
            {
                //  'fileid': file_id, 'filedata': file_data, 'ar': approveR, 'com': encodeURIComponent(advice), 'procinsid': ProcInfo.ProcInstID, 'wid': ProcInfo.WorkItemID, 'action': approvers, 'pCreator': ProcInfo.ProcCreator
                'procInstanceId': _procinstanceId,
                'workItemId': _workItemID,
                'comments': _advice,
                'toUser': _toUser,
                 'editFieldData':_editFieldData,
                'filedata': _attachment,//,
                'action':8
            }, function (response) {
                if ($.isFunction(callback)) {
                    callback(response);
                }
            }, "json").error(function(msg){
                if($.isFunction(err))
                {
                    err(msg);
                }
            });
    }

    /**
     * 拒绝
     * @param options
     * @param callback
     */
    var _fProcessApproveReject = function (options, callback,err) {

        var _params = options || {};

        var _procinstanceId = params.procinstanceId;

        $.ajax({
            type: 'post',
            dataType: 'json',
            url: i8_session.ajaxWfHost + '/webajax/process/ajax/ajaxRejectProcess',
            data: {procInstId: _procinstanceId}
        }).done(function (data) {
            callback(data);
        }).fail(function(msg){

                if($.isFunction(err))
                {
                    err(msg);
                }
        });
    }

    /**
     * 撤回重新提交
     * @param options
     * @param callback
     * @private
     */
    var _fProcessReset = function(options,callback,err){

        var params = options || {};

        var _procinstanceId = params.procInstanceId||'',
            _workItemID = params.workItemID||'',
            _filedata = params.filedata|| null,
            _existfiledata = params.existFiledata ||'',
            _advice = encodeURIComponent(params.advice|| ''),
            _receives = params.receivers|| params.receive||'',
            _jsonFormData = params.jsonFormData||'',
            _procTitle = params.procTitle ||'',
            _procParam = params.procParam,
            _procRel = params.procRel||'',
            _approver = params.Approver||'',
            _agent = params.agent,
            _applyParttimeID = params.applyParttimeID || '';

        /*
         'procInstId': _procInstId,
         'workItemId': _workItemId,
         'procTitle': _procTitle,
         'comments': _comment,
         'receivers': _receivers,
         'relationProcInstId':_relationInst,
         'jsonFormData':_jsonFormData,
         'attachments':null //_attachments,
        * */
        $.post(i8_session.ajaxWfHost + '/webajax/process/ajax/ajaxResetProcess', //fw_globalConfig.root + 'Handler/Workflow/WorkflowDataHandler.ashx?action=appvoer',
            {
                'procInstanceId': _procinstanceId,
                'workItemId': _workItemID,
                'comments': _advice,
                'procRel':_procRel,
                'procparam':_procParam,
                'existFiledata':_existfiledata,
                'receivers':_receives,
                'procTitle':_procTitle,
                'jsonFormData':_jsonFormData,
                'applyParttimeID': _applyParttimeID,
                'approver':_approver,
                'agent':_agent,
               // 'editFieldData':_editFieldData,
                'filedata': _filedata

            }, function (response) {
                if ($.isFunction(callback)) {
                    callback(response);
                }
            }, "json").error(function(msg){
                if($.isFunction(err))
                {
                    err(msg);
                }
            });
    };

    /**
     * 设计流程发起
     * @private
     */
    var _fProcessProStart = function(){

    }

    /**
     * 自定义程发起
     * @private
     */
    var _fProcessCustomStart = function(){

    }

    exports.ProcessApprove = _fProcessApprove;
    exports.ProcessApproveAdd = _fProcessApproveAdd;
    exports.ProcessApproveRedirect = _fProcessApproveRedirect;
    exports.ProcessApproveReject = _fProcessApproveReject;
    exports.ProcessReset = _fProcessReset;
    exports.ProcessProSubmit = _fProcessProSubmit;
    exports.ProcessCustomSubmit = _fProcessCustomSubmit;
    exports.ProcessReturnToBack = _fProcessReturnToBack;
    exports.ProcGotoAct = _fProcGotoAct;
});
