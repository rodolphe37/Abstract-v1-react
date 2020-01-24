import React from 'react';

const AudioWrap = () => {
    return (
        <article className="brick entry format-audio animate-this">
        <div className="entry-thumb">
          <a href="single-audio.html" className="thumb-link">
            <img src="images/thumbs/concert.jpg" alt="concert" />                      
          </a>
          <div className="audio-wrap">
            <audio id="player" src="media/AirReview-Landmarks-02-ChasingCorporate.mp3" width="100%" height={42} controls="controls" />                  	
          </div>
        </div>
        <div className="entry-text">
          <div className="entry-header">
            <div className="entry-meta">
              <span className="cat-links">
                <a href="#">Design</a> 
                <a href="#">Music</a>                				
              </span>			
            </div>
            <h1 className="entry-title"><a href="single-audio.html">This Is a Audio Format Post.</a></h1>
          </div>
          <div className="entry-excerpt">
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
          </div>
        </div>
        </article>
    )
}

export default AudioWrap;