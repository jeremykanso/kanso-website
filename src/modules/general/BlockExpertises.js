import React from "react"
import PropTypes from "prop-types"

const generalIsSelected = { // fake datas for design purposes...
  expertises: [{category:"", size:"0"}, {category:"", size:"0" }]
};

export default class BlockExpertises extends React.Component {

  static propTypes = {
    selected: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
    type: PropTypes.string.isRequired,
    shouldActivate:PropTypes.bool,
  }

  state = {animationIsActivated: true}

  checkSelected = ""

  refreshStateForAnimation = () => {
    this.setState({animationIsActivated:false})
    this.checkSelected = this.props.selected
    setTimeout(() => {this.setState({animationIsActivated:true})}, 500)
  }

  render() {
    let classAnimation = " "
    let gaugeFactor = 0.6
    let selected = this.props.selected
    let expOpacity = 1
    if (this.props.type === "team")  {
      gaugeFactor = 0.5
      if (!this.props.shouldActivate) {
        selected = generalIsSelected
        expOpacity = 0
      }



      if (this.state.animationIsActivated) classAnimation = "team-gauge-animation"

      if (this.checkSelected !== this.props.selected) this.refreshStateForAnimation()

    }

    return (
      <ul className="bloc-expertises">
        {
          selected.expertises.map(({category, size}, index) => {
            let gaugeSize = size * gaugeFactor
            if((!this.props.shouldActivate) || (!this.state.animationIsActivated)) gaugeSize = 0

            return(
              <li key={index} className="expertise" style={{opacity:expOpacity}}>
                <div className="expertise-text">{category}</div>
                <div className={`expertise-gauge ${classAnimation}`} style={{width:gaugeSize+"%"}} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
