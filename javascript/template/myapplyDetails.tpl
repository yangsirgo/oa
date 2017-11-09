
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
                    <DIV align=center class="fontColor-set">{{obj.reimburseUser.perReimUserName}}</DIV></TD>
                <TD width=100>
                    <DIV align=center>所在城市</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{obj.reimburseUser.perReimUserCity}}</DIV></TD>
                <TD width=100>
                    <DIV align=center>公司</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{obj.reimburseUser.perReimUserCompany}}</DIV></TD>
                <TD width=100>
                    <DIV align=center>部门</DIV></TD>
                <TD width=100>
                    <DIV align=center class="fontColor-set">{{obj.reimburseUser.perReimUserDepartment}}</DIV></TD>
            </TR>
            </TBODY>
        </TABLE>

        {{if obj.personalReimburseInvoiceInfo.personalReimburseTraffic}}
        <form class="traffic_billDetails">
            <TABLE class="add-bill-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7 cellSpacing=0 border=1>
                <TBODY>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>日期</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">{{obj.personalReimburseInvoiceInfo.personalReimburseTraffic.trafficDateStr}}</DIV></TD>
                    <TD width=100>
                        <DIV align=center>外出事由</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            {{obj.personalReimburseInvoiceInfo.personalReimburseTraffic.reason}}
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>出发地</DIV></TD>
                    <TD width=100>
                        <DIV align=center>
                            {{obj.personalReimburseInvoiceInfo.personalReimburseTraffic.starting}}
                        </DIV></TD>
                </TR>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>目的地</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            {{obj.personalReimburseInvoiceInfo.personalReimburseTraffic.destination}}
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>金额</DIV></TD>
                    <TD width=100>
                        <DIV align=center>
                        {{obj.personalReimburseInvoiceInfo.finalPrice}}
                        </DIV></TD>
                    <TD width=100 colspan=2>

                       </TD>
                </TR>
                </TBODY>
            </TABLE>
        </form>
        {{else if obj.personalReimburseInvoiceInfo.personalReimburseOs}}
        <form class="os_billDetails">
            <TABLE class="add-bill-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7 cellSpacing=0 border=1>
                <TBODY>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>费用日期</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                       {{obj.personalReimburseInvoiceInfo.personalReimburseOs.feeDateStr}}
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>物品名称</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                            {{obj.personalReimburseInvoiceInfo.personalReimburseOs.osName}}
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>数量</DIV></TD>
                    <TD width=100>
                        <DIV align=center>
                            {{obj.personalReimburseInvoiceInfo.personalReimburseOs.osCount}}
                        </DIV></TD>
                </TR>
                <TR class="even-tr-tbody">
                    <TD width=100>
                        <DIV align=center>使用人</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set">
                             {{obj.personalReimburseInvoiceInfo.personalReimburseOs.osUser}}
                        </DIV></TD>
                    <TD width=100>
                        <DIV align=center>金额</DIV></TD>
                    <TD width=100>
                        <DIV align=center class="fontColor-set" >
                         {{obj.personalReimburseInvoiceInfo.finalPrice}}
                        </DIV></TD>
                    <TD width=100 colspan=2>
                        <input type="text"  class="ipt-td-tbody" name="invoiceId" style="display: none"/></TD>
                </TR>
                </TBODY>
            </TABLE>
        </form>
        {{/if}}
