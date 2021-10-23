import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  margin: 1vw;
  padding-left: 2vw;
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 25vw;
  background-color: white;
  margin-top: 10.4vw;
`;

const Input = styled.input`
  display: flex;
  margin-bottom: 1vh;
  width: 75%;
`;



function Filtro(props) {
        
    return (
        <Container>
          <h2>Filtros:</h2>
            <label>Valor Mínimo</label>
            <Input
              type="number"
              onChange={props.filtrarMin}
            />
        
            <label>Valor Máximo</label>
            <Input
              type="number"
              onChange={props.filtrarMax}
            />
        
            <label>Buscar Produto</label>
            <Input
                type="text"
                onChange={props.buscarProduto}
            />
        </Container>
    );
}

export default Filtro;