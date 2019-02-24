import { animate } from 'framer'
import { player, detailOpenBtn, detailDesc, detailBorderBottom } from '../datas'
import { sleep } from '../utils'

const openDetail = async () => {
  player.playerState = 'play'
  animate.spring(detailOpenBtn.rotation, 45)
  // detailBorderBottom
  animate.easeInOut(detailBorderBottom.bottom, -100)
  await sleep(700)
  // detailDesc
  detailDesc.top.set(-10)
  animate.easeInOut(detailDesc.top, 0, {
    duration: 0.3,
  })
  animate.easeInOut(detailDesc.opacity, 1, {
    duration: 0.5,
  })
}

export default openDetail
