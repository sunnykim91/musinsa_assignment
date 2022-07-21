import React from "react";
import { MusinsaItem } from "../type/interface";

import "./MusinsaItemList.scss";
import MusinsaItemListItem from "./MusinsaItemListItem";

interface Props {
    itemList: MusinsaItem[];
    handleDelete: (url: string) => void;
}

const MusinsaItemList = (props: Props) => {
    const { itemList, handleDelete } = props;
    return (
        <MusinsaItemListItem itemList={itemList} handleDelete={handleDelete} />
    );
};

export default MusinsaItemList;
