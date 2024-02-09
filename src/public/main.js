import { loadNotes } from './socket.js'
import { onHandlerSubmit, renderNotes } from './ui.js'

loadNotes(renderNotes)

const noteForm = document.querySelector('#noteForm')

noteForm.addEventListener('submit', onHandlerSubmit)