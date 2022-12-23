'use strict'


$(document).ready(function(){
    
    $('body').on({ 'mousemove' : function( e ){
        console.clear()
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientX 
        $('#cursor').css({
            'left' : clientX + 'px',
            'top' : clientY + 'px'
        })
    }})


})