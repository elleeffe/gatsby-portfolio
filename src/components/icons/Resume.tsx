import React from 'react';
import styled from 'styled-components';

type SvgProps = {
  className?: string;
}

function Resume({ className = '' }: SvgProps) {
  return (
    <Svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </Svg>
  );
}

export default Resume;

const Svg = styled.svg`
  width: 20px;
  stroke: #000;
  fill: none;
  transition: all 100ms ease;
`;
