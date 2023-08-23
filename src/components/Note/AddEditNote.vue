<template>
    <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
        <label v-if="label" class="label has-text-white">{{ label }}</label>
        <div class="field">
            <div class="control">
                <textarea maxlength="100" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea" :placeholder="placeholder" ref="textAreaRef" v-autofocus />
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <button v-if="buttonName === 'Save Note'" class="button is-link is-light mr-2"
                    @click="$router.back()">Cancel</button>
                <button class="button is-link" :class="`has-background-${bgColor}-dark`" @click="addNote"
                    :disabled="!modelValue">{{ buttonName
                    }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters'
/*
    props
*/
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    addNote: {
        type: Function,
        required: true
    },
    buttonName: {
        type: String,
        required: true
    },
    bgColor: {
        default: 'success'
    },
    placeholder: {
        type: String,
        default: "Type something ..."
    },
    label: {
        type: String
    }
})

/*
emit
*/
const emit = defineEmits(['update:modelValue'])

/*
    focus textarea
*/
const textAreaRef = ref(null)
const focusTextarea = () => {
    textAreaRef.value.focus();
}
defineExpose({
    focusTextarea
})
useWatchCharacters(textAreaRef)

</script>