import React, {useEffect, useContext, useState} from 'react'
import {PageData} from '../App'
import { Link, useParams } from 'react-router-dom';

import Slider from "react-slick";
import Subscribe from '../components/Subscribe'

/*** COMPONENTS ***/
import BackButton from '../components/BackButton'

function ArchiveItem() {
  const { id } = useParams()
  const { state } = useContext(PageData)
  const [data, setData] = useState("")

  useEffect(() => {
    if (state.archive)
      setData(state.archive.find(item => item.Slug === id))
  }, [id, state])

  console.log(data.archive);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  //Settings for Slick Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipe: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
        }
      }
    ]
  };
  
  return (
    <div id="archive-detail">
        <BackButton />
        <div>
            <div className="archive-item">
            <div className="archive-video">
              <iframe width="560" height="315" src={data.VideoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="archive-video-info">
                <div className="archive-video-top">
                  <h1 className="archive-title">{data.EpisodeTitle}</h1>
                  <h1 className="archive-location">{data.Location}</h1>
                  <h1 className="archive-date">{data.Date}</h1>
                </div>
                <div className="archive-video-btm">
                  <p>{data.EpisodeDescription}</p>
                  
                </div>
            </div>
          </div>
        </div>
        
        <div className="archive-video-more">
          <h1 className="archive-more-title">more from the archive</h1>
          <div className="archive-more-row">
            <Slider {...settings}>
            {
              state.archive.length > 0 && state.archive.map(data => 

                      <div className="archive-more-item">
                        <Link to={`/archive/${data.Slug}`} className="archive-more-item-link" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                          <div
                            className="archive-more-item-img"
                            style={{ backgroundImage: `url(${data.ImageDriveURL})` }}
                              alt="Archive Image"></div>
                          <h4 className="archive-more-item-title">{data.EpisodeTitle}</h4>
                          <h4 className="archive-more-item-date">{data.Date}</h4>
                        </Link>
                      </div>
              )
            }
            </Slider>
            </div>
        </div>
        <Subscribe inLivestream={true} />
    </div>
  )
}

export default ArchiveItem



