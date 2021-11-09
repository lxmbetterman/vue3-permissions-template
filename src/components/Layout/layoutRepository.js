
import { ref } from 'vue'

/**
 * 管理layout布局的 repository
 * @param CurrentLayout 是全局公共点： [Column] [Default]
 * @returns
 */
const CurrentLayout = ref('Column') // Default
const menusCollapse = ref(false) // 菜单是否折叠/收起

export default function layoutRepository() {
  const setCurrentLayout = async(layoutName) => {
    CurrentLayout.value = layoutName
  }

  const toggleMenuCollapse = async() => {
    menusCollapse.value = !menusCollapse.value
  }

  return {
    CurrentLayout, setCurrentLayout,
    menusCollapse, toggleMenuCollapse
  }
}
