    {{each data_list as item index}}
        {{if index==0}}
            <li class="block-tableline" id="first-li-block">
                <span class="up-li">
                    <i class="accept-i"></i>
                </span>
                <ul class="down-li accept-ul">
                    <li class="down-li-first">{{item.time}}</li>
                    <li class="down-li-last">{{item.taskName}}</li>
                </ul>
             </li>
        {{else if index<data_list.length - 1}}
            {{if item.status == 1}}
                <li class="block-tableline">
                    <span class="up-li">
                        <i class="wait-i"></i>
                    </span>
                    <ul class="down-li wait-ul">
                        <li class="down-li-first">{{item.taskName}}</li>
                    </ul>
                </li>
            {{else if item.status == 2}}
                <li class="block-tableline">
                    <span class="up-li">
                        <i class="accept-i"></i>
                    </span>
                    <ul class="down-li accept-ul">
                        <li class="down-li-first">{{item.taskName}}</li>
                    </ul>
                </li>
             {{else}}
                <li class="block-tableline">
                    <span class="up-li">
                        <i class="refuse-i"></i>
                    </span>
                    <ul class="down-li refuse-ul">
                        <li class="down-li-first">{{item.taskName}}</li>
                    </ul>
                </li>
            {{/if}}
        {{else}}
             <li class="block-tableline" id="last-li-block">

                 {{if item.status == 1}}
                     <span class="up-li">
                         <i class="wait-i"></i>
                     </span>
                     <ul class="down-li wait-ul">
                         <li class="down-li-first">{{item.taskName}}</li>
                     </ul>
                 {{else if item.status == 2}}
                     <span class="up-li">
                         <i class="accept-i"></i>
                     </span>
                     <ul class="down-li accept-ul">
                         <li class="down-li-first">{{item.taskName}}</li>
                     </ul>
                 {{else}}
                  <span class="up-li">
                     <i class="refuse-i"></i>
                  </span>
                     <ul class="down-li refuse-ul">
                        <li class="down-li-first">{{item.taskName}}</li>
                     </ul>
                 {{/if}}
             </li>
        {{/if}}

    {{/each}}


