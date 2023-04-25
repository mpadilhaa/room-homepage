import { useState } from "react";

const useActiveMobile = () => {
  const [active, setActive] = useState(false);

  const toglleMenu = () => {
    setActive(!active);
  };

  return {
    active,
    toglleMenu,
  };
};

export default useActiveMobile;
