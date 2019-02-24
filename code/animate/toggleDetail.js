import { player } from '../datas'
import { openDetail, closeDetail } from '../animate'

const toggleDetail = async () => {
  if (player.playerState == 'stop') openDetail()
  else closeDetail()
}

export default toggleDetail
