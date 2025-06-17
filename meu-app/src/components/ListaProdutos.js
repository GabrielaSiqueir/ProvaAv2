import { Button, List, ListItem, ListItemText } from '@mui/material';

const ListaProdutos = ({ produtos, onEditar, onExcluir }) => {
  return (
    <List>
      {produtos.map((produto) => (
        <ListItem key={produto.id}>
          <ListItemText primary={produto.nome} secondary={`R$ ${produto.preco}`} />
          <Button onClick={() => onEditar(produto)}>Editar</Button>
          <Button onClick={() => onExcluir(produto.id)}>Excluir</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ListaProdutos;
