// This hook allows the user to set Dark Mode preference, and the browser remembers preference across browser visits
// Thanks to codingdeft for providing this source code which I've tweaked for my purposes:
// https://www.codingdeft.com/posts/react-dark-mode/#the-usedarkmode-hook
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const key = "isDarkMode";
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, isDarkMode);
    } catch (e) {
      console.error("Error in setting preference");
    }
  });

  console.log("isDarkMode:", isDarkMode);
  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
