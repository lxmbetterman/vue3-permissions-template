/**
 *  mainMenuPath // 需要展示在菜单中的path
 *  minorMenuPath // 需要展示在菜单中的子path
 *  mainActivePath 主菜单的 active path
 *  minorActivePath 子菜单的 active path
 */
import { ref, computed, toRaw } from 'vue'
import { userAllowedPath } from '@/router/index.js'

const mainMenuPath = ref([])
const minorMenuPath = ref([])

const mainActivePath = ref('')
const minorActivePath = ref('')

export default function menusRepositories() {
  // mainMenuPath.value = computed(() => {
  //   return userAllowedPath.filter(item => {
  //     return !item.hidden
  //   })
  // })

  const setMainMenuPath = () => {
    mainMenuPath.value = userAllowedPath.value.filter(item => {
      return !item.hidden
    })
  }
  const setMinorMenuPath = (currentRoute) => {
    mainActivePath.value = currentRoute.matched[0].path
    minorActivePath.value = currentRoute.matched[currentRoute.matched.length - 1].path
    setMainMenuPath()
    minorMenuPath.value = (mainMenuPath.value).filter(i => i.path === mainActivePath.value)
  }

  return {
    mainMenuPath,
    mainActivePath,
    minorMenuPath,
    minorActivePath,
    setMainMenuPath,
    setMinorMenuPath
  }
}
