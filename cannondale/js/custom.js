$(function(){
 var count = 0;
  $(".gnb > li").click(function(e){
    e.preventDefault();//li요소에 있는 a요소의 링크기능을 막아줍니다./*a태그 link기능 끊기: 안하면 메뉴버튼 눌렀을때 맨위페이지로 이동함 */
    var ht = $(window).height();  //변수 ht에 브라우저 높이값을 저장 
    var i = $(this).index();//변수 i에 클릭한 li의 순번을 저장
    count = i; //페이지의 순번을 i값에 저장
    var nowTop = count*ht;//브라우저의 높이값 * 박스의 순서값은 현재 박스의 스크롤 위치값과 동일
    activation();//메뉴를 활성화하는 함수실행


    //주메뉴 클릭시 자동으로 상하스크롤 설정////////////
    //브라우저의 스크롤 위치를 nowTop위치로 부드럽게 이동시킵니다.
    $("html, body").stop().animate({"scrollTop":nowTop},500);
  });
    //화면이 스크롤 될때마다 현재 영역에 해당하는 메뉴 활성화
    function activation(){//activation함수 생성
      $(".gnb > li").removeClass("on").eq(count).addClass("on");
      //모든 메뉴에 on클래스를 제거하고 count변수의 순번과 같은 메뉴요소만 
    }
    //페이지가 열리면 첫번째 메뉴의 클릭이벤트를 강제실행
    $(".gnb >li:first").trigger("click")

    //마우스 휠에 따라 화면 스크롤시키기
    var secMax = $("section").length;//section의 갯수를 변수에 할당

    $(".contain").on("wheel",function(e){
      var ht = $(window).height();//이벤트가 발생할때 마다 브라우저의 높이값을 다시 구해서 변수에 할당
       //html과body에 애니메이트기능이 적용중일때 함수내부의 코드를 실행하지 않음
      if($("html,body").is(":animated")){return false}
      // 휠이벤트갸 발생했을때 마우스휠을 위로 올리면 이벤트 객체의 originalEvent프로퍼티의 deltaY값이 -100으로 반환되고 마우스휠을 이래로 내리면 deltaY값이 100값으로 반환됨
      //이벤트 객체의 originalEvent프로퍼티의 deltaY값=
      //console.log(e.originalEvent.deltaY)
      e.preventDefault();/*브라우저기능을 차단, 스크립트와 브라우저 간의 휠기능 간섭을 막아줌 */
      var delta = e.originalEvent.deltaY;//deltaY값을 dleta변수에 할당
      //마우스 휠을 위로 올렸을 경우
      if(delta < 1 && count >=1){
        count--;//count변수값에 1을 빼서 다시 count변수에 할당
        //html과 body요소의 scrollTop위치를 ht*count로 0.5초 동안 이동시킴
        $("html, body").animate({"scrollTop":ht*count},500);
      }else if(delta > 1 && count < secMax-1){//마우스 휠을 아래로 내렸을때
        count++;//count변수값에 1을 더해서 다시 count변수에 할당
        $("html,body").animate({"scrollTop":ht*count},500);
      }
      activation();//휠을 돌림과 동시에 메뉴활성화
    });

////slick
    $('.slick').slick();

    $('#intro_slider').slick({
      slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
      infinite : true, 	//무한 반복 옵션	 
      slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
      speed : 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
      dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 5500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover :false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,		// 세로 방향 슬라이드 옵션
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
      nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
      dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
      draggable : true, 	//드래그 가능 여부 
    });

    $('#c04_slider').slick({
      slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
      infinite : true, 	//무한 반복 옵션	 
      slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
      speed : 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
      dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 5500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover : false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,		// 세로 방향 슬라이드 옵션
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
      nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
      dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
      draggable : true, 	//드래그 가능 여부 
    });

    $('#typo_slider').slick({
      slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
      infinite : true, 	//무한 반복 옵션	 
      slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
      speed : 1000,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
      dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 5500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover :false,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,		// 세로 방향 슬라이드 옵션
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
      nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
      dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
      draggable : true, 	//드래그 가능 여부 
    });

    AOS.init(); 

});//document.ready