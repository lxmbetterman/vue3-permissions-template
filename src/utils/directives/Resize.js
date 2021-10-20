import $utils from '@/utils/utils'
export const Resize = {
  setup() {
    const debouncedResize = null
    return { debouncedResize }
  },
  mounted(el, binding) {
    const handler = binding.value
    const options = {
      // passive: !binding.modifiers?.active
    }
    const debouncedResize = $utils.debounce(handler, 100) // 生成一个debounce函数

    window.addEventListener('resize', debouncedResize, options)
    el._onResize = {
      handler: debouncedResize,
      options
    }
    handler() // 加载就执行一次
  },

  unmounted(el) {
    if (!el._onResize) return

    const { handler, options } = el._onResize
    window.removeEventListener('resize', handler, options)
    delete el._onResize
  }
}

export default Resize
