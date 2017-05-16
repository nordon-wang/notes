
(function (win, doc, $) {
    function CusScrollBar(options) {
        this._init(options);
    }

    $.extend(CusScrollBar.prototype, {
        _init(options) {
            var self = this;

            self.options = {
                scrollDir: 'y', //滚动方向
                contSelector: '', //滚动内容区选择器
                barSelector: '', //滚动条选择器
                sliderSelector: '' // 滚动滑块选择器
            }

            $.extend(true, self.options, options || {});

            self._initDomEvent();

            return self;
        },
        _initDomEvent() {
            // 出事化DOM引用
            var opts = this.options;

            // 滑块内容区对象
            this.$cont = $(opts.contSelector)

            //滑块对象
            this.$slider = $(opts.sliderSelector);

            //  滚动条对象
            this.$bar = opts.barSelector ? $(opts.barSelector) : self.$slider.parent();

            // 文档对象
            this.$doc = $(doc);

            this._initSliderDragEvent()._bindContScroll();
        },
        _initSliderDragEvent() {
            var self = this;
            var slider = this.$slider;
            var sliderEl = slider[0];

            if (sliderEl) {
                var doc = this.$doc;
                var dragStartPagePosition, dragStartScrollPosition, dragContBarRate;

                function mousemoveHandler(e) {
                    e.preventDefault();

                    console.log('mousemove');

                    if (dragStartPagePosition == null) {
                        return;
                    }
                    console.log(dragStartScrollPosition + (e.pageY - dragStartPagePosition) * dragContBarRate)
                    self.scrollTo(dragStartScrollPosition + (e.pageY - dragStartPagePosition) * dragContBarRate);

                }
                console.log(this)
                slider.on('mousedown', function (e) {
                    e.preventDefault();

                    dragStartPagePosition = e.pageY;
                    dragStartScrollPosition = self.$cont[0].scrollTop;
                    dragContBarRate = self.getMaxScrollPosition() / self.getMaxSliderPosition();

                    doc.on('mousemove.scroll', mousemoveHandler)
                        .on('mouseup.scroll', function (e) {
                            console.log('mouseup');

                            // 使用时间绑定的命名空间进行事件解绑
                            doc.off('.scroll');
                        })
                })

                return self;
            }
        },
        _bindContScroll (){

            var self = this;

            self.$cont.on('scroll',function(){
                var sliderEl = self.$slider && self.$slider[0];

                if(sliderEl){
                    sliderEl.style.top = self.getSliderPosition() + 'px';
                }
            })

            return self;
        },
        getMaxScrollPosition() {
            // 内容可滚动的距离
            var self = this;
            return Math.max(self.$cont.height(), self.$cont[0].scrollHeight) - self.$cont.height();
        },
        getMaxSliderPosition() {
            // 滑块可滚动的距离
            var self = this;
            return self.$bar.height() - self.$slider.height();
        },
        scrollTo(positionVal) {
            var self = this;
            self.$cont.scrollTop(positionVal);
            console.log('scrollTo', positionVal);
        },
        getSliderPosition (){
            var self = this;
            var maxSliderPosition = self.getMaxSliderPosition();

            return Math.min(maxSliderPosition, maxSliderPosition * self.$cont[0].scrollTop / self.getMaxScrollPosition());

        }
    })

    // CusScrollBar.prototype._init = function(){
    //     console.log('options');
    // }

    win.CusScrollBar = CusScrollBar;

})(window, document, jQuery);