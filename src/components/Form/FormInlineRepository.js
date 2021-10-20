import { ref } from 'vue'

export default function FormInlineRepository() {
  const formInline = ref({})
  const collapse = ref(false)
  const toggleCollapse = () => {
    collapse.value = !collapse.value
  }
  const initFormInline = (initObj) => {
    Object(formInline, initObj)
  }

  return {
    formInline,
    collapse,
    toggleCollapse,
    initFormInline
  }
}
