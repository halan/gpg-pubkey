  $(function()
  {
    openpgp.init();
    var pub_key = openpgp.read_publicKey($('#pubkey').text());

    $('#cript-and-send').click(function()
    {
      var $message        = $('#message'),
          message         = $message.val();

      if(!!message.length)
      {
        var cripted_message = openpgp.write_encrypted_message(pub_key, message),
            email           = 'halan.pinheiro@gmail.com',
            mailto          = 'mailto:'+email+'?body='+encodeURIComponent(cripted_message);

        window.location.href = mailto;
      }
      else $('#alert').show();

      return false;
    });
    
    $('#message').focus(function(){ $('#alert').hide(); });
  });

