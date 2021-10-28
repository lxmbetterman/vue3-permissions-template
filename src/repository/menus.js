/**
 *  mainMenuPath // 需要展示在菜单中的path
 *  minorMenuPath // 需要展示在菜单中的子path
 *  mainActivePath 主菜单的 active path
 *  minorActivePath 子菜单的 active path
 */
import { ref } from 'vue'
import { userAllowedPath } from '@/router/index.js'

const mainMenu = ref([])
const minorMenu = ref([])

const mainActiveName = ref('')
// const minorActivePath = ref('')

const filterMenus = (allMenus) => { // 过滤被hidden的menu
  const filteredMenus = []
  allMenus.map(menu => {
    const currentMenu = { ...menu }
    if (!currentMenu.hidden) {
      if (currentMenu.children) {
        currentMenu.children = filterMenus(currentMenu.children)
      }
      filteredMenus.push(currentMenu)
    }
  })
  return filteredMenus
}

export default function menusRepositories() {
  /**
   * 设置主菜单数据
   */
  const setMainMenu = () => {
    const menus = filterMenus(userAllowedPath.value)
    mainMenu.value = menus
  }
  /**
   * 设置主菜单当前选中的路由name
   */
  const setMainActiveName = (name) => { // 设置选中的main menu的name
    mainActiveName.value = name
  }
  /**
   * 选择主菜单后，设置当前对应的副菜单
   */
  const setMinorMenu = () => {
    minorMenu.value = (mainMenu.value).filter(i => i.name === mainActiveName.value)[0]?.children
  }

  return {
    mainMenu,
    minorMenu,
    mainActiveName,
    setMainMenu,
    setMainActiveName,
    setMinorMenu
  }
}
