import React, { useEffect, useState } from "react";
import MusinsaFilter from "./component/MusinsaFilter";
import MusinsaHeader from "./component/MusinsaHeader";
import MusinsaItemList from "./component/MusinsaItemList";
import { fetchItemList } from "./rest/MusinsalistRest";

import "./MusinsaListPage.scss";
import {
    MusinsaFilterType,
    MusinsaFilterRequestParams,
    MusinsaItem,
} from "./type/interface";

const MusinsaListPage = () => {
    const initFilterState: MusinsaFilterType = {
        isAlive: "ALL",
        gender: "ALL",
        tvSeries: "ALL",
    };

    const initPage = () => {
        const params: URLSearchParams = new URLSearchParams(
            window.location.search
        );
        const pageNumber: string = params.get("page") || "1";

        return Number(pageNumber);
    };

    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(initPage);
    const [filters, setFilters] = useState<MusinsaFilterType>(initFilterState);
    const [itemList, setItemList] = useState<MusinsaItem[]>([]);
    const [filterItemList, setFilterItemList] = useState<MusinsaItem[]>([]);

    const fetchData = async () => {
        const params: MusinsaFilterRequestParams = {
            isAlive: filters.isAlive === "ALL" ? "" : filters.isAlive,
            gender: filters.gender === "ALL" ? "" : filters.gender,
        };
        try {
            setLoading(true);
            const { data } = await fetchItemList(params, page);

            let filterArr;
            if (filters.tvSeries === "true") {
                filterArr = data.filter((item: MusinsaItem) => {
                    return item.tvSeries[0] !== "";
                });
            } else if (filters.tvSeries === "false") {
                filterArr = data.filter((item: MusinsaItem) => {
                    return item.tvSeries[0] === "";
                });
            } else {
                filterArr = data;
            }
            setFilterItemList([...filterItemList, ...filterArr]);
            setPage(page);
            setItemList(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (name: string, value: string) => {
        setFilters({ ...filters, [name]: value });
        setFilterItemList([]);
    };

    const initFilters = () => {
        if (JSON.stringify(filters) === JSON.stringify(initFilterState)) {
            fetchData();
            return;
        }
        setFilters(initFilterState);
    };

    const handleDelete = (url: string) => {
        const filterArr = filterItemList.filter(
            (item: MusinsaItem) => item.url !== url
        );
        setFilterItemList(filterArr);
    };

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && loading === false) {
            setPage(Number(page) + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    useEffect(() => {
        fetchData();
    }, [filters.isAlive, filters.gender, filters.tvSeries, page]);

    return (
        <div className="mainContainer">
            <MusinsaHeader />
            <MusinsaFilter
                filters={filters}
                onChange={handleChange}
                onClick={initFilters}
            />
            <MusinsaItemList
                filterItemList={filterItemList}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default MusinsaListPage;
