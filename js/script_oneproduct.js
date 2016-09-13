
		var currentImage;
var currentIndex = -1;
var interval;
function showImage(index){
    if(index < $('#bigPic img').length){
        var indexImage = $('#bigPic img')[index]
        if(currentImage){   
            if(currentImage != indexImage ){
                $(currentImage).css('z-index',2);
                clearTimeout(myTimer);
                $(currentImage).fadeOut(250, function() {
                    myTimer = setTimeout("showNext()", 3000);
                    $(this).css({'display':'none','z-index':1})
                });
            }
        }
        $(indexImage).css({'display':'block', 'opacity':1});
        currentImage = indexImage;
        currentIndex = index;
        $('#thumbs li').removeClass('active');
        $($('#thumbs li')[index]).addClass('active');
    }
}

function showNext(){
    var len = $('#bigPic img').length;
    var next = currentIndex < (len-1) ? currentIndex + 1 : 0;
    showImage(next);
}

var myTimer;

$(document).ready(function() {
    myTimer = setTimeout("showNext()", 3000);
    showNext(); //Load first image
    $('#thumbs li').bind('click',function(e){
        var count = $(this).attr('rel');
        showImage(parseInt(count)-1);
    });
});
