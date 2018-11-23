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
    showcaseOn: PropTypes.bool.isRequired
  }

  render() {
    const selectedCase = casesList.find(selected => selected.id === this.props.index)
    let active = " "
    if (this.props.active) active = "showcase-active"

    return (
      <div className={`showcase ${active}`}>
        <div className="showcase-container">
          <div className="showcase-text">
            <h1 style={{backgroundImage:`url(${selectedCase.bgUrlColor})`}}>{selectedCase.title}</h1>
            <h2>{selectedCase.titlebis}</h2>
            {selectedCase.text.map((p, index) => {return <p key={index}>{p}</p>})}

              <BlockExpertises type={"showcase"} selected={selectedCase} shouldActivate={this.props.showcaseOn} />

              <button className="showcase-close" onClick={this.props.toggleShowcase}><img src={require('../assets/img/close_showcase.svg')} /></button>
            </div>
            <div className="showcase-carousel">
              <Carousel
                showIndicators={false}
                showStatus={false}
                infiniteLoop={true}
                axis={"vertical"}
                verticalSwipe={"natural"}
                autoPlay={true}
                stopOnHover={true}
                showThumbs={false}
                emulateTouch={true}
                >
                {
                  selectedCase.carouselImgsUrl.map((img, index) => {
                    return(
                      <div key={index} className="carousel-elem" style={{backgroundImage:`url(${img})`}}>
                        <img src={img} />
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
