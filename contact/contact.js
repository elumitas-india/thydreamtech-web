$(document).ready(function() {

  var form = $('#form'),
      name = $('#name'),
      email = $('#email'),
      subject = $('#subject'),
      message = $('#message'),
      info = $('#info'),
      submit = $("#submit");

  form.on('input', '#name, #email, #subject, #message', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });

  submit.on('click', function(e) {
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "contact/mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          name.val('');
          email.val('');
          subject.val('');
          message.val('');
          info.html('Message sent!').css('color', 'green').fadeIn(1000).fadeOut('slow');
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').fadeIn(1000).fadeOut('slow');
        }
      });
    }
  });

  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name.val() === '') {
      name.css('border-color', 'red');
      valid = false;
    }
    if($.trim(email.val()) === "") {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(subject.val()) === "") {
      subject.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }

    return valid;
  }

});
