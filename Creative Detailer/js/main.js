$(document).ready(function() {
	document.body.addEventListener('touchmove', function(e) {
	  // This prevents native scrolling from happening.
	  e.preventDefault();
	}, false);
	
	
	/*COVER*/
	$('.start').live('click',function() {
		$('#p0').fadeOut(500);
		$('#p1').fadeIn(1000,function() {
			document.getElementById('s1').play();
			$('#p1 a').delay(7000).fadeIn(500);
		});
		
	});
	
	$('#p1 .prev').live('click',function() {
		$('#p0').fadeIn(500,function() {
			$('#p0').removeAttr('style');
		});
		$('#p1,#p1 a').removeAttr('style');
	});
	
	$('#p1 .play').live('click',function() {
		document.getElementById('s1').play();
		$('#p1 a').fadeOut(500).delay(7000).fadeIn(500);
	});
	
	$('#p1 .next').live('click',function() {
		$('#p1').fadeOut(500);
		$('.v1').fadeIn(1000,function() {
			document.getElementById('s2').play();
			p3();
		});
		$('#p1 a').removeAttr('style');
		
	});
	
	
	
	function p3() {
		$('#p3').delay(1000).fadeIn(500,function() {
			p4();
		});
	}
	function p4() {
		$('#p3').delay(1000).fadeOut(800);
		$('#p4').delay(1000).fadeIn(500);
		$('.v1 a').delay(1500).fadeIn(500);
	}
	
	$('.v1 .prev').live('click',function() {
		$('#p1').fadeIn(500,function() {
			document.getElementById('s1').play();
			$('#p1 a').delay(7000).fadeIn(500);
			$('#p1').removeAttr('style');
			$('.v1 a,.v1 img').removeAttr('style');
		});
		$('.v1').removeAttr('style');
	});
	
	$('.v1 .play').live('click',function() {
		$('.v1 img').removeAttr('style');
		$('.v1 a').fadeOut(300).delay(3500).fadeIn(500);
		document.getElementById('s2').play();
		p3();
	});
	
	$('.v1 .next').live('click',function() {
		$('.v1').fadeOut(500);
		$('.v2').fadeIn(1000,function() {
			setTimeout(function() {document.getElementById('s3').play();}, 800);
			p5();
		});
		$('.v1 a').removeAttr('style');
		
	});
	function p5() {
		$('#p5').delay(1000).fadeOut(500);
		$('#p6').delay(1000).fadeIn(500,function() {
			p6();
		});
	}
	function p6() {
		$('.v1 img').removeAttr('style');
		$('#p6').delay(1000).fadeOut(500);
		$('#p7').delay(1000).fadeIn(500,function() {
			$('.v2 a').delay(500).fadeIn(500);
		});
	}
	$('.v2 .prev').live('click',function() {
		$('.v1').fadeIn(500,function() {
			document.getElementById('s2').play();
			p3();
			$('.v2 img').removeAttr('style');
		});
		$('.v2,.v2 a').removeAttr('style');
	});
	
	$('.v2 .play').live('click',function() {
		$('.v2 img').removeAttr('style');
		$('.v2 a').fadeOut(300).delay(3500).fadeIn(500);
		setTimeout(function() {document.getElementById('s3').play();}, 800);
		p5();
	});
	
	$('.v2 .next').live('click',function() {
		$('.v2').fadeOut(500);
		$('#p8').fadeIn(1000,function() {
			document.getElementById('s4').play();
			$('#p8 a').delay(7500).fadeIn(500,function() {
				$('.v2 img').removeAttr('style');
			});
		});
		$('.v2 a').removeAttr('style');
		
	});
	
	$('#p8 .prev').live('click',function() {
		$('.v2').fadeIn(500,function() {
			document.getElementById('s3').play();
			p5();
		});
		$('#p8,#p8 a').removeAttr('style');
	});
	$('#p8 .play').live('click',function() {
		document.getElementById('s4').play();
		$('#p8 a').fadeOut(300).delay(6500).fadeIn(500);
	});
	
	$('#p8 .next').live('click',function() {
		$('#p8').fadeOut(500);
		$('#p9').fadeIn(1000,function() {
			document.getElementById('s5').play();
			$('#p9 a').delay(7500).fadeIn(500);
			setTimeout(function() {$('.pyramid').fadeIn(800);}, 6000);
		});
		$('#p8,#p8 a').removeAttr('style');
	});
	$('#p9 .prev').live('click',function() {
		$('#p8').fadeIn(500,function() {
			document.getElementById('s4').play();
			$('#p8 a').delay(7500).fadeIn(500);
		});
		$('#p9,#p9 a,.pyramid').removeAttr('style');
	});
	$('#p9 .play').live('click',function() {
		document.getElementById('s5').play();
		$('#p9 a').fadeOut(300).delay(7500).fadeIn(500);
		$('.pyramid').fadeOut(100,function() {
			setTimeout(function() {$('.pyramid').fadeIn(800);}, 5700);
		});
	});
	$('#p9 .next').live('click',function() {
		$('#p9').fadeOut(500);
		$('#p10').fadeIn(1000,function() {
			$('#p10 a').fadeIn(500);
		});
		$('#p9,#p9 a,.pyramid').removeAttr('style');
	});
	
	$('#p10 .prev').live('click',function() {
		$('#p9').fadeIn(500,function() {
			document.getElementById('s5').play();
			$('#p9 a').delay(7500).fadeIn(500);
		});
		$('#p10,#p10 a').removeAttr('style');
	});
	$('#p10 .home').live('click',function() {
		$('div,a,img').removeAttr('style');
	});
	
});