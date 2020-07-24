import React, { useState } from "react"
import styled from "@emotion/styled"
import SearchBar from "../components/SearchBar/SearchBar"
import ImageList from "../components/ImageList/ImageList"

const IndexPage = () => {
  const [loading, setLoading] = useState(false)
  const [queryData, setQueryData] = useState(undefined)
  const [query, setQuery] = useState("")

  const searchPhoto = e => {
    e.preventDefault()
    fetchPhotos()
  }

  const onReturnPress = ({ key }) => {
    if (key === "Enter") fetchPhotos()
  }

  async function fetchPhotos() {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos/?query=${query}&per_page=25`,
        {
          method: "GET",
          headers: {
            Authorization: process.env.GATSBY_UNSPLASH_API_KEY,
          },
        }
      )
      const { results } = await res.json()
      setQueryData(results)
      setLoading(false)
    } catch (error) {
      setLoading(false)
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
  padding: 100px 30px;
  // background-color: red;
`

export default IndexPage
