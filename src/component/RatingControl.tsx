/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BaseSyntheticEvent, useCallback, useState } from "react";

export function RatingControl({
  char = "★",
  charStyles,
  charsAmount = 5,
  containerStyles,
  enabled = true,
  fontsize = "24px",
  onClick,
  primaryColor,
  secondaryColor,
  value = 0,
}: {
  char?: string;
  charStyles?: Record<string, string>;
  charsAmount?: number;
  containerStyles?: Record<string, string>;
  enabled?: boolean;
  fontsize?: string;
  onClick?: (rate: number) => void;
  primaryColor?: string;
  secondaryColor?: string;
  value?: number;
}) {
  const styles = {
    RatingControl: css({
      display: "flex",
      width: "fit-content",
      ...containerStyles,
    }),
    charItem: css({
      fontSize: fontsize,
      cursor: "pointer",
      "&.on": {
        color: secondaryColor ?? "#ffc800",
      },
      "&.off": {
        color: primaryColor ?? "#9d9d9d",
      },
      ...charStyles,
    }),
  };

  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  const handleClick = useCallback(
    (event: BaseSyntheticEvent) => {
      if (enabled) {
        setRating(parseInt(event.target.dataset.index));
        onClick && onClick(event.target.dataset.index);
      }
    },
    [enabled, onClick]
  );

  const handleMouseEnter = useCallback(
    (event: BaseSyntheticEvent) => {
      enabled && setHover(event.target.dataset.index);
    },
    [enabled]
  );

  const handleMouseLeave = useCallback(() => {
    enabled && setHover(rating);
  }, [rating, enabled]);

  return (
    <div css={styles.RatingControl}>
      {[...Array(charsAmount)].map((_, index) => {
        index += 1;
        return (
          <span
            key={index}
            data-index={index}
            css={styles.charItem}
            className={`${index <= (hover || rating) ? "on" : "off"} ${
              styles.charItem
            }`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
