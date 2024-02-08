import Exponent from "./exponent";

const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁵</p>
    <Exponent count={props.count} multiplyBy={5} />
  </div>
);

export default ExponentFive;
