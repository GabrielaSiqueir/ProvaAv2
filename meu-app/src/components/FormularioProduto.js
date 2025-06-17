import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const FormularioProduto = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (nome.trim() === '' || preco.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    }

    const novoProduto = {
      nome: nome,
      preco: parseFloat(preco),
    };

    onSubmit(novoProduto);

    // Limpar campos após o envio
    setNome('');
    setPreco('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: '20px auto' }}>
      <TextField
        label="Nome do Produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Preço"
        type="number"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Salvar Produto
      </Button>
    </Box>
  );
};

export default FormularioProduto;
