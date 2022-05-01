import React from 'react'

function Video() {
  return (
    <div>
           <iframe
            className="youtube-video"
            width="500"
            height="450"
            src="https://www.youtube.com/embed/r9R_IJ1w_FU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    </div>
  )
}

export default Video