import { animate } from 'framer'
import { textBlock } from '../datas'

const showNextTextBlock = () => {
  animate.easeInOut(textBlock.opacity, 1, {
    duration: 0.4,
  })
}

export default showNextTextBlock
