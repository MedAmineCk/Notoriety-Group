var hide = !1;
$(".minu").hover(function () {
    $(this).html('<i class="fas fa-chevron-left"></i>')
}, function () {
    $(this).html('<i class="fas fa-share-alt"></i>')
}), $(".minu").on("click", function () {
    hide ? (hide = !1, $(".social-media-sticky-bar .item").not(".minu").css({
        transform: "translateX(0px)"
    }), $(this).css({
        transform: "rotateY(0deg)"
    })) : (hide = !0, $(".social-media-sticky-bar .item").not(".minu").each(function (e, i) {
        console.log(e), $(this).css({
            transform: "translateX(-38px)",
            transition: "all .4s ease-out " + .1 * e + "s"
        })
    }), $(this).css({
        transform: "rotateY(180deg)"
    }))
});
var clicked = !0;

function isEmpty() {
    var e = !0;
    return $("input").each(function () {
        "" == $(this).val() ? ($(this).parent().css({
            border: "1px solid #E91E63"
        }), e = !0) : e = !1
    }), e
}

function scrollToElem(e) {
    document.getElementById(e).scrollIntoView({
        behavior: "smooth"
    })
}
$(".menu-play").click(function () {
    clicked ? ($(".menu").css({
        right: "0px"
    }), $(".menu-play :nth-child(1)").css({
        "transform-origin": "left",
        transform: "translateX(5%) rotate(41.8deg)",
        "text-align": "center",
        transition: "all 1s"
    }), $(".menu-play :nth-child(2)").css({
        "transform-origin": "left",
        width: "1px",
        opacity: "0",
        transition: "all 1s"
    }), $(".menu-play :nth-child(3)").css({
        "transform-origin": "left",
        transform: "translateX(5%) rotate(-41.8deg)",
        "text-align": "center",
        transition: "all 1s"
    }), clicked = !1) : ($(".menu").css({
        right: "-250px"
    }), $(".menu-play :nth-child(1)").css({
        "transform-origin": "left",
        transform: "translateX(0px) rotate(0deg)",
        transition: "all 1s"
    }), $(".menu-play :nth-child(2)").css({
        "transform-origin": "right",
        width: "100%",
        opacity: "1",
        transition: "all 1s"
    }), $(".menu-play :nth-child(3)").css({
        "transform-origin": "left",
        transform: "translateX(0px) rotate(0deg)",
        transition: "all 1s"
    }), clicked = !0)
}), $(".input input").focus(function () {
    $(this).siblings("label").css({
        top: "-11px",
        "font-size": "12px",
        background: "#fff",
        padding: "2px"
    }), $(this).parent().css({
        border: "2px solid #03A9F4"
    })
}), $(".input input").focusout(function () {
    "" != $(this).val() ? ($(this).parent().css({
        border: "1px solid #ccc"
    }), $(this).siblings(".err").css({
        display: "none"
    })) : ($(this).siblings("label").css({
        left: "10px",
        top: "10px",
        "font-size": "15px"
    }), $(this).parent().css({
        border: "1px solid #ccc"
    }))
}), $(".input input").on("input", function () {
    $(this).siblings(".err").css({
        display: "none"
    })
}), $(".description textarea").focus(function () {
    $(this).siblings("label").css({
        top: "-11px",
        "font-size": "12px",
        background: "#fff",
        padding: "2px"
    }), $(this).parent().css({
        border: "2px solid #03A9F4"
    })
}), $(".description textarea").focusout(function () {
    "" != $(this).val() ? ($(this).parent().css({
        border: "1px solid #ccc"
    }), $(this).siblings(".err").css({
        display: "none"
    })) : ($(this).siblings("label").css({
        left: "10px",
        top: "10px",
        "font-size": "18px"
    }), $(this).parent().css({
        border: "1px solid #ccc"
    }))
}), $(".input input").on("input", function () {
    $(this).siblings(".err").css({
        display: "none"
    })
}), $("#demand_devis").on("click", function () {
    isEmpty()
}), $(window).on("scroll", function () {
    $(window).scrollTop() > 50 ? $("header").addClass("onScroll") : $("header").removeClass("onScroll")
});
var slider = new Array;
slider = [{
    titre: "Nos Solutions",
    sub_titre: "Appels entrants, sortants.. Nous proposons plusieurs solutions selon les besoins de nos clients "
}, {
    titre: "Outsourcing efficace",
    sub_titre: "Spécialisé dans l’externalisation, nous disposons d'une équipe d’experts prête à répondre à vos attentes"
}, {
    titre: "Satisfaction",
    sub_titre: "Parce que nous savons que la meilleure des publicités, est un client satisfait"
}, {
    titre: "Notre Mission",
    sub_titre: "Notoriety confie vos contacts à des experts et professionnels en communication et télémarketing."
}], $(".cover .tracker > div").on("click", function () {
    slidChange($(this).data("indice"))
});
let i = 0;

function slidChange(e) {
    let i = slider[e].titre,
        t = slider[e].sub_titre;
    $(".slider h2").html(i), $(".slider p").html(t)
}

function reset_animation() {
    var e = document.getElementById("animated");
    e.style.animation = "none", e.offsetHeight, e.style.animation = null
}
setInterval(function () {
    reset_animation(), slidChange(i), ++i > 3 && (i = 0)
}, 6e3);
var timing_slider = [{
        titre: "Création de Notoriety Group",
        description: "Créé par Iliass MOUSSAOUI en Mars 2016, Notoriety Group proposait à l’origine des services d’externalisation de prise de rendez-vous. La société dont le siège se situe à Oujda au MAROC comptait à l’époque 5 collaborateurs travaillant dans un seul local.",
        img_URL: "../img/time_line/2016.jpg"
    }, {
        titre: "Implantation à la Technopole-Oujda Shore",
        description: "Depuis sa création, Notoriety Group a connu une nette évolution aussi bien au niveau de son activité et champ d’intervention qu’au niveau de ses ressources humaines. En 2018, la société s’implante à la technopole (Oujda Shore) pour créer encore plus d’emplois dans la région et répondre aux exigences de ses clients.",
        img_URL: "../img/time_line/2017.jpg"
    }, {
        titre: "Meilleur centre d’appel de l’oriental",
        description: "- Notoriety Group reçoit un trophée de la part de la présidence de Mr. <br/>Othaman Firdaous Secrétaire d'État de l'industrie, du Commerce, de l'Investissement et de l'Economie numérique. <br/>- Nouvelle filiale de Notoriety Group : Notoriety Dev. Société spécialisée dans le développement et le marketing digital.",
        img_URL: "../img/time_line/2019.jpg"
    }, {
        titre: "Objectifs et Challenges",
        description: "Notre objectif est de créer encore plus d’emploi (200+) pour réduire le taux de chômage dans la région, de dénicher des profils pertinents et dynamiques, en plus de  coopérer avec plus de clients.",
        img_URL: "../img/time_line/future.jpg"
    }],
    T_index = 0;

function timeLine_Slider(e) {
    $("#time-line .item .year").removeClass("year-active"), $("#time-line .item .cercle").removeClass("cercle-active"), $("#time-line .item[data-index=" + e + "]").find(".year").addClass("year-active"), $("#time-line .item[data-index=" + e + "]").find(".cercle").addClass("cercle-active");
    var i = timing_slider[e].titre,
        t = timing_slider[e].description,
        n = timing_slider[e].img_URL;
    $("#time-line img").attr("src", n), $("#time-line .label h1").html(i), $("#time-line .desc p").html(t)
}

function startSliding() {
    if (!slideInt) {
        let e = 0;
        slideInt = setInterval(function () {
            timeLine_Slider(e), ++e > 3 && (e = 0)
        }, 2e3)
    }
}

function pauseSliding() {
    slideInt && (clearInterval(slideInt), slideInt = null, setTimeout(startSliding, 4e3))
}

function openVideo() {
    $(".pop-up_video-container").fadeIn(100), $("#yt-player").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KHfODYg6HY8" frameborder="0"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>')
}

function closeVideo() {
    $(".pop-up_video-container").fadeOut(100), $("#yt-player").html("")
}
$("#time-line .item").on("click", function () {
    timeLine_Slider(T_index = $(this).data("index")), pauseSliding()
}), $(".left").on("click", function () {
    --T_index < 0 && (T_index = 3), timeLine_Slider(T_index), pauseSliding()
}), $(".right").on("click", function () {
    ++T_index > 3 && (T_index = 0), timeLine_Slider(T_index), pauseSliding()
}), slideInt = null, startSliding();