import type { TemplateProps } from './Template.types'
import './Template-styles.css'

export function Template ( { value } : TemplateProps ) {

  return (
    <div className={"Template-container"}>
      <h1>Template</h1>
      <h2>{value}</h2>
    </div>
  )
}