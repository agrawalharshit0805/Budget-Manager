import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width,height)

    const moveOrb = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(${width/1.2}px, ${height/2}px);
    }
    100%{
        transform: translate(0, 0);
    }
`;

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #71C9CE 0%, #A6E3E9 100%);
        filter: blur(400px);
        animation: ${moveOrb} 10s alternate linear infinite;

    `
  return (
    <OrbStyled>

    </OrbStyled>
  )
}

export default Orb

// orb is the background component that is being animated
// Here's a breakdown of what each keyframe does :
// 0%: At the beginning (0% of the animation's duration), the orb starts at its original position (0,0), which is the top-left corner of its containing element.
// 50%: At the midpoint (50% of the animation's duration), the orb is moved to a new position. The translate function is used to specify the horizontal and vertical translation. ${width}px and ${height}px indicate that the orb is moved horizontally by the value of width pixels and vertically by the value of height pixels. The actual values of width and height would depend on the context in which this code is used.
// 100%: At the end (100% of the animation's duration), the orb returns to its original position (0,0).