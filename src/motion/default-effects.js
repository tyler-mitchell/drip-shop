import * as React from "react";
import { motion } from "framer-motion";
export const Indicator = ({
  x,
  y,
  width,
  height,
  color = "#6cc7f8",
  style,
  ...rest
}) => {
  return (
    <div
      {...rest}
      style={{
        width: 200,
        height: 16,
        borderRadius: 16,
        backgroundColor: "rgba(255, 255, 255, .1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 4,
        margin: "1em 0",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 999,
        }}
      >
        <motion.div
          style={{
            x: x || 0,
            y: y || 0,
            width: width || "100%",
            height: height || "100%",
            backgroundColor: color,
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
};
function cubeEffect(info) {
  const { normalizedOffset, direction } = info;
  const isHorizontal = direction === "horizontal";
  return {
    style: {
      originX: normalizedOffset < 0 ? 1 : 0,
      originY: normalizedOffset < 0 ? 1 : 0,
      rotateY: isHorizontal ? clamp(normalizedOffset * 90, -90, 90) : 0,
      rotateX: isHorizontal ? 0 : clamp(normalizedOffset * 90, -90, 90),
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    },
  };
}
function coverflowEffect(info) {
  const { normalizedOffset, direction } = info;
  const isHorizontal = direction === "horizontal";
  return {
    style: {
      rotateY: isHorizontal ? clamp(normalizedOffset * -45, -45, 45) : 0,
      rotateX: isHorizontal ? 0 : clamp(normalizedOffset * -45, -45, 45),
      originX: isHorizontal ? (normalizedOffset < 0 ? 1 : 0) : 0.5,
      originY: isHorizontal ? 0.5 : normalizedOffset < 0 ? 0 : 1,
      z: -Math.abs(normalizedOffset),
      scale: 1 - Math.abs(normalizedOffset / 10),
    },
  };
}
function pileEffect(info) {
  const { normalizedOffset, index, direction } = info;
  const isHorizontal = direction === "horizontal";
  const offset = `calc(${Math.abs(normalizedOffset) * 100}% - ${
    Math.abs(normalizedOffset) * 8
  }px)`;
  return {
    style: {
      x: normalizedOffset < 0 && isHorizontal ? offset : 0,
      y: normalizedOffset < 0 && !isHorizontal ? offset : 0,
      scale: normalizedOffset < 0 ? 1 - Math.abs(normalizedOffset) / 50 : 1,
      zIndex: index,
    },
  };
}
function wheelEffect(info) {
  const { normalizedOffset, direction, size } = info;
  const isHorizontal = direction === "horizontal";
  const rotateX = isHorizontal ? 0 : normalizedOffset * -20;
  const rotateY = isHorizontal ? normalizedOffset * 20 : 0;
  const y = isHorizontal ? 0 : normalizedOffset * -size.height;
  const x = isHorizontal ? normalizedOffset * -size.width : 0;
  const z = ((isHorizontal ? size.width : size.height) * 18) / (2 * Math.PI);
  return {
    style: {
      opacity: 1 - Math.abs(normalizedOffset) / 4,
      transform: `translate(${x}px, ${y}px) translateZ(-${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${z}px)`,
    },
  };
}
export const defaultEffects = {
  cube: cubeEffect,
  wheel: wheelEffect,
  pile: pileEffect,
  coverflow: coverflowEffect,
};
const clamp = (num, min, max) => Math.max(Math.min(num, max), min);
