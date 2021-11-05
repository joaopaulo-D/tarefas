import React, { useState } from "react";
import * as S from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, nome: 'Pragramar Hoje', done: false},
    { id: 2, nome: 'Pragramar Amanha', done: false }
  ])

  return(
      <S.Container>
        <S.Area>
          <S.Header>Listagem de Tarefas</S.Header>

          {/* Adicionar Tarefas */}
          {list.map((item, index) => (
              <ListItem key={index} item={item}/>
          ))}

        </S.Area>
      </S.Container>
  );
}

export default App;