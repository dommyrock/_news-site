import { useState, useRef } from "react";

const timestampData = [...Array(96).keys()];

let scrollLeft;
let start_x;

const VerticalTimeline = () => {
  const [left, setLeft] = useState(0);
  const [isdown, setDown] = useState(false);
  const timelineRef = useRef(null);

  const handleMouseMove = (e) => {
    let x = e.clientX;
    setLeft(x);
    if (!isdown) return; //stop fn from running
    e.preventDefault();
    const xpos = x - timelineRef.current.offsetLeft;
    const walk = xpos - start_x;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = (e) => {
    setDown(false);
  };
  const handleMouseLeave = (e) => {
    setDown(false);
  };
  const handleMouseDown = (e) => {
    setDown(true);
    start_x = e.clientX - timelineRef.current.offsetLeft;
    scrollLeft = timelineRef.current.scrollLeft;
  };
  const handleBack = (e) => {
    timelineRef.current.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const styles = {
    "--left": left + "px",
  };
  // Fove frost tol left because it makes ul items unhoverable
  const frostStyle = {
    "--left": left - 20 + "px",
  };

  return (
    <>
      <button onClick={(e) => handleBack(e)} style={{ position: "sticky" }}>
        back
      </button>
      <div
        id="timeline-container"
        className="horiz-timeline"
        ref={timelineRef}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <div>
          {/* <div style={{ display: "inherit", width: "var(--left)" }}> */}
          <ul style={styles}>
            {timestampData &&
              timestampData.map((timestamp) => (
                <li id={timestamp} key={timestamp}>
                  {timestamp}
                </li>
              ))}
          </ul>
          {/* </div> */}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
          <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
        </div>
        <div className="frost-backdrop-filter" style={frostStyle}></div>
      </div>
    </>
  );
};

export default VerticalTimeline;
//dont forget this for current process /launch/build status https://codepen.io/roppazvan/pen/axgoYR
