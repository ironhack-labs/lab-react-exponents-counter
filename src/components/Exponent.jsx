const Exponent = (props) => {

  const result = Math.pow(props.num, props.exponent)

  let repeater = [];

  for (let i = 0; i < props.exponent; i++) {
    repeater.push(props.num)
  }

  repeater = repeater.join("*")

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.num}<span className="super">{props.exponent}</span></p>
      <p className="exponent-result">{repeater} = <span className="total">{result}</span></p>
    </div>
  );
}
export default Exponent;

