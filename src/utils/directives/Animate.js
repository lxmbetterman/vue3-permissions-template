
export const Animate = {
  setup() {

  },
  mounted(el, binding) {
    // const animateName = binding.value
    console.log(el, '????')
    console.log(el.getAttribute('class'))
    const currentClass = el.getAttribute('class')
    // currentClass += `animate__animated animate__${binding.value}`
    // currentClass += `animate__animated animate__${binding.value}`

    el.setAttribute('class', currentClass)
  },

  unmounted(el) {
  }
}

export default Animate
