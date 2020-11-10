import { ref, watchEffect } from '@vue/composition-api'

export default function useRemembering() {
  const key = 'remembered items'
  const remembered = ref([]);
  const local = localStorage.getItem(key);

  if (local !== null) {
    remembered.value = JSON.parse(local);
  }

  watchEffect(() => {
    localStorage.setItem(key, JSON.stringify(remembered.value));
  })

  return { remembered }
}