function sendMail() {
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'uzvXWQ2NpEjoeFuWSOudqQ',
        'message': {
          'from_email': $("#email").val(),
          'to': [
              {
                'email': "rastko.milovanovic.81@gmail.com",
                'name': "Rastko Milovanovic",
                'type': "to"
              }
            ],
          'autotext': 'true',
          'subject': 'Contact from the site',
          'html': $('#text').val()
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
}

$(document).ready(function(){
  $('#countdown').countdown('2015/02/02', function(event) {
    $(this).html(event.strftime('%w weeks %d days <br /> %H:%M:%S'));
  });

  $('#contact').submit(function(e){
  	e.preventDefault();
  	sendMail();
  	$(this).fadeOut(function(){
  		$('#success').fadeIn();
  	});

  })

})