$(document).ready(function(){
    // var bodyWidth = $('body').width();
    // var bglines = $('.bg-lines');
    // addPadding($(bglines));
    new WOW().init();      

    // $(window).resize(function(){
        // addPadding($(bglines));
    // });
    jssor_1_slider_init();
});

function addPadding($divClass) {
    $bodyWidth = $('body').width();
    $padLeft = 0;
    if ($bodyWidth > 1280) {
        $padLeft = ($bodyWidth - 1280);
        $divClass.css("margin-left", $padLeft);
    }
}



// PHONE SLIDER
jssor_1_slider_init = function() {
    var jssor_1_SlideshowTransitions = [
      {$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}}
    ];
    var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    /*#region responsive code begin*/
    var MAX_WIDTH = 980;
    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;
        if (containerWidth) {
            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};
