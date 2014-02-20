// **********************************
// on document ready
$(document).ready(function(){


	// **********************************
	// development only start
		var random_number = Math.floor( Math.random()*15 );
		if( random_number < 5 ){
			random_number = 5
		}
		for( var i=0; i<random_number; i++ ){
			$('.article-wrapper .article:first-child').clone().appendTo('.article-wrapper');
		}

		// development test only
		$('.articles-page .article').each(function(){
			var random_height = Math.floor( Math.random()*500 );
			if( random_height < 100 ){
				random_height = 100
			}
			$(this).find('.article-image').height(random_height);
			$(this).find('.article-image').css({
				width : '100%'
			})
		});

		// generate articles tag
		$('.all-category .article .article-tags').each(function(){
			$(this).children().remove();
			var random_tags = function(){
				var random_number = Math.floor( Math.random()*4 )+1;
				if(random_number == 1){
					return '<span class="politik">POLITIK</span>'
				}else if(random_number == 2){
					return '<span class="aspirasi">ASPIRASI</span>'
				}else if(random_number == 3){
					return '<span class="supporter">SUPPORTER</span>'
				}else if(random_number == 4){
					return '<span class="survei">SURVEI</span>'
				}
			};
			$(this).append(random_tags());
		});
		$('.liga-aspirasi-page .article .article-tags, .liga-politik-page .article .article-tags, .liga-supporter-page .article .article-tags,.liga-survei-page .article .article-tags').each(function(){
			$(this).children().remove();
			var random_tags = function(){
				var random_number = Math.floor( Math.random()*4 )+1;
				if(random_number == 1){
					return '<span class="kategori-a">KATEGORI-A</span>'
				}else if(random_number == 2){
					return '<span class="kategori-b">KATEGORI-B</span>'
				}else if(random_number == 3){
					return '<span class="kategori-c">KATEGORI-C</span>'
				}else if(random_number == 4){
					return '<span class="kategori-d">KATEGORI-D</span>'
				}
			};
			$(this).append(random_tags());
		});



	// development only end
	// **********************************

	// **********************************
	// header script start
	
		// back to top button function
		$('.articles-page a.back-to-top').click(function(event){
			event.preventDefault();
			$('html, body').animate({ scrollTop: '0' });
		});

		// show and hide sidebar function
		var show_sidebar = function(){
								$('.sidebar').addClass('active');
								$('.sidebar').stop(true).animate({
									left : 0
								}, 'medium');
							};
		var hide_sidebar = function(){
								$('.sidebar').removeClass('active');
								$('.sidebar').stop(true).animate({
									left : '-250px'
								}, 'medium')
							};

		$('.sidebar-trigger').click(function(){
			var sidebar_state = $('.sidebar').hasClass('active');
			if( sidebar_state ){
				hide_sidebar();
			}else{
				show_sidebar();
			}
		});

		// show the search input text
		$('.header .search').hover(
				function(){
					$('.header .search input').stop(true).animate({
						opacity : 1
					});
				},
				function(){
					$('.header .search input').stop(true).animate({
						opacity : 0 
					});
				}
			);

	// header script end
	// **********************************


	// **********************************
	// front page script start

		// change image to background
		$('.front-page .news-boxes .news-box').each(function(){
			var background_image = $(this).find('img').attr('src');
			$(this).css({
				background : 'url('+background_image+')',
				backgroundSize : 'cover',
				backgroundPosition : 'center center'
			});
			$(this).find('img').remove();
		});

	// front page script end
	// **********************************


	// **********************************
	// article page script start 

		// articles tag span function
		$('.articles-page .article').each(function(){
			var category = $(this).find('.article-tags span').attr('class');
			$(this).addClass(category);
		});

		// article filter function
		$('.articles-tags-select a').click(function(e){
			var tag = $(this).attr('data-filter');
			$('.isotope').isotope({ filter : '.'+tag });
			return false;
		});

		// jcarousel slider
		var carousel_width = ($('.jcarousel ul li').length)*225;
		$('.jcarousel ul').css({
			width : carousel_width
		});

		$('.jcarousel').jcarousel({
	        // Configuration goes here
	    });

		$('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'
        });


        // article display function

        	// show article-display
        	var show_article_display = function(){
	        	$('.article-display').fadeIn();
        	};
        	$('.article .article-permalink').click(function(){
        		show_article_display();
        	});

	        // hide article-display
	        var close_article_display = function(){
	        	$('.article-display').fadeOut();
	        };
	        $('.article-display .close-button').click(function(){
	        	close_article_display();
	        });

	        // close article display when escape button pressed
	        $(document).keyup(function(e) {
			  if (e.keyCode == 27) { 
			  	close_article_display(); 
			  }
			});

	// article page script end
	// **********************************


	// **********************************
	// on window load
	$(window).load(function(){

		// **********************************
		// articles wrapper start
			$('.isotope').isotope({
			   animationOptions: {
			     duration: 500,
			     easing: 'linear',
			     queue: false
			   }
			});
		// articles wrapper end
		// **********************************

	});


});


