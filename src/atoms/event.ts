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
  angle: number
  x: number
  y: number
  fadeInAnimation: FadeAnimation
  fadeOutAnimation: FadeAnimation
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

export const titleAtom = atom<TextElement>({
  text: 'Party',
  fontSize: 4,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
})

export const subTitleAtom = atom<TextElement>({
  text: 'Hard!',
  fontSize: 3,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
})

export const messageAtom = atom<TextElement>({
  text: 'You are invited to something amazing!',
  fontSize: 2,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
})

export const locationAtom = atom<TextElement>({
  text: '1234 Main St, Springfield, USA',
  fontSize: 2,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
})

export const dateTimeAtom = atom<TextElement>({
  text: 'April 21, 2025 at 7:00 PM',
  fontSize: 2,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
})

export const callToActionAtom = atom<TextElement>({
  text: 'Don`t miss it!',
  fontSize: 1,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
})

export const videoOpacityAtom = atom<number>(1)

export const backgroundOpacityAtom = atom<number>(0.5)
export const backgroundColorAtom = atom<string>('#000000')

export const currentEditingAtom = atom<string | null>(null)

export const currentEditingNameAtom = atom<string | null>(null)
