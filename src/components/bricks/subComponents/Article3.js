import React from 'react';

const Article3 = () => {
    return (
        <React.Fragment>
        <article className="brick entry format-quote animate-this">
        <div className="entry-thumb">                  
          <blockquote>
            <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>
            <cite>Dieter Rams</cite> 
          </blockquote>	          
        </div>   
      </article> 
      <article className="brick entry animate-this">
        <div className="entry-thumb">
          <a href="single-standard.html" className="thumb-link">
            <img src="images/thumbs/shutterbug.jpg" alt="Shutterbug" />                      
          </a>
        </div>
        <div className="entry-text">
          <div className="entry-header">
            <div className="entry-meta">
              <span className="cat-links">
                <a href="#">Photography</a> 
                <a href="#">html</a>                				
              </span>			
            </div>
            <h1 className="entry-title"><a href="single-standard.html">Photography Skills Can Improve Your Graphic Design.</a></h1>
          </div>
          <div className="entry-excerpt">
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
          </div>
        </div>
      </article>
      </React.Fragment>
    )
}

export default Article3;
