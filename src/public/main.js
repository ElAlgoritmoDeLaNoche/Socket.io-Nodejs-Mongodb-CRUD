import { loadNotes } from './socket.js'
import { onHandlerSubmit } from './ui.js'

loadNotes()

const noteForm = document.querySelector('#noteForm')

noteForm.addEventListener('submit', onHandlerSubmit)