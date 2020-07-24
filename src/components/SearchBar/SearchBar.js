import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import SearchIcon from "../../assets/search.svg"
import GridLoader from "react-spinners/GridLoader"

const SearchBar = props => {
  return (
    <Container>
      <Input
        value={props.value}
        onChange={props.onChange}
        type="text"
        onKeyPress={props.onReturnPress}
      />
      <Button onClick={props.onClick} disabled={props.loading}>
        {props.loading ? (
          <GridLoader loading size={6} color="#777777" />
        ) : (
          <SearchIcon css={IconStyles} />
        )}
      </Button>
    </Container>
  )
}

const IconStyles = {
  fill: "#777777",
  transform: "rotate(90deg)",
  transition: "0.15s",
  width: "auto",
  height: "80%",
  transformOrigin: "50% 52%",
  "&:hover": {
    fill: "#000",
    transform: "rotate(0deg) scale(1.1)",
  },
  "&:active": {
    transform: "scale(0.9)",
    fill: "#E62929",
  },
}

const Button = styled.button`
  height: 100%;
  width: 3em;
  border: 0;
  background: none;
  &:focus {
    outline: 0;
  }
`

const Input = styled.input`
  flex: 1;
  border: 0;
  &:focus {
    outline: 0;
  }
`

const Container = styled.div`
  display: flex;
  height: 2em;
  width: 25em;
  background: white;
  border: 0;
  border-radius: 25px;
  padding: 0.5em 1em;
  position: fixed;
  z-index: 10;
  top: 1em;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.35);
`

export default SearchBar
