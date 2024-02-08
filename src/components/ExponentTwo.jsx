import Exponent from "./exponent";
const ExponentTwo = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}²</p>
    <Exponent count={props.count} multiplyBy={2} />
  </div>
);

export default ExponentTwo;
