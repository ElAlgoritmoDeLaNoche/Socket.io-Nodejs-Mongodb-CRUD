import { loadNotes, onNewNote } from './socket.js'
import { onHandlerSubmit, renderNotes, appendNote } from './ui.js'

onNewNote(appendNote)
loadNotes(renderNotes)

const noteForm = document.querySelector('#noteForm')

noteForm.addEventListener('submit', onHandlerSubmit)