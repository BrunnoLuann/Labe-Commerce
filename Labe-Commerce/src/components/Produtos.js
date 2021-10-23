import React from "react";
import styled from 'styled-components';

const Texto = styled.p`
font-size: 20px;
`


class Produtos extends React.Component {

  render() {
    return (
        <div>
            <img src={this.props.imagemProduto} alt="foto produto"/>
            <Texto>{this.props.nomeProduto}</Texto>
            <Texto>R$ {this.props.valorProduto}</Texto>
        </div>
    );
  }
}
export default Produtos;