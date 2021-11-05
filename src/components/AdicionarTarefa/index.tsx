import { useState, KeyboardEvent } from "react";
import * as S from "./styles";

type onEnter = {
    onEnter: (nomeTarefa: string) => void
}


const AdiconarTarefa = ({ onEnter } : onEnter) => {

    const [inputText, setInputText] = useState('');

    function handleKeyUp(e: KeyboardEvent) {
        //console.log(e.code);
        if(e.code === "Enter" && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return(
        <S.Container>
            <S.Image>+</S.Image>
            <S.Input 
            type="text" 
            placeholder="Digite uma tarefa..." 
            value={inputText} onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            />
        </S.Container>
    );
}

export default AdiconarTarefa;