import { atom } from 'jotai'

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
  borderRadius: number
  angle: number
  x: number
  y: number
  fadeInAnimation: FadeAnimation
  fadeOutAnimation: FadeAnimation
  shadowColor: string
  shadowOffset: number
  shadowBlur: number
}

export const titleAtom = atom<TextElement>({
  text: 'Party',
  fontSize: 20,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 100,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
})

export const subTitleAtom = atom<TextElement>({
  text: 'Hard!',
  fontSize: 20,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 120,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
})

export const messageAtom = atom<TextElement>({
  text: 'You are invited to something amazing!',
  fontSize: 20,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 180,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
})

export const locationAtom = atom<TextElement>({
  text: '1234 Main St, Springfield, USA',
  fontSize: 18,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 210,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowColor: 'transparent',
  shadowOffset: 0,
  shadowBlur: 0,
})

export const dateTimeAtom = atom<TextElement>({
  text: 'April 21, 2025 at 7:00 PM',
  fontSize: 18,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 240,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowColor: 'transparent',
  shadowOffset: 0,
  shadowBlur: 0,
})

export const callToActionAtom = atom<TextElement>({
  text: 'Don’t miss it!',
  fontSize: 18,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backgroundColor: 'transparent',
  borderRadius: 0,
  angle: 0,
  x: 0,
  y: 270,
  fadeInAnimation: 'None',
  fadeOutAnimation: 'None',
  shadowColor: 'transparent',
  shadowOffset: 0,
  shadowBlur: 0,
})

export const backgroundOpacityAtom = atom<number>(0.5)
export const backgroundColorAtom = atom<string>('#000000')
