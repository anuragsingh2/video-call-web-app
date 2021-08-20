import React, { useRef, useEffect } from "react";

const LocalScreenSharingPreview = ({ stream }) => {
  const localPreviewRef = useRef();

  useEffect(() => {
    const video = localPreviewRef.current;

    video.srcObject = stream;

    video.onloadedmetada = () => {
      video.play();
    };
  }, []);
  return (
    <div className="local_screen_share_preview">
      <video muted autoplay ref={localPreviewRef}></video>
    </div>
  );
};

export default LocalScreenSharingPreview;
