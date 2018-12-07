import React from "react"
import PropTypes from "prop-types"

export default class Front extends React.Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block front-active"
    return (
      <div className={`blocks block-${this.props.index} front ${activeBlock}`}>
        <div className="front-container">
        <img src={require("../../assets/img/kanso.gif")} alt="kanso studio intro" />
        <h1>Studio Digital & Créatif</h1>
      </div>
    </div>

    )
  }
}
