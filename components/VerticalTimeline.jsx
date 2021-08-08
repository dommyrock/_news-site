import { useState } from "react";

const timestampData = [...Array(48).keys()];

const VerticalTimeline = () => {
  const [left, setState] = useState(0);

  const handleMouseMove = (e) => {
    let x = e.clientX;
    setState(x);
  };

  const timestamps = timestampData.map((timestamp) => <li key={timestamp}>{timestamp}</li>);

  const styles = {
    "--left": left + "px",
  };
  //TODO swipe numbers https://github.com/xiaody/react-touch-carousel

  return (
    <div className="horiz-timeline">
      <ul onMouseMove={(e) => handleMouseMove(e)} style={styles}>
        <div style={{ display: "inherit", width: "var(--left)" }}>{timestamps}</div>
        {/* {timestamps} */}
      </ul>
      <div>
        <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
        <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
        <h3>ahahahahhahaha dhhadhahdadadhdhadhahdahd ahd ahd hhad </h3>
      </div>
      <div className="frost-backdrop-filter" style={styles}></div>
    </div>
  );
};

export default VerticalTimeline;

//dont forget this for current process /launch/build status https://codepen.io/roppazvan/pen/axgoYR
