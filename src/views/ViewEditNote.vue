<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent" ref="addEditNoteRef" :addNote="handleUpdateClick" :buttonName="buttonName"
            placeholder="Edit note" bgColor="link" label="Edit Note" />
    </div>
</template>
<script setup>
import AddEditNote from '../components/Note/AddEditNote.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes';

const noteContent = ref('');

const buttonName = ref("Save Note");

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleUpdateClick = () => {
    storeNotes.updateNote(route.params.id, noteContent.value);
    router.push('/');
}

</script>