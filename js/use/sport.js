$(function(){
		$('.header_l li').eq(0).show()
		$('.header_l li').textRotate(0)

		$.ajax({
			type:'get',
			url:'shouye.json',
			dataType:'json',
			success:function(data){
				var abl = data.ab.abl
				var abr = data.ab.abr
				var sp = data.sp
				var sc = data.sc

				$('.ab_in>div:nth-child(1) p').each(function(i){
					$(this).html(abl[i])
				})
				$('.ab_r li').each(function(i){
					$(this).css({
						'background-image':"url("+abr[i]+")",
						'background-size':'730px 100%'
					})
				})
				$('.sp_in').setImg(sp)
				$('.art_in li').each(function(i){
					var index = $(this).index()+1
					var txt = sc['t'+index]
					$(this).find('img').attr('src',txt[0])
					var a =$("<a data-title='t"+index+"' href='?"+txt[1]+"'class='link'>"+txt[1]+"</a>")
					$(this).find('p').eq(0).append(a).siblings().html(txt[2])
				})
				var link = document.querySelectorAll('.link')
				for(var i = 0 ;i<link.length;i++){
					link[i].addEventListener('click',function(e){
						e.preventDefault()
						var title = this.dataset['title']
						var val = this.innerHTML
						console.log(val)
						ajx(title)
						history.pushState(title,title,'?'+val)
					})
				}
				window.addEventListener('popstate',function(e){
					ajx(e.state)
				})
			}
		})
		
		$('.ab_r li').eq(1).css('opacity',1)
		$('.ab_r li').hover(function(){
			var index = $(this).index()
			$('.ab_r li').cwidth(index)
		},function(){
			$('.ab_r li').each(function(){
				$(this).stop().animate({width:300,opacity:0.8})
			})
			$('.ab_r li').eq(1).css('opacity',1)
		})

		$('.sp_in').hover(function(){
			$(this).css({
				'transform':'rotateX(15deg)',
				'box-shadow':'0 10px 20px #e5e5e5',
			}).find('img').css('transform','scale(1.2)')

		},function(){
			$(this).css({
				'transform':'rotateX(0deg)',
				'box-shadow':'none',
			}).find('img').css('transform','scale(1)')
		})

		function ajx(title){
			$.ajax({
					type:'get',
					url:'artical.json',
					dataType:'json',
					success:function(data){
						$('.art_r').html(data[title])
					}
				})
		}

		
	})