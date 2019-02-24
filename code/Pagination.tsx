import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'

const style: React.CSSProperties = {
  fontSize: '15px',
  fontFamily: '.SFNSText',
}

// Define type of property
interface Props {
  currentPage: number
  pageNum: number
}

export class Pagination extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    currentPage: 0,
    pageNum: 10,
  }

  // Items shown in property panel
  static propertyControls: PropertyControls = {}

  render() {
    return (
      <div style={style}>
        {this.props.currentPage + 1} of {this.props.pageNum}
      </div>
    )
  }
}
