  {{if Apply_person.length>0}}{{each Apply_person as item Index}}
  {{if Index==0}}
    <div id='tabs-1' aria-labelledby="ui-id-{{Index+1}}" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel"
         aria-hidden="true" style="display: block;">
                                   {{else}}
    <div id='tabs-{{Index+1}}' aria-labelledby="ui-id-{{Index+1}}" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel"
         aria-hidden="false"  style="display: none;">
         {{/if}}
                        <TABLE class="person-tabs-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7
                               cellSpacing=0 border=1>
                            <TBODY>
                            <TR class="odd-tr-tbody">
                                <TD colSpan=6>
                                    <DIV align=left>报销人信息</DIV>
                                </TD>
                            </TR>
                            <TR class="even-tr-tbody">
                                <TD class='perc-10'>
                                    <DIV align=center>报销人</DIV>
                                </TD>
                                <TD class='perc-24'>
                                    <DIV align=center class="fontColor-set"><input type="text"
                                                                                   class="ipt-td-tbody user_person"
                                                                                   style="border-radius: inherit;" value='{{item.reimbursUserName}}' />
                                        <input type="text" class="apply_userId" style="display: none" value='{{item.reimburseUserId}}' />
                                    </DIV>
                                </TD>
                                <TD class='perc-10'>
                                    <DIV align=center>报销人开户行</DIV>
                                </TD>
                                <TD class='perc-25'>
                                    <DIV align=center class="fontColor-set yinhang_add">{{item.reimburseUserBankName}}</DIV>
                                </TD>
                                <TD class='perc-10'>
                                    <DIV align=center>报销人账号</DIV>
                                </TD>
                                <TD>
                                    <DIV align=center class="fontColor-set yinhang_admin">{{item.reimburseUserBandNo}}</DIV>
                                </TD>
                            </TR>
                            </TBODY>
                        </TABLE>
                         {{each item.invoiceList.lst as itemLst IndexLst}}
                        <form class="bill_form">
                            <TABLE class="add-bill-table" style="BORDER-COLLAPSE: collapse" borderColor=#E4E5E7
                                   cellSpacing=0 border=1>

                                <TBODY>
                                <TR class="odd-tr-tbody">
                                    <TD colSpan=5 class="action_coin" style="border-right:0">
                                        <span class="fl">发票信息</span></TD>
                                    <td class="action_coin" style="border-left:0"><span class="delete_coin"
                                                                                       {{if IndexLst==0}} style="visibility: hidden"{{/if}}></span><span
                                            class="add_coin"></span></td>
                                </TR>
                                <TR class="even-tr-tbody">
                                    <TD width=100>
                                        <DIV align=center>报销项目</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center class="fontColor-set">
                                            <select name="reimburseItem" class="par_baoxiao applyItem{{Index}}{{IndexLst}}">
                                            </select>
                                        </DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>报销类型</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center class="fontColor-set">
                                            <select name="reimburseType" class="par_baoxiao applyType{{Index}}{{IndexLst}}">
                                            </select>
                                        </DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>电子发票</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>
                                            <select name="isElecInvoice" class="e-invoice isElecInvoice{{Index}}{{IndexLst}}">
                                                <option value="1" test-invoice="yes">是</option>
                                                <option value="0" test-invoice="no">否</option>
                                            </select>
                                        </DIV>
                                    </TD>
                                </TR>
                                <TR class="even-tr-tbody ipt-parent">
                                    <TD width=100>
                                        <DIV align=center>电子发票号</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center class="fontColor-set">
                                            <input type="text" class="ipt-td-tbody elec_inv" name="invoiceNum" value='{{itemLst.invoiceNo}}'/>
                                        </DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>发票类型</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center class="fontColor-set">
                                            <select name="invoiceType" class="special-invoice typeInvoice{{Index}}{{IndexLst}}">
                                                <option value="增值税专用发票" special-invoice="yes">增值税专用发票</option>
                                                <option value="普通发票" special-invoice="no">普通发票</option>
                                            </select>
                                        </DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>税率</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center class="tax-rate">
                                            <select name="taxId" class="shuilv_fapiao  applyTax{{Index}}{{IndexLst}}"></select>
                                        </DIV>
                                    </TD>
                                </TR>
                                <TR class="even-tr-tbody">
                                    <TD width=100>
                                        <DIV align=center>币种</DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center class="fontColor-set">
                                            <select name="currencyId" class="hl_currency applyexchangeRate{{Index}}{{IndexLst}}">
                                            </select>
                                        </DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>
                                            <span>汇率</span>
                                            <span class="rel">
                                                 <div class="helper">
                                                     <i class="helper_i"></i>

                                                     <div class="helpertext"
                                                          style="margin-top: -29px;padding: 5px;line-height: 15px;width: 245px">
                                                         提示：输入到小数点后两位。请查看今天汇率
                                                         <em class="em1" style="top: 43px;">
                                                             <em class="em2"></em>
                                                         </em>
                                                     </div>
                                                 </div>
                                            </span>
                                        </DIV>
                                    </TD>
                                    <TD width=100 class="ex-rate">
                                        <DIV align=center><input type="text" class="ipt-td-tbody ipt_target" name='exchangeRate' {{if itemLst.exchangeRate==1}}value=""{{else}}value={{itemLst.exchangeRate}}{{/if}} /></DIV>
                                    </TD>
                                    <TD width=100>
                                        <DIV align=center>申请金额</DIV>
                                    </TD>
                                    <TD width=100 class="ex-application">
                                        <DIV align=center class="fontColor-set"><input type="text"
                                                                                       class="ipt-td-tbody ipt_target ipt_applyCpnut"
                                                                                       name="price"  value="{{itemLst.price}}" /></DIV>
                                    </TD>
                                </TR>
                                <TR class="even-tr-tbody">
                                    <TD width=100>
                                        <DIV align=center>人民币金额</DIV>
                                    </TD>
                                    <TD width=100 class="RMB-total">
                                        <DIV align=center class="fontColor-set"><input type="text" class="ipt-td-tbody"
                                                                                       disabled="disabled" value="{{itemLst.finalPrice}}" /></DIV>
                                    </TD>
                                    <TD width=100 colspan=4>
                                        <DIV align=center></DIV>
                                    </TD>
                                </TR>
                                </TBODY>

                            </TABLE>
                        </form>
                        {{/each}}
                        <p class="all-total">报销总计:<span style="padding-right: 27px;">{{item.invoiceList.totalPrice}}</span></p>

                    </div>
                               {{/each}}
                               {{/if}}