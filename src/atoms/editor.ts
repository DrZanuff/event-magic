import { atom } from 'jotai'

export type AvailableVideosId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type VideoMetadata = {
  description: string
  duration: number
  url: string
}

export type AvailableVideosMap = Record<AvailableVideosId, VideoMetadata>

export const currentVideoAtom = atom<AvailableVideosId>(1)

export type LayerElements =
  | 'Title'
  | 'Subtitle'
  | 'Message'
  | 'Location'
  | 'DateTime'
  | 'Info'

export const currentSelectedLayerElementAtom = atom<LayerElements | null>(null)
