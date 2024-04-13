import React, {useEffect, useContext} from 'react'
import {PageData} from '../App'
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import Subscribe from '../components/Subscribe'

/*** COMPONENTS ***/
import BackButton from '../components/BackButton'

function Archive() {
  //const { id } = useParams()
  const { state } = useContext(PageData)

  // const [ data, setData ] = useState("")

  // useEffect(() => {
  //   if (state.archive)
  //     setData(state.archive.find(item => item.Slug === id))
  // }, [id, state])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  //Settings for Slick Carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(state.archive);
  return (
    <div id="archive">
        <div className="archive-header">
          <BackButton />
          <h1 className="archive-title">archive</h1>
        </div>
        
        <Slider {...settings}>
        {
          state.archive.length > 0 && state.archive.map(data => 

              <Link key={data.Slug} to={`/archive/${data.Slug}`}>
                <div className="archive-slide-bg" style={{ backgroundImage: `url(${data.ImageDriveURL})` }}>
                  <div className="archive-slide-info">
                    <h1 className="archive-slide-title">{data.Artist}</h1>   
                    <br></br>                 
                    <p className="archive-slide-desc">{data.ShortDesc}</p>
                  </div>
                  {/* <ReactMarkdown source={block.fields.People} linkTarget={"_blank"} /> */}

                </div>
              </Link>
          )
        }
        </Slider>
        
        
        <div className="archive-content">
          <div className="archive-msg-container">
            <p>The black_beyond archive showcases each of the performances, talks, projects, and other releated content that falls under our platform's umbrella.</p>
          </div>
        </div>
        <Subscribe inLivestream={true} />
    </div>
  )
}

export default Archive
