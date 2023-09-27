import React from "react";
import {
  HiHome,
  HiOutlineSquare2Stack,
  HiOutlineComputerDesktop,
  HiOutlineShoppingBag,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiSquare2Stack,
  HiComputerDesktop,
  HiShoppingBag,
  HiCog6Tooth,
} from "react-icons/hi2";
export const findIcon = (nav, close) => {
  switch (nav) {
    case "Home":
      if (close) {
        return <HiHome size={25} />;
      } else {
        return <HiOutlineHome size={25} />;
      }
    case "Collection":
      if (close) {
        return <HiSquare2Stack size={25} />;
      } else {
        return <HiOutlineSquare2Stack size={25} />;
      }
    case "Pokedex":
      if (close) {
        return <HiComputerDesktop size={25} />;
      } else {
        return <HiOutlineComputerDesktop size={25} />;
      }
    case "Store":
      if (close) {
        return <HiShoppingBag size={25} />;
      } else {
        return <HiOutlineShoppingBag size={25} />;
      }
    case "Settings":
      if (close) {
        return <HiCog6Tooth size={25} />;
      } else {
        return <HiOutlineCog6Tooth size={25} />;
      }
  }
};
