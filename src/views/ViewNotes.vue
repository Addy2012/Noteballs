<template>
    <div class="notes">
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea v-model="newNote" class="textarea" placeholder="Add a new note" v-autofocus
                        ref="newNoteRef" />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click="addNote" class="button is-link has-background-success" :disabled="!newNote">Add New
                        Note</button>
                </div>
            </div>
        </div>

        <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote" />

    </div>
</template>
<script setup>
import Note from '@/components/Note/Note.vue';
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus'
/*
    notes
*/
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
    {
        id: 'id1',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum consectetur quaerat a nesciunt, libero quae similique ipsa hic magni modi porro rerum corporis officiis minus odio debitis, eligendi sunt."
    },
    {
        id: 'id2',
        content: "This is shorter notes"
    },
]);

const addNote = () => {
    let currentDate = new Date().getTime(), id = currentDate.toString();

    let note = {
        id,
        content: newNote.value
    }
    notes.value.unshift(note);
    newNote.value = '';
    newNoteRef.value.focus();
}

const deleteNote = idToDelete => {
    notes.value = notes.value.filter(note => { return note.id !== idToDelete })
}
</script>