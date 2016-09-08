/**
 * Created by CORDELIA on 07-Sep-16.
 */

(function ($) {
    $('*').on('click', function () {
        var typ = $(this).prop('tagName');
        console.log(typ);
    });
})(jQuery);