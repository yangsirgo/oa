    <div class="approveDialogTitle">
        <span class="ad_title">{{boxTitle}}</span>
        <span class="ad_close">×</span>
    </div>
    <div class="apdlbox">
        <div class="apdlbox_row">
            <div class="apdlbox_row_title">
                <span class="span_advice_mustinputtag">*</span>意　见：
            </div>
            <div class="apdlbox_row_con">
                <textarea maxlength=500 class="app_pubprocess_content_text_advice dftgraycolor" style="width:400px;overflow-y:scroll;overflow-x:hidden" id="txt_area_advice" rows="5" cols="" >{{defaultText}}</textarea>
            </div>
        </div>
        {{if action=="redadd"}}
        <div class="apdlbox_row">
            <div class="apdlbox_row_title">
                <span class="span_mustinputtag">*</span>加签给：
            </div>
            <div class="apdlbox_row_con">
                <div class="fw_ksntxtbox" style="width: 396px;">
                    <div class="fw_ksninput">
                        <input id="txt_KSN_approve_other" class="app_pubprocess_content_charge_text" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="apdlbox_row">
            <div class="apdlbox_row_title">
                <span class="span_mustinputtag"></span>&nbsp;
            </div>
            <span class="app_addnew_gantanhao">最多可加签5人，并行审批，全部完成后返回</span>
        </div>
        {{else if action=="redirect"}}
        <div class="apdlbox_row">
            <div class="apdlbox_row_title">
                <span class="span_mustinputtag">*</span>转签给：
            </div>
            <div class="apdlbox_row_con">
                <div class="fw_ksntxtbox" style="width: 396px;">
                    <div class="fw_ksninput">
                        <input id="txt_KSN_approve_other" class="app_pubprocess_content_charge_text" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="apdlbox_row">
            <div class="apdlbox_row_title">
                <span class="span_mustinputtag"></span>&nbsp;
            </div>
            <span class="app_addnew_gantanhao">转签只能转给一人，审批任务移交，不返回</span>
        </div>
        {{/if}}
        <div class="apdlbox_row" style="text-align:right">
        <a class="com_center_delete_confirm">确定</a>
            <a class="com_center_delete_concel">取消</a>
        </div>
    </div>