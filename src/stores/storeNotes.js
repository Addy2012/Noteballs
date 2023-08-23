import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum consectetur quaerat a nesciunt, libero quae similique ipsa hic magni modi porro rerum corporis officiis minus odio debitis, eligendi sunt."
                },
                {
                    id: 'id2',
                    content: "This is shorter notes of testing"
                }
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(), id = currentDate.toString();
            let note = {
                id,
                content: newNoteContent
            }
            this.notes.unshift(note);
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => { return note.id !== idToDelete })
        },
        updateNote(id, content) {
            let index = this.notes.findIndex(note => note.id === id);
            this.notes[index].content = content;
        }
    },
    getters: {
        getNoteContent: (state) => (noteId) => state.notes.find(note => note.id === noteId && note.content).content

        ,
        totalNotesCount: (state) => state.notes.length,
        totalCharactersCounts: (state) => state.notes.reduce((initial, note) => {
            return initial + note.content.length;
        }, 0)
    }
})

