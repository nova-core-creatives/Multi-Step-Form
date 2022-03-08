(function($) {



    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
             element.before(error);
        },
        rules: {
            name : {
                required: true,
            },
            service : {
                required: true,
            },
            email : {
                required: true,
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight : function(element, errorClass, validClass) {
            $(element.form).find('.actions').addClass('form-error');
            $(element).parent().find('.form-label').addClass('form-label-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element.form).find('.actions').removeClass('form-error');
            $(element).parent().find('.form-label').removeClass('form-label-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : '<i class="zmdi zmdi-chevron-left"></i>',
            next : '<i class="zmdi zmdi-chevron-right"></i>',
            finish : '<i class="zmdi zmdi-chevron-right"></i>'
        },
        onStepChanging: function (event, currentIndex, newIndex)
        {
            if(currentIndex === 0 ) {
                form.parent().parent().parent().append('<div class="footer footer-' + currentIndex + '"></div>');
            }
            if(currentIndex === 1) {
                form.parent().parent().parent().find('.footer').removeClass('footer-0').addClass('footer-'+ currentIndex + '');
            }
            if(currentIndex === 2) {
                form.parent().parent().parent().find('.footer').removeClass('footer-1').addClass('footer-'+ currentIndex + '');
            }
            if(currentIndex === 3) {
                form.parent().parent().parent().find('.footer').removeClass('footer-2').addClass('footer-'+ currentIndex + '');
            }
            // if(currentIndex === 4) {
            //     form.parent().parent().parent().append('<div class="footer" style="height:752px;"></div>');
            // }
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            var name = document.getElementById("name").value;
            console.log(name);
            form.parent().parent().append(`<h1>Hi , ${name}!</h1><br><h1>We will reach out as soon as possible</h1>`).parent().addClass('finished');
            return true;
        },
        onStepChanged : function (event, currentIndex, priorIndex) {

            return true;
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        name:"",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: "",
    });
    $(".toggle-password").on('click', function() {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
    });
})(jQuery);
