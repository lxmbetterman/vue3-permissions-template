import { ref, reactive } from 'vue-demi'

const tabLables = reactive({
  /**
     * normalTabs:{path,name,title}
     */
  normalTabs: [],
  constTabs: []
})

export default function tabLablesRepository() {
  /**
     * {path,name,title}
     */
  const hasExisted = (currentRoute) => {
    const normalTabsExist = tabLables.normalTabs.some(item => item.name === currentRoute.name)
    const constTabsExist = tabLables.constTabs.some(item => item.name === currentRoute.name)
    return normalTabsExist || constTabsExist
  }
  const tabActive = (currentRoute) => {
    const allTabs = [...tabLables.normalTabs, ...tabLables.constTabs]
    allTabs.map(route => {
      route.active = false
      if (currentRoute.name === route.name) {
        route.active = true
      }
    })
  }

  const addNormalTab = (route) => {
    /**
     *  重置active
     */
    if (!tabLables.normalTabs.some(normalTab => normalTab.name === route.name)) {
      tabLables.normalTabs.push(route)
      tabActive(route)
    }
  }
  const addConstTab = () => {

  }
  /**
   * 根据name移除
   */
  const removeTab = () => {

  }
  // eslint-disable-next-line no-unused-vars
  const removeNormalTabs = () => {

  }
  // eslint-disable-next-line no-unused-vars
  const removeConstTabs = () => {

  }

  return {
    tabLables,
    hasExisted, tabActive,
    addNormalTab, addConstTab,
    removeTab
  }
}
