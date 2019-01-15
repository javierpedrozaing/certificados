"use strict";

var WinHeight;
var HeaderHeight;
var FooterHeight;
var ForgotLogo;

// Window Load
$(window).on("load",function(){

});

// Document Ready
$(document).ready(function(){
    
    /* Validation form message */
    $(window).on('ajaxErrorMessage', function(event, message){
        if(message == 'A user was found to match all plain text credentials however hashed credential "password" did not match.'){
            $('.showmsg').addClass('alert-danger').html(message).show();
            message = 'Dirección de correo electrónico o contraseña no válidos.';
        }else if(message == 'A user was not found with the given credentials.'){
            $('.showmsg').addClass('alert-danger').html(message).show();
            message = 'Dirección de correo electrónico no registrada; Por favor, intente con una dirección de correo electrónico válida O regístrese ahora.';
        }else if(message == 'The email has already been taken.'){
            message = 'El email ya ha sido registrado.';
        }
        if(message !=''){
            $('.error-list').show();
            $('.error-message').show();
            $('.showmsg').html(message);         
        }
        event.preventDefault();
    });
    
    WinHeight = $(window).height();
    HeaderHeight= $("#header").outerHeight();
    FooterHeight= $("#footer").outerHeight();
    SecHeight();
    
    SecHeightloign();
    SecHeightForgot();

    // Toggle Nav Button
	$(".navbar-toggle").on("click", function(){
        $(this).toggleClass("collapsed");
        $("body").toggleClass("body-nav-open");
    });

    // Responsive menu toggle
	$(".navbar-nav .dropdown.active>.dropdown-menu").show();
	$('.navbar-nav li > .arrow-icon').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      
      $(this).closest('li').toggleClass('active').children(".dropdown-menu").stop("true", "true").slideToggle(500);
      $(this).closest('li').siblings().removeClass("active").find(".dropdown-menu").stop("true", "true").slideUp();
    });
});

// Document Ready
$(window).resize(function(){
    WinHeight = $(window).height();
    HeaderHeight= $("#header").outerHeight();
    FooterHeight= $("#footer").outerHeight();
    SecHeight();

    SecHeightloign();
    SecHeightForgot();
});

//win-height


function SecHeight(){
    var SectionHeight = WinHeight - (HeaderHeight+FooterHeight);
    $(".win-height").css('height',SectionHeight+'px');
}

//WinHeightloign
function SecHeightloign(){
    var SectionHeightloign = WinHeight - (FooterHeight);
    $(".win-height-loign").css('min-height',SectionHeightloign+'px');
}

//WinHeightloign
function SecHeightForgot(){
    var SectionHeightFor = WinHeight - (FooterHeight);
    $(".forgot-password-wrapper .section-block").css('min-height',SectionHeightFor+'px');
}

/*var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,20}$/;
$.validator.addMethod("validatePassword", function(value, element) {
    return this.optional(element) || regex.test(value);
}, "Ingrese una contraseña válida");*/
$("#updatePassword").validate({
    rules: {
        password: {
            required: true,
            //validatePassword: true,
        },
        confirm_password: {
            required: true,
            //validatePassword: true,
            equalTo: "#resetPassword"
        },
    },
    messages: {
        password: {
            required: "Introducir la contraseña",
        },
        confirm_password: {
            required: "Por favor, confirme la contraseña",
            //validatePassword: "La contraseña no coincide",
            equalTo: "La contraseña no es lo mismo"
        },
    }
});

function resetpassword() {
    $("#resetPassword").validate({
        rules: {
            "email": {
                required: true,
                email: true
            },
        },
        messages: {
            "email": {
                required: "Por favor, ingrese un correo electrónico",
                email: "el correo electrónico es invalido"
            },
        }
    });
}

