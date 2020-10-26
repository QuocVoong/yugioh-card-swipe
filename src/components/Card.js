import React                     from "react";
import { animated, interpolate } from "react-spring";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${data[i]})`
        }}

      >
      </animated.div>
    </animated.div>
  );
};


export default Card;
