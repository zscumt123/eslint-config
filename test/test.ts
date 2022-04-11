import { ref } from 'vue'

interface TodoItem {
  name: string
  time: string
}

const todo = ref<TodoItem>({
  name: '',
  time: ' '
})

export { todo }
