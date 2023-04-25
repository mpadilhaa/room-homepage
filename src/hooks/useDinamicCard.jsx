import { dinamicProducts } from "../data";
import { useState } from "react";

const useDinamicCard = () => {
  const [dinamicIndex, setDinamicIndex] = useState(0);

  const nextProduct = () => {
    if (dinamicIndex === dinamicProducts.length - 1) return;

    setDinamicIndex(dinamicIndex + 1);
  };

  const previousProduct = () => {
    if (dinamicIndex === 0) return;

    setDinamicIndex(dinamicIndex - 1);
  };

  return {
    dinamicIndex,
    nextProduct,
    previousProduct,
    dinamicProducts,
  };
};

export default useDinamicCard;
