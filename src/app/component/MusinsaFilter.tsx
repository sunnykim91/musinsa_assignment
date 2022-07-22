import React, { ChangeEvent } from "react";

import "./MusinsaFilter.scss";
import MusinsaSelect from "../shared/MusinsaSelect";
import { MusinsaFilterType, MusinsaOptions } from "../type/interface";

interface Props {
    filters: MusinsaFilterType;
    onChange: (name: string, value: string) => void;
    onClick: () => void;
}

const MusinsaFilter = ({ filters, onChange, onClick }: Props) => {
    const handleChangeselect = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.name, e.target.value);
    };

    const isAliveOptions: MusinsaOptions[] = [
        {
            title: "전체",
            value: "ALL",
        },
        {
            title: "생존인물만",
            value: true,
        },
        {
            title: "고인만",
            value: false,
        },
    ];

    const genderOptions: MusinsaOptions[] = [
        {
            title: "전체",
            value: "ALL",
        },
        {
            title: "남자",
            value: "male",
        },
        {
            title: "여자",
            value: "female",
        },
    ];
    const tvSeriesOptions: MusinsaOptions[] = [
        {
            title: "전체",
            value: "ALL",
        },
        {
            title: "tvSeries있음",
            value: "true",
        },
        {
            title: "tvSeries없음",
            value: "false",
        },
    ];

    return (
        <div className="filterContainer">
            <div>
                <label htmlFor="isAlive">생존여부</label>
                <MusinsaSelect
                    id="isAlive"
                    name="isAlive"
                    className="select"
                    value={filters.isAlive}
                    onChange={handleChangeselect}
                    options={isAliveOptions}
                />
            </div>
            <div>
                <label htmlFor="gender">성별</label>
                <MusinsaSelect
                    id="gender"
                    name="gender"
                    className="select gender"
                    value={filters.gender}
                    onChange={handleChangeselect}
                    options={genderOptions}
                />
            </div>
            <div>
                <label htmlFor="tvSeries">tv시리즈 유/무</label>
                <MusinsaSelect
                    id="tvSeries"
                    name="tvSeries"
                    className="tvSeries"
                    value={filters.tvSeries}
                    onChange={handleChangeselect}
                    options={tvSeriesOptions}
                />
            </div>
            <button className="resetBtn" onClick={onClick}>
                초기화
            </button>
        </div>
    );
};

export default MusinsaFilter;
