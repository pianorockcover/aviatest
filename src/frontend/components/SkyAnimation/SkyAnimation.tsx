import { random } from "lodash";
import React, { FC } from "react";
import { Cloud } from "../icons/Cloud";
import { SkyAnimationWrapper, SkyCloud } from "./styles";

const clouds = new Array(random(5, 15)).fill(null);

/**
 * Генерирует координату облака случайным образом так,
 * чтобы область по середине была свободна под форму
 *
 * @returns {number}
 */
const getRandomPoint = () => {
  let i = random(10, 90);

  while (i > 40 && i < 60) {
    i = random(10, 90);
  }

  return i;
};

/**
 * Компонент для анимации облаков
 */
export const SkyAnimation: FC = () => (
  <SkyAnimationWrapper>
    {clouds.map((_, i) => (
      <SkyCloud
        key={i}
        style={{
          opacity: random(0.2, 0.7),
          top: `${getRandomPoint()}%`,
          left: `${getRandomPoint()}%`,
          zoom: random(0.4, 0.9),
          animationDuration: `${random(0.3, 1)}s`,
        }}
      >
        <Cloud />
      </SkyCloud>
    ))}
  </SkyAnimationWrapper>
);
