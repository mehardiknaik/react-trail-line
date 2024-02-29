import React from "react";
import "./style.css";
import { TailLineProps } from "./TailLine.types";

const TailLine = ({
  items,
  horizantal = false,
  duration = 1,
  Content,
}: TailLineProps) => {
  return (
    <div className={`trail-line-view${horizantal ? " horizantal" : ""}`}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`trail-line-item trail-line-${item.status} ${
            item?.completed ? "trail-line-item-ani" : ""
          }`}
          style={{
            animationDelay: `${i * duration}s`,
            animationDuration: `${duration}s`,
            //@ts-ignore
            ["--_completed"]: `${item?.completed || 0}%`,
          }}
        >
          <div className={`trail-line-dot-container`}>
            <div
              className={`trail-line-dot${
                item?.becon ? " trail-line-becon" : ""
              }`}
            />
            <div className="trail-line-line-container">
              <div
                className="trail-line-line"
                style={{
                  animationDelay: `${i * duration}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            </div>
          </div>
          <div className="trail-line-info-container">
            {Content && <Content {...item} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TailLine;
