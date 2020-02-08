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
      expect.stringMatching(/Christina Brown\s+539 days ago/),
      expect.stringMatching(/William Clubb\s+543 days ago/),
      expect.stringMatching(/John Smith\s+545 days ago/),
      expect.stringMatching(/Jane Bolster\s+522 days ago/),
      expect.stringMatching(/Maureen Wallace\s+541 days ago/),
      expect.stringMatching(/Sonja Aston\s+538 days ago/),
      expect.stringMatching(/David Glass\s+540 days ago/),
      expect.stringMatching(/Alexis Johnson\s+544 days ago/)
    ])
})

const fixedDate = 1581194402722
