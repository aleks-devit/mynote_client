import styled from "styled-components"

export const MainLayoutWrapperComponent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainLayoutHeaderComponent = styled.div`
  height: 50px;
  background-color: lightgray;
  `

export const MainLayoutRowComponent = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`

export const MainLayoutLeftSideComponent = styled.div`
  width: 300px;
  border-right: 3px solid black;
`

export const MainLayoutFooterComponent = styled.div`
  height: 50px;
  background-color: lightgray;
  `