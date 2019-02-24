import { animate } from 'framer'
import { player, detailOpenBtn, detailDesc, detailBorderBottom } from '../datas'
import { sleep } from '../utils'

const closeDetail = async () => {
  player.playerState = 'stop'
  animate.spring(detailOpenBtn.rotation, 0)
  // detailDesc
  animate.easeInOut(detailDesc.opacity, 0, {
    duration: 0.3,
  })
  await sleep(400)
  // detailBorderBottom
  animate.easeInOut(detailBorderBottom.bottom, 0, {
    duration: 0.5,
  })
}

export default closeDetail
