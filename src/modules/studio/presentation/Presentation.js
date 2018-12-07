import React from "react"
import PropTypes from "prop-types"
import BoxScroller from "./BoxScroller"

export default class Presentation extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block presentation-active"

    return (
      <div className={`blocks block-${this.props.index} presentation ${activeBlock}`}>
        <div className="presentation-container">
          <div className="text-wipe-effect"><h1>Notre savoir-faire</h1><div className="border-wipe-effect" /></div>

          <div className="exist">
            <div className="text-wipe-effect"><h2>Vous donner les moyens d'exister...</h2></div>
            { //this.props.isActive &&
                <BoxScroller type="exist" isActive={this.props.isActive} />
            }
          </div>
          <div className="realize">
            <div className="text-wipe-effect"><h2>...et de réaliser vos plus grands projets</h2></div>
            { //this.props.isActive &&
                <BoxScroller type="realize" isActive={this.props.isActive} />
            }
          </div>
        </div>
      </div>

    )
  }
}
