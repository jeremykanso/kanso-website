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
      teamText:"general",
    }
  }

  onClickPicture = (id) => () => {
    this.setState({teamText:`${id}`})
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block team-active"
    let textIsActive = true
    if (this.state.teamText === "general") textIsActive = false
    return (
      <div className={`blocks block-${this.props.index} team ${activeBlock}`}>
        <div className="team-pictures">
          {
            teamList.map(({id, prenom, nom, titre, imgUrl}) => {
              return <TeamPic key={id} index={id} prenom={prenom} titre={titre} nom={nom} imgUrl={imgUrl} onClick={this.onClickPicture(id)} />
            })
          }
        </div>

        <TeamText textIsActive={textIsActive} teamText={this.state.teamText} onClick={this.onClickPicture('general')} />

      </div>

    )
  }
}
