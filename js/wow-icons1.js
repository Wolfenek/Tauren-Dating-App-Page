const endAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend';
// 1st set of icons:

$(function() {
    $('#warrior').on('click',function() {
        $('#warrior').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
    $('#paladin').on('click',function() {
        $('#paladin').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
    $('#dk').on('click',function() {
        $('#dk').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
    $('#hunter').on('click',function() {
        $('#hunter').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
     $('#shaman').on('click',function() {
        $('#shaman').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
    $('#druid').on('click',function() {
        $('#druid').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
    $('#monk').on('click',function() {
        $('#monk').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
     $('#priest').on('click',function() {
        $('#priest').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
    
});
// 2nd set of icons:

$(function() {
    $('#t-male').on('click',function() {
        $('#t-male').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
    
    $('#t-female').on('click',function() {
        $('#t-female').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
    
    $('#h-male').on('click',function() {
        $('#h-male').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
    
     $('#h-female').on('click',function() {
        $('#h-female').addClass('scale-it').one(endAnimation,function() {
            $(this).removeClass('scale-it');
        });
    });
    
});
