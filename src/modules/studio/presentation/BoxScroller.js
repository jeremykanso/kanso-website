import React from 'react'
import PropTypes from 'prop-types'
import weDoList from './weDoList'

export default class BoxScroller extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }


  state = {
    i:0,
    boxScrollerAnimation: "box-scroller-animation-active",
    animationDuration: 1500,
    timerOn:false
  }

  componentDidMount() {

  }


  componentDidUpdate(prevProps){
    let maxScrolls = 4
    if (this.props.type === "realize") maxScrolls = 2
    if(this.props.isActive && !this.state.timerOn) {this.setState({timerOn:true});setTimeout(() => {this.autoScroller(maxScrolls)}, 1800)} else if(!this.props.isActive && this.props.timerOn) {clearInterval(this.timer); this.setState({timerOn:false})}
  }

  autoScroller = (maxScrolls) => {
    this.timer = setInterval(() => {
      if (this.state.i > maxScrolls) {
        this.setState({i:0, boxScrollerAnimation: " "})
        setTimeout(() => {this.setState({i:this.state.i+1, boxScrollerAnimation: "box-scroller-animation-active"})}, 50) // setTimeout pas bien mais j'arrive pas à faire un callback de setState vu que c'est asynchrone (quand if s'applique)
      }
      else this.setState({i:this.state.i+1, boxScrollerAnimation: "box-scroller-animation-active"})
    }, 2000)
  }

  render() {
    let scrollerPos = -4 * this.state.i
    if (this.props.type === "realize") scrollerPos = 4 * this.state.i
    const selectedWeDo = weDoList.find(selected => selected.type === this.props.type)

    return (
      <div className={`box-overflow`}>
        <div className={`box-scroller ${this.state.boxScrollerAnimation}`} style={{transform:`translateY(${scrollerPos}rem)`}}>
          {
            selectedWeDo.titres.map((titres, index) => {
              return <p key={index}>{titres}</p>})
              }
            </div>
          </div>
        )
      }

    }
