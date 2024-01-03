import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectOption } from '../types';

interface SelectDropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  defaultSelectText?: string;
  options: SelectOption[];
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  label,
  defaultSelectText,
  className,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className="text-gray-400 text-sm">{label}:</label>
      <select
        className={twMerge(
          `text-sm outline-none bg-navy-600 border border-navy-400 text-white p-1 rounded-md px-2 min-w-[230px] ${className}`
        )}
        onChange={onChange}
      >
        <option selected disabled className="text-xs lowercase">
          {defaultSelectText ? defaultSelectText : label}
        </option>
        {options?.map((option) => (
          <option
            value={option.value || option.text}
            className="text-xs"
            key={option.text}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
