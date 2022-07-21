import React from "react";
import { Button } from "@mui/material";

import "./MusinsaFilter.scss";

interface Props {
    filters: any;
    onChange: (name: string, value: string) => void;
    onClick: () => void;
}

const MusinsaFilter = ({ filters, onChange, onClick }: Props) => {
    const handleChangeselect = (e: any) => {
        onChange(e.target.name, e.target.value);
    };

    return (
        <div className="filterContainer">
            <select
                name="isAlive"
                className="select"
                value={filters.isAlive}
                onChange={handleChangeselect}
            >
                <option value="true">생존인물만</option>
                <option value="false">고인만</option>
            </select>
            <select
                name="gender"
                className="select gender"
                value={filters.gender}
                onChange={handleChangeselect}
            >
                <option value="male">남자</option>
                <option value="female">여자</option>
            </select>
            <select
                name="tvSeries"
                className="select"
                value="haveSeries"
                onChange={handleChangeselect}
            >
                <option value="haveSeries">tvSeries있음</option>
                <option value="dontHaveSeries">tvSeries없음</option>
            </select>
            <Button
                className="resetBtn"
                onClick={onClick}
                variant="contained"
                color="primary"
            >
                초기화
            </Button>
        </div>
    );
};

export default MusinsaFilter;
