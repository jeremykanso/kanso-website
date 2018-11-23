import React from "react"
import PropTypes from "prop-types"

export default class Presentation extends React.Component {

  static propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block presentation-active"
    return (
      <div className={`blocks block-${this.props.index} presentation ${activeBlock}`}>
yolooo
      </div>

    )
  }
}
