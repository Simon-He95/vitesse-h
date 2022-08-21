import { defineComponent, h, ref } from 'vue'
export const component = defineComponent({
  props: {
    title: {
      type: String,
      default: 'hello',
    },
  },
  setup(props) {
    const count = ref<number>(0)
    return () => h('div', null,
      [
        h('div', props.title),
        h('div', {
          onClick() {
            count.value++
          },
        }, `count: ${count.value}`),
      ],
    )
  },
})
