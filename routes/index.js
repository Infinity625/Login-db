const express = require('express');
const router = express.Router();

const database = require('../database');


/* Rota Pricipal */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session : req.session });
});

router.post('/login' , function(request,response,next) {

  const user_email_adresss = request.body.user_email_adresss;

  const user_password = request.body.user_password;

  if(user_email_adresss && user_password)
  {
    query = `
    SELECT * FROM user_login
    WHERE user_email = "${user_email_adresss}"
    `;

    database.query(query, function(error,data) {

      if(data.length > 0)
      {
        for(var count = 0; count < data.length; count++)
        {
          if(data[count] .user_password == user_password)
          {
            request.session.user_id = data[count].user_id;

            response.redirect('');
          }
          else
          {
            response.send('Senha Incorreta!')
          }
        }
      }

      else 
      {
        response.send('Endereço de email incorreto!')
      }
      response.end();
    })
    {
      response.send('Insira seu email e sua senha corretamente!');
    }
    response.end();
  }
});

router.get('logout', function(request,response,next){

  request.session.destroy();

  response.redirect('/')
});


module.exports = router;
