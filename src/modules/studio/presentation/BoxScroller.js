import React from 'react'
import PropTypes from 'prop-types'
import weDoList from './weDoList'

export default class BoxScroller extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
  }


  state = {
    i:0,
    boxScrollerAnimation: "box-scroller-animation-active",
    animationDuration: 1500
  }

  componentDidMount() {
    let maxScrolls = 4
    if (this.props.type == "realize") maxScrolls = 2
    this.autoScroller(maxScrolls)
  }

  componentWillUnmount(){
// normalement il faudrait clear l'interval mais je n'arrive pas à l'attraper (this.timer ?)
  }

  autoScroller = (maxScrolls) => {

    const timer = setInterval(() => {
      if (this.state.i > maxScrolls) {
        this.setState({i:0, boxScrollerAnimation: " "})
        setTimeout(() => {this.setState({i:this.state.i+1, boxScrollerAnimation: "box-scroller-animation-active"})}, 10)
      }
      else this.setState({i:this.state.i+1, boxScrollerAnimation: "box-scroller-animation-active"})
    }, 2000)
  }

  render() {
    const scrollerPos = -4 * this.state.i
    const selectedWeDo = weDoList.find(selected => selected.type == this.props.type)


    return (
        <div className={`box-scroller ${this.state.boxScrollerAnimation}`} style={{transform:`translateY(${scrollerPos}rem)`}}>
          {
            selectedWeDo.titres.map((titres, index) => {
              return <p key={index}>{titres}</p>})
              }
            </div>
        )
      }

    }
