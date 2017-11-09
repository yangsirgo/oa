
    {{if list.length>0}}{{each list as item Index}}
    <option value={{item.currencyId}} rmb={{if item.currencyName=="人民币"}}yes{{else}}no{{/if}}>{{item.currencyName}}</option>
    {{/each}}{{/if}}
