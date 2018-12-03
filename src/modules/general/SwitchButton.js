import React from "react"
import PropTypes from "prop-types"


export default class SwitchSection extends React.Component {

  static propTypes = {
    switchSections: PropTypes.func.isRequired,
    sectionIsPortfolio: PropTypes.bool.isRequired
  }

  render() {
    let buttonPortfolio = " "
    if (this.props.sectionIsPortfolio) {
      buttonPortfolio = "switch-portfolio"
    }
    return (
      <button className={`switch-button ${buttonPortfolio}`} onClick={this.props.switchSections}>
        Go to portfolio
      </button>
    )
  }
}
