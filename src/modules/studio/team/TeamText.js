import React from "react"
import PropTypes from "prop-types"
import teamList from './teamList'
import BlockExpertises from '../../general/BlockExpertises'

const general_text = ["Hoc inmaturo interitu ipse quoque sui pertaesus excessit e vita aetatis nono anno atque vicensimo cum quadriennio imperasset. natus apud Tuscos in Massa Veternensi, patre Constantio Constantini fratre imperatoris, matreque Galla sorore Rufini et Cerealis, quos trabeae consulares nobilitarunt et praefecturae.", "Auxerunt haec vulgi sordidioris audaciam, quod cum ingravesceret penuria commeatuum, famis et furoris inpulsu Eubuli cuiusdam inter suos clari domum ambitiosam ignibus subditis inflammavit rectoremque ut sibi iudicio imperiali."]


export default class TeamText extends React.Component {

  static propTypes = {
    textIsActive: PropTypes.bool.isRequired,
    teamTextType: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  state = {animationIsActivated: true}

  teamTextType = 0
  isActive = false


  refreshStateForAnimation = () => {
    this.setState({animationIsActivated:false})
    this.teamTextType = this.props.teamTextType
    setTimeout(() => {this.setState({animationIsActivated:true})}, 10)
  }

  render() {
    let selectedText = general_text
    let buttonOpacity = 0
    let buttonShow = "default"
    if (this.props.textIsActive) {
      selectedText = teamList.find(selected => selected.id === this.props.teamTextType)
      buttonOpacity = 1
      buttonShow = "pointer"
    }

    let classAnimation = ""
    if (this.state.animationIsActivated) {
      classAnimation = "team-text-animation"
      if (!this.isActive) classAnimation = "team-text-animation team-text-first-active-animation"
    }

    if (this.teamTextType !== this.props.teamTextType) this.refreshStateForAnimation()

    this.isActive = this.props.isActive


    return (
      <div className={`team-text ${classAnimation}`}>
        <h1 style={{color:!this.props.textIsActive ? "#ff6842" : "#333333" }}>L'équipe</h1>
        <div className="team-textarea">
          {
            this.props.textIsActive &&
            <div className="team-sub-titles">
              <h2>{selectedText.prenom} {selectedText.nom}</h2>
              <h3>{selectedText.titre[0]}<br/>& {selectedText.titre[1]}</h3>
            </div>
          }
          <div className="team-description">
            {!this.props.textIsActive ? selectedText.map((p, index) => {return <p key={index}>{p}</p>})
              : selectedText.text.map((text, index) => {return <p key={index}>{text}</p>})
              }
            </div>
            {
              this.props.isActive && this.props.teamTextType !== 0 &&
              <BlockExpertises type={"team"} selected={selectedText} shouldActivate={this.props.textIsActive} />
            }
            {
              this.props.textIsActive &&
              <div className="team-socials">
                <a href={`https://www.linkedin.com/in/${selectedText.socialsIds[0]}`} target="_blank"><img src={require("../../assets/img/linkedin.svg")} /></a>
                <a href={`https://www.malt.fr/profile/${selectedText.socialsIds[1]}`} target="_blank"><img src={require("../../assets/img/malt.svg")} /></a>
              </div>
            }
          </div>

          <button className="back-to-general" onClick={this.props.onClick} style={{opacity:buttonOpacity, cursor:buttonShow}}>
            <svg viewBox="0 0 56 56">
              <g>
                <g>
                  <g>
                    <polyline className="back-arrow-polyline-one" points="25.5,40.25 37.5,28.149 25.5,15.75"/>
                  </g>
                  <g>
                    <polyline className="back-arrow-polyline-two" points="18.5,34 24.378,28.073 18.5,22"/>
                  </g>
                </g>
                <circle cx="28" cy="28" r="25.5"/>
              </g>
            </svg>
          </button>

        </div>
      )
    }
  }
