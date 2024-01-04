import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectOption } from '../types';

interface SelectDropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  value?: string;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  label,
  className,
  options,
  value,
  onChange,
  ...props
}) => {
  const stopPropagation = (
    e: React.MouseEvent<HTMLSelectElement | HTMLOptionElement>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col gap-1 mb-3">
      <label className="text-gray-400 text-sm">{label}:</label>
      <select
        className={twMerge(
          `text-sm outline-none bg-navy-600 border border-navy-400 text-white p-1 rounded-md px-2 min-w-[230px] ${className}`
        )}
        value={value || ''}
        onChange={onChange}
        onClick={stopPropagation}
        {...props}
      >
        <option
          disabled
          selected
          value=""
          className="text-xs lowercase"
          onClick={stopPropagation}
        >
          {options.length == 0 ? <>&larr; connect dataset...</> : label}
        </option>
        {options?.map((option) => (
          <option
            value={option.value || option.text}
            className="text-xs"
            key={option.text}
            onClick={stopPropagation}
          >
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
