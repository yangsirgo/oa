/**
 * Created by Xcar on 2016/9/20.
 */
define(function(require, exports, module){
    /*
     * jQuery placeholder, fix for IE6,7,8,9
     * @author JENA
     * @since 20131115.1504
     * @website ishere.cn
     */
    var JPlaceHolder = {
        //检测
        _check : function(){
            return 'placeholder' in document.createElement('input');
        },
        //初始化
        init : function(){
            if(!this._check()){
                this.fix();
            }
        },
        //修复
        fix : function(){
            jQuery(':input[placeholder]').each(function(index, element) {
                var self = $(this), txt = self.attr('placeholder');
                self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
                var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
                var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:'13px', height:h, lienHeight:h, paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
                self.focusin(function(e) {
                    holder.hide();
                    self.parent('div').siblings('.del').css({visibility:'visible'});
                    $('.del').on('click', function (e) {
                        e.preventDefault();
                        $(this).css({visibility: 'hidden'}).siblings('div').find('input').val('');
                        $(this).siblings('div').find('span').show();
                    });
                }).focusout(function(e) {
                    if(!self.val()){
                        holder.show();
                        self.parent('div').siblings('.del').css({visibility:'hidden'});
                    }
                });
                holder.click(function(e) {
                    holder.hide();
                    self.focus();
                });
            });
        }
    };
    //执行
    jQuery(function(){
        JPlaceHolder.init();
    });
    //清空input框
    $('.code').on('input focus blur click keydown',function(){
        setTimeout(function(){
            var $that=$('.sta');
            var $this=$('.psw');
            if ($that.val()) {
                $that.siblings('.del').css({visibility: 'visible'});
            } else {
                $that.siblings('.del').css({visibility: 'hidden'});
            }
            if ($this.val()) {
                $this.siblings('.del').css({visibility: 'visible'});
            } else {
                $this.siblings('.del').css({visibility: 'hidden'});
            }
        },0)
    });
    $('.del').on('click', function (e) {
        $(this).css({visibility: 'hidden'}).siblings('input').val('');
        e.preventDefault();
    });
})