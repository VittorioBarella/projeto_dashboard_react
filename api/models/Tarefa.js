const mongoose = require('mongoose');

const Tarefa = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

mongoose.model('tarefa', Tarefa);
