$(function(){
	$('.pic li').each(function(){
			for(var i = 0 ;i<12;i++){
				$(this).append($("<div class='col-lg-3'>"))
			}
		})
		$('.pic li').each(function(i){
		$('.pic li').fnout(i)
	})

	$('.pic li').eq(0).children().css('transform','translateX(0) translateY(0)')

	var n = 0
	$('.rbtn').click(function(){
		n++
		if(n>2){
			n = 0
		}
		$('.pic li').each(function(i){
			$('.pic li').fnout(i)
		})
		$('.pic li').fnin(n)
		$('.pic li').setfnimg(n)
	})

	$('.lbtn').click(function(){
		n--
		if(n<0){
			n = 2
		}
		$('.pic li').each(function(i){
			$('.pic li').fnout(i)
		})
		$('.pic li').fnin(n)
		$('.pic li').setfnimg(n)
	})

	window.onresize=function(){
		$.each($('.pic li'),function(i){
		$('.pic li').setfnimg(i)
	})
	}

	$.each($('.pic li'),function(i){
		$('.pic li').setfnimg(i)
	})
	// var timer = null
	// $('.pic').hover(function(){
	// 	clearInterval(timer)
		
	// },function(){
	// 	clearInterval(timer)
	// 	timer = setInterval(function(){
	// 		n++
	// 	if(n>2){
	// 		n = 0
	// 	}
	// 	$('.pic li').each(function(i){
	// 		$('.pic li').fnout(i)
	// 	})
	// 	$('.pic li').fnin(n)
	// 	$('.pic li').setfnimg(n)
	// 	},6000)
	// })
})
