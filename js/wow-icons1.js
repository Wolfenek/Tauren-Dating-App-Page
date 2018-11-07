var endAnimation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend';

$(function() {
    $('#warrior').on('click',function() {
        $('#warrior').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#paladin').on('click',function() {
        $('#paladin').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#dk').on('click',function() {
        $('#dk').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#hunter').on('click',function() {
        $('#hunter').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#shaman').on('click',function() {
        $('#shaman').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#druid').on('click',function() {
        $('#druid').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#monk').on('click',function() {
        $('#monk').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 

$(function() {
    $('#priest').on('click',function() {
        $('#priest').addClass('twist-it').one(endAnimation,function() {
            $(this).removeClass('twist-it');
        });
    });
}); 
    
