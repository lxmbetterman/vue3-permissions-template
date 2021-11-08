
import { ref } from 'vue'

/**
 * 管理layout布局的 repository
 * @param CurrentLayout 是全局公共点： [Column] [Default]
 * @returns
 */
const CurrentLayout = ref('Column') // Default

export default function layoutRepository() {
  const setCurrentLayout = async(layoutName) => {
    CurrentLayout.value = layoutName
  }

  return {
    CurrentLayout,
    setCurrentLayout
  }
}
