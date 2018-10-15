import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header.js'
import Meta from './Meta.js'

// using React context API with theme provider, you don't have to pass down the object theme to each child, they can just access it

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

theme.lightGrey = theme.lightgrey

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

// this is used to set global CSS styles that are not scoped to individual components, as it is global the html tag must be specified
injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'radnika_next'
  }
  *, *.:before, *:after {
    box-sizing: inherit
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: ${theme.black};
  }
`;
// note, can't use props theme because inject global isn't inside the themeprovider

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;