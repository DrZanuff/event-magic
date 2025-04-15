import { useSetAtom } from 'jotai'
import {
  titleAtom,
  subTitleAtom,
  messageAtom,
  locationAtom,
  dateTimeAtom,
  callToActionAtom,
  fadeInAnimationAtom,
  fadeOutAnimationAtom,
  videoOpacityAtom,
  backgroundOpacityAtom,
  backgroundColorAtom,
  currentEditingNameAtom,
  currentEditingAtom,
} from '@/src/atoms/event'
import { currentVideoAtom } from '@/src/atoms/editor'

import {
  defaultTitle,
  defaultSubTitle,
  defaultMessage,
  defaultLocation,
  defaultDateTime,
  defaultCallToAction,
} from '@/src/data/defaultTextElements'

export const useResetTextElements = () => {
  const setTitle = useSetAtom(titleAtom)
  const setSubTitle = useSetAtom(subTitleAtom)
  const setMessage = useSetAtom(messageAtom)
  const setLocation = useSetAtom(locationAtom)
  const setDateTime = useSetAtom(dateTimeAtom)
  const setCallToAction = useSetAtom(callToActionAtom)
  const setFadeIn = useSetAtom(fadeInAnimationAtom)
  const setFadeOut = useSetAtom(fadeOutAnimationAtom)
  const setVideoOpacity = useSetAtom(videoOpacityAtom)
  const setBackgroundOpacity = useSetAtom(backgroundOpacityAtom)
  const setBackgroundColor = useSetAtom(backgroundColorAtom)

  const setCurrentEditingName = useSetAtom(currentEditingNameAtom)
  const currentEditingId = useSetAtom(currentEditingAtom)

  const setcurrentVideo = useSetAtom(currentVideoAtom)

  const reset = () => {
    setTitle(defaultTitle)
    setSubTitle(defaultSubTitle)
    setMessage(defaultMessage)
    setLocation(defaultLocation)
    setDateTime(defaultDateTime)
    setCallToAction(defaultCallToAction)
    setFadeIn('None')
    setFadeOut('None')
    setVideoOpacity(1)
    setBackgroundOpacity(0.5)
    setBackgroundColor('#000000')
    setCurrentEditingName('')
    currentEditingId(null)
    setcurrentVideo(1)
  }

  return reset
}
