import React from "react"
import PropTypes from "prop-types"
import casesList from '../portfolio/casesList'
import teamList from '../studio/team/teamList'

const generalIsSelected = { // fake datas...
  expertises: [{category:"", size:"0"}, {category:"", size:"0" }]
};

export default class BlockExpertises extends React.Component {

  static propTypes = {
    selected: PropTypes.object,
    type: PropTypes.string.isRequired,
    shouldActivate:PropTypes.bool,
  }

  render() {
    let gaugeFactor = 0.6
    let selected = this.props.selected
    let expOpacity = 1
    if (this.props.type === "team")  {
      gaugeFactor = 0.5
      if (!this.props.shouldActivate) {
        selected = generalIsSelected
        expOpacity = 0
      }
    }

    return (
      <ul className="bloc-expertises">
        {
          selected.expertises.map(({category, size}, index) => {
            let gaugeSize = size * gaugeFactor
            if(!this.props.shouldActivate) gaugeSize = 0
            return(
              <li key={index} className="expertise" style={{opacity:expOpacity}}>
                <div className="expertise-text">{category}</div>
                <div className="expertise-gauge" style={{width:gaugeSize+"%"}} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
