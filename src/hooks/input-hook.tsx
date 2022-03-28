import { useState } from "react";

export function useInput(initialValue:any) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    change: {
      value,
      onChange: (e: React.FormEvent<HTMLInputElement>) :void => {
        setValue(e.currentTarget.value);
      },
    },
  };
}
