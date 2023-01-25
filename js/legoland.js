$(document).ready(function(){
    
    //notice
    $("#notice").hide();
    $("#notice").delay(1000).slideDown(1000);
    
    $("#notice a").click(function(){
        $("#notice").slideUp(500);
    });
    
    // login
    $("body").append("<div class='bg'></div>");
    $(".bg").fadeOut(0);
    $("#login_wrap").fadeOut(0);
    $(".login > img").click(function(){
        $(".bg").fadeIn(1000);
        $("#login_wrap").fadeIn(1000);
        return false;
    });
    $("#login_x > img").click(function(){
        $(".bg").fadeOut(1000);
        $("#login_wrap").fadeOut(1000);
        return false;
    });

    $("#login_wrap, .bg, #join").mousewheel(function(e,delta){
        var n1 = 1;
        if(n1 == 1){
            return false;
        }
    });

    // join
    $("#join").fadeOut(0);
    $(".e_join_btn").click(function(){
        $(".bg").fadeIn(1000);
        $("#join").fadeIn(1000);
        $("#login_wrap").fadeOut(1000);
        $(".all_agree").fadeOut(0);
        return false;
    });
    $("#join_x > img").click(function(){
        $(".bg").fadeOut(1000);
        $("#join").fadeOut(1000);
        return false;
    });

    $("#all_chk1").change(function(){ 
        var all_chk=$("#all_chk1").prop("checked");
        if(all_chk==true){
            $("#join_chk1,#join_chk2,#join_chk3,#join_chk4,#join_chk5").prop("checked",true);
            $(".type").addClass("checked");
        }else{
            $("#join_chk1,#join_chk2,#join_chk3,#join_chk4,#join_chk5").prop("checked",false);
            $(".type").removeClass("checked");
        }
    });

    $("#join_chk1,#join_chk2,#join_chk3,#join_chk4,#join_chk5").change(function(){
        var a1 = $("#join_chk1").prop("checked");
        var b1 = $("#join_chk2").prop("checked");
        var c1 = $("#join_chk3").prop("checked");
        var d1 = $("#join_chk4").prop("checked");
        var e1 = $("#join_chk5").prop("checked");
        if(a1==true && b1==true && c1==true && d1==true && e1==true){
            $("#chk_wrap2 input").prop("checked",true);
            $(".type").addClass("checked")
        }else{
            $("#chk_wrap2 input").prop("checked",false);
            $(".type").removeClass("checked");
        }
    });

    $("#membership_wrap,.all_agree").fadeOut(0);
    $("#join_next").click(function(){
        var a = $("#join_chk1").prop("checked");
        var b = $("#join_chk2").prop("checked");
        var c = $("#join_chk3").prop("checked");
        if(a == true && b == true && c ==  true){
            $("#membership_wrap").fadeIn(1000);
            $("#join").fadeOut(1000);
            return false;
        }
        $(".all_agree").fadeIn(1000);
    });

    // join2
    $("#id_wrap,#pwd_wrap1,#pwd_wrap2").css("color","white");
    $(".u_id").focus(function(){
        $("#id_wrap").css("color","red");
    }).blur(function(){
        $("#id_wrap").css("color","white");
    });

    $(".u_pwd1").focus(function(){
        $("#pwd_wrap1").css("color","red");
    }).blur(function(){
        $("#pwd_wrap1").css("color","white");
    });

    $(".u_pwd2").focus(function(){
        $("#pwd_wrap2").css("color","red");
    }).blur(function(){
        $("#pwd_wrap2").css("color","white");
    });


    $("#join2_x > img").click(function(){
        $(".bg").fadeOut(1000);
        $("#membership_wrap").fadeOut(1000);
        return false;
    });

    // 메뉴 이미지, x 이미지 누를 때
    $(".quick_m4").fadeOut(0);
    $(".quick_m3 > a:last > img").click(function(){
        $(".quick_m4").fadeIn(1000);
        return false;
    });
    $(".quick_m4 > p > img").click(function(){
        $(".quick_m4").fadeOut(1000);
        return false;
    });

    // 소메뉴 누를 때
    $("#menu2 > ul > li > ul:not(:first)").hide();
    $("#menu2 > ul > li > a:first").addClass("sel2");
    $("#menu2 > ul > li > a").click(function(){
        $("#menu2 > ul > li > a").removeClass("sel2");
        $(this).addClass("sel2");
        if($(this).next().css("display")=="none"){
            $("#menu2 > ul > li > .sub").slideUp();
        }
        var n2=$(this).attr("data-menu");
        $("#menu2 > ul > li > .sub"+n2).slideDown();
        return false;
    });
        $("#menu2 > ul > li > ul > li > ul").slideUp(0);
        $("#menu2 > ul > li > ul > li > a").click(function(){
            $(this).next().slideDown();
            $(this).css("font-weight","bold");
    });

    // 마우스휠
    $("#top3_attraction2").on("mousewheel",function(event,delta){
        if(delta > 0){
            $("#top3_attraction2").scrollTop($("#top3_attraction2").scrollTop()+-300);
        }else{ 
            $("#top3_attraction2").scrollTop($("#top3_attraction2").scrollTop()+300);
        }
        return false; 
    });

    // 상단메뉴이동
    $(".active").click(function(){ //.trade_in 클래스 이름만 변경하면 됨
        $("html, body").animate({
        scrollTop: $( $.attr(this, "href") ).offset().top
        }, 700);
        return false;
        });

    // 위로가기 버튼
    $(".top_btn").click(function(){
        $("html,body").stop().animate({scrollTop:0},500)
    });
    $(".top_btn").hide();
    
    // 빠른 이동 메뉴
    $(window).scroll(function(){
        $(".txt").text(parseInt($(this).scrollTop())); //임시코드
        // 위로가기 버튼
        if($(this).scrollTop() > 970){
            $("#quick_m5").addClass("fixed1");
            $(".top_btn").show();
            // $(".quick_m6_1 a").addClass("active");
        }else{
            $("#quick_m5").removeClass("fixed1");
            $(".top_btn").hide();
        };
        
        var offset1=$("#top3_attraction").offset().top;
        var offset2=$("#legoland_map").offset().top;
        var offset3=$("#ticket_promotion1").offset().top;
        var offset4=$("#event_all").offset().top;
        var offset5=$("#hotel_all").offset().top;

        var st=$(window).scrollTop();
        st+=100

        $(".quick_m6 li a").removeClass("active"); //공통

            if(st < offset2){ //1페이지
                   $(".quick_m6_1 a").addClass("active");
               }else if(st >= offset2 && st < offset3){ //2페이지
                   $(".quick_m6_2 a").addClass("active");
               }else if(st >= offset3 && st < offset4){ //3페이지
                   $(".quick_m6_3 a").addClass("active");
               }else if(st >= offset4 && st < offset5){ //4페이지
                   $(".quick_m6_4 a").addClass("active");
               }else{ //5페이지
                   $(".quick_m6_5 a").addClass("active");
               }
               return false;
     }); //scroll

    // 탑3 영상에 더보기이미지
    $(".plus_icon2").hide();
    $(".boarding_v1").hover(function(){
        $(".plus_icon2").show();
    },function(){
        $(".plus_icon2").hide();
    });

    // 탑3 영상 스크롤 자동플레이
    var top_r=$("#dark_ride > #v_txt > .boarding_v1 > video").get(0);
    var top_d=$("#the_dragon > #v_txt2 > .boarding_v1 > video").get(0);
    var top_w=$("#wave_racers > #v_txt3 > .boarding_v1 > video").get(0);
        $("#top3_attraction2").scroll(function(){
            var scroll=$("#top3_attraction2").scrollTop();
            $(".txt").text( parseInt($(this).scrollTop() )); //임시출력
            if(scroll>=900 && scroll<=1500){ //301~1500
                top_r.play();
            }else if(scroll>=3000 && scroll<=3600){
                top_d.play();
            }else if(scroll>=5064 && scroll<=5375){
                top_w.play();
            }else{
                top_r.pause(); 
                top_d.pause(); 
                top_w.pause(); 
            };
        });

    // 파크맵
    $("#map_txt > div:not(:nth-child(4))").fadeOut();
    $("#map_btn > span").click(function(){
        var n=$(this).attr("data-value");
        $("#map_txt > div").fadeOut(0);
        $("#map_txt .se"+n).fadeIn(1500);
        $("#map_btn > span > img").attr("src","images/map/plus_1_1.png");
        $("#map_btn > span .plus_img"+n).attr("src","images/map/plus_3_"+n+".png");
    });

    $("#map_btn > span > img").mouseover(function(){
        $(this).css("opacity","0");
    }).mouseout(function(){
        $(this).css("opacity","1");
    });

    // 티켓 프로모션
    $("#merry_t").hover(function(){
        $(this).stop().animate({"rotate":"-10deg"});
    },function(){
        $(this).stop().animate({"rotate":"0deg"});
    });
    $("#year_t").hover(function(){
        $(this).stop().animate({"rotate":"15deg"});
    },function(){
        $(this).stop().animate({"rotate":"0deg"});
    });
    $("#day_t").hover(function(){
        $(this).stop().animate({"rotate":"10deg"});
    },function(){
        $(this).stop().animate({"rotate":"0deg"});
    });
    $("#fast_t").hover(function(){
        $(this).stop().animate({"rotate":"22deg"});
    },function(){
        $(this).stop().animate({"rotate":"0deg"});
    });
    $("#kb_k").hover(function(){
        $(this).stop().animate({"rotate":"-7deg"});
    },function(){
        $(this).stop().animate({"rotate":"0deg"});
    });

    
    // 지금 레고랜드는?
    var li_w = $(".event li").width();
    var w = li_w * $(".event li").length+"px";
    $(".event").css("width",w);
    $(".event li:last").prependTo(".event");
    $(".event").css("margin-left", "-400px");

    $(".event_prev").click(function(){
        $(".event:not(:animated)")
        .animate({marginLeft:parseInt($(".event")
        .css("margin-left"))-400+"px"},"slow","swing",function(){
            $(".event li:first").appendTo(".event");
            $(".event").css("margin-left", "-400px");
        });
    });

    $(".event_next").click(function(){ 
        $(".event:not(:animated)")
        .animate({marginLeft:parseInt($(".event")
        .css("margin-left"))+400+"px"},"slow","swing",function(){
            $(".event li:last").prependTo(".event");
            $(".event").css("margin-left", "-400px");
         });
    }); 
    
    // 호텔
    $(".lego_hotel > p > a > img:not(:first)").fadeOut(0);
    $(".hotel_text > div > p:not(:first)").fadeOut(0);
    $(".lego_hotel_h > ul > li:first").css({"color":"rgb(249, 98, 43)","font-weight":'bold'});
    $(".lego_hotel_h > ul > li").click(function(){
        var hotel=$(this).attr("data-x");
        $(".lego_hotel > p > a > img, .hotel_text > div > p").fadeOut(1000);
        $(".hotel_text"+hotel).fadeIn(1000);
        $(".hotel_img"+hotel).fadeIn(1000);
        $(".lego_hotel_h > ul > li").css({"color":"#000","font-weight":'normal'});
        $(this).css({"color":"rgb(249, 98, 43)","font-weight":'bold'});
    });
});