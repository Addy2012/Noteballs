<template>
    <div class="notes">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeCounts }}</td>
                </tr>
                <tr>
                    <td>Number of Characters of all notes</td>
                    <td>{{ characterCount }}</td>
                </tr>
            </tbody>
        </table>
        <input class="input" type="text" placeholder="Do you like noteballs?" v-autofocus v-model="likeNoteBall" />
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStoreNotes } from '../stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const likeNoteBall = ref('');

const storeCounts = computed(() => {
    return useStoreNotes().totalNotesCount;
})

const characterCount = computed(() => {
    return useStoreNotes().totalCharactersCounts;
})

useWatchCharacters(likeNoteBall, 10)
</script>