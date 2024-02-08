import Exponent from "./exponent";

const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁶</p>
    <Exponent count={props.count} multiplyBy={6} />
  </div>
);

export default ExponentSix;
