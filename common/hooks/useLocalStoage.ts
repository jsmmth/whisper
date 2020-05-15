import { useState, useEffect } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: string | null = null
) {
  const [item, setItem] = useState<string | null>(null);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item == null && initialValue != null) {
      setLocalStorageItem(initialValue);
    } else if (item) {
      setItem(JSON.parse(item));
    }
  }, []);

  const setLocalStorageItem = (value: string) => {
    setItem(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [item, setLocalStorageItem];
}
