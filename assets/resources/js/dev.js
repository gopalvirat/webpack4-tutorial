/* 
 Created on : 27 Jun, 2017, 11:45:40 PM
 Author     : ankitk
 */

$(function(){
    // code to add active class on current page
    var current = location.pathname.replace('/', '');
    
    $('.naviagtion_cont .nav_links li a').each(function(){
        var $this = $(this);        
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1 && current != ''){
            $('.naviagtion_cont .nav_links li').removeClass('active');
            $this.parent().addClass('active');
        }        
    })
    
})


var ajaxContactForm = function (currentObj) {
    var th = $(currentObj);

    // validate on submit
    th.find('input').each(validate);
    
    // prevent multiple queries on multiple clicks
    if ( th.data('requestRunning') ) {
        return false;
    }

    th.data('requestRunning', true);


    if (th.find('.invalid').length <= 0) {    
        $.ajax({
            url: 'ajax/contact_form.php',
            data: {data: th.serialize()},
            dataType: 'json',
            type: th.attr('method'),
            success: function (returnData) {
                if (returnData['success']) {
                    // set success message
                    $('.msg').addClass('success_msg').html(returnData['success']);
                    
                    // empty all fields
                    th.find('input[type=text]').val('');
                    
                } else if (returnData['error']) {

                    if (returnData['error']['email_not_sent']) {
                        $('.msg').addClass('error_msg').html(returnData['error']['email_not_sent']);
                    } else {
                        for (var key in returnData['error']) {
                            if (returnData['error'].hasOwnProperty(key)) {
                                $("#" + key).show().html(returnData['error'][key]);
                                //console.log(key + " -> " + returnData['error'][key]);
                            }
                        }
                    }
                    
                    
                }
                grecaptcha.reset();
            },
            error: function () {
                // add code if any error occur
                $('.msg').addClass('error_msg').html('There was some error while processing your request.');
            },
            beforeSend: function () {
                $('.error').hide().html('');
                show_loader();
            },
            complete: function () {
                th.data('requestRunning', false);
                hide_loader();
            }
        })
    }
    return false;
}

// validate on keyup
$("input").on('keyup', validate);
// validate on blur
$("input").on('blur', validate);

function validate() {
    var object = $(this);
 
    //console.log(object);
    if (object.data('required') && object.val() == '') {

        object.addClass('invalid');
        $("#" + object.attr('name')).show().html(object.data('required'));
    } else if (object.data('email') && !validateEmail(object.val())) {

        object.addClass('invalid');
        $("#" + object.attr('name')).show().html(object.data('email'));
    } else if (object.data('integer') && object.val() != '' && !$.isNumeric(object.val())) {
        object.addClass('invalid');
        $("#" + object.attr('name')).show().html(object.data('integer'));
    }
    else {
        object.addClass('valid').removeClass('invalid');
        $("#" + object.attr('name')).html('').hide();
    }
    
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var show_loader = function(){
    $(".submit_button").val("Processing...").addClass("invalid");
}

var hide_loader = function(){
    $(".submit_button").val("Submit").removeClass("invalid");
}