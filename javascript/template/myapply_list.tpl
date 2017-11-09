{{if list.length>0}}{{each list as item Index}}
<TABLE class="myapplycation-info-table" cellSpacing=0 border=1 borderColor=#E4E5E7>
    <TBODY>
    <TR class="first_tr_title">
        <TD class="odd-td" width=194>
            <DIV align=center>公司编号</DIV></TD>
        <TD class="even-td" width=194>
            <DIV align=center>申请状态</DIV></TD>
        <TD class="odd-td" width=194>
            <DIV align=center>申请类型</DIV></TD>
        <TD class="even-td" width=194>
            <DIV align=center>申请日期</DIV></TD>
        <TD class="odd-td" colspan="2">
            <DIV align=center>操作</DIV></TD>
    </TR>
     <TR class="first_tr_title">
        <TD class="odd-td" width=194>
            <DIV align=center>{{item.lst.applyNumber}}</DIV></TD>
        <TD class="even-td" width=194>
            <DIV align=center>{{item.lst.applyStatus}}</DIV></TD>
        <TD class="odd-td" width=194>
            <DIV align=center>{{item.lst.applyType}}</DIV></TD>
        <TD class="even-td" width=194>
            <DIV align=center>{{item.lst.applyTime}}</DIV></TD>
        <TD class="odd-td" colspan="2">
            <DIV align=center>操作</DIV></TD>
     </TR>
     </TBODY>
     </TABLE>
     {{/each}}{{/if}}
