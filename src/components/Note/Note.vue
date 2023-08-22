<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a @click.prevent="handleEditClicked" href="#" class="card-footer-item">Edit</a>
            <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';
/*
props
*/
const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['deleteClicked'])

const characterLength = computed(() => {
    let contentLength = props.note.content.length
    let description = contentLength > 1 ? 'characters' : 'character'
    return ` ${contentLength} ${description}`
})

const handleDeleteClicked = () => {
    emit('deleteClicked', props.note.id);
}

const handleEditClicked = () => {
    console.log('handle edit')
}
</script>