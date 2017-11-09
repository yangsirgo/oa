 {{each lst as obj i}}
    <TR>
        <td class="first_td_child"><span status="{{obj.status}}" companyId="{{obj.companyId}}" applyId="{{obj.applyId}}" codeValue="{{obj.code}}"
                                         class="design-bg-icons3 app-checkbox"
                                         procinstid="100000014124255"></span></td>
        <TD class="second_td_child">
            <DIV align=left>{{obj.code}}</DIV>
        </TD>
        <TD class="even-td">
            <DIV align=center> {{if obj.status == '审批通过'}}<span style="color:#01a451">{{obj.status}}
                                          {{else if obj.status == '审批驳回'}}
                                           <span style="color:#f78320">{{obj.status}}
                                           {{else}}
                                           <span style="color:red">{{obj.status}}
                                           {{/if}}
                                          </span></DIV>
        </TD>
        <TD class="odd-td">
            <DIV align=center>{{obj.applyType}}</DIV>
        </TD>
        <TD class="odd-td">
            <DIV align=center>{{obj.applyUserName}}</DIV>
        </TD>
        <TD class="odd-td">
            <DIV align=center>{{obj.applyDateStr}}</DIV>
        </TD>
        <TD class="odd-td">
            <DIV align=center>{{obj.approveDateStr}}</DIV>
        </TD>
        <TD class="handle">
            <DIV align=center class="block-div">
                {{each obj.opList as op i}}
                {{if op.opName == '查看'}}<a href="./mySp_details.html?root=cwSP.html&applyId={{obj.applyId}}&applyUserId={{obj.applyUserId}}&taskId={{obj.taskId}}">{{op.opName}}</a>{{/if}}
                {{if op.opName == '打印'}}<a href="#" style="display:none;">{{op.opName}}</a>{{/if}}
                {{/each}}
            </DIV>
        </TD>
    </TR>
    {{/each}}