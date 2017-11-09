  {{if Apply_person.length>0}}{{each Apply_person as item Index}}
    <div id='tabs-{{Index+1}}' aria-labelledby="ui-id-{{Index+1}}" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel"
         {{if Index=="0"}}
         aria-hidden="true" style="display: block;">
        {{else}}
        aria-hidden="false" style="display: none;">
        {{/if}}
        <TABLE class="person-tabs-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7 cellSpacing=0 border=1>
            <TBODY>
            <TR class="odd-tr-tbody">
                <TD colSpan=8>
                    <DIV align=left>明细单</DIV></TD>
            </TR>
            <TR class="even-tr-tbody">
                <TD width=100>
                    <DIV align=center>姓名</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{item.userInfo.perReimUserName}}</DIV></TD>
                <TD width=100>
                    <DIV align=center>所在城市</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{item.userInfo.perReimUserCity}}</DIV></TD>
                <TD width=100>
                    <DIV align=center>公司</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{item.userInfo.perReimUserCompany}}</DIV></TD>
                <TD width=100>
                    <DIV align=center>部门</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{item.userInfo.perReimUserDepartment}}</DIV></TD>
            </TR>
            </TBODY>
        </TABLE>
        {{each item.detailLst as detailsgle Indexds}}
        {{if detailsgle.reimburseTypeId==2||detailsgle.reimburseTypeId==13}}
        <form class="traffic_billDetails">
            <TABLE class="add-bill-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7 cellSpacing=0 border=1>
                <TBODY>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>日期</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set"><input type="text" class="ipt-td-tbody date_1" name="trafficDate"></DIV></TD>
                    <TD width=100>
                        <DIV align=center>外出事由</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            <input type="text" class="ipt-td-tbody" name="reason" class="traffic_reason">
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>出发地</DIV></TD>
                    <TD width=100>
                        <DIV align=center>
                            <input type="text" class="ipt-td-tbody" name="starting">
                        </DIV></TD>
                </TR>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>目的地</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            <input type="text"  class="ipt-td-tbody" name="destination"/>
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>金额</DIV></TD>
                    <TD width=100>
                        <DIV align=center><input type="text" class="fontColor-set amount_num" value="{{detailsgle.finalPrice}}" name="trafficAmount" readonly="readonly"></DIV></TD>
                    <TD width=100 colspan=2>
                        <input type="text"  class="ipt-td-tbody" name="invoiceId" value="{{detailsgle.invoiceId}}" style="display: none"/></TD>
                </TR>
                </TBODY>
            </TABLE>
        </form>
        {{else if detailsgle.reimburseTypeId==3||detailsgle.reimburseTypeId==17}}
        <form class="os_billDetails">
            <TABLE class="add-bill-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7 cellSpacing=0 border=1>
                <TBODY>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>费用日期</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set"><input type="text"  class="ipt-td-tbody date_1" name="feeDate"/></DIV></TD>
                    <TD width=100>
                        <DIV align=center>物品名称</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            <input type="text"  class="ipt-td-tbody" name="osName"/>
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>数量</DIV></TD>
                    <TD width=100>
                        <DIV align=center>
                            <input type="text"  class="ipt-td-tbody" name="osCount"/>
                        </DIV></TD>
                </TR>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>使用人</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            <input type="text"  class="ipt-td-tbody" name="osUser"/>
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>金额</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set" ><input type="text" class="fontColor-set amount_num" value="{{detailsgle.finalPrice}}" name="osAmount" readonly="readonly"></DIV></TD>
                    <TD width=100 colspan=2>
                        <input type="text"  class="ipt-td-tbody" name="invoiceId" value="{{detailsgle.invoiceId}}" style="display: none"/></TD>
                </TR>
                </TBODY>
            </TABLE>

        </form>
        {{/if}}
        {{/each}}
    </div>
    {{/each}}{{/if}}