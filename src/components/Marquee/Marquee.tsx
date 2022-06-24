import React from "react";
import {
  MarqueeStyled,
  MarqueeListStyled,
  MarqueeListItemStyled,
  GenericItemStyled,
  GenericItemIconStyled,
  IconStyled,
  MarqueeListProps,
  animations,
} from "./styled";

function GenericItem() {
  return (
    <GenericItemStyled>
      <GenericItemIconStyled>
        <IconStyled />
      </GenericItemIconStyled>
      Generic Item
    </GenericItemStyled>
  );
}

interface MarqueeListItemProps {
  children: React.ReactNode | string;
}

function MarqueeListItem({ children }: MarqueeListItemProps) {
  return <MarqueeListItemStyled>{children}</MarqueeListItemStyled>;
}

export function MarqueeList({ animation, duration }: MarqueeListProps) {
  return (
    <MarqueeListStyled animation={animation} duration={duration}>
      {Array.from(new Array(14)).map((_: undefined, index: number) => (
        <MarqueeListItem key={`marquee-list--item-${index}`}>
          <GenericItem />
        </MarqueeListItem>
      ))}
    </MarqueeListStyled>
  );
}

export function Marquee() {
  return (
    <MarqueeStyled>
      <MarqueeList animation={animations.Marquee} duration="42s" />
      <MarqueeList animation={animations.MarqueeTwo} duration="34s" />
      <MarqueeList animation={animations.Marquee} duration="28s" />
    </MarqueeStyled>
  );
}

export default Marquee;
