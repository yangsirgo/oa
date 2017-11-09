    {{each lst as item Index}}
    <TR class="second_tr_child">
        <td class="w-20 first_td_child">
            <span batchId="{{item.batchId}}" class="design-bg-icons3 app-checkbox" codeValue="{{item.code}}"
                                                     procinstid="100000014124266"></span>
        </td>
        <TD class="odd-td second_td_child" width=194>
            <DIV align=left>{{item.batchCode}}</DIV></TD>
        <TD class="even-td" width=194>
            <DIV align=center style="color:red">{{item.currentTaskrole}}</DIV></TD>
        <TD class="odd-td" width=194>
            <DIV align=center>{{item.approvalDate}}</DIV></TD>
        <TD class="handle">
            <DIV align=center class="block-div">
                {{each item.opList as op Index}}
                {{if op.opName == '查看'}}
                      <a href="./cwSD_details2.html?root=cwSD_details.html&batchId={{item.batchId}}&batchCode={{item.batchCode}}">
                                     {{op.opName}}</a>{{/if}}
                {{if op.opName == '审核'}}<a name="approve" batchId="{{item.batchId}}"
                                                   style="cursor:pointer">{{op.opName}}通过</a>{{/if}}
                {{if op.opName == '驳回'}}<a name="reject" batchId="{{item.batchId}}"
                                                   style="cursor:pointer">{{op.opName}}</a>{{/if}}
                {{/each}}
            </DIV>
        </TD>
    </TR>
    {{/each}}