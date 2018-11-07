var endAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend';

$(function() {
    $('#t-male').on('click',function() {
        $('#t-male').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
});

$(function() {
    $('#t-female').on('click',function() {
        $('#t-female').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
}); 

$(function() {
    $('#h-male').on('click',function() {
        $('#h-male').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
});

$(function() {
    $('#h-female').on('click',function() {
        $('#h-female').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
}); 