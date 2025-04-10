import { availableVideos } from '@/src/data/videos'
import type { AvailableVideosId } from '@/src/atoms/editor'

const videoIds = Object.keys(availableVideos).map(Number) as AvailableVideosId[]

export const minVideoId = Math.min(...videoIds) as AvailableVideosId
export const maxVideoId = Math.max(...videoIds) as AvailableVideosId
