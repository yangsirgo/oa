  {{if Apply_person.length>0}}{{each Apply_person as item Index}}
  {{if Index!=0}}
    <div id='tabs-{{Index+1}}' aria-labelledby="ui-id-{{Index+1}}" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel"
         aria-hidden="false"  style="display: none;"><table class="person-tabs-table" style="BORDER-COLLAPSE: collapse" bordercolor="#E4E5E7" cellspacing="0" border="1">
                                                               <tbody>
                                                               <tr class="odd-tr-tbody">
                                                                   <td colspan="6">
                                                                       <div align="left">报销信息</div></td>
                                                               </tr>
                                                               <tr class="even-tr-tbody">
                                                                   <td>
                                                                       <div align="center">单据日期</div></td>
                                                                   <td>
                                                                       <div align="center" class="fontColor-set">{{item.applyDate}}</div></td>
                                                                   <td>
                                                                       <div align="center">报销号</div></td>
                                                                   <td>
                                                                       <div align="center" class="fontColor-set">{{item.applyCode}}</div></td>
                                                                   <td colspan="2" class="dashed-block">
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
                                                                                               <div align="center" class="fontColor-set">{{iteminvList.finalPrice}}</div></td>
                                                                                           <td width="100" colspan="4">
                                                                                               <div align="center"></div></td>
                                                                                       </tr>
                                                                                       </tbody>
                                                                                   </table>
                                                                                   {{/each}}
                                                                                   <p class="all-total">总计:<span style="padding-right: 27px;">{{item.invoiceList.totalPrice}}</span></p>

               </div>
               {{/if}}

           {{/each}}
           {{/if}}