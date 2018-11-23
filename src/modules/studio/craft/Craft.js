import React from "react"
import PropTypes from "prop-types"

export default class Craft extends React.Component {

  static propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block craft-active"
    return (
      <div className={`blocks block-${this.props.index} craft ${activeBlock}`}>
yoloone
      </div>

    )
  }
}
