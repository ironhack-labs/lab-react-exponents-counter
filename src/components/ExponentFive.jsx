const ExponentFive = ({ count }) => {
	const exponent = 5;
	const base = count;
	const operation = `${Array(exponent).fill(base).join(' * ')}`;
	const result = count ** exponent;

	return (
		<div className='exponent-counter-container'>
			<p className='exponent-label'>n⁵</p>
			<p className='exponent-result'>
				{operation} = <span className='total'>{result}</span>
			</p>
		</div>
	);
};

export default ExponentFive;
