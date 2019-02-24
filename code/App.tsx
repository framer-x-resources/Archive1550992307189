import { Data, animate, Override, Animatable } from 'framer'
import { log } from 'ruucm-util'
import {
  heroBlock,
  textBlock,
  player,
  detailDesc,
  detailBorderBottom,
  detailOpenBtn,
  pages,
} from './datas'
import {
  pageHandle,
  hideHeroBlockToLeft,
  showHeroBlockFromRight,
  hideCurrentTextBlock,
  showNextTextBlock,
  toggleDetail,
  hideHeroBlockToRight,
  showHeroBlockFromLeft,
  closeDetail,
} from './animate'
import { sleep } from './utils'

export const Pages: Override = () => {
  return {
    currentPage: pages.currentPage,
    animateCurrentPageUpdate: false,
    onChangePage: pageHandle,
  }
}

export const TextBlock: Override = () => {
  return {
    opacity: textBlock.opacity,
  }
}

export const HeroBlock: Override = () => {
  return {
    opacity: heroBlock.opacity,
    left: heroBlock.left,
  }
}

export const Player: Override = () => {
  return {
    playerState: player.playerState,
  }
}

export const OpenDetailBtn: Override = () => {
  return {
    rotationZ: detailOpenBtn.rotation,
    onTap: toggleDetail,
  }
}

export const DetailDesc: Override = () => {
  return {
    top: detailDesc.top,
    opacity: detailDesc.opacity,
  }
}

export const DetailBorderBottom: Override = () => {
  return {
    bottom: detailBorderBottom.bottom,
  }
}

export const Pagination: Override = () => {
  return {
    currentPage: pages.currentPage,
    pageNum: pages.pageNum,
  }
}

// page control

document.addEventListener('keydown', async event => {
  if (event.keyCode == 39 && pages.currentPage < pages.pageNum - 1) {
    // reset detail
    closeDetail()
    hideHeroBlockToLeft()
    hideCurrentTextBlock()
    await sleep(500)
    pages.currentPage++
    showHeroBlockFromRight()
    showNextTextBlock()
  } else if (event.keyCode == 37 && pages.currentPage > 0) {
    // reset detail
    closeDetail()
    hideHeroBlockToRight()
    hideCurrentTextBlock()
    await sleep(500)
    pages.currentPage--
    showHeroBlockFromLeft()
    showNextTextBlock()
  }
})
