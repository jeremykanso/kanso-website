import React from "react"
import ReactDOM from "react-dom"
import animateScrollTo from "animated-scroll-to"
import "./index.scss"
import Logo from './modules/general/Logo'
import MainAnimation from './modules/general/MainAnimation'
import Studio from './modules/studio/Studio'
import Portfolio from './modules/portfolio/Portfolio'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolioOn:false,
      togglePortfolioOn:false,
      animationFromRight:false,
      screenPos: 0,
      portfolioAnimationOn: false,
      scrollDirection:"inactive",
      showcaseOn: false
    }
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleWheel)
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleWheel)
  }

  togglePortfolio = () => {
    if (!this.state.togglePortfolio) {
      this.setState({togglePortfolioOn:true})
      if (!this.state.portfolioOn) {
        this.setState({animationFromRight:true})
        setTimeout(() => this.setState({portfolioOn:true, togglePortfolioOn:false}), 1000)
      }
      else {
        this.setState({animationFromRight:false})
        setTimeout(() => this.setState({portfolioOn:false, togglePortfolioOn:false}), 1000)
      }
    }
  }

  getScreenPos = (deltaY, screenPos) => {
    if (deltaY > 0) {
      if (screenPos < 2) {
        this.setState({scrollDirection:"down"})
        return screenPos + 1
      } else
      return 0

    }
    else {
      if (screenPos > 0) {
        this.setState({scrollDirection:"up"})
        return screenPos - 1
      } else
      return 2
    }
  }

  handleWheel = e => {
    if (!this.state.portfolioAnimationOn && !this.state.togglePortfolioOn && this.state.portfolioOn) {
      let delay = 0
      if (this.state.showcaseOn) {
        delay = 500
        this.toggleShowcase()
      }
      this.setState({portfolioAnimationOn:true})
      setTimeout(() => {
        this.setState({screenPos: this.getScreenPos(e.deltaY, this.state.screenPos)},
        () => {
          animateScrollTo(document.querySelector('.case-'+this.state.screenPos),
          {
            speed:2000,
            cancelOnUserAction:false,
            onComplete: () => this.scrollAnimationEnds()
          }
        )
      }
    )
  }, delay)
}
}

scrollAnimationEnds = () => {
  this.setState({portfolioAnimationOn: false})
}

toggleShowcase = () => {
 this.setState({showcaseOn: !this.state.showcaseOn})
}



render() {

  return (
    <div className="App">

      <MainAnimation animationFromRight={this.state.animationFromRight} />

      <Logo portfolioOn={this.state.portfolioOn} onClick={this.togglePortfolio} />

      {
        !this.state.portfolioOn ?
        <Studio />
        : <Portfolio screenPos={this.state.screenPos} scrollDirection={this.state.scrollDirection} toggleShowcase={this.toggleShowcase} showcaseOn={this.state.showcaseOn} />
    }
  </div>
)

}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
