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
  $(".navi > li").hover(
    function(){
      $(this).find(".sub").stop().slideDown()
    },function(){
      $(this).find(".sub").stop().slideUp()
    }
  );

  /*Submenu:서브-텝메뉴
  $(".tab > button").click(function(){
    $(".tab > button").removeClass("active");// 모든 버튼요소에 active클래스 제거
    $(this).addClass("active");//클릭한 요소의 버튼에만 active 클래스 추가->하이라이트

    var now = $(this).index();//now = 클릭한 버튼에 인덱스번호 할당

    $(".tab-content").css("display","none").eq(now).css("display","block");
    //모든 콘텐츠요소 화면에서 제거클릭한 버튼과 같은 순번인 탭콘텐츠요소만 화면에 표시
   });
   */

   ///subintro: 와우 플러그 인
   new WOW().init()


   //substore


    /////////////이디야스토어 배너 자동슬라이드/////////////////////////////////////////////
    var timer = setInterval(slide,4000);//slide함수를 3초마다 실행하는 구문
    function slide(){//slide함수 생성
      var first = $("#storeBanner .imgGroup > img:first");//변수 first에 첫번째 이미지 요소를 할당
      $("#storeBanner .imgGroup").animate({"left":"-1920px"},
      1000,
      function(){//콜백함수로 왼쪽으로 이동한 후 첫번째 요소를 마지막위치로 이동시키고 left값을 0으로 최기화
        $(this).append(first).css("left",0);
      })
    };


    //이디야스토어 #new 버튼 슬라이드
    
    $("#new .prev").click(function(){
      if($("#new .view .boxGroup").is(":animated"))return false;

      var last = $("#new .view .boxGroup > .box").last();
      $("#new .view .boxGroup").prepend(last).css("left","-425px").animate({"left":"0px"},700);
    });


    $("#new .next").click(function(){
      if($("#new .view .boxGroup").is(":animated"))return false;
      var first = $("#new .view .boxGroup > .box").first();
      $("#new .view .boxGroup").animate({"left":"-425px"},700,function(){
        $(this).append(first).css("left","0px");
      });
    })
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

       //이디야스토어 #coffeeMd 버튼 슬라이드


    $("#coffeeMd .prev").click(function(){
      if($("#coffeeMd .view .boxGroup").is(":animated"))return false;
      var last = $("#coffeeMd .view .boxGroup > .box").last();
      $("#coffeeMd .view .boxGroup").prepend(last).css("left","-425px").animate({"left":"0px"},700);
    });


    $("#coffeeMd .next").click(function(){
      if($("#coffeeMd .view .boxGroup").is(":animated"))return false;
      var first = $("#coffeeMd .view .boxGroup > .box").first();
      $("#coffeeMd .view .boxGroup").animate({"left":"-425px"},700,function(){
        $(this).append(first).css("left","0px");
      });
    })

    //이디야스토어 #ediyaMd 버튼 슬라이드
    

    $("#ediyaMd .prev").click(function(){
      if($("#ediyaMd .view .boxGroup").is(":animated"))return false;
      var last = $("#ediyaMd .view .boxGroup > .box").last();
      $("#ediyaMd .view .boxGroup").prepend(last).css("left","-425px").animate({"left":"0px"},700);
    });


    $("#ediyaMd .next").click(function(){
      if($("#ediyaMd .view .boxGroup").is(":animated"))return false;
      var first = $("#ediyaMd .view .boxGroup > .box").first();
      $("#ediyaMd .view .boxGroup").animate({"left":"-425px"},700,function(){
        $(this).append(first).css("left","0px");
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

 
///////////////////////////////////////
})