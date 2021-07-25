// What we do toggle
$(document).ready(function(){
    $("div.info1-main").click(function(){
        $('.info1').slideToggle()
        $('#info1').slideToggle()
    })



    $("div.info2-main").click(function(){
        $('.info2').slideToggle()
        $('#info2').slideToggle()
    })
   

    $("div.info3-main").click(function(){
        $('.info3').slideToggle()
        $('#info3').slideToggle()
    })
  
})

// Form Validation

function validator(){
    var username=document.getElementById('contact-name').value;
    var email=document.getElementById('contact-email').value;
    var message=document.getElementById('contact-message').value
    if(username==''){
        alert('Dear user, Kindly input your username');
        username.focus();
        return false;
        
    }else
    if(email==''){
        alert('Dear '+username+'\n  Kindly input your email address');
        email.focus();
        return false
    }else
    if(message==''){
        alert('Dear '+username+' You forgot to leave us a message')
        message.focus()
        return false;
        
    }else
    alert('Dear '+username+'\n  Thank you for filling this form.')
}

// Portfolio hovering effect

$(document).ready(function(){
    // Portfolio 1
    $('.work1').mouseenter(function(){
        $('#p1txt').show()
        $('.p1img').hide()
        $('.work1').css('background','url(./assets/portfolio/work4.jpg)')
    })
        $('.work1').mouseleave(function(){
        $('#p1txt').hide()
        $('.p1img').show()
        $('.work1').css('background','#ffffff')
        
    })
    // Portfolio 2
    $('.work2').mouseenter(function(){
        $('#p2txt').show()
        $('.p2img').hide()
        $('.work2').css('background','url(./assets/portfolio/work3.jpg)')
    })
    $('.work2').mouseleave(function(){
        $('#p2txt').hide()
        $('.p2img').show()
        $('.work2').css('background','#ffffff')
    })
    // portfolio 3
    $('.work3').mouseenter(function(){
        $('#p3txt').show()
        $('.p3img').hide()
        $('.work3').css('background','url(./assets/portfolio/work2.jpg)')
    })
    $('.work3').mouseleave(function(){
        $('#p3txt').hide()
        $('.p3img').show()
        $('.work3').css('background','#ffffff')
    })
    // Portfolio 4
    $('.work4').mouseenter(function(){
        $('#p4txt').show()
        $('.p4img').hide()
        $('.work4').css('background','url(./assets/portfolio/work1.jpg)')
    })
    $('.work4').mouseleave(function(){
        $('#p4txt').hide()
        $('.p4img').show()
        $('.work4').css('background','#ffffff')
    })
    // Portfolio 5
    $('.work5').mouseenter(function(){
        $('#p5txt').show()
        $('.p5img').hide()
        $('.work5').css('background','url(./assets/portfolio/work5.jpg)')
    })
    $('.work5').mouseleave(function(){
        $('#p5txt').hide()
        $('.p5img').show()
        $('.work5').css('background','#ffffff')
    })
    // Portfolio 6
    $('.work6').mouseenter(function(){
        $('#p6txt').show()
        $('.p6img').hide()
        $('.work6').css('background','url(./assets/portfolio/work6.jpg)')
    })
    $('.work6').mouseleave(function(){
        $('#p6txt').hide()
        $('.p6img').show()
        $('.work6').css('background','#ffffff')
    })

    // Portfolio 7
    $('.work7').mouseenter(function(){
        $('#p7txt').show()
        $('.p7img').hide()
        $('.work7').css('background','url(./assets/portfolio/work7.jpg)')
    })
    $('.work7').mouseleave(function(){
        $('#p7txt').hide()
        $('.p7img').show()
        $('.work7').css('background','#ffffff')
    })


    // Portfolio 8
    $('.work8').mouseenter(function(){
        $('#p8txt').show()
        $('.p8img').hide()
        $('.work8').css('background','url(./assets/portfolio/work8.jpg)')
    })
    $('.work8').mouseleave(function(){
        $('#p8txt').hide()
        $('.p8img').show()
        $('.work8').css('background','#ffffff')
    })



})
