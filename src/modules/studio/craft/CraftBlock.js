import React from 'react'
import PropTypes from 'prop-types'
import craftList from "./craftList"

export default class CraftBlock extends React.Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }



  render() {

    const selected = craftList.find(selected => selected.id === this.props.index)


    let activeBlock= " "
    if (this.props.isActive) activeBlock= "open-craft-block"

    return (
      <div className={`craft-block craft-block-${this.props.index}`} onClick={this.props.onClick}>
        <div className={`visible-craft-block ${activeBlock}`}>
          <div style={{height:"80%", width:"100%"}}>
          <img src={selected.imgUrl} />
          <h2>{selected.titre}<br/>&<br/>{selected.titrebis}</h2>
          </div>
        </div>
        <div className="hidden-craft-block">
          <div style={{height:"80%", width:"100%"}}>
          <img src={selected.imgUrl} />
          <h2>{selected.titre}<br/>&<br/>{selected.titrebis}</h2>
          <p>{selected.text}</p>
          </div>
        </div>
      </div>
    )
  }

}
