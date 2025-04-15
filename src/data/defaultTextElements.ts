import type { TextElement } from '@/src/atoms/event'

export const defaultTitle: TextElement = {
  text: 'Party',
  fontSize: 4,
  fontName: 'Roboto',
  fontColor: '#FFFFFF',
  backGroundEnabled: false,
  backgroundColor: '#000000',
  borderRadius: 0,
  paddingX: 0,
  paddingY: 0,
  angle: 0,
  x: 0,
  y: 0,
  shadowEnabled: false,
  shadowColor: '#000000',
  shadowOffset: 0,
  shadowBlur: 0,
  shadowFontEnabled: false,
  shadowFontColor: '#000000',
  shadowFontOffset: 0,
  shadowFontBlur: 0,
}

export const defaultSubTitle: TextElement = {
  ...defaultTitle,
  text: 'Hard!',
  fontSize: 3,
  y: 1.4,
}

export const defaultMessage: TextElement = {
  ...defaultTitle,
  text: 'You are invited to something amazing!',
  fontSize: 2,
  y: 4,
}

export const defaultLocation: TextElement = {
  ...defaultTitle,
  text: '1234 Main St, Springfield, USA',
  fontSize: 2,
  y: 8,
}

export const defaultDateTime: TextElement = {
  ...defaultTitle,
  text: 'April 21, 2025 at 7:00 PM',
  fontSize: 2,
  y: 10,
}

export const defaultCallToAction: TextElement = {
  ...defaultTitle,
  text: "Don't miss it!",
  fontSize: 1,
  y: 30,
}
