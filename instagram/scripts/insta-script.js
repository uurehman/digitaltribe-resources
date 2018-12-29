
$(document).ready(function(){
	var images = ['#instaFollower1', '#instaFollower2', '#instaFollower3', '#instaFollower4', '#instaFollower5'],
	parent = $('#followers');
	fadeInAndBounceMultiple(['#picdigitri'], $('#digitri'));
	fadeInAndBounce(images, parent, 1000);
	test();
});

function fadeInAndBounce(images, parent, animTime){
	(function nextImage(){
		var imgs = images.slice();
		for(var i=0; i<5; i++){
			parent.append(
				$(imgs.splice(0, 1)[0]).hide().delay(animTime*i+1500).fadeIn(animTime).effect('bounce',{times:1},2000)
			);
		}
	})();
};

function fadeInAndBounceMultiple(images, parent){
	(function nextImage(){
		var imgs = images.slice();
		for(var i=0; i<5; i++){
			parent.append(
				$(imgs.splice(0, 1)[0]).hide().delay(1000*i+500).fadeIn(1000).effect('bounce',{times:4},6200).delay(4500-(1000*i))
			);
		}
	})();
};
function test(){
	var x = 0;
	window.onscroll = function(e) {
		
		// print "false" if direction is down and "true" if up
		if (this.oldScroll > this.scrollY) {
			$('#result').text(x += 1);
		} else {
			$('#result').text(x -= 1);
		}
		this.oldScroll = this.scrollY;
	}
}