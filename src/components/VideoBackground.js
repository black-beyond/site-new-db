import preloadImage from '../assets/preload-image.png';
import bgVideo from '../assets/black-beyond-loop.mp4';
import fallback from '../assets/black-beyond-loop-fallback.gif';

function VideoBackground({ position = "center", fixed = "false", className = "" }) {

  // useEffect(() => {
  //   //force the preload image to... preload
  //   const img = new Image();
  //   img.src = "../assets/preload-image.png"
  // }, [])

  return (
    <div id="video-background" className={fixed ? "fixed" : ""}>
      <div id="video-container" className={position}>
        <video
          src={window.innerWidth < 500 ? "" : bgVideo}
          className={className}
          autoPlay
          muted
          loop
          poster={preloadImage}
        />
        <img src={fallback} alt="A video placeholder that is truly beyond." autoPlay muted loop />
      </div>
    </div>
  )
}

export default VideoBackground
