const ExponentSix = ({ count }) => {
	const result = count ** 6;

	return (
		<div className="exponent-counter-container">
			<p className="exponent-label">n⁶</p>
			<p className="exponent-result">
      {count}⁶ = <span className="total">{result}</span>
			</p>
		</div>
	);
};

export default ExponentSix;
