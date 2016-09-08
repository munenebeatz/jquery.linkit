/*
* name: LinkedIt
* author: Brian Munene
* version: 0.1.0
* licence: MIT
* */


(function ($) {
    $.fn.linkIt = function (options) {
    //    Default Settings
        var settings = $.extend({
            href : null,
            text: null,
            target: '_self',
            alt: null
        }, options);


        //console.log(settings.var1);
    //    Validate
        if(settings.href == null){
            console.log('HREF link required');
            return this;
        }

        return this.each(function () {
            var obj = $(this);

            if(settings.text == null){
                settings.text = obj.text();
            }

            obj.wrap('<a alt="'+settings.alt+'" target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });

    }
})(jQuery);