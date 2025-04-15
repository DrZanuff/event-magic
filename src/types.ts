import { TextElement } from '@/src/atoms/event'

export type EventData = {
  _id?: string
  userId: string
  videoId: string
  eventName: string
  backgroundColor: string
  backgroundOpacity: number
  videoOpacity: number
  createdAt: string

  callToAction: TextElement
  location: TextElement
  message: TextElement
  dateTime: TextElement
  subTitle: TextElement
  title: TextElement
}
