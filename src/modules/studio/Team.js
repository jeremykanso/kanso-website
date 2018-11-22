import React from "react"
import PropTypes from "prop-types"
import teamList from './teamList'
import TeamPic from './TeamPic'

export default class Team extends React.Component {

  static propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  yolo = () => {
    console.log('works')
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block team-active"
    return (
      <div className={`blocks block-${this.props.index} team ${activeBlock}`}>
        <div className="team-pictures">
          {
            teamList.map(({id, prenom, nom, titre, imgUrl}) => {
              return <TeamPic key={id} index={id} prenom={prenom} titre={titre} nom={nom} imgUrl={imgUrl} onClick={this.yolo} />
            })
          }
        </div>
        <div className="team-text">

        </div>
      </div>

    )
  }
}
