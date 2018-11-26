import React from "react"
import PropTypes from "prop-types"

export default class TeamPic extends React.Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    prenom: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    titre: PropTypes.array.isRequired,
    imgUrl: PropTypes.array.isRequired,
    onClick:PropTypes.func.isRequired,
    activePic:PropTypes.string.isRequired,
  }

  render() {
    let isActive = ""
    if (this.props.activePic == this.props.index) isActive = "team-pic-active" // ne pas changer l'équivalence (string vs number)

    return (
      <div className={`team-pic team-pic-${this.props.index} ${isActive}`} onClick={this.props.onClick}>
        <div className="team-caption">
          <span>{this.props.prenom}</span><br/>
          <span>{this.props.titre[0]}</span><br/>
          <span>& {this.props.titre[1]}</span>
        </div>
        <div className="team-filter">
          <img src={this.props.imgUrl[1]} />
        </div>
        <div className="team-previews" style={{backgroundColor:this.props.color}}>
        </div>
        <img src={this.props.imgUrl[0]} />
      </div>
    )
  }
}
