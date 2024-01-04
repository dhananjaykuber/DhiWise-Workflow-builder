import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputBox = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `text-sm outline-none bg-navy-600 border border-navy-400 text-white p-1 rounded-md px-3 min-w-[230px] ${className} mb-2`
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

export default InputBox;
