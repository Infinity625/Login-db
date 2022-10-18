
const railway = require('railway');

const connection = railway.createConnection({

    host     : 'containers-us-west-77.railway.app',
    port     : 6605,
    user     : 'root',
    password : '7YMuAdoO8y1PLFHiCNel',
    database : 'railway'

});


connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('Banco de dados conectado com sucesso!');
	}
});

module.exports = connection;