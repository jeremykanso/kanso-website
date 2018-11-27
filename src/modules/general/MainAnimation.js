import React from "react";
import PropTypes from "prop-types"


export default class MainAnimation extends React.Component {

  static propTypes = {
    animationFromRight: PropTypes.bool.isRequired
  }


  render() {
    let activateAnimation = " "
      if(this.props.animationFromRight) activateAnimation = "animation-activated-from-right"
      if(!this.props.animationFromRight) activateAnimation = "animation-activated-from-left"

    return (
      <div className={`main-animation ${activateAnimation}`}>
        <div>
          {
            this.props.animationFromRight ? <p>PORTFOLIO</p> : <p>STUDIO</p>
          }
        </div>
      </div>
    )
  }
}
