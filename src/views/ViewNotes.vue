<template>
    <div class="notes">
        <AddEditNote v-model="newNote" ref="addEditNoteRef" :addNote="addNote" :buttonName="buttonName" />
        <Note v-for=" note  in  storeNotes.notes " :key="note.id" :note="note" @deleteClicked="deleteNote" />
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import Note from '@/components/Note/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '../components/Note/AddEditNote.vue';

/*
store
*/
const storeNotes = useStoreNotes();

/*
    notes
*/
const newNote = ref("");
const addEditNoteRef = ref(null);
const buttonName = ref("Add Note")

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = '';
    addEditNoteRef.value.focusTextarea();
}

const deleteNote = idToDelete => {
    storeNotes.deleteNote(idToDelete);
}
</script>