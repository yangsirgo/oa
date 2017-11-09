 {{each lst as obj i}}
    <TR>
        <td class="first_td_child">
            <span class="design-bg-icons3 app-checkbox" procinstid="100000014124255"></span>
        </td>
        <TD class="second_td_child"  >
            <DIV align=left>{{obj.applyCode}}</DIV>
        </TD>
        <TD class="even-td"  >
            <DIV align=center>
            {{if obj.isPassStr == '审批通过'}}<span style="color: #009900">{{obj.isPassStr}}</span>{{/if}}
            {{if obj.isPassStr == '审批驳回'}}<span style="color:#f78320">{{obj.isPassStr}}</span>{{/if}}
            </DIV>
        </TD>
        <TD class="odd-td" >
            <DIV align=center>{{obj.applyUserName}}</DIV>
        </TD>
        <TD class="odd-td" >
            <DIV align=center>{{obj.applyTimeStr}}</DIV>
        </TD>
        <TD class="even-td" >
            <DIV align=center>{{obj.endTimeStr}}</DIV>
        </TD>
        <TD class="handle">
            <DIV align=center class="block-div"><a href="./mySp_details.html?root=approved_package_list.html&applyId={{obj.applyId}}&applyUserId={{obj.applyUserId}}&taskId={{obj.taskId}}">查看</a></DIV>
        </TD>
    </TR>
{{/each}}