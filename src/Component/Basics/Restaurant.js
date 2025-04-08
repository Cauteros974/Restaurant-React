import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const unique = [
  ...new Set(
    Menu.map((curr) => {
      return curr.category;
    })
  ),
  "All",
];
console.log(unique);

function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(unique);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedData = Menu.filter((currentEle) => {
      return currentEle.category === category;
    });
    setMenuData(updatedData);
  };
  return (
    <>
      <h1 className="navbar"> Restaurant</h1>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
