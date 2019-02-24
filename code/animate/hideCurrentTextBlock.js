import { animate } from 'framer'
import { textBlock } from '../datas'

const hideCurrentTextBlock = () => {
  animate.easeInOut(textBlock.opacity, 0, {
    duration: 0.4,
  })
}

export default hideCurrentTextBlock
