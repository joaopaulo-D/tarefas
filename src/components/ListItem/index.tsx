import * as S from "./styles";
import { Item } from "../../types/Item";

type Props = {
    item: Item
}

const ListItem = ({ item } : Props) => {
    return(
        <S.Container>
            <input type="checkbox" />
            <label>{item.nome}</label>
        </S.Container>
    );
}

export default ListItem;