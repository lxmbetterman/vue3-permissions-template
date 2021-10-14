import { ref } from 'vue'

// column布局下是菜单否折叠
const columnCollapse = ref(false)
export default function columnRepositrory() {
  const toggleColumnCollapse = async() => {
    columnCollapse.value = !columnCollapse.value
  }
  return {
    columnCollapse,
    toggleColumnCollapse
  }
}
