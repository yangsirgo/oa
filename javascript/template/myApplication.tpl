   {{each lst as item Index}}
   <TR class="second_tr_child">
            <TD class="odd-td" width=194>
                <DIV align=center>{{item.applyNumber}}</DIV></TD>
            <TD class="even-td" width=194>
                <DIV align=center>
                {{if item.applyStatus == '审批通过'}}<span style="color:#01a451">{{item.applyStatus}}
                {{else if item.applyStatus == '审批驳回'}}
                 <span style="color:#f78320">{{item.applyStatus}}
                 {{else if item.applyStatus == "草稿"}}
                 <span>{{item.applyStatus}}
                 {{else}}
                 <span style="color:red">{{item.applyStatus}}
                 {{/if}}
                </span></DIV>
            <TD class="odd-td" width=194>
                <DIV align=center>{{item.applyType}}</DIV></TD>
            <TD class="even-td" width=194>
                <DIV align=center>{{item.applyTime}}</DIV></TD>
            <TD class="handle">
                <DIV align=center class="block-div">
                    {{each item.opList as op Index}}
                    {{if op.opName == '查看'}}<a href="./myAppli_details.html?root=myapplication.html&applyId={{item.perReApplyId}}&taskId={{9999}}">{{op.opName}}</a>{{/if}}
                    {{if op.opName == '打印'}}<a href="./dayin.html?root=myapplication.html&applyId={{item.perReApplyId}}"  style="display:none;">{{op.opName}}</a>{{/if}}
                    {{if op.opName == '编辑'}}<a href="./Rtj_application.html?root=myapplication.html&applyId={{item.perReApplyId}}">{{op.opName}}</a>{{/if}}
                    {{/each}}
                </DIV>
            </TD>
        </TR>
    {{/each}}