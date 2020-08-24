import React from "react";
import CardComponent from "./CardComp";
import { CardDeck } from "react-bootstrap";

function ItemList() {
  let dataList = [
    {
      title: "Playstation 2",
      id: "1",
      price: "$3231.00",
      desc: "Slightly used and rotting",
      bought: false,
    },
    {
      title: "PS Portable",
      id: "1",
      price: "$3231.00",
      desc: "Slightly used and rotting",
      bought: false,
    },
    {
      title: "Vita Dead One",
      id: "1",
      price: "$3231.00",
      desc: "Slightly used and rotting",
      bought: false,
    },
    {
      title: "Xbox Seven",
      id: "1",
      price: "$3231.00",
      desc: "Slightly used and rotting",
      bought: false,
    },
    {
      title: "Hella Cat Six",
      id: "1",
      price: 3231.0,
      desc: "Slightly used and rotting",
      bought: false,
    },
    {
      title: "Playstation Zone ",
      id: "1",
      price: "$3231.00",
      desc: "Slightly used and rotting",
      bought: false,
    },
  ];
  let items = null;

  if (dataList.length > 0) {
    items = dataList.map((item) => (
      <CardComponent
        title={item.title}
        desc={item.desc}
        price={item.price}
      ></CardComponent>
    ));
  }

  return (
    <div>
      <CardDeck>{items}</CardDeck>
    </div>
  );
}
export default ItemList;
