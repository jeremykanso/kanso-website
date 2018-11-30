import React from "react"
import PropTypes from "prop-types"
import CraftBlock from "./CraftBlock"

export default class Craft extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
  }



  state = {
    isOpened:0
  }


  openBlock = (type) => () => {
    this.setState({isOpened:type})
  }

  render() {
    let activeBlock= " "
    let wipe= "wipe-up-out"
    if (this.props.isActive) {
      activeBlock= "active-block craft-active"
      wipe= "wipe-up"
    } else {
      if (this.state.isOpened !== 0) this.setState({isOpened:0})
    }

    return (
      <div className={`blocks block-${this.props.index} craft ${activeBlock}`}>
        <div className="craft-container">
          <div className="craft-title-container"><div className="text-wipe-effect"><h1 className={`${wipe}`}>Se débarasser du superflu,<br/>aller à l'essentiel</h1></div></div>
          <div className="craft-subcontainer">
            <CraftBlock index={1} isActive={(this.state.isOpened === 1) ? true : false} onClick={this.openBlock(1)} />
            <CraftBlock index={2} isActive={(this.state.isOpened === 2) ? true : false} onClick={this.openBlock(2)} />
            <CraftBlock index={3} isActive={(this.state.isOpened === 3) ? true : false} onClick={this.openBlock(3)} />
          </div>
        </div>
      </div>

    )
  }
}
