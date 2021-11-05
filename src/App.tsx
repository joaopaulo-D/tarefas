import React, { useState } from "react";
import * as S from "./App.styles";
import { Item } from "./types/Item";
import ListItem from "./components/ListItem";
import AdiconarTarefa from "./components/AdicionarTarefa";

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, nome: 'Pragramar Hoje', done: false},
    { id: 2, nome: 'Pragramar Amanha', done: false }
  ])

  function handleAdicionarTarefa(nomeTarefa: string){
      let newTarefa = [...list];
      newTarefa.push({
        id: list.length + 1,
        nome: nomeTarefa,
        done: false
      })
      setList(newTarefa);
  } 

  return(
      <S.Container>
        <S.Area>
          <S.Header>Listagem de Tarefas</S.Header>

          <AdiconarTarefa onEnter={handleAdicionarTarefa}/>

          {list.map((item, index) => (
              <ListItem key={index} item={item}/>
          ))}

        </S.Area>
      </S.Container>
  );
}

export default App;