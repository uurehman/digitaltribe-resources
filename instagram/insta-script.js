$(document).ready(function(){
	var images = ['#picone', '#pictwo', '#picthree', '#picfour', '#picfive'],
	parent = $('#followers');
	fadeInAndShake(['#picdigitri'],$('#digitri'));
	fadeInAndBounce(images,parent);
});
function fadeInAndBounce(images, parent){
	(function nextImage(){
		var imgs = images.slice();
		for(var i=0; i<5; i++){
			parent.append(
				$(imgs.splice(0, 1)[0]).hide().delay(1000*i+1500).fadeIn(1000).effect('bounce',{times:1},2000)
			);
		}
	})();
};
function fadeInAndShake(images, parent){
	(function nextImage(){
		var imgs = images.slice();
		for(var i=0; i<5; i++){
			parent.append(
				$(imgs.splice(0, 1)[0]).hide().delay(1000*i+500).fadeIn(1000).effect('bounce',{times:4},6200).delay(4500-(1000*i))
			);
		}
	})();
};