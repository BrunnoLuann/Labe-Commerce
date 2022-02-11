import styled from "styled-components";

export import Camiseta1 from "./img/camiseta-1.jpg";
export import Camiseta2 from "./img/camiseta-2.jpg";
export import Camiseta3 from "./img/camiseta-16.jpg";
export import Camiseta4 from "./img/camiseta-15.jpg";
export import Camiseta5 from "./img/camiseta-14.jpg";
export import Camiseta6 from "./img/camiseta-13.jpg";
export import Camiseta7 from "./img/camiseta-12.jpg";
export import Camiseta8 from "./img/camiseta-10.jpg";





export import imgCabecalho from "./img/logo1.png"

export const Container = styled.div`
  
  background-position: 100% 0;
  display: flex;
  width: 100%;
  height:50vh;
  background-color: white;
  margin-bottom: -50vw;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #fff;
  font-size: 18px;
`

export const Select = styled.select`
  height: 70%;
  margin-top: 2vh;
  margin-right: 2vh;
  font-size: 18px;
`

export const ContainerProdutos = styled.div`
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

export const Produto = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  `

export const AreaProdutos = styled.div`
    background-color: white;
    height: 400px;
    width: 250px;
    margin-bottom: 50px;
    transition: 0.3s;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    `;

export const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  margin-left: 6.50vw;
`;

export const ImagemCabecalho = styled.img`
  display: flex;
  margin-left: 14vw;;
  justify-items: center;
  align-items: center;
  height: 204px;
`;

export const Quantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Botao = styled.button`
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

export const CarrinhoCompras = styled.div`
  margin: 1vw;
  margin-top: 10.4vw;
  padding-left: 2vw;  
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 25vw;
  background-color: white;
`

export const Rodape = styled.footer`
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

export const TextoRodape = styled.h4`
  margin-left: 20px;
`;

export const produtos = [
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




export default styled;
