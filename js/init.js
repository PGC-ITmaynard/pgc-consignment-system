
(function($){
	$(document).ready(function(e) {
		$('#my-tap-menu').on('click', function(e){
			$('#tap-target').tapTarget('open');
		});
	});

    $('.dropdown-button').dropdown('open');

})(jQuery);


$(document).ready(function() {
  $('select').material_select();
});
        
  $(".button-collapse").sideNav();