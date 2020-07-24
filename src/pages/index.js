import React, { useState } from "react"
import styled from "@emotion/styled"
import SearchBar from "../components/SearchBar/SearchBar"
import ImageList from "../components/ImageList/ImageList"

const IndexPage = () => {
  const [loading, setLoading] = useState(false)
  const [queryData, setQueryData] = useState(undefined)
  const [query, setQuery] = useState("")

  const searchPhoto = async e => {
    e.preventDefault()
    fetchPhotos()
  }

  const onReturnPress = ({ key }) => {
    if (key === "Enter") fetchPhotos()
  }

  async function fetchPhotos() {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos/?query=${query}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Client-ID uLDPiiX2PrMJxt-F94YQWQvwtp5mxvlt3NxiV62ECwg",
          },
        }
      )
      const { results } = await res.json()
      setQueryData(results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Screen>
      <SearchBar
        loading={loading}
        onClick={searchPhoto}
        onChange={({ target }) => setQuery(target.value)}
        value={query}
        onReturnPress={onReturnPress}
      />
      <ImageList data={queryData} />
    </Screen>
  )
}

const Screen = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  // background-color: red;
`

export default IndexPage
