import React from "react";
const itemList = [
  {
    name: "item01",
    id: "1",
  },
  {
    name: "item02",
    id: "2",
  },
  {
    name: "item03",
    id: "3",
  },
];

const getItem = (id: string) => {
  const selectedItem = itemList.find((item) => item.id === id);
  return {
    name: selectedItem?.name,
    id: selectedItem?.id,
  };
};

export const preload = (id: string) => {
  void getItem(id);
};

export default async function Item({ id }: { id: string }) {
  return <div>item</div>;
}
