import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const ImageList = props => {
  const { data } = props
  if (data)
    return (
      <Container>
        {data.map(({ urls, links, description }) => (
          <Inner href={links.html} target="_blank" css={sizeSelector()}>
            <Bottom src={urls.regular} alt={description} />
          </Inner>
        ))}
        <Inner />
      </Container>
    )
  else
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>
          There are currently no images. Try using the search bar to find
          something!
        </h2>
      </div>
    )
}

function sizeSelector() {
  let size = [
    // horizontal
    css`
      grid-column: span 3;
      grid-row: span 2;
    `,
    // Vertical
    css`
      grid-row: span 2;
      grid-column: span 3;
    `,
    //Big
    css`
      grid-column: span 3;
      grid-row: span 3;
    `,
    // Single
    css`
      grid-column: span 2;
      grid-row: span 2;
    `,
    css`
      grid-column: span 1;
      grid-row: span 1;
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
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
`

const Inner = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  transition: 0.25s;
  filter: grayscale(40%);
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`

export default React.memo(ImageList)
