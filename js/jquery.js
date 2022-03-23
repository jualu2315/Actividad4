$(document).ready(function(){
    
    $('.Color').click(function(){
        var element = $(this);
        if(element.hasClass('SColor')){
            element.removeClass('SColor')
        }else{
            element.addClass('SColor');
        }
    });
    $('.TamanoMx').click(function(){
        var element = $(this);
        if(element.hasClass('STamanoMx')){
            element.removeClass('STamanoMx')
        }else{
            element.addClass('STamanoMx');
        }
    });
    $('.TamanoMn').click(function(){
        var element = $(this);
        if(element.hasClass('STamanoMn')){
            element.removeClass('STamanoMn')
        }else{
            element.addClass('STamanoMn');
        }
    });
    $('.Fondo').click(function(){
        var element = $(this);
        if(element.hasClass('SFondo')){
            element.removeClass('SFondo')
        }else{
            element.addClass('SFondo');
        }
    });
    $('.Tachado').click(function(){
        var element = $(this);
        if(element.hasClass('STachado')){
            element.removeClass('STachado')
        }else{
            element.addClass('STachado');
        }
    });
    $('.Fuente').click(function(){
        var element = $(this);
        if(element.hasClass('SFuente')){
            element.removeClass('SFuente')
        }else{
            element.addClass('SFuente');
        }
    });
    $('.Margen').click(function(){
        var element = $(this);
        if(element.hasClass('SMargen')){
            element.removeClass('SMargen')
        }else{
            element.addClass('SMargen');
        }
    });
    $('.Borde').click(function(){
        var element = $(this);
        if(element.hasClass('SBorde')){
            element.removeClass('SBorde')
        }else{
            element.addClass('SBorde');
        }
    });
    $('.Transicion').click(function(){
        var element = $(this);
        if(element.hasClass('STransicion')){
            element.removeClass('STransicion')
        }else{
            element.addClass('STransicion');
        }
    });


    $('div').hover(function(){
        var element = $(this);
        if(element.hasClass('colorear')){
            element.removeClass('colorear')
        }else{
            element.addClass('colorear');
        }
    })

});