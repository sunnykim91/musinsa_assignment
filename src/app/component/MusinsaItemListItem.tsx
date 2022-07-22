import React from "react";
import { MusinsaItem } from "../type/interface";

import "./MusinsaItemListItem.scss";

interface Props {
    filterItemList: MusinsaItem[];
    handleDelete: (url: string) => void;
}

const MusinsaItemListItem = (props: Props) => {
    const { filterItemList, handleDelete } = props;

    return (
        <>
            {filterItemList?.map((item: MusinsaItem) => (
                <div className="itemContainer" key={item.url}>
                    <div className="itemTopArea">
                        <p className="name">name: {item.name}</p>
                        <p className="aliases">
                            aliases: {item.aliases?.join()}
                        </p>
                    </div>
                    <div className="itemMidArea">
                        <p className="title">title: {item.titles?.join()}</p>
                        <button
                            className="delBtn"
                            onClick={() => handleDelete(item.url)}
                        >
                            삭제
                        </button>
                    </div>
                    <div className="itemBottomArea">
                        <p className="books">
                            books:{" "}
                            {item.books[0] === "" ? 0 : item.books.length}
                        </p>
                        <p className="tvSeries">
                            tvSeries:{" "}
                            {item.tvSeries[0] === "" ? 0 : item.tvSeries.length}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MusinsaItemListItem;
