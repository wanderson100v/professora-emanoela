
const MIN_OPACITY = 0.7;
const MIN_SCROLL_POSITION_Y = 0;
const LIMIT_SCROLL_TOP = 40;

var isDownScroll;
var oldScrollPositionY = MIN_SCROLL_POSITION_Y;
var opacityBanner = MIN_OPACITY

function bannerUpdate(e){
    let currentScrollPostionY = document.documentElement.scrollTop;
    if(currentScrollPostionY > LIMIT_SCROLL_TOP) opacityBanner = 1;
    else if(currentScrollPostionY == MIN_SCROLL_POSITION_Y) opacityBanner = 0.7;
    else{
        isDownScroll = currentScrollPostionY > oldScrollPositionY;
        oldScrollPositionY = currentScrollPostionY;

        if( !isDownScroll && opacityBanner >= 0.7) opacityBanner = opacityBanner - 0.05;
        else if (isDownScroll && opacityBanner < 1) opacityBanner = opacityBanner + 0.05;
        else return;
    }
    var banner = document.getElementById("banner")
    banner.style.backgroundColor = "rgba(97, 90, 225, "+opacityBanner+")";
};