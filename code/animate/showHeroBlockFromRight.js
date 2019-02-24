import { animate } from 'framer'
import { heroBlock } from '../datas'

const showHeroBlockFromRight = () => {
  animate.easeInOut(heroBlock.opacity, 1, {
    duration: 0.5,
  })
  heroBlock.left.set(100)
  animate.easeInOut(heroBlock.left, 0, {
    duration: 0.8,
  })
}

export default showHeroBlockFromRight
