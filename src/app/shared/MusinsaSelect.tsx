import React, { ChangeEvent } from "react";
import { MusinsaOptions } from "../type/interface";

interface Props {
    id: string;
    name: string;
    className: string;
    value: any;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: MusinsaOptions[];
}

const MusinsaSelect = ({
    id,
    name,
    className,
    value,
    onChange,
    options,
}: Props) => {
    return (
        <select
            id={id}
            name={name}
            className={className}
            value={value}
            onChange={onChange}
        >
            {options.map((option: MusinsaOptions, index: number) => {
                return (
                    <option key={index} value={option.value}>
                        {option.title}
                    </option>
                );
            })}
        </select>
    );
};

export default MusinsaSelect;
