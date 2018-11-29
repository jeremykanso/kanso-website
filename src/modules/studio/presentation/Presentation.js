import React from "react"
import PropTypes from "prop-types"
import BoxScroller from "./BoxScroller"

export default class Presentation extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
  }



  render() {
    let activeBlock= " "
    let wipe= "wipe-up-out"
    let opacity= "opacity-out"
    if (this.props.isActive) {
      activeBlock= "active-block presentation-active"
      wipe= "wipe-up"
      opacity= "opacity-in"
    }

    return (
      <div className={`blocks block-${this.props.index} presentation ${activeBlock}`}>
        <div className="presentation-container">
          <div className="text-wipe-effect"><h1 className={`${wipe}`}>Notre savoir-faire</h1></div>

          <div className="exist">
            <div className="text-wipe-effect"><h2 className={`${wipe}`}>Vous donner les moyens d'exister :</h2></div>
            { //this.props.isActive &&
              <div className={`box-overflow ${opacity}`}>
              <BoxScroller type="exist" />
              </div>
            }
          </div>
          <div className="realize">
            <div className="text-wipe-effect"><h2 className={`${wipe}`}>...et de réaliser vos plus grands projets :</h2></div>
              { //this.props.isActive &&
                <div className={`box-overflow ${opacity}`}>
                <BoxScroller type="realize" />
                </div>
              }
            </div>
        </div>
      </div>

    )
  }
}
