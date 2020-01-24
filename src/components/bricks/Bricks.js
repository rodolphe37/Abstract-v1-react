import React from 'react';
import EntrieContents from './subComponents/EntrieContents';
import Article1 from './subComponents/Article1';
import Article2 from './subComponents/Article2';
import AudioWrap from './subComponents/AudioWrap';
import Article3 from './subComponents/Article3';
import Article4 from './subComponents/Article4';
import Pagination from './subComponents/Pagination';

const Bricks = () => {
    return (
        <section id="bricks">
  <div className="row masonry">
    {/* brick-wrapper */}
    <div className="bricks-wrapper">
      <div className="grid-sizer" />
      <div className="brick entry featured-grid animate-this">
        <EntrieContents />     		
      </div>
      <Article1 />
      <Article2 />
      <AudioWrap />
      <Article3 />
      <Article4 />
    </div> {/* end brick-wrapper */} 
  </div> {/* end row */}
        <Pagination />
</section>

    )
}

export default Bricks;