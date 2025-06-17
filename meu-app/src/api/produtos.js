import axios from 'axios';


const api = axios.create({
  baseURL: 'http://leoproti.com.br:8004/swagger-ui/index.html', 
});

// ✅ Função para buscar todos os produtos
export const obterProdutos = async () => {
  try {
    const response = await api.get('/produtos');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  }
};

// ✅ Função para cadastrar um novo produto
export const cadastrarProduto = async (produto) => {
  try {
    const response = await api.post('/produtos', produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    throw error;
  }
};

// ✅ Função para editar um produto
export const editarProduto = async (id, produto) => {
  try {
    const response = await api.put(`/produtos/${id}`, produto);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar produto:', error);
    throw error;
  }
};

// ✅ Função para excluir um produto
export const excluirProduto = async (id) => {
  try {
    await api.delete(`/produtos/${id}`);
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    throw error;
  }
};
