import React from 'react';

const Article2 = () => {
    return (
        <article className="brick entry format-standard animate-this">
        <div className="entry-thumb">
          <a href="single-standard.html" className="thumb-link">
            <img src="images/thumbs/ferris-wheel.jpg" alt="ferris wheel" />                   
          </a>
        </div>
        <div className="entry-text">
          <div className="entry-header">
            <div className="entry-meta">
              <span className="cat-links">
                <a href="#">Design</a> 
                <a href="#">UI</a>                			
              </span>			
            </div>
            <h1 className="entry-title"><a href="single-standard.html">This Is Another Standard Format Post.</a></h1>
          </div>
          <div className="entry-excerpt">
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
          </div>
        </div>
      </article>
    )
}

export default Article2;