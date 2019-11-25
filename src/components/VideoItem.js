import "./VideoItems.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <button className="video-item" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video-item__content">{video.snippet.title}</div>
    </button>
  );
};

export default VideoItem;
