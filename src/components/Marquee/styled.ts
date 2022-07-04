import styled, { keyframes } from "styled-components";

import { device, deviceMax, deviceMin } from "./config";

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

const MarqueeSMKeyframes = keyframes`
0% {
  transform: translateX(0);
  width: 100vw;
}
100% {
  transform: translateX(-200vw);
  width: 300vw;
}
`;

const MarqueeTwoSMKeyframes = keyframes`
0% {
		transform: translateX(-200vw);
		width: 100vw
	}

	100% {
		transform: translateX(0);
		width: 300vw
	}
`;

export const MarqueeStyled = styled.div`
  min-height: 40vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;

  @media ${device.laptop} {
    width: 100%;
  }
`;

// Pick<MarqueeListProps, 'duration' | 'animation'>

export interface MarqueeListProps {
  duration: string;
}

export const MarqueeListStyled = styled.div<MarqueeListProps>`
  display: flex;

  &:nth-child(even) {
    animation: ${MarqueeKeyframes} ${(p) => p.duration} linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }

  &:nth-child(odd) {
    animation: ${MarqueeTwoKeyframes} ${(p) => p.duration} linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }

  &:not(:first-child) {
    margin-top: 30px;
  }

  @media ${device.laptop} {
    width: 200%;
  }

  @media ${deviceMin.mobileXS} and ${deviceMax.mobileL} {
    &:nth-child(even) {
      animation: ${MarqueeSMKeyframes} ${(p) => p.duration} linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    }

    &:nth-child(odd) {
      animation: ${MarqueeTwoSMKeyframes} ${(p) => p.duration} linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    }
  }
`;

export const MarqueeListItemStyled = styled.span`
  width: 25vw;
  text-rendering: geometricPrecision;

  @media ${device.laptopL} {
    width: 20vw;
  }

  @media ${device.laptop} {
    width: 25vw;
  }

  @media ${device.tablet} {
    width: 33vw;
  }

  @media ${device.tabletS} {
    width: 50vw;
  }

  @media ${device.mobileL} {
    width: 64vw;
  }

  @media ${device.mobileM} {
    width: 70vw;
  }

  @media ${device.mobileS} {
    width: 80vw;
  }

  @media ${device.mobileXS} {
    width: 90vw;
  }
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
