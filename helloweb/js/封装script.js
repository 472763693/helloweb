/**
 * Created by hxsd on 2016/10/12.
 */
$(function(){
    /*   banner 定位，js让父级盒子height*/
    window.onresize=function(){
        $(".tabBox .banList").css("height",$(".banList li").eq(0).css("height"));
    };

    /* screen-mini  */
    $(".screen-mini .screen-nav").click(function(){
        $("#header").find(".nav").slideToggle();
    });

    //header-nav-sub-menu-animate
    $(".nav .has-sub").each(function(i){
        $(this).hover(
            function(){
                /*  $(".has-sub ").eq(i).find(".sub-menu .menu-item")*/
                var timer=null;
                var index=2;
                clearInterval(timer);
                function overFn(){
                    if(index>=0){
                        $(".has-sub ").eq(i).find(".sub-menu .menu-item").eq(index).addClass("is-show");
                        index--;
                    }else {
                        clearInterval(timer);
                    }
                }
                timer=setInterval(overFn,100);
            },
            function(){
                var timer=null;
                var index=2;
                clearInterval(timer);
                function outFn (){
                    if(index>=0){
                        $(".has-sub ").eq(i).find(".sub-menu .menu-item").eq(index).removeClass("is-show");
                        index--;
                    }
                    else {
                        clearInterval(timer);
                    }
                }
                setInterval(outFn,100);
        });
    });



    //Ajax请求

 


	/*   rollTop*/
	$(window).scroll(function(){
		var showSeaEdge=210;
		var showRollTopEdge=300;
		var docTop=$(document).scrollTop();
		
		if(docTop>showSeaEdge){
			$(".baiduSea").fadeIn();
		}else{
			$(".baiduSea").fadeOut();
		}
		if(docTop>showRollTopEdge){
			$(".rollTop").fadeIn();
		}else{
			$(".rollTop").fadeOut();
		}
	});
	$(".rollTop .backBtn").click(function(){
		$("html body").animate({"scrollTop":0},1000);
	});
	/*  close百度搜索*/
	$(".baiduSea .close-btn").click(function(){
		$(".baiduSea").remove();
	});


});