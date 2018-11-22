import React from "react"
import PropTypes from "prop-types"

export default class Front extends React.Component {

  static propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block front-active"
    return (
      <div className={`blocks block-${this.props.index} front ${activeBlock}`}>
yolo
      </div>

    )
  }
}
