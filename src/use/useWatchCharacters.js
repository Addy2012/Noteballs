import { watch } from 'vue'
export function useWatchCharacters(valueToWatch, maxChars = 50) {
    watch(valueToWatch, (newValue, oldValue) => {
        if (newValue.length === maxChars) {
            alert(`only ${maxChars} characters are allowed`)
        }
    })
}