import React from "react";
import { SelectInput } from "../SelectInput";
import { useForm } from "react-hook-form";

export const FilterBySelect = ({ filters = [], onFilterChange }) => {
  const { control, handleSubmit } = useForm();
  return (
    <div className="p-2 bg-[#FCFCFC] rounded-lg shadow-sm mb-2">
      <h3 className=" font-semibold mb-2">Filter By</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
        {filters.map(({ label, name, options }, index) => (
          <SelectInput
            key={index}
            label={label}
            name={name}
            control={control}
            rules={{ required: "Category is required" }}
            options={options}
            onChange={(e) => onFilterChange(name, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
};
