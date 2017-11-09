  {{if Apply_person.length>0}}{{each Apply_person as item Index}}
    <div id='tabs-{{Index+1}}' aria-labelledby="ui-id-{{Index+1}}" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel"
         {{if Index=="0"}}
         aria-hidden="" style="display: block;">
         <table class="detail_table" style="BORDER-COLLAPSE: collapse" bordercolor="#E4E5E7" cellspacing="0" border="1">
                                     <tbody>
                                     <tr class="title_total">
                                         <td colspan="8" class="action_coin" style="border-right:0">
                                             <h2>汇总表</h2>
                                             <div class="number_bx">报销编号：{{item.reimburseCode}}</div></td>
                                     </tr>
                                     <tr class="even-tr-tbody">
                                         <td width="100" class="xuhao_num">
                                             <div align="center">序号</div></td>
                                         <td width="100">
                                             <div align="center">日期</div></td>
                                         <td width="100">
                                             <div align="center">报销人</div></td>
                                         <td width="100" class="baoxiaoren_num">
                                             <div align="center">报销人账号</div></td>
                                         <td width="100">
                                             <div align="center">报销项目</div></td>
                                         <td width="100">
                                             <div align="center">报销类型</div></td>
                                         <td width="100">
                                             <div align="center">金额</div></td>
                                         <td width="100">
                                             <div align="center"></div></td>
                                     </tr>
                                     {{each item.totalLst as itemLst IndexLst}}
                                     <tr class="ipt-parent">
                                         <td width="100" class="xuhao_num">
                                             <div align="center" class="fontColor-set">{{IndexLst+1}}</div></td>
                                         <td width="100">
                                             <div align="center" class="fontColor-set">{{itemLst.applyTime}}</div></td>
                                         <td width="100">
                                             <div align="center" class="fontColor-set">{{itemLst.applyUserName}}</div></td>
                                         <td width="100" class="baoxiaoren_num">
                                             <div align="center" class="fontColor-set">{{itemLst.applyUserNum}}</div></td>
                                         <td width="100">
                                             <div align="center" class="fontColor-set">{{itemLst.invoiceItem}}</div></td>
                                         <td width="100">
                                             <div align="center" class="tax-rate fontColor-set">{{itemLst.invoiceType}}</div></td>
                                         <td width="100">
                                             <div align="center" class="tax-rate fontColor-set">{{itemLst.price}}</div></td>
                                         <td width="100">
                                             <div align="center" class="tax-rate fontColor-set"><a href="./myAppli_details2.html?root=myapplication.html">查看明细单</a></div></td>
                                     </tr>
                                       {{/each}}
                                     <tr>
                                         <td width="100" class="xuhao_num">
                                             <div align="center" class="fontColor-set">合计</div></td>
                                         <td width="100" colspan="5">
                                             <div align="center" class="fontColor-set">叁仟元整</div></td>
                                         <td width="100" colspan="2" class="fontColor-set">
                                             <div align="center">{{item.totalPrice}}</div></td>
                                     </tr>
                                     </tbody>
                                 </table>
        {{else if Index>"0"}}
        aria-hidden="false"  style="display: none;"><table class="person-tabs-table" style="BORDER-COLLAPSE: collapse" bordercolor="#E4E5E7" cellspacing="0" border="1">
                                                        <tbody>
                                                        <tr class="odd-tr-tbody">
                                                            <td colspan="6">
                                                                <div align="left">报销信息</div></td>
                                                        </tr>
                                                        <tr class="even-tr-tbody">
                                                            <td width="100">
                                                                <div align="center">单据日期</div></td>
                                                            <td width="100">
                                                                <div align="center" class="fontColor-set">{{item.applyDate}}</div></td>
                                                            <td width="100">
                                                                <div align="center">报销号</div></td>
                                                            <td width="100">
                                                                <div align="center" class="fontColor-set">{{item.applyCode}}</div></td>
                                                            <td width="100" colspan="2" class="dashed-block">
                                                                <div align="center"></div></td>
                                                        </tr>
                                                        <tr class="odd-tr-tbody">
                                                            <td colspan="6">
                                                                <div align="left">报销人信息</div></td>
                                                        </tr>
                                                        <tr class="even-tr-tbody">
                                                            <td>
                                                                <div align="center">报销人</div></td>
                                                            <td>
                                                                <div align="center" class="fontColor-set">{{item.reimbursUserName}}</div></td>
                                                            <td>
                                                                <div align="center">报销人开户行</div></td>
                                                            <td>
                                                                <div align="center" class="fontColor-set">{{item.reimburseUserBankName}}</div></td>
                                                            <td>
                                                                <div align="center">报销人账号</div></td>
                                                            <td>
                                                                <div align="center" class="fontColor-set">{{item.reimburseUserBandNo}}</div></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                     {{each item.invoiceList.lst as iteminvList Indexinv}}
                                                    <table class="add-bill-table" style="BORDER-COLLAPSE: collapse" bordercolor="#E4E5E7" cellspacing="0" border="1">
                                                                                <tbody>
                                                                                <tr class="odd-tr-tbody">
                                                                                    <td colspan="5" class="action_coin" style="border-right:0">
                                                                                        <span class="fl">发票信息</span></td>
                                                                                    <td class="action_coin" style="border-left:0"><span class="delete_coin" style="visibility: hidden"></span><span class="add_coin" style="visibility: hidden"></span></td>
                                                                                </tr>
                                                                                <tr class="even-tr-tbody">
                                                                                    <td width="100">
                                                                                        <div align="center">报销项目</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.invoiceItemStr}}</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center">报销类型</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.invoiceItemTypeStr}}</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center">电子发票</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.invoiceisEleStr}}</div></td>
                                                                                </tr>
                                                                                <tr class="even-tr-tbody ipt-parent">
                                                                                    <td width="100">
                                                                                        <div align="center">电子发票号</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.invoiceNo}}</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center">发票类型</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.invoiceType}}</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center">税率</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="tax-rate fontColor-set">{{iteminvList.tax}}</div></td>
                                                                                </tr>
                                                                                <tr class="even-tr-tbody">
                                                                                    <td width="100">
                                                                                        <div align="center">币种</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.currencyStr}}</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center">
                                                                                            <span>汇率</span>
                                                                                        </div></td>
                                                                                    <td width="100" class="ex-rate">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.exchangeRate}}</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center">申请金额</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.price}}</div></td>
                                                                                </tr>
                                                                                <tr class="even-tr-tbody">
                                                                                    <td width="100">
                                                                                        <div align="center">人民币金额</div></td>
                                                                                    <td width="100">
                                                                                        <div align="center" class="fontColor-set">{{iteminvList.price}}</div></td>
                                                                                    <td width="100" colspan="4">
                                                                                        <div align="center"></div></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            {{/each}}
                                                                            {{item.totalPrice}}
        {{/if}}
        </div>
    {{/each}}
    {{/if}}