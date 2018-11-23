import React from "react"
import PropTypes from "prop-types"


export default class Case extends React.Component {

  static propTypes = {
    onClickTitle: PropTypes.func.isRequired,
    scrollDirection: PropTypes.string.isRequired,
    showcaseOn: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    bgUrl: PropTypes.string.isRequired,
  }

  render() {
    let activeCase = " "
    let animationType = " "
    let activeLink = " "
    if (this.props.isActive) activeCase= "active-case"
    if (this.props.showcaseOn) activeLink = "active-link"
if (this.props.scrollDirection === "down") animationType = "wipe-down-in"
if (this.props.scrollDirection === "up") animationType = "wipe-up-in"

    return (
        <div className={`cases case-${this.props.index} ${activeCase}`}>
          <h1 className={`${animationType}`}><a href="javascript:;" className={`cool-link ${activeLink}`} onClick={this.props.onClickTitle}>{this.props.name}</a></h1>
          <div className="bg-case" style={{backgroundImage:`url(${this.props.bgUrl})`}} />
        </div>
    );
  }
}
