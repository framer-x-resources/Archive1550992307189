import { animate } from 'framer'
import { heroBlock } from '../datas'

const hideHeroBlockToLeft = () => {
  animate.easeInOut(heroBlock.opacity, 0, {
    duration: 0.3,
  })
  animate.easeInOut(heroBlock.left, -500, {
    duration: 0.9,
  })
}

export default hideHeroBlockToLeft
