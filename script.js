/**
 * Created by CORDELIA on 07-Sep-16.
 */

(function ($) {
    $('h2, p').on('click', function () {
       $(this).linkIt({
           href: "http://cordelia.co.ke",
           alt: "bite me"
       });
    });
})(jQuery);