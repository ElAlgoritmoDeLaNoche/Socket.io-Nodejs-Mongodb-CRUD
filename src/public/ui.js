import { saveNote, deleteNote } from './socket.js'

const notesList = document.querySelector('#note')

const noteUI = (note) => {
	const div = document.createElement('div')
	div.innerHTML = `
		<div style='border: 1px solid black; padding: 10px; margin-bottom: 10px;'>
			<h2>${note.title}</h2>
			<p>${note.description}</p>
			<div>
				<button class='delete' data-id='${note._id}'>Delete</button>
				<button>Update</button>
			</div>
		</div>
	`

	const btnDelete = div.querySelector('.delete')
	btnDelete.addEventListener('click', (e) => deleteNote(btnDelete.dataset.id))

	return div
}

export const renderNotes = (notes) => {
	notesList.innerHTML = ''
	notes.forEach(note => notesList.append(noteUI(note)))
}

export const onHandlerSubmit = (e) => {
	e.preventDefault()

	saveNote(
		noteForm['title'].value,
		noteForm['description'].value
	)
}

export const appendNote = (note) => {
	notesList.append(noteUI(note))
}