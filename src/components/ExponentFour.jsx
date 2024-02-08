import Exponent from "./exponent";

const ExponentFour = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁴</p>
    <Exponent count={props.count} multiplyBy={4} />
  </div>
);

export default ExponentFour;
