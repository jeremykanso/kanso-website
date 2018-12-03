import React from "react"
import PropTypes from "prop-types"

export default class Front extends React.Component {

  static propTypes = {
    scrollDirection: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  componentDidMount() {

  }

  render() {
    let activeBlock= " "
    if (this.props.isActive) activeBlock= "active-block front-active"
    return (
      <div className={`blocks block-${this.props.index} front ${activeBlock}`}>
        <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}>
        <img src={require("../../assets/img/kanso.gif")} style={{width:"100%", maxHeight:"100%"}} />
      </div>
    </div>

    )
  }
}
