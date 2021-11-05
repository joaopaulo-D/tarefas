import { useState } from "react";
import * as S from "./styles";
import { Item } from "../../types/Item";

type Props = {
    item: Item
}

const ListItem = ({ item } : Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <S.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
            <label>{item.nome}</label>
        </S.Container>
    );
}

export default ListItem;