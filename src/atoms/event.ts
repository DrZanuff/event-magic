import {
  defaultTitle,
  defaultSubTitle,
  defaultMessage,
  defaultLocation,
  defaultDateTime,
  defaultCallToAction,
} from '@/src/data/defaultTextElements'

import { atom } from 'jotai'
import { LayerElements } from './editor'

export type FadeAnimation =
  | 'None'
  | 'Fade'
  | 'SlideDown'
  | 'SlideUp'
  | 'SlideLeft'
  | 'SlideRight'

export type TextElement = {
  text: string
  fontSize: number
  fontName: string
  fontColor: string
  backgroundColor: string
  backGroundEnabled: boolean
  borderRadius: number
  paddingX: number
  paddingY: number
  angle: number
  x: number
  y: number
  shadowColor: string
  shadowOffset: number
  shadowBlur: number
  shadowEnabled: boolean
  shadowFontEnabled: boolean
  shadowFontColor: string
  shadowFontOffset: number
  shadowFontBlur: number
  layer?: LayerElements
}

export const titleAtom = atom<TextElement>(defaultTitle)
export const subTitleAtom = atom<TextElement>(defaultSubTitle)
export const messageAtom = atom<TextElement>(defaultMessage)
export const locationAtom = atom<TextElement>(defaultLocation)
export const dateTimeAtom = atom<TextElement>(defaultDateTime)
export const callToActionAtom = atom<TextElement>(defaultCallToAction)

export const fadeInAnimationAtom = atom<FadeAnimation>('None')
export const fadeOutAnimationAtom = atom<FadeAnimation>('None')

export const videoOpacityAtom = atom<number>(1)

export const backgroundOpacityAtom = atom<number>(0.5)
export const backgroundColorAtom = atom<string>('#000000')

export const currentEditingAtom = atom<string | null>(null)

export const currentEditingNameAtom = atom<string>('')
