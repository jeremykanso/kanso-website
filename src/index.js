import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Switch } from "react-router-dom"
import history from './history'
import animateScrollTo from "animated-scroll-to"
import "./index.scss"
import Logo from './modules/general/Logo'
import SwitchButton from './modules/general/SwitchButton'
import MainAnimation from './modules/general/MainAnimation'
import Studio from './modules/studio/Studio'
import Portfolio from './modules/portfolio/Portfolio'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionIsPortfolio:false,
      sectionsAreAnimating:false,
      animationFromRight:false,
      portfolioIsAnimating: false,
      studioIsAnimating: false,
      screenPosPortfolio: 0,
      screenPosStudio: 0,
      scrollDirection:"inactive",
      showcaseOn: false
    }
  }

  componentDidMount() {
    window.addEventListener("wheel", this.handleWheel)
    window.addEventListener("resize", this.handleResize)
    if(history.location.pathname == '/') history.replace("/studio")
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleWheel)
    window.removeEventListener("resize", this.handleResize)
  }

  componentDidUpdate(a, prevState) {
  console.log("screenPosStudio" + this.state.screenPosStudio)
  console.log("screenPosPortfolio" + this.state.screenPosPortfolio)

  }

  switchSections = (stopHistory) => {
    if (!this.state.sectionsAreAnimating) {
      this.setState({sectionsAreAnimating:true})
      if (!this.state.sectionIsPortfolio) {
        this.setState({animationFromRight:true})
        setTimeout(() => {
          if(stopHistory !== true) this.fixHistory(true)
          this.setState({sectionIsPortfolio:true, sectionsAreAnimating:false, portfolioIsAnimating:true})
          this.scrollAnimation()
        }, 1000)
      }
      else {
        this.setState({animationFromRight:false})
        setTimeout(() => {
          if(stopHistory !== true) this.fixHistory(false)
          this.setState({sectionIsPortfolio:false, sectionsAreAnimating:false, studioIsAnimating:true})
          this.scrollAnimation()
        }, 1000)
      }
    }
  }

  getScreenPos = (deltaY, screenPos) => {
    let maxScreenPos = 3 // starts at 0 donc 4 écrans
    if (this.state.sectionIsPortfolio) maxScreenPos = 2 // starts at 0 donc 3 écrans
    if (deltaY > 0) {
      if (screenPos < maxScreenPos) {
        this.setState({scrollDirection:"down"})
        return screenPos + 1
      } else
      return screenPos

    }
    else {
      if (screenPos > 0) {
        this.setState({scrollDirection:"up"})
        return screenPos - 1
      } else
      return screenPos
    }
  }


  handleResize = () => {
    this.scrollAnimation()
  }

  handleWheel = e => {
    if(!this.state.sectionsAreAnimating) {
      if(this.state.sectionIsPortfolio) {
        if (!this.state.portfolioIsAnimating) {
          let delay = 0
          if (this.state.showcaseOn) {
            delay = 500
            this.toggleShowcase()
          }
          this.setState({portfolioIsAnimating:true})
          setTimeout(() => {
            this.setState({screenPosPortfolio: this.getScreenPos(e.deltaY, this.state.screenPosPortfolio)},
            () => this.scrollAnimation())
          }, delay)
        }

      } else {
        if (!this.state.studioIsAnimating) {
          this.setState({studioIsAnimating:true})
          this.setState({screenPosStudio: this.getScreenPos(e.deltaY, this.state.screenPosStudio)},
          () => this.scrollAnimation())
        }
      }
    }
  }

  fixHistory = (willPortfolio) => {
    console.log(willPortfolio)
    if (willPortfolio) {
      history.push("/portfolio")
    } else {
      history.push("/studio")
    }
  }

  scrollAnimation = () => {
    let selectedElem = ".block-"+this.state.screenPosStudio
    if (this.state.sectionIsPortfolio) selectedElem = ".case-"+this.state.screenPosPortfolio
    animateScrollTo(document.querySelector(selectedElem),
    {
      speed:2000,
      cancelOnUserAction:false,
      onComplete: () => {this.setState({portfolioIsAnimating: false, studioIsAnimating:false})}
    }
  )
}

toggleShowcase = () => {
  this.setState({showcaseOn: !this.state.showcaseOn})
}


render() {
  return (
    <Router history={history}>
      <div className="App">

        <Logo sectionIsPortfolio={this.state.sectionIsPortfolio} isActive={(this.state.screenPosStudio !== 0 || this.state.sectionIsPortfolio) ? true : false} />

        <MainAnimation animationFromRight={this.state.animationFromRight} />

        <SwitchButton sectionIsPortfolio={this.state.sectionIsPortfolio} switchSections={this.switchSections} />


        <Route path="/studio" render={(props) =>  {
            if (!this.state.sectionIsPortfolio) {
              return <Studio screenPos={this.state.screenPosStudio} scrollDirection={this.state.scrollDirection} />
            }
            else {
              this.switchSections(true)
              setTimeout(() => {return <Studio screenPos={this.state.screenPosStudio} scrollDirection={this.state.scrollDirection} />}, 1000)
                return <Portfolio screenPos={this.state.screenPosPortfolio} scrollDirection={this.state.scrollDirection} toggleShowcase={this.toggleShowcase} showcaseOn={this.state.showcaseOn} />
              }
            }
          }
          />

        <Route path="/portfolio" render={(props) => {
            if (this.state.sectionIsPortfolio) {
              return <Portfolio screenPos={this.state.screenPosPortfolio} scrollDirection={this.state.scrollDirection} toggleShowcase={this.toggleShowcase} showcaseOn={this.state.showcaseOn} />
            }
            else {
              this.switchSections(true)
              setTimeout(() => {return <Portfolio screenPos={this.state.screenPosPortfolio} scrollDirection={this.state.scrollDirection} toggleShowcase={this.toggleShowcase} showcaseOn={this.state.showcaseOn} />}, 1000)
                return <Studio screenPos={this.state.screenPosStudio} scrollDirection={this.state.scrollDirection} />
              }
            }
          }
          />
      </div>
    </Router>
  )

}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
