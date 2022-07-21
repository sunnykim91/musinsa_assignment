import React, { useEffect, useState } from "react";
import MusinsaFilter from "./component/MusinsaFilter";
import MusinsaHeader from "./component/MusinsaHeader";
import MusinsaItemList from "./component/MusinsaItemList";
import { fetchItemList } from "./rest/MusinsalistRest";

import "./MusinsaListPage.scss";
import { MusinsaItem } from "./type/interface";

const MusinsaListPage = () => {
    const initFilterState = {
        isAlive: true,
        gender: "male",
    };

    const [filters, setFilters] = useState(initFilterState);
    const [itemList, setItemList] = useState<MusinsaItem[]>([]);

    const fetchData = async () => {
        const params = {
            isAlive: filters.isAlive,
            gender: filters.gender,
        };
        try {
            const { data } = await fetchItemList(params, 1);
            setItemList(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (name: string, value: string) => {
        setFilters({ ...filters, [name]: value });
    };

    const initFilters = () => {
        setFilters(initFilterState);
    };

    const handleDelete = (url: string) => {
        const filterArr = itemList.filter(
            (item: MusinsaItem) => item.url !== url
        );
        setItemList(filterArr);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    return (
        <div className="mainContainer">
            <MusinsaHeader />
            <MusinsaFilter
                filters={filters}
                onChange={handleChange}
                onClick={initFilters}
            />
            <MusinsaItemList itemList={itemList} handleDelete={handleDelete} />
        </div>
    );
};

export default MusinsaListPage;
