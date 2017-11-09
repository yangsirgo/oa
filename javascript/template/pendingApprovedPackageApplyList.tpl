{{each lst as obj i}}
    <TR>
        <td class="first_td_child"><span perReApplyId="{{obj.perReApplyId}}" codeValue="{{obj.code}}"
                                         class="design-bg-icons3 app-checkbox"
                                         procinstid="100000014124255"></span></td>
        <TD class="second_td_child">
            <DIV align=left>{{obj.applyNumber}}</DIV>
        </TD>
        <TD class="even-td">
                        <DIV align=center>
                        {{if obj.applyStatus == '审批通过'}}<span style="color:#01a451">{{obj.applyStatus}}
                        {{else if obj.applyStatus == '审批驳回'}}
                         <span style="color:#f78320">{{obj.applyStatus}}
                         {{else}}
                         <span style="color:red">{{obj.applyStatus}}
                         {{/if}}
                        </span></DIV>
        </TD>
        <TD class="odd-td">
            <DIV align=center>{{obj.applyUserName}}</DIV>
        </TD>
        <TD class="odd-td">
            <DIV align=center>{{obj.applyTime}}</DIV>
        </TD>
        <TD class="handle">
            <DIV align=center class="block-div">
                {{each obj.opList as op i}}
                {{if op.opName == '查看'}}<a href="./mySp_details.html?root=cwSD_details.html&applyId={{obj.perReApplyId}}&applyUserId={{obj.userId}}">{{op.opName}}</a>{{/if}}
                {{if op.opName == '打印'}}<a href="#"  style="display:none;">{{op.opName}}</a>{{/if}}
                {{if op.opName == '驳回'}}<a name="reject" perReApplyId="{{obj.perReApplyId}}"
                                           style="cursor:pointer">{{op.opName}}</a>{{/if}}
                {{/each}}
            </DIV>
        </TD>
    </TR>
    {{/each}}