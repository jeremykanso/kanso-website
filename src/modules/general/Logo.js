import React from "react"
import PropTypes from "prop-types"


export default class Logo extends React.Component {

  static propTypes = {
    switchSections: PropTypes.func.isRequired,
    sectionIsPortfolio: PropTypes.bool.isRequired
  }

  render() {
    let logoPortfolio = " "
    let logoColor = "black"
    if (this.props.sectionIsPortfolio) {
      logoPortfolio = "logo-portfolio"
      logoColor = "white"
    }
    return (

      <div className={`logo ${logoPortfolio}`} onClick={this.props.switchSections}>
      <img src={require(`../assets/img/logo_kanso_500px_${logoColor}.png`)} />
      </div>
    )
  }
}
