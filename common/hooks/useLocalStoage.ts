import { useState, useEffect } from "react";

export default (
  key: string,
  initialValue: string | null = null
): [string | null, (value: string) => void] => {
  const [item, setItem] = useState<string | null>(null);

  const setLocalStorageItem = (value: string) => {
    setItem(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item == null && initialValue != null) {
      setItem(initialValue);
      setLocalStorageItem(initialValue);
    } else if (item) {
      setItem(JSON.parse(item));
    }
  }, []);

  console.log(item);

  return [item, setLocalStorageItem];
};
