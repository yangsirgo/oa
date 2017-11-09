 {{each lst as obj i}}
    <TR>
        <td class="first_td_child"><span class="design-bg-icons3 app-checkbox"
                                         procinstid="100000014124255"></span></td>
        <TD class="second_td_child">
            <DIV align=left>{{obj.code}}</DIV>
        </TD>
        <TD class="even-td">
            <DIV align=center>{{obj.batchOrApplyFlag}}</DIV>
        </TD>
        <TD class="even-td">
            <DIV align=center>
            {{if obj.status == '审批通过'}}<span style="color: #009900">{{obj.status}}{{/if}}
            {{if obj.status == '审批驳回'}}<span  style="color:#f78320">{{obj.status}}{{/if}}
            </span></DIV>
        </TD>
        <TD class="even-td">
            <DIV align=center>{{obj.createDate}}</DIV>
        </TD>
        <TD class="even-td">
            <DIV align=center>{{obj.approvalDate}}</DIV>
        </TD>
        <TD class="handle">
            <DIV align=center class="block-div">
             {{if obj.batchOrApplyFlag == '批次'}}<a href="./approved_package_apply_list.html?root=approved_package_list.html&batchId={{obj.batchId}}&batchCode={{obj.code}}&status={{obj.statusId}}">查看</a>{{/if}}
             {{if obj.batchOrApplyFlag == '单条申请'}}<a href="./mySp_details.html?root=approved_package_list.html&applyId={{obj.batchId}}&applyUserId={{obj.applyUserId}}&taskId={{obj.taskId}}">查看</a>{{/if}}
            </DIV>
        </TD>
    </TR>
{{/each}}