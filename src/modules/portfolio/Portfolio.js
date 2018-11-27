import React from "react"
import PropTypes from "prop-types"
import Showcase from './Showcase'
import Case from "./Case"
import casesList from './casesList'

export default class Portfolio extends React.Component {

  static propTypes = {
    screenPos: PropTypes.number.isRequired,
    toggleShowcase: PropTypes.func.isRequired,
    scrollDirection:PropTypes.string.isRequired,
    showcaseOn: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div className="portfolio">
        {
          casesList.map(({id, title, bgUrl}) => {
            return <Case name={title} key={id} index={id} isActive={(this.props.screenPos === id) ? true : false} scrollDirection={this.props.scrollDirection} bgUrl={bgUrl} onClickTitle={this.props.toggleShowcase} showcaseOn={this.props.showcaseOn} />
          })
        }

        <div className="roller">{this.props.screenPos + 1}/3</div>

        <Showcase active={this.props.showcaseOn} index={this.props.screenPos} toggleShowcase={this.props.toggleShowcase} />

      </div>
    )

  }
}
