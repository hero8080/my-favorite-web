$(function() {
	$('#title1 li').mouseover(function() {
		var liindex = $('#title1 li').index(this);

		$(this).addClass('on').siblings().removeClass('on');

		$('#product1 div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();

		var liWidth = $('#title1 li').width();
		$('#title1 p').stop(false, true).animate({
			'left': liindex * liWidth + 'px'
		}, 300);
	});


	
	
	
	$('#title2 li').mouseover(function() {
		var liindex = $('#title2 li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('#product2 div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('#title2 li').width();
		$('#title2 p').stop(false, true).animate({
			'left': liindex * liWidth + 'px'
		}, 300);
	});


});