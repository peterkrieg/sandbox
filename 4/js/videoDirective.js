angular.module('myApp')
.directive('videoHotkeys', function(){

	return {
		link: function(scope, elem, attrs){
			$('body').on('keypress', function(e){
				// to get "Raw" HTML element, not jQuery wrapped one
				var vidEl = elem[0];

				// if 'b' pressed, rewind video 5 sec
				if(e.keyCode === 98){
					vidEl.currentTime-=5;
				}
				// if 'f' key pressed, go forward 5 sec
				if(e.keyCode ===102){
					vidEl.currentTime+=5;
				}

				// spacebar pauses, or resumes video
				if(e.keyCode ===32){
					if(vidEl.paused){
						vidEl.play();
					}
					else{
						vidEl.pause();
					}
				}

			});

			// clicking on video tag pauses or resumes video
			elem.on('click', function(){
				var vidEl = elem[0];
				if(vidEl.paused){
					vidEl.play();
				}
				else{
					vidEl.pause();
				}

			});
		}

	};




});