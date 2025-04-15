'use client'

import {
  messageAtom,
  locationAtom,
  dateTimeAtom,
  callToActionAtom,
  subTitleAtom,
  titleAtom,
} from '@/src/atoms/event'
import { currentSelectedLayerElementAtom } from '@/src/atoms/editor'
import { currentVideoAtom } from '@/src/atoms/editor'
import { availableVideos } from '@/src/data/videos'
import { maxVideoId, minVideoId } from '@/src/utils/videoNavigation'
import { useAtom, useAtomValue } from 'jotai'
import { TextElementEditor } from '@/src/components/editor/TextElementEditor'
import { BackgroundControls } from '@/src/components/editor/BackgroundControls'
import { Panel } from '@/src/components/core/Panel'
import { PanelSeparator } from '@/src/components/core/PanelSeparator'
import { ColorPickerModal } from '@/src/components/core/ColorPickerModal'
import { VideoSelector } from '@/src/components/editor/VideoSelector'
import styles from './EditorControls-styles.module.css'

const textEditors = [
  { element: 'Title', label: 'Title', atom: titleAtom },
  { element: 'Subtitle', label: 'Subtitle', atom: subTitleAtom },
  { element: 'Message', label: 'Message', atom: messageAtom },
  { element: 'Location', label: 'Location', atom: locationAtom },
  { element: 'DateTime', label: 'Date & Time', atom: dateTimeAtom },
  { element: 'Info', label: 'Call to Action', atom: callToActionAtom },
] as const

export function EditorControls() {
  const [currentVideo, setCurrentVideo] = useAtom(currentVideoAtom)
  const currentSelectedLayerElement = useAtomValue(
    currentSelectedLayerElementAtom
  )
  const video = availableVideos[currentVideo]

  const handlePrevious = () => {
    setCurrentVideo((prev) =>
      prev === minVideoId ? maxVideoId : ((prev - 1) as typeof prev)
    )
  }

  const handleNext = () => {
    setCurrentVideo((prev) =>
      prev === maxVideoId ? minVideoId : ((prev + 1) as typeof prev)
    )
  }

  return (
    <>
      <Panel title="Settings">
        <div className={styles.scroll}>
          <VideoSelector
            videoId={currentVideo}
            video={video}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />

          <PanelSeparator />

          <div className={styles.container}>
            <BackgroundControls />
          </div>

          <PanelSeparator />

          <div className={styles.container}>
            <div className={styles.textEditorsContainer}>
              {textEditors
                .filter(
                  ({ element }) => element === currentSelectedLayerElement
                )
                .map(({ element, label, atom }) => (
                  <TextElementEditor key={element} label={label} atom={atom} />
                ))}
            </div>
          </div>

          <PanelSeparator />
        </div>
      </Panel>

      <ColorPickerModal />
    </>
  )
}
