const HomeTop = document.querySelector('#HomeFlagTop');
const HomeCenter = document.querySelector('#HomeFlagCenter');
const HomeBottom = document.querySelector('#HomeFlagBottom');
const AboutCenter = document.querySelector('#AboutFlagCenter');
const AboutBottom = document.querySelector("#AboutFlagBottom");


const myObserverHome = new IntersectionObserver( (homedetails) =>{
    homedetails.forEach(homedetail =>{
        if(homedetail.isIntersecting){
            $(".HomeLeft").html(
                "<video class='movie_zindexBack' id='myvideo' autoplay='true' muted>"+
                "<source src='src/animates/kaique_andando.mp4' type='video/mp4'>"+
                "</video>"
            );
            $(".HomeRight").removeClass('animation_opacity').addClass('animation_desopacity');
        }else{
            $(".HomeLeft").html(
                "<video class='movie_zindexFront' id='myvideo' autoplay='true' muted>"+
                "<source src='src/animates/kaique_alcapao3.mp4' type='video/mp4'>"+
                "</video>"
            );
            setTimeout(function(){
                $(".movie_zindexBack").remove();
            },200);
        }
    });
});


const myObserverDesHome = new IntersectionObserver( (deshomedetails) =>{
    deshomedetails.forEach(deshomedetail =>{
        if(deshomedetail.isIntersecting == false){
          $(".HomeRight").removeClass('animation_desopacity').addClass('animation_opacity');
        }else{
            $(".HomeRight").removeClass('animation_opacity').addClass('animation_desopacity');
        }
    });
});

const myObserverAbout = new IntersectionObserver( (aboutdetails) =>{
    console.log(aboutdetails);
    aboutdetails.forEach(aboutdetail =>{
        if(aboutdetail.isIntersecting){
            $(".AboutLeft").css('opacity','1')
            $(".AboutLeft").html(
                "<video class='movie_zindexBack' id='myvideo' autoplay='true' muted>"+
                "<source src='src/animates/kaique_cai_scanner.mp4' type='video/mp4'>"+
                "</video>"
            );
            setTimeout(function(){
                $(".AboutLeft").html('');
                $(".AboutLeft").html(
                    "<video class='movie_zindexBack' id='myvideo' autoplay='true' muted loop>"+
                    "<source src='src/animates/kaique_personagem_SendoScaneado_Final.mp4' type='video/mp4'>"+
                    "</video>"
                );
            },5000);
        }
    });
});

const myObserverAboutBot = new IntersectionObserver( (desaboutdetails) =>{
    desaboutdetails.forEach(desaboutdetail =>{
        if(desaboutdetail.isIntersecting == false){
          $(".AboutRight").removeClass('animation_desopacity').addClass('animation_opacity');
        }else{
            $(".AboutRight").removeClass('animation_opacity').addClass('animation_desopacity');
        }
    });
});

myObserverHome.observe(HomeTop);
myObserverDesHome.observe(HomeBottom);
myObserverAbout.observe(AboutBottom);
myObserverAboutBot.observe(AboutBottom);