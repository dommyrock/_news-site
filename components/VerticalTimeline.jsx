import { useState } from "react";

const timestampData = [2, 3, 4, 5, , 6, 7, 7, 8, 888, 8888, 8, 9, 10, 13, 15];
const VerticalTimeline = () => {
  const timestamps = timestampData.map((num) => <li className="linedown1">{num}</li>);

  const [left, setState] = useState(0);
  const styles = {
    "--left": left + "px",
  };
  const handleMouseMove = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    setState(x);
    console.log(e.target.style);

    //document.getElementsByClassName("chart").style.setProperty("--left", x);
  };
  return (
    <div className="horiz-timeline">
      <ul onMouseMove={(e) => handleMouseMove(e)} style={styles}>
        {timestamps}
      </ul>
    </div>
  );
};

export default VerticalTimeline;

/** 
 * 
 * 
 * try with this on separate white screen (closest i got , no li thsdsso)
 * https://stackoverflow.com/questions/52346454/how-to-animate-vertical-lines-growing-up-and-down-using-css
 *
 *  animation lines example:
 * 1 https://stackoverflow.com/questions/37246536/grow-line-from-center-out-on-page-load-with-css
 * 3https://codepen.io/fluidbrush/pen/gyqBjX
 *
 * tutorial https://www.joshwcomeau.com/animation/css-transitions/
 * 1 animated hover https://codepen.io/cassidoo/pen/RZOWQb
 * 2 anim hoer https://codepen.io/fitri/pen/oPMKNv
 *
 *Blur background example:
 https://www.youtube.com/watch?v=wiIbol5tZaI
 *
 *this didnt work
 line above /below example https://stackoverflow.com/questions/13598148/how-to-create-a-vertical-line-with-a-text-in-the-middle
 */
