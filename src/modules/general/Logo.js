import React from "react"
import PropTypes from "prop-types"

export default class Logo extends React.Component {

  static propTypes = {
    sectionIsPortfolio: PropTypes.bool.isRequired
  }

  render() {
    let logoPortfolio = " "
    let logoColor = "grey"
    if (this.props.sectionIsPortfolio) {
      logoPortfolio = "logo-portfolio"
      logoColor = "white"
    }

    return (
      <div className={`logo ${logoPortfolio}`}>
        <img src={require(`../assets/img/logo_kanso_500px_${logoColor}.png`)} alt="logo Kanso" />
      </div>
    )
  }
}
