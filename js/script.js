$(document).ready(function(){

    $(window).on("load",function() {
        $(".loader").fadeOut("1000");
    })

    var index;
    var opened;

    $(".nav__btn-menu").click(function(e){
        e.stopPropagation();
        $(".nav__container--menu").slideToggle(300);
    })

    $(document).click(function(){
        $(".nav__container--menu").slideUp(300);
    })

    $(document).scroll(function(){
        $(".nav__container--menu").slideUp(300);
    })

    $(".nav__container").children().click(function(){
        index= $(this).index();
        if (opened>=0){
            if (opened==index){
                return;
            }
            else{
                $(".nav__container--menu").slideUp(300);
                $("section").eq(opened).fadeOut(300, function(){
                $("section").eq(index).fadeIn(300);
                opened= index;
                });
            }
        }
        else{
            $(".nav__container--menu").slideUp(300);
            $(".header").slideUp(300, function(){
                $(".nav").css({
                        "position": "fixed",
                        "top": "0"
                });
                $("section").eq(index).fadeIn(800);
                opened= index;
                $(".nav").addClass("nav--animation");
                $(".name").addClass("name--animation");
                $(".btn-linkedin").addClass("btn-linkedin--animation");
                $(".btn-mail").addClass("btn-mail--animation");
            })
        }
    })

    $(".btn-mail").click(function(){
        $(this).find(".mail__head").addClass("mail-animation");
        $(this).find(".mail__sheet").addClass("sheet-animation");
        setTimeout(function(){
            window.location.href="mailto:mfs97@hotmail.fr";
        }, 500);
        setTimeout(function(){
            $(".mail__head").removeClass("mail-animation");
            $(".mail__sheet").removeClass("sheet-animation");
        }, 2500);
    })
})