(function($){
		$.fn.extend({
			fnout:function(n){
				var dis = $(this).width()
				$.each($(this).children(),function(){
					var r1 = Math.pow(-1,Math.round(Math.random()*10))*(Math.round(Math.random()*(1000-dis))+dis)+'px'
					var r2 = Math.pow(-1,Math.round(Math.random()*10))*(Math.round(Math.random()*(1000-dis))+dis)+'px'
					$(this).css('transform','translateX('+r1+') translateY('+r2+')')
					
				})
				
				return $(this)
			},
			fnin:function(n){
				$(this).eq(n).children().css('transform','translateX(0) translateY(0)')
				return $(this)
			},
			setfnimg:function(s){
				var mw = $(this).width()+'px'
				var mh = $(this).height()+'px'
				var w = $(this).children().width()
				var h = $(this).children().height()
				var row = $(this).height()/h
				var col = Math.floor($(this).width()/w)
				$(this).eq(s).children().css('background-size',mw+' '+mh)
				for(var i = 0;i<row;i++){
					var n = 0
					for(var k =i*col;k<i*col+col;k++){
						$(this).eq(s).children().eq(k).css('background-position',-n*w+'px'+' '+(-i*h)+'px')
						n++
					}
				}
			},
			textRotate:function(n){
				clearInterval(timer)
				var _this = this
				var timer = setInterval(function(){
					$.each(_this,function(){
						$(this).hide()
						$(this).children().css('transform','rotateX(0deg')
					})
					_this.eq(n).show()
					setTimeout(function(){
						$.each(_this.eq(n).children(),function(i,v){
						setTimeout(function(){
						$(this).css('transform','rotateX(180deg)')
					}.bind($(this)),i*60)
					})
						n++
					if(n>2){
						n = 0
					}
				},500)
				},2000)
			},
			cwidth:function(index){
				switch(index){
					case 0:
					$(this).eq(1).stop().animate({width:150,opacity:0.8})
					$(this).eq(2).stop().animate({width:150,opacity:0.8});
					break;
					case 1:
					$(this).eq(0).stop().animate({width:150,opacity:0.8})
					$(this).eq(2).stop().animate({width:150,opacity:0.8});
					break;
					case 2:
					$(this).eq(1).stop().animate({width:150,opacity:0.8})
					$(this).eq(3).stop().animate({width:150,opacity:0.8});
					break;
					case 3:
					$(this).eq(1).stop().animate({width:150,opacity:0.8})
					$(this).eq(2).stop().animate({width:150,opacity:0.8});
					break;
				}
				$(this).eq(index).stop().animate({width:599,opacity:1})
			},
			setImg:function(obj,flag){
				console.log(1)
				var _this = $(this)		
				$.each(obj,function(k,v){
					_this.eq(k).find('img').attr('src',v[0]).parent().next().html(v[1]).next().html(v[2])

				})
			},
			addLi:function(option){
				for(var s in option){
					var img = '<div><img></div>'
					var div = '<div ></div>'
					$("<li class='list_li col-lg-3 col-xs-6'>").html($("<div class='list_in'>").html(img+div+div)).appendTo($(this))
				}
			}
		})
})($)