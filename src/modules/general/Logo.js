import React from "react"
import PropTypes from "prop-types"

export default class Logo extends React.Component {

  static propTypes = {
    sectionIsPortfolio: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired
  }

  render() {
    let logoPortfolio = " "
    let logoColor = "grey"
    let logoActive = "logo-active"
    if (this.props.sectionIsPortfolio) {
      logoPortfolio = "logo-portfolio"
      logoColor = "white"
    }
    if (!this.props.isActive) logoActive = "logo-inactive"

    return (
      <div className={`logo ${logoPortfolio} ${logoActive}`}>
        <img src={require(`../assets/img/logo_${logoColor}.png`)} alt="logo Kanso" />
      </div>
    )
  }
}
