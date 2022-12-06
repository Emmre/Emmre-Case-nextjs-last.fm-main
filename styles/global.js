import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .disabled {
    pointer-events: none;
    cursor: default;
    text-decoration: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: var(--background);
    .card {
      background-color: var(--main);
      h3 {
        background-color: var(--heading);
        color: var(--text);
      }
      p {
        color: var(--text);
      }
    }
  }
  

`

export default GlobalStyle

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  position: sticky;
  top: 0;
  background-color: #fff;
  text-align: center;
  padding-bottom: 16px;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
export const Content = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const ToggleThemeButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  background-color: var(--main);
  color: var(--text);
  border: 1px solid var(--text);
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--heading);
  }
`
