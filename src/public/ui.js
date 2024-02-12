import { saveNote, deleteNote, getNoteById, updateNote } from './socket.js'

const notesList = document.querySelector('#note')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

let savedId = ''

const noteUI = (note) => {
	const div = document.createElement('div')
	div.innerHTML = `
		<div style='border: 1px solid black; padding: 10px; margin-bottom: 10px;'>
			<h2>${note.title}</h2>
			<p>${note.description}</p>
			<div>
				<button class='delete' data-id='${note._id}'>Delete</button>
				<button class='update' data-id='${note._id}'>Update</button>
			</div>
		</div>
	`

	const btnDelete = div.querySelector('.delete')
	const btnUpdate = div.querySelector('.update')

	btnDelete.addEventListener('click', () => deleteNote(btnDelete.dataset.id))
	btnUpdate.addEventListener('click', () => getNoteById(btnUpdate.dataset.id))

	return div
}

export const renderNotes = (notes) => {
	notesList.innerHTML = ''
	notes.forEach(note => notesList.append(noteUI(note)))
}

export const fillForm = (note) => {
	title.value = note.title
	description.value = note.description
	savedId = note._id
}

export const onHandlerSubmit = (e) => {
	e.preventDefault()
	if (savedId) {
		updateNote(savedId, title.value, description.value)
	} else {
		saveNote(title.value, description.value)
	}

	savedId = ''
	title.value = ''
	description.value = ''
}

export const appendNote = (note) => {
	notesList.append(noteUI(note))
}