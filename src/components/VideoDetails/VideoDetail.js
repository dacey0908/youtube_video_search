import React from "react";

import "./videoDetails.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-content">
      <div className="video-content__player">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="video-content__details">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
