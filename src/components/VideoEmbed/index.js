import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ jofNR_WkoCE }) => (
  <div className="video-responsive">
    <iframe 
		max-width="360" 
		src="https://www.youtube.com/embed/jofNR_WkoCE?controls=0&amp;start=115" title="What Does the Fox Say - Ylvis" frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		/>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;