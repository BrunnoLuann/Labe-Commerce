import React from "react";

import Filtros from "./components/Filtro.js";
import Produtos from "./components/Produtos.js";
import Carrinho from "./components/Carrinho.js";
import styled from 'styled-components';

import Camiseta1 from "./img/camiseta-1.jpg";
import Camiseta2 from "./img/camiseta-2.jpg";
import Camiseta3 from "./img/camiseta-16.jpg";
import Camiseta4 from "./img/camiseta-15.jpg";
import Camiseta5 from "./img/camiseta-14.jpg";
import Camiseta6 from "./img/camiseta-13.jpg";
import Camiseta7 from "./img/camiseta-12.jpg";
import Camiseta8 from "./img/camiseta-10.jpg";


import imgCabecalho from "./img/logo1.png"



const Container = styled.div`
  
  background-position: 50% 0;
  display: flex;
  width: 100%;
  height:50vh;
  background-color: white;
  margin-bottom: -50vw;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #fff;
  font-size: 18px;
`

const Select = styled.select`
  height: 70%;
  margin-top: 2vh;
  margin-right: 2vh;
  font-size: 18px;
`

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 2fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  justify-items: center;
  align-items: center;
  background-color: #ffff;
  color: black;
  `

const Produto = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  `

const AreaProdutos = styled.div`
    background-color: white;
    height: 400px;
    width: 250px;
    margin-bottom: 50px;
    transition: 0.3s;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    `;

const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: 6.50vw;
`;

const ImagemCabecalho = styled.img`
  display: flex;
  margin-left: 14vw;;
  justify-items: center;
  align-items: center;
  height: 204px;

`;

const Quantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Botao = styled.button`
    width: 100%;
    height: 40px;
    line-height: 40px;
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  background-color: black;
  &:hover {
    background-color: #9999;
    color: black;
    cursor: pointer;
  }
`

const CarrinhoCompras = styled.div`
  margin: 1vw;
  margin-top: 10.4vw;
  padding-left: 2vw;  
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 25vw;
  background-color: white;
`

const Rodape = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: bisque;
    color: black;
    position: absolute;
    margin-bottom: -688px;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    padding: 0px;
`;

const TextoRodape = styled.h4`
  margin-left: 20px;
`;

const produtos = [
  {
    id: 1,
    name: "AtroLimpa",
    value: 100.0,
    imageUrl: Camiseta1,

  },

  {
    id: 2,
    name: "Role De Skate",
    value: 69.0,
    imageUrl: Camiseta2,

  },

  {
    id: 3,
    name: "Mix Espacial",
    value: 180.0,
    imageUrl: Camiseta3,

  },

  {
    id: 4,
    name: "Astro Musica",
    value: 120.0,
    imageUrl: Camiseta4,
  },

  {
    id: 5,
    name: "Basquete de Saturno",
    value: 59.0,
    imageUrl: Camiseta5,
  },

  {
    id: 6,
    name: "Festa no Espaço",
    value: 143.0,
    imageUrl: Camiseta6,
  },

  {
    id: 7,
    name: "Aeroespacial",
    value: 102.0,
    imageUrl: Camiseta7,
  },

  {
    id: 8,
    name: "Pug Astronauta",
    value: 39.0,
    imageUrl: Camiseta8,
  },
];

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
          <p class="text"> <b> Bruno Luan </b> </p>
          <TextoRodape></TextoRodape>
        </Rodape>
      </Container>
    );
  }
}

export default App;