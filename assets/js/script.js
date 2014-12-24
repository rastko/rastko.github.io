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

});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57974476-1', 'auto');
ga('send', 'pageview');