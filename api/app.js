const express = require('express');
const mongoose = require('mongoose');

require('./models/Tarefa');
const Tarefa = mongoose.model('tarefa');

const app = express();

app.use(express.json());

// CONEXÃO COM O BANCO DE DADOS.
mongoose
  .connect('mongodb://localhost:27017/DatabaseDashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexão com MongoDB realizada com sucesso!');
  })
  .catch((erro) => {
    console.log('Erro: Conexão com MongoDB não foi realizada com sucesso!');
  });
// FIM CONEXÃO COM O BANCO DE DADOS.

// BUSCAR.
app.get('/', (req, res) => {
  Tarefa.find({})
    .then((tarefa) => {
      return res.json(tarefa);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: 'Nenhuma tarefa encontrada!',
      });
    });
});
// FIM BUSCAR.

// BUSCA PELO ID.
app.get('/tarefa/:id', (req, res) => {
  Tarefa.findOne({ _id: req.params.id })
    .then((tarefa) => {
      return res.json(tarefa);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: 'Nenhuma tarefa encontrada!',
      });
    });
});
// FIM BUSCA PELO ID.

// ADICIONAR TAREFA.
app.post('/tarefa', (req, res) => {
  const tarefa = Tarefa.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Error: Tarefa não foi cadastrada com sucesso! ',
      });

    return res.status(200).json({
      error: false,
      message: 'Tarefa cadastrada com sucesso!',
    });
  });
});
// FIM ADICIONAR TAREFA.

// EDITAR TAREFA.
app.put('/tarefa/:id', (req, res) => {
  const tarefa = Tarefa.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Error: Algo deu errado! tarefa não foi editada.',
      });

    return res.json({
      error: false,
      message: 'Tarefa editada com sucesso!',
    });
  });
});
// FIM EDITAR TAREFA.

// DELETAR TAREFA.
app.delete('/tarefa/:id', (req, res) => {
  const tarefa = Tarefa.deleteOne({ _id: req.params.id }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Algo deu errado! tarefa não foi apagada.',
      });

    return res.json({
      error: false,
      message: 'Tarefa apagada com suecesso!',
    });
  });
});
// FIM DELETAR TAREFA.

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080: http://localhost:8080/');
});
