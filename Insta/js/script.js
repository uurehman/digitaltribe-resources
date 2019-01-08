$(document).ready(function(){
    // var bodyWidth = $('body').width();
    // var bglines = $('.bg-lines');
    // addPadding($(bglines));
    new WOW().init();      

    // $(window).resize(function(){
        // addPadding($(bglines));
    // });
});

function addPadding($divClass) {
    $bodyWidth = $('body').width();
    $padLeft = 0;
    if ($bodyWidth > 1280) {
        $padLeft = ($bodyWidth - 1280);
        $divClass.css("margin-left", $padLeft);
    }
}