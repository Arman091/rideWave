import 'react-phone-number-input/style.css';
import PhoneInput, { Value,Country, isValidPhoneNumber} from 'react-phone-number-input';
import { useState } from 'react';
import { cva } from 'class-variance-authority';
interface InputProps {
  value: string;
  onChange: (value: Value) => void;
  defaultCountry?: Country;
  inputClass?:string
}

export default function CustomPhoneInput(props: InputProps) {
  const [focused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const { value, onChange,defaultCountry,inputClass} = props;

  // validate the Phone Number Value
  const handleChange = (phone: Value) => {
     onChange(phone); // Validate on each change
    if (phone) {
      setIsValid(isValidPhoneNumber(phone));
    } else {
      setIsValid(null); // empty input
    }
  };

  const inputStyles = cva('px-3 py-2 rounded border', {
    variants: {
      focused: {
        true: 'border-gray-700',
        false: 'border-gray-300',
      },
      isValid:{
        true: 'border-black',
        false: 'border-red-500'
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      isValid: false,
      size: 'medium',
    },
  });

  return (
    <div>
    <PhoneInput
      international
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      defaultCountry={defaultCountry}
      limitMaxLength={true}
      countryCallingCodeEditable={false}
      value={value}
      className={`${inputClass} ${inputStyles({
        focused,
        isValid: isValid ?? false
      })}`}
      onChange={handleChange}
      placeholder="Enter phone number"
    />   
    {isValid === false && <p style={{ color: 'red' }}>Invalid phone number</p>}
    <style>
      {
        `
        .PhoneInputInput:focus {
          outline: none !important;          
          box-shadow: none !important;       
        }
        

        `
      }
    </style>
  </div>
  );
}
