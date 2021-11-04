import styled from "styled-components"
import ReactMarkdown from "react-markdown";

export const NoteWrapper = styled.div`
  display: flex;
`

export const NoteTextArea = styled.textarea`
  width: 50%;
  height: 100vh;
  padding: 20px;
  font-size: 18px;
  outline: none;
  resize: none;
`

export const NoteMarkDown = styled(ReactMarkdown)`
  width: 50%;
  height: 100vh;
  padding: 20px;
  outline: none;
`