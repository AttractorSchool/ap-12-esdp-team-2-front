import { createPopper } from '@popperjs/core'

export default (context, inject) => {
  inject('popper', createPopper)
}