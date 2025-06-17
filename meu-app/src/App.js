import { useState, useEffect } from 'react';
import { obterProdutos, cadastrarProduto, editarProduto, excluirProduto } from './api/produtos';
import FormularioProduto from './components/FormularioProduto';
import ListaProdutos from './components/ListaProdutos';

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const dados = await obterProdutos();
      setProdutos(dados);
    };
    fetchProdutos();
  }, []);

  const handleCadastrar = async (produto) => {
    const novoProduto = await cadastrarProduto(produto);
    setProdutos([...produtos, novoProduto]);
  };

  const handleEditar = async (produto) => {
    const produtoEditado = await editarProduto(produto.id, produto);
    setProdutos(produtos.map((p) => (p.id === produto.id ? produtoEditado : p)));
  };

  const handleExcluir = async (id) => {
    await excluirProduto(id);
    setProdutos(produtos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <FormularioProduto onSubmit={handleCadastrar} />
      <ListaProdutos produtos={produtos} onEditar={handleEditar} onExcluir={handleExcluir} />
    </div>
  );
};

export default App;
