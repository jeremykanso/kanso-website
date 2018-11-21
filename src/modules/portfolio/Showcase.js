import React from "react";
import PropTypes from "prop-types"
import casesInfos from './BlockInfos'
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
    const selectedCase = casesInfos.find(selected => selected.id === this.props.index)
    let active = " "
    if (this.props.active) active = "showcase-active"

    return (
      <div className={`showcase ${active}`}>
        <div className="showcase-container">
          <div className="showcase-text">
            <h1 style={{backgroundImage:`url(${selectedCase.bgUrlColor})`}}>{selectedCase.title}</h1>
            <h2>{selectedCase.titlebis}</h2>
            {selectedCase.text.map((p) => {return <p>{p}</p>})}

              <ul className="bloc-expertises">
                {
                  selectedCase.expertises.map(({category, size}) => {
                    let jaugeSize = size * 0.6
                    if(!this.props.showcaseOn) jaugeSize = 0
                    return(
                      <li className="expertise">
                        <div className="expertise-text">{category}</div>
                        <div className="expertise-gauge" style={{width:jaugeSize+"%"}} />
                      </li>
                    )
                    })
                }
              </ul>

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
                  selectedCase.carouselImgsUrl.map((img) => {
                    return(
                      <div className="carousel-elem" style={{backgroundImage:`url(${img})`}}>
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
