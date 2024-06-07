import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/styles.css";
import { Button, Row } from "antd";

const Test1: React.FC = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);
  const handleNextClick = () => {
    setItems(prevItems => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };
  const handlePreviousClick = () => {
    setItems(prevItems => {
      const last = prevItems[prevItems.length - 1];
      const rest = prevItems.slice(0, prevItems.length - 1);
      return [last, ...rest];
    });
  };

  const handleItemClick = (index : number) => {
    setItems(prevItems => {
      const itemToMove = prevItems[index];
      const rest = prevItems.filter((_, i) => i !== index);
      const randomIndex = Math.floor(Math.random() * rest.length);
      const newItems = [
        ...rest.slice(0, randomIndex),
        itemToMove,
        ...rest.slice(randomIndex)
      ];
      return newItems;
    });
  };
  return (
    <div className={"container"}>
      <h1> {t("titleTest1")}</h1>
      <Row className="handle-bar">
        <Button className="btn-handle" onClick={handleNextClick}>
          <div className="triangle left"></div>
          <div>
            <p>{t("moveShape")}</p>
          </div>
        </Button>
        <Button className="btn-handle" >
          <Row className="icon-btn">
            <div className="triangle up"></div>
            <div className="triangle down"></div>
          </Row>
          <div className="label-btn">
            <p>{t("movePosition")}</p>
          </div>
        </Button>
        <Button className="btn-handle" onClick={handlePreviousClick}>
          <div>
            <p>{t("moveShape")}</p>
          </div>
          <div className="triangle right"></div>
        </Button>
      </Row>
      <Row className="block-item">
        {items.map((item, index) => (
          <Button className="btn-item" onClick={()=> {handleItemClick(index)}}>
            <div key={`item-${index}`} className={`${item}`}></div>
          </Button>
        ))}
      </Row>
      {/* <Row className="block-item start">
        <Button className="btn-item">
          <div className="trapezoid"></div>
        </Button>
        <Button className="btn-item">
          <div className="rectangle"></div>
        </Button>
        <Button className="btn-item">
          <div className="parallelogram"></div>
        </Button>
      </Row> */}
    </div>
  );
};
export default Test1;
