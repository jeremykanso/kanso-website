import React from "react"
import PropTypes from "prop-types"

export default class TeamPic extends React.Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    prenom: PropTypes.string.isRequired,
    titre: PropTypes.array.isRequired,
    imgUrl: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
  }

  render() {

    return (
      <div className={`team-pic team-pic-${this.props.index}`} onClick={this.props.onClick}>
        <div className="team-caption">
          <span>{this.props.prenom}</span><br/>
          <span>{this.props.titre[0]}</span><br/>
          <span>& {this.props.titre[1]}</span>
        </div>
        <div className="team-filter">
          <img src={this.props.imgUrl[1]} />
        </div>
        <img src={this.props.imgUrl[0]} />
      </div>
    )
  }
}
