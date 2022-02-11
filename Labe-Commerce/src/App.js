import React from "react";

import Filtros from "./components/Filtro.js";
import Produtos from "./components/Produtos.js";
import Carrinho from "./components/Carrinho.js";

import { Container, Header, Select, ContainerProdutos, Produto, AreaProdutos, Cabecalho, ImagemCabecalho, Quantidade, Botao, CarrinhoCompras, Rodape, TextoRodape, produtos, } from "./StyledCommerce"



import imgCabecalho from "./img/logo1.png"


class App extends React.Component {
  state = {
    produtos: produtos,
    ordenacao: "crescente",
    valorMaximo: Infinity,
    valorMinimo: 0,
    buscarProduto: "",
    carrinho: [],
    adicionado: false,
  };

  alteraOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
  };

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: Number(event.target.value) });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: Number(event.target.value) });
  };

  onChangeBusca = (event) => {
    this.setState({ buscarProduto: event.target.value });
  };

  filtraProdutos = () => {
    let produtosFiltrados = this.state.produtos;
    if (this.state.valorMinimo) {
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        return produto.value >= this.state.valorMinimo;
      });
    }
    if (this.state.valorMaximo) {
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        return produto.value <= this.state.valorMaximo;
      });
    }
    if (this.state.buscarProduto !== "") {
      produtosFiltrados = produtosFiltrados.filter((produto) => {
        return produto.name.toLowerCase().includes(this.state.buscarProduto.toLowerCase());
      });
    }
    return produtosFiltrados;
  };

  adicionarProduto = (id) => {
    let novoCarrinho = this.state.carrinho;
    const produtoExiste = novoCarrinho.findIndex(
      (produto) => produto.id === id
    );

    if (produtoExiste === -1) {
      const produto = this.state.produtos.find((item) => item.id === id);

      const produtoAdicionado = {
        id: produto.id,
        nome: produto.name,
        valor: produto.value,
        quantidade: 1,
      };
      novoCarrinho.push(produtoAdicionado);
    } else {
      const qtde = novoCarrinho[produtoExiste].quantidade;
      novoCarrinho[produtoExiste] = {
        ...novoCarrinho[produtoExiste],
        quantidade: qtde + 1,
      };
    }

    this.setState({ carrinho: novoCarrinho });
  };

  excluirProduto = (id) => {
    const excluirDoCarrinho = this.state.carrinho.filter((produto) => {
      return produto.id !== id;
    });

    this.setState({ carrinho: excluirDoCarrinho });
  };

  render() {
    const listaOrdenada = this.filtraProdutos().sort((a, b) => {
      if (this.state.ordenacao === "crescente") {
        return a.value - b.value;
      } else if (this.state.ordenacao === "decrescente") {
        return b.value - a.value;
      }
    });

    const listaProdutos = listaOrdenada.map((produto) => {
      return (
        <AreaProdutos>
          <Produto>
            <Produtos
              key={produto.id}
              imagemProduto={produto.imageUrl}
              nomeProduto={produto.name}
              valorProduto={produto.value}
            />
            <Botao
              onClick={() => {
                this.adicionarProduto(produto.id);
              }}
            >
              Adicionar ao carrinho
            </Botao>
          </Produto>
        </AreaProdutos>
      );
    });

    const listaCarrinho = this.state.carrinho.map((produtoNoCarrinho) => {
      return (
        <Carrinho
          nomeProduto={produtoNoCarrinho.nome}
          valorProduto={produtoNoCarrinho.valor}
          quantidade={produtoNoCarrinho.quantidade}
          excluir={() => this.excluirProduto(produtoNoCarrinho.id)}

        />
      );
    });

    return (
      <Container>
        <Filtros
          filtrarMin={this.onChangeValorMinimo}
          filtrarMax={this.onChangeValorMaximo}
          buscarProduto={this.onChangeBusca}
        />
        <div>
          <Header>
            <Cabecalho>
              <ImagemCabecalho src={imgCabecalho} alt={"Cabeçalho"} />
            </Cabecalho>
          </Header>
          <Quantidade>
            <p>Quantidade de Produtos : {listaProdutos.length}</p>
            <Select
              value={this.state.ordenacao}
              onChange={this.alteraOrdenacao}
            >
              <option value="crescente"> Preço: Crescente </option>
              <option value="decrescente"> Preço: Decrescente </option>
            </Select>
          </Quantidade>
          <ContainerProdutos> {listaProdutos} </ContainerProdutos>
        </div>
        <CarrinhoCompras>
          <h2>Carrinho</h2>
          {listaCarrinho}
          <p>
            Total:{" "}
            {this.state.carrinho.reduce(
              (acumulador, objeto) =>
                acumulador + objeto.quantidade * objeto.valor,
              0
            )}
          </p>
        </CarrinhoCompras>

        <Rodape>
          <p class="text"> <b> No Copyright </b> </p>
          <TextoRodape>Bruno Luan </TextoRodape>
        </Rodape>
      </Container>
    );
  }
}

export default App;