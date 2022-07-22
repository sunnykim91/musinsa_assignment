import React from "react";
import { MusinsaItem } from "../type/interface";

import "./MusinsaItemList.scss";
import MusinsaItemListItem from "./MusinsaItemListItem";

interface Props {
    filterItemList: MusinsaItem[];
    handleDelete: (url: string) => void;
}

const MusinsaItemList = (props: Props) => {
    const { filterItemList, handleDelete } = props;
    return (
        <MusinsaItemListItem
            filterItemList={filterItemList}
            handleDelete={handleDelete}
        />
    );
};

export default MusinsaItemList;
