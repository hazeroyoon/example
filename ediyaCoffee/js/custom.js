$(function(){//doucument.ready

  //home:비니스트 닷버튼
  $("#beanist .dot li").click(function(){
    $("#beanist .dot li").removeClass("on");
    $(this).addClass("on");
    var i =$(this).index();
    var pos = i*-1280;
    $("#beanist .contain").stop().animate({"left":pos+"px"},500);
  });

  //header:네비다운 메뉴
  /*$(".navi > li").hover(
    function(){
      $(this).find(".sub").stop().slideDown()
    },function(){
      $(this).find(".sub").stop().slideUp()
    }
  );*/

  $(".navi > li").mouseover(function(){
    //이벤트가 발생된 li요소의 자식요소인 .sub를 slideDown메서드로 펼쳐줍니다.
    $(this).find(".sub").stop().slideDown("slow");
  });
  //주메뉴에서 마우스가 떠나면
  $(".navi > li").mouseout(function(){
    //이벤트가 발생된 li요소의 자식인 .sub를 slideUp메서드로 접어줍니다.
    $(this).find(".sub").stop().slideUp("slow");
  });



  //substore:banner자동슬라이드
  var timer = setInterval(slide,4000);//slide함수를 3초마다 실행하는 구문
  function slide(){//slide함수 생성
  var first = $("#storeBanner .imgGroup > img:first");//변수 first에 첫번째 이미지 요소를 할당
  $("#storeBanner .imgGroup").animate({"left":"-1920px"},
  1000,
  function(){//콜백함수로 왼쪽으로 이동한 후 첫번째 요소를 마지막위치로 이동시키고 left값을 0으로 최기화
  $(this).append(first).css("left",0);
  })
  };


  //substore:#new 버튼 슬라이드
  $("#new .prev").click(function(){
   if($("#new .view .boxGroup").is(":animated"))return false;
   var last = $("#new .view .boxGroup > .box").last();
   $("#new .view .boxGroup").prepend(last).css("left","-850px").animate({"left":"-425px"},700);
   });


  $("#new .next").click(function(){
   if($("#new .view .boxGroup").is(":animated"))return false;
   var first = $("#new .view .boxGroup > .box").first();
   $("#new .view .boxGroup").animate({"left":"-850px"},700,function(){
   $(this).append(first).css("left","-425px");
   });
   })

   //substore:#coffeeMd 버튼 슬라이드
   $("#coffeeMd .prev").click(function(){
    if($("#coffeeMd .view .boxGroup").is(":animated"))return false;
    var last = $("#coffeeMd .view .boxGroup > .box").last();
    $("#coffeeMd .view .boxGroup").prepend(last).css("left","-850px").animate({"left":"-425px"},700);
   });


    $("#coffeeMd .next").click(function(){
     if($("#coffeeMd .view .boxGroup").is(":animated"))return false;
     var first = $("#coffeeMd .view .boxGroup > .box").first();
     $("#coffeeMd .view .boxGroup").animate({"left":"-850px"},700,function(){
     $(this).append(first).css("left","-425px");
    });
    })
    
    //subsotr:#ediyaMd 버튼 슬라이드
    $("#ediyaMd .prev").click(function(){
      if($("#ediyaMd .view .boxGroup").is(":animated"))return false;
      var last = $("#ediyaMd .view .boxGroup > .box").last();
      $("#ediyaMd .view .boxGroup").prepend(last).css("left","-850px").animate({"left":"-425px"},700);
    });


    $("#ediyaMd .next").click(function(){
      if($("#ediyaMd .view .boxGroup").is(":animated"))return false;
      var first = $("#ediyaMd .view .boxGroup > .box").first();
      $("#ediyaMd .view .boxGroup").animate({"left":"-850px"},700,function(){
      $(this).append(first).css("left","-425px");
      });
    })


     /*반응형_메뉴페이지_메뉴버튼클릭시*/
     $(".toggleBtn").click(function(){
      //.gnb요소와 .icon요소에 active클래스를 추가 또는 제거
      $(".gnb, .icon").toggleClass("active");
     });

    //브라우저 크기가 640px이상일때 gnb와 icon의 active 클래스를 제거합니다
     $(window).resize(function(){//브라우저 크기를 조절했을때
      var winWd = $(window).width();//브라우저 넓이를 구하여 winWd변수에 할당
      console.log(winWd)
      if(winWd > 680){//브라우저의 넓이가 640이상일때 gnb와 icon에 active클래스를 제거
      $(".gnb, .icon").removeClass("active");
      }
     })

    //top버튼
    $(window).on("scroll",function(){
      //브라우저에서 마우스 스크롤 이벤트가 발생했을때
      var a = $(window).scrollTop();
      //변수 a에 현재 스크롤한 만큼의 거리를 저장
      console.log(a);
      if (a > 20) {
            $("#top").css({"display":"block"});
      //변수 a의 값이 20보다 크면 block
        } else {
            $("#top").css({"display":"none"});
      //변수 a의 값이 20보다 크면 none
        }
    });
    $("#top").click(function(){
      //button태그를 클릭했을때
      $("html,body").animate({"scrollTop":"0"});
      //페이지 상단으로 animate효과 적용	
    });

    //web버튼
    $(window).on("scroll",function(){
      //브라우저에서 마우스 스크롤 이벤트가 발생했을때
      var a = $(window).scrollTop();
      //변수 a에 현재 스크롤한 만큼의 거리를 저장
      console.log(a);
      if (a > 20) {
            $("#web").css({"display":"block"});
      //변수 a의 값이 20보다 크면 block
        } else {
            $("#web").css({"display":"none"});
      //변수 a의 값이 20보다 크면 none
        }
    });

 
//////////////process-publishing-rolling_wrap/////////////////////////

var banner_left = 0;
var img_cnt = 0;
var first=1;
var last;
var interval;

$(document).ready(function() {
	$(".rolling_wrap a").each(function() {
		$(this).css("left", banner_left);
		banner_left += $(this).width()+5;
		$(this).attr("id", "content"+(++img_cnt));
	});

	last = img_cnt;
	startAction();

});

function startAction() {
	interval = setInterval(function() {
		$(".rolling_wrap a").each(function() {
			$(this).css("left", $(this).position().left-1);
		});

		var first_content = $("#content"+first);
		var last_content = $("#content"+last);

		if(first_content.position().left < "-"+$(first_content).width()) {
			first_content.css("left", last_content.position().left+last_content.width()+5);
			first++;
			last++;
			if(last > img_cnt) { last = 1;}
			if(first > img_cnt) {first = 1;}
		}
	}, 15);
}

function stopAction() {
	clearInterval(interval);
}

})



/*Submenu:서브-텝메뉴
  $(".tab > button").click(function(){
    $(".tab > button").removeClass("active");// 모든 버튼요소에 active클래스 제거
    $(this).addClass("active");//클릭한 요소의 버튼에만 active 클래스 추가->하이라이트

    var now = $(this).index();//now = 클릭한 버튼에 인덱스번호 할당

    $(".tab-content").css("display","none").eq(now).css("display","block");
    //모든 콘텐츠요소 화면에서 제거클릭한 버튼과 같은 순번인 탭콘텐츠요소만 화면에 표시
   });
   */


/*
    function leftSlide(){//leftSlide 함수 생성
      var last = $("#new .view .boxGroup > .box").last();
        $("#new .view .boxGroup").animate({"left":"0"},700,function(){
          $(this).prepend(last).css("left","-425px");
        })
      }

     // 자동슬라이드
      var timer = setInterval(leftSlide,4000);
      //leftSlide함수를 4초에 한번씩 반복실행

      $("#product .view").hover(
        function(){//마우스오버시lo
         clearInterval(timer);//timer변수에 할당한 setInterval함수를 종료하여 자동슬라이드를 종료합니다.
        },
        function(){//마우스아웃시
          timer = setInterval(leftSlide,4000);
          //자동슬라이드를 다시 timer변수에 할당합니다.
        }
      )*/