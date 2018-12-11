import { css } from 'styled-components'

import { baseFontSize, baseLineHeight, transitionSpeed } from './variables'

export const clearfix = () => css`
  zoom: 1;

  &:before,
  &:after {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
`

export const fontSize = (size) => {
  const fontSizeNum = parseInt(size)
  const baseFontSizeNum = parseInt(baseFontSize)
  const baseLineHeightNum = parseInt(baseLineHeight)

  return css`
    font-size: ${fontSizeNum}px;
    font-size: ${fontSizeNum / baseFontSizeNum}rem;
    line-height: ${
      Math.ceil(fontSizeNum / baseLineHeightNum) *
      (baseLineHeightNum / fontSizeNum)
    };
  `
}

export const media = (point, feature = 'min-width') => (...content) => css`
  @media (${feature}: ${point / 16}em) {
    ${css(...content)};
  }
`

export const transitionAll = () => css`
  -webkit-transition: ${transitionSpeed};
  -moz-transition: ${transitionSpeed};
  -ms-transition: ${transitionSpeed};
  -o-transition: ${transitionSpeed};
  transition: ${transitionSpeed};
`
