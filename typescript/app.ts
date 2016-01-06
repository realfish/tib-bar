(function() {
	'use strict';

	var $yellow = document.getElementById('yellow');
	
	$yellow.classList.add('animate');
	
	setTimeout(function() {
		$yellow.classList.remove('animate');
		
		setTimeout(function() {
			$yellow.classList.add('animate');
		}, 5);
	}, 4005);

})();
