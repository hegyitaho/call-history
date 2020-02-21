import { mount } from '@vue/test-utils'
import App from './app.vue'

test('renders a div', async () => {
  const app = mount(App)
  await app.setData({ currentDate: new Date(fixedDate) })
  expect(
    app.findAll('.contact').wrappers
      .map(wrapper => wrapper.text())
  )
    .toEqual([
      expect.stringMatching(/Christina Brown 539 days ago/),
      expect.stringMatching(/William Clubb 543 days ago/),
      expect.stringMatching(/John Smith 545 days ago/),
      expect.stringMatching(/Jane Bolster 522 days ago/),
      expect.stringMatching(/Maureen Wallace 541 days ago/),
      expect.stringMatching(/Sonja Aston 538 days ago/),
      expect.stringMatching(/David Glass 540 days ago/),
      expect.stringMatching(/Alexis Johnson 544 days ago/)
    ])
})

const fixedDate = 1581194402722
