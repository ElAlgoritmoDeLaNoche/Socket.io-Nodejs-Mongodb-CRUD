import { saveNote } from './socket.js'

const notesList = document.querySelector('#note')

const noteUI = note => {
	const div = document.createElement('div')
	div.innerHTML = `
		<div style="border: 1px solid black; padding: 10px; margin-bottom: 10px;">
			<h2>${note.title}</h2>
			<p>${note.description}</p>
			<div>
				<button>Delete</button>
				<button>Update</button>
			</div>
		</div>
	`
	return div
}

export const renderNotes = notes => {
	notes.forEach(note => notesList.append(noteUI(note)))
}

export const onHandlerSubmit = (e) => {
	e.preventDefault()

	saveNote(
		noteForm['title'].value,
		noteForm['description'].value
	)
}