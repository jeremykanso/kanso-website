import React from "react"
import PropTypes from "prop-types"
import Front from './Front'
import Presentation from './Presentation'
import Craft from './Craft'
import Team from './Team'


export default class Studio extends React.Component {

  static propTypes = {
    screenPos: PropTypes.number.isRequired,
    scrollDirection:PropTypes.string.isRequired,
  }

  render() {

    return (
      <div className="studio">

        <Front index={0} scrollDirection={this.props.scrollDirection} isActive={(this.props.screenPos === 0) ? true : false} />

        <Presentation index={1} scrollDirection={this.props.scrollDirection} isActive={(this.props.screenPos === 1) ? true : false} />

        <Craft index={2} scrollDirection={this.props.scrollDirection} isActive={(this.props.screenPos === 2) ? true : false} />

        <Team index={3} scrollDirection={this.props.scrollDirection} isActive={(this.props.screenPos === 3) ? true : false} />

      </div>

    )
  }
}
