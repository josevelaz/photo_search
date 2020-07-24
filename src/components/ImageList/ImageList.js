import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const ImageList = props => {
  const { data } = props
  if (data)
    return (
      <Container>
        {data.map(({ urls, links }) => (
          <Inner href={links.html} target="_blank" css={sizeSelector()}>
            <Bottom src={urls.raw} />
          </Inner>
        ))}
        <Inner />
      </Container>
    )
  else return null
}

function sizeSelector() {
  let size = [
    // horizontal
    css`
      grid-column: span 4;
      grid-row: span 2;
    `,
    // Vertical
    css`
      grid-row: span 2;
      grid-column: span 4;
    `,
    //Big
    css`
      grid-column: span 4;
      grid-row: span 4;
    `,
    // Single
    css`
      grid-column: span 2;
      grid-row: span 2;
    `,
  ]

  let randomItem = size[Math.floor(Math.random() * size.length)]

  return randomItem
}

const Bottom = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.35);
`

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
`

const Inner = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`

export default React.memo(ImageList)
