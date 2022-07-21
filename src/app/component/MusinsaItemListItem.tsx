import { Button } from "@mui/material";
import React from "react";
import { MusinsaItem } from "../type/interface";

import "./MusinsaItemListItem.scss";

interface Props {
    itemList: MusinsaItem[];
    handleDelete: (url: string) => void;
}

const MusinsaItemListItem = (props: Props) => {
    const { itemList, handleDelete } = props;

    return (
        <>
            {itemList?.map((item: MusinsaItem) => (
                <div className="itemContainer" key={item.url}>
                    <div className="itemTopArea">
                        <p className="name">name: {item.name}</p>
                        <p className="aliases">
                            aliases: {item.aliases?.join()}
                        </p>
                    </div>
                    <div className="itemMidArea">
                        <p className="title">title: {item.titles?.join()}</p>
                        <Button
                            className="delBtn"
                            variant="contained"
                            color="error"
                            onClick={() => handleDelete(item.url)}
                        >
                            삭제
                        </Button>
                    </div>
                    <div className="itemBottomArea">
                        <p className="books">books: {item.books.length}</p>
                        <p className="tvSeries">
                            tvSeries: {item.tvSeries.length}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MusinsaItemListItem;
