import { useState } from "react";
const useIsVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }
  return [isVisible, toggleVisible];
};

export default useIsVisible;
