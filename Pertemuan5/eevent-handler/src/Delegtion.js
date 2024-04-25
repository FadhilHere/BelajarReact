import React from "react";

const ItemList = () => {
  const handleClick = (event) => {
    const itemId = event.target.dataset.itemId;
    console.log(`Clicked item with ID: ${itemId}`);
  };

  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ];

  return (
    <ul onClick={handleClick}>
      {items.map((item) => (
        <li key={item.id} data-item-id={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
