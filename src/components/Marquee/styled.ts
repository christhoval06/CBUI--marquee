import styled, { keyframes, Keyframes } from "styled-components";

const MarqueeKeyframes = keyframes`
0% {
  transform: translateX(0);
  width: 4500vw;
}
100% {
  transform: translateX(-200vw);
  width: 2250vw;
}
`;

const MarqueeTwoKeyframes = keyframes`
0% {
		transform: translateX(-200vw);
		width: 4500vw
	}

	100% {
		transform: translateX(0);
		width: 2250vw
	}
`;

export const animations = {
  Marquee: MarqueeKeyframes,
  MarqueeTwo: MarqueeTwoKeyframes,
};

// Pick<MarqueeListProps, 'duration' | 'animation'>

export interface MarqueeListProps {
  duration: string;
  animation: Keyframes;
}

export const MarqueeListStyled = styled.div<MarqueeListProps>`
  display: flex;
  animation: ${(p) => p.animation} ${(p) => p.duration} linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  &:nth-child(even) {
  }
  &:nth-child(odd) {
  }
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const MarqueeListItemStyled = styled.span`
  width: 25vw;
  text-rendering: geometricPrecision;
`;

export const GenericItemStyled = styled.div`
  display: block;
  background: #222;
  padding: 16px 24px;
  padding-left: 64px;
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
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const MarqueeStyled = styled.div`
  width: 100vw;
  min-height: 40vh;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
  }

  @media screen and (max-width: 541px) {
  }

  @media screen and (max-width: 450px) {
  }

  @media screen and (max-width: 375px) {
  }

  @media screen and (max-width: 320px) {
  }

  @media screen and (max-width: 280px) {
  }

  @media screen and (min-width: 769px) and (max-width: 900px) {
  }
  @media screen and (min-width: 900px) and (max-width: 1200px) {
  }
`;

export const GenericItemIconStyled = styled.span`
  width: 24px;
  height: 24px;
  left: 24px;
  position: absolute;
`;

export const IconStyled = styled.div`
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 12px;
`;
