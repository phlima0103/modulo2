const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'data/currículo_Pedro.db';

const hostname = '127.0.0.1';
const port = 3001;
const app = express();

// /* Colocar toda a parte estática no frontend */
// app.use(express.static("./"));

// /* Colocar toda a parte estática no frontend */
app.use(express.static("./"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

app.get('/', (req,res)=>{
	res.sendFile(__dirname+"/./curriculo.html")
})

// Retorna todos registros (é o R do CRUD - Read)
app.get('/experiencias', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM experiencias ORDER BY ID COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereexperiencias', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = `INSERT INTO experiencias (ID, experiência, Data) VALUES ('${req.body.ID}', '${req.body.experiencia}', '${req.body.Data}')`;
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>EXPERIÊNCIA INSERIDA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();

});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/formulario', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = `SELECT * FROM experiencias WHERE ID='${req.query.ID}'`;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaexperiencias', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = `UPDATE experiencias SET ID =${req.body.ID}s, experiência = '${req.body.experiencia}', Data =  '${req.body.Data}' WHERE ID = '${req.body.ID}'`;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>EXPERIÊNCIA ATUALIZADA COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco


});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeexperiencias', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = `DELETE FROM experiencias WHERE ID='${req.query.ID}'`;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>EXPERIÊNCIA REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});



// Retorna todos registros (é o R do CRUD - Read)
app.get('/dadospessoais', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM dadospessoais ORDER BY ID COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

//////////////////////////////////////////////////////////////////

	// Retorna todos registros (é o R do CRUD - Read)
app.get('/formacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM formacao ORDER BY ID COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco

});

//////////////////////////////////////////////////////////////////////

		// Retorna todos registros (é o R do CRUD - Read)
app.get('/habilidades', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM habilidades ORDER BY ID COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco


///////////////////////////////////////////////////////////////

		// Retorna todos registros (é o R do CRUD - Read)
app.get('/personalidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM personalidade ORDER BY ID COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco

});

/////////////////////////////////////////////////////////////////

		// Retorna todos registros (é o R do CRUD - Read)
app.get('/realizacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM realizacoes ORDER BY ID COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco


})})


app.listen(port, hostname, () => {
	console.log(`Servidor rodando em http://${hostname}:${port}/`);
})