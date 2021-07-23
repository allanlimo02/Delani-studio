
$(document).ready(function(){
    $("div.info1-main").mouseenter(function(){
        $('.info1').toggle()
        $('#info1').show()
    })
    $("div#info1").mouseleave(function(){
        $('.info1').show()
        $('#info').hide()
    })
})
$(document).ready(function(){
    $("div.info2-main").mouseenter(function(){
        $('.info2').toggle()
        $('#info2').show()
    })
    $("div#info2").mouseleave(function(){
        $('.info2').show()
        $('#info2').hide()
    })
})
$(document).ready(function(){
    $("div.info3-main").mouseenter(function(){
        $('.info3').toggle()
        $('#info3').show()
    })
    $("div#info3").mouseleave(function(){
        $('.info3').show()
        $('#info3x').hide()
    })
})
$(document).ready(function(){
    // Portfolio 1
    $('.work1').mouseenter(function(){
        $('#prjtitle').show()
    })
    $('.work1').mouseleave(function(){
        $('#prjtitle').hide()
    })
    //Portfolio 2
    $('.work2').mouseenter(function(){
        $('#prjtitle2').show()
        $('.work2')
    })
    $('.work2').mouseleave(function(){
        $('#prjtitle2').hide()
    })



})
function validator(){
    var username=document.getElementById('contact-name').value;
    var email=document.getElementById('contact-email').value;
    var message=document.getElementById('contact-message').value
    if(username==''){
        alert('Dear user, Kindly input your username');
        username.focus();
        return false;
        
    }
    if(email==''){
        alert('Dear '+username+'\n  Kindly input your email address');
        email.focus();
        return false
    }
    if(message==''){
        alert('Dear '+username+' You forgot to leave us a message')
        message.focus()
        return false;
        
    }
    alert('Dear '+username+'\n  Thank you for filling this form.')
}