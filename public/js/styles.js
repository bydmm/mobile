!function ($) {
  $(window).on('load', function () {
		Intialize();
		//旋转重构	
		var supportsOrientationChange = "onorientationchange" in window,  
	    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";	
		if(window.addEventListener){
			window.addEventListener(orientationEvent, function(){
				Intialize();
			}, false);
		 }else{
			 window.attachEvent(orientationEvent,function(){
				 Intialize();
			 });
		 }
		
		function Intialize(){
			var width = $('.home_menu a').width();
			$('.home_menu a').animate(
				{
					'height': width + 'px',
					'line-height': width + 'px',
					'font-size': width/4 + 'px'
				},
				'100',
				'swing'
			);
		}
  });
}(window.jQuery);