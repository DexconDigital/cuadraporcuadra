const mediumBp = matchMedia('(min-width: 1199px)');
const changesize = mql => {
    if (mql.matches) {
        
    }else{

    }
}
mediumBp.addListener(changesize);
changesize(mediumBp);


$(window).scroll(function () {
    if ($("#menu").offset().top > 200) {
        $(".navbar-brand img").css('height','65px');
    } else {
        $(".navbar-brand img").css('height','120px');
    }
});