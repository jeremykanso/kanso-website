import React from "react";
import PropTypes from "prop-types"
import casesList from './casesList'
import BlockExpertises from '../general/BlockExpertises'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default class Showcase extends React.Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    toggleShowcase: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
  }

  autoPlay = false
  state = {autoPlay: false} // forbidding carousel to play during showcaseAnimation

  render() {
    const selectedCase = casesList.find(selected => selected.id === this.props.index)
    let active = " "
    if (this.props.active) {
      active = "showcase-active"
      if (this.autoPlay === this.state.autoPlay) {
        setTimeout(() => {this.setState({autoPlay: true})}, 800)
      }
    }

    return (
      <div className={`showcase ${active}`}>
        <div className="showcase-container">
          <div className="showcase-text">
            <h1 style={{backgroundImage:`url(${selectedCase.bgUrlColor})`}}>{selectedCase.title}</h1>
            <h2>{selectedCase.titlebis}</h2>
            {selectedCase.text.map((p, index) => {return <p key={index}>{p}</p>})}

              <BlockExpertises type={"showcase"} selected={selectedCase} shouldActivate={this.props.active} />

                <button className="back-to-general showcase-close" onClick={this.props.toggleShowcase} style={{opacity:1, cursor:"pointer"}}>
                  <svg viewBox="0 0 56 56">
                    <g>
                      <g>
                        <g>
                          <polyline className="back-arrow-polyline-one" points="25.5,40.25 37.5,28.149 25.5,15.75"/>
                        </g>
                        <g>
                          <polyline className="back-arrow-polyline-two" points="18.5,34 24.378,28.073 18.5,22"/>
                        </g>
                      </g>
                      <circle cx="28" cy="28" r="25.5"/>
                    </g>
                  </svg>
                </button>
            </div>
            <div className="showcase-carousel">
              <Carousel
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                axis={"vertical"}
                verticalSwipe={"natural"}
                autoPlay={this.state.autoPlay}
                stopOnHover={true}
                showThumbs={false}
                emulateTouch={true}
                >
                {
                  selectedCase.carouselImgsUrl.map((img, index) => {
                    return(
                      <div key={index} className="carousel-elem" style={{backgroundImage:`url(${img})`}}>
                        <img src={img} alt={`image-${index} du client ${selectedCase.title}`} />
                      </div>)
                    })
                  }
                </Carousel>
              </div>


            </div>
          </div>

        )
      }
    }
