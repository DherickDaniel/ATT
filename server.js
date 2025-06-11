import express from 'express'
import mysql from 'mysql2';

const app = express()
app.use(express.json())

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Dherickryanvida2020..',
    database: 'biblioteca',
    port: 3306 
};

const db = mysql.createConnection(dbConfig)

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// GET — Listar todos os livros
app.get('/livros', (req, res) => {
  db.query('SELECT * FROM livros', (err, results) => {
    if (err) throw err;
    res.json(results);
  })
})

// POST — Adicionar novo livro
app.post('/livros', (req, res) => {
  const { titulo, autor, ano_publicacao } = req.body;
  db.query('INSERT INTO livros (titulo, autor, ano_publicacao) VALUES (?, ?, ?)', 
    [titulo, autor, ano_publicacao],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, titulo, autor, ano_publicacao })
  })
})

// PUT — Atualizar um livro
app.put('/livros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano_publicacao, disponivel } = req.body

  db.query('UPDATE livros SET titulo = ?, autor = ?, ano_publicacao = ?, disponivel = ? WHERE id = ?',
    [titulo, autor, ano_publicacao, disponivel, id],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Livro atualizado com sucesso' })
  })
})

// DELETE — Remover um livro
app.delete('/livros/:id', (req, res) => {
  const { id } = req.params

  db.query('DELETE FROM livros WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Livro removido com sucesso' })
  })
})

app.listen(3000)