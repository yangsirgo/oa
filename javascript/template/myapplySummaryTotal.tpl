  {{if Apply_person.length>0}}{{each Apply_person as item Index}}
    {{if Index=="0"}}
    <div id='tabs-1' aria-labelledby="ui-id-{{Index+1}}" class="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel"
         aria-hidden="true" style="display: block;">
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
                                             <div align="center" class="tax-rate fontColor-set">{{itemLst.finalPrice}}</div></td>
                                         <td width="100">
                                             <div align="center" class="tax-rate fontColor-set">
                                             {{if itemLst.invoiceType=="交通费"||itemLst.invoiceType=="办公用品"}}<a href="./myAppli_details2.html?root={{root}}&invoiceId={{itemLst.invoiceInfoId}}&applyId={{applyId}}&applyUserId={{applyUserId}}">
                                             {{else}}
                                             <a href="javascript:void(0)" style="color:#d3d6d9;cursor:text;">
                                             {{/if}}
                                             查看明细单</a></div></td>
                                     </tr>
                                       {{/each}}
                                     <tr>
                                         <td width="100" class="xuhao_num">
                                             <div align="center" class="fontColor-set">合计</div></td>
                                         <td width="100" colspan="5">
                                             <div align="center" class="fontColor-set NumtoMoney">叁仟元整</div></td>
                                         <td width="100" colspan="2" class="fontColor-set">
                                             <div align="center" class="NumMoney">{{item.totalPrice}}</div></td>
                                     </tr>
                                     </tbody>
                                 </table>
                                  </div>
                                 {{/if}}

{{/each}}{{/if}}