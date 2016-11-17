/* 
   Jquery Simple Pagination,  
   Allows you to easy create paginations between divs.
   --
   Developed by Samuel Fajreldines 
*/

$.simple_pagination = function(){
	$('.pagination:not(.active)').hide();
	
	$(document).off('click','a[rel="pagination"]');
	$(document).on('click','a[rel="pagination"]',function(){
		var 
			id 	 = $(this).data('id'),
			page = $(this).data('page');
			
		$('.pagination[data-id="'+id+'"].active').removeClass('active');
		$('.pagination[data-id="'+id+'"]:not([data-page="'+page+'"])').fadeOut('slow',function(){
			$('.pagination[data-id="'+id+'"][data-page="'+page+'"]').fadeIn('slow').addClass('active');
		});
	});
}