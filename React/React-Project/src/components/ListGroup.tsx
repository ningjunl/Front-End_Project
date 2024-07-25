import React, { Fragment, useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelctedItem: (item: string, index: number) => void;
}
function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const alertClicked = (item: string, index: number) => {
    setSelectedIndex(index);
    props.onSelctedItem(item, index);
  };

  return (
    <Fragment>
      <h1>Hello World</h1>
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => alertClicked(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
