import React from "react";
import styled from "styled-components";

const MarqueeStyled = styled.div`
  width: 100vw;
  min-height: 40vh;
  overflow: hidden;
  box-sizing: border-box;
`;

const MarqueeListStyled = styled.div`
  display: flex;
  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeListItemStyled = styled.span`
  width: 25vw;
  text-rendering: geometricPrecision;
`;

const GenericItemStyled = styled.div`
  display: block;
  transition: ${MarqueeStyled} 2s ease-out;
  background: #222;
  /* padding: 16px 24px; */
  /* padding-left: 64px; */
  box-shadow: inset 0 -2px 0 rgba(39, 38, 58, 0.84),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 40px;
  font-size: 16px;
  line-height: 24px;
  white-space: nowrap;
  position: relative;
  color: #fff;
  margin: 0 16px;
  flex-shrink: 0;
  justify-content: space-between;
  /* align-items: center; */
  &:hover {
    cursor: pointer;
  }
`;

const GenericItemIconStyled = styled.span`
  width: 24px;
  height: 24px;
  left: 24px;
  position: relative;
`;

const IconStyled = styled.div`
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 12px;
`;

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

export function MarqueeList() {
  return (
    <MarqueeListStyled>
      <MarqueeListItem>
        <GenericItem />
      </MarqueeListItem>
      <MarqueeListItem>
        <GenericItem />
      </MarqueeListItem>
      <MarqueeListItem>
        <GenericItem />
      </MarqueeListItem>
    </MarqueeListStyled>
  );
}

export function Marquee() {
  return (
    <MarqueeStyled>
      <MarqueeList />
      <MarqueeList />
      <MarqueeList />
    </MarqueeStyled>
  );
}

export default Marquee;
