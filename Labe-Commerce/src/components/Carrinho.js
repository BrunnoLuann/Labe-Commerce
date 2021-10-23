import React from 'react';
import styled from 'styled-components';
import Produtos from './Produtos';

const Container = styled.div`
  background-image:white;
  flex-wrap:nowrap;
`

const ListaProdutos = styled.p`
   
    background-image: white;
  
  
`

const BotaoExcluir = styled.button`
    width: 100px;
    margin-left: 10px;
    display: inline-block;
    align-content: flex-end;
    align-items:center;
    flex-shrink: 1;
    
`



class Carrinho extends React.Component {
    render () {
        return (
            
            <Container>
                <ListaProdutos>
                    {this.props.quantidade} {this.props.nomeProduto}: {this.props.valorProduto * this.props.quantidade}
                    
                    <BotaoExcluir onClick={this.props.excluir}>EXCLUIR
                        </BotaoExcluir>            

                        
                               
                                           
                   
                </ListaProdutos>
            </Container>
        )
    }
}
export default Carrinho;