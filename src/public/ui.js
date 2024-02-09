import { saveNote } from './socket.js'

export const onHandlerSubmit = (e) => {
  e.preventDefault()

  saveNote(
    noteForm['title'].value,
    noteForm['description'].value
  )
}