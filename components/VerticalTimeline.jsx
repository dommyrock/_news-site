import { useState } from "react";

const timestampData = [2, 3, 4, 5, , 6, 7, 7, 8, 888, 8888, 8, 9, 10, 13, 15];

const VerticalTimeline = () => {
  const timestamps = timestampData.map((num) => <li>{num}</li>);

  const [left, setState] = useState(0);
  const styles = {
    "--left": left + "px",
  };
  const handleMouseMove = (e) => {
    let x = e.clientX;
    setState(x);
  };

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
