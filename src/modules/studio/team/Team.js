import React from "react"
import PropTypes from "prop-types"
import teamList from './teamList'
import TeamPic from './TeamPic'
import TeamText from './TeamText'


export default class Team extends React.Component {

  static propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      teamTextType:"general",
    }
  }

  onClickPicture = (id) => () => {
    this.setState({teamTextType:`${id}`})
  }

  render() {
    let activeBlock= "team-not-active"
    if (this.props.isActive) activeBlock= "active-block team-active"
    let textIsActive = true
    if (this.state.teamTextType === "general") textIsActive = false
    return (
      <div className={`blocks block-${this.props.index} team ${activeBlock}`}>
        <div className="team-pictures">
          {
            teamList.map(({id, prenom, nom, titre, imgUrl, color}) => {
              return <TeamPic key={id} index={id} prenom={prenom} titre={titre} nom={nom} imgUrl={imgUrl} color={color} onClick={this.onClickPicture(id)} activePic={this.state.teamTextType} />
            })
          }
        </div>

        <TeamText textIsActive={textIsActive} teamTextType={this.state.teamTextType} onClick={this.onClickPicture('general')} isActive={this.props.isActive} />

      </div>

    )
  }
}
