$(document).ready(function(){
    var bglines = $('.bg-lines');
    addPadding($(bglines));

    $(window).resize(function(){
        addPadding($(bglines));
    });
});

function addPadding($divClass) {
    var $bodyWidth = $('body').width();
    $padLeft = 0;
    if ($bodyWidth > 1280) {
        $padLeft = ($bodyWidth - 1280);
    }
    $divClass.css("margin-left", $padLeft);
    var $headerGrad = $('.give_width').width();
    $('.adapt_width').css("width", $headerGrad + 65);
    console.log("Body width: " + $bodyWidth + ", Header-Grad: " + $headerGrad);
}