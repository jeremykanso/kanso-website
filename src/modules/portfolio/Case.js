import React from "react"
import PropTypes from "prop-types"


export default class Case extends React.Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    scrollDirection: PropTypes.string.isRequired,
    showcaseOn: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bgUrlColor: PropTypes.string.isRequired,
    titlebisshort:PropTypes.string.isRequired
  }

  render() {
    let activeCase = " "
    let animationType = " "
    let activeLink = " "
    if (this.props.isActive) activeCase= "active-case"
    if (this.props.scrollDirection === "down") animationType = "wipe-down-in"
    if (this.props.scrollDirection === "up") animationType = "wipe-up-in"

    return (
      <div className={`cases case-${this.props.index} ${activeCase}`}>
        <div className="portfolio-titles">
          <h1 className={`${animationType}`}>{this.props.name}</h1>
          <div className="cool-effect" />
          <h2 className={`${animationType}`}>{this.props.titlebisshort}</h2>
        </div>
        <button className={`button-project ${animationType}`} onClick={this.props.onClick}>Voir le projet</button>
        <div className="bg-case" style={{backgroundImage:`url(${this.props.bgUrlColor})`}} />
      </div>
    );
  }
}
