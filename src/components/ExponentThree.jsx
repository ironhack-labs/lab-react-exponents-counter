import Exponent from "./exponent";

const ExponentThree = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}³</p>
    <Exponent count={props.count} multiplyBy={3} />
  </div>
);

export default ExponentThree;
