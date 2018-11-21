import React from "react";
import PropTypes from "prop-types"


export default class Logo extends React.Component {

  static propTypes = {
    togglePortfolio: PropTypes.func,
    portfolioOn: PropTypes.bool.isRequired
  }

  render() {
    let logoPortfolio = " "
    let logoColor = "black"
    if (this.props.portfolioOn) {
      logoPortfolio = "logo-portfolio"
      logoColor = "white"
    }
    return (

      <div className={`logo ${logoPortfolio}`} onClick={this.props.onClick}>
      <img src={require(`../assets/img/logo_kanso_500px_${logoColor}.png`)} />
      </div>
    )
  }
}
