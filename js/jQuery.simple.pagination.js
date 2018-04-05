/* 
   Jquery Simple Pagination,  
   Allows you to easily create paginations between divs.
   --
   Developed by Samuel Fajreldines - http://samuelfaj.github.io
*/

$.pagination = function(){
		var config = {
			"[sp]": {
				addClass: true,			// Add a class to the active sp?
				className: 'active'		// What class to add?
			},
			"[sp-link]": {
				addClass: true,			// Add a class to the active sp-link?
				className: 'active'		// What class to add?
			}
		}
	
		$.each(['[sp]','[sp-link]'],function(a,b){		
			$(b).each(function(){
				var _this  = b + '[data-id="'+ $(this).data('id') +'"]';
				var _class = (config[b]['addClass']) ? config[b]['className'] : '';
				
				if( $(_this + '[sp-active]').length > 0) return true;
				
				$(_this + ':first-of-type').attr('sp-active','true').addClass(_class);
			});
		});
	
		$('[sp]:not([sp-active])').hide();

		$(document)
		  .off('click', '[sp-link]')
		  .on('click' , '[sp-link]', function(){
			  var selector = {
				  id:   '[data-id="'   + $(this).data('id')   + '"]',
				  page: '[data-page="' + $(this).data('page') + '"]'
			  };
			  
			  var _this  = $(this);
			  var _not   = '[sp-link]' + selector.id + ':not(' + selector.page + ')';
			  			  
			  _this.attr('sp-active','true');
			  $(_not + '[sp-active]').removeAttr('sp-active');
				
			  if(config['[sp]']['addClass']){
				_this.addClass(config['[sp]']['className']);
				$(_not).removeClass(config['[sp]']['className']);
			  }
			  
			  var _pages = '[sp]' + selector.id;
			  var _not   = ':not('+ selector.page +')';
			  var _class = (config['[sp-link]']['addClass']) ? config['[sp-link]']['className'] : '';
				
			  $(_pages + '[sp-active]').removeAttr('sp-active');
			  $(_pages + _not).removeClass(config['[sp-link]']['className']);
			  
			  $(_pages + _not + ':visible').fadeOut('fast', function(){
				  $(_pages + selector.page).fadeIn('slow').attr('sp-active','true').addClass(_class);
			  });
		  });
	};