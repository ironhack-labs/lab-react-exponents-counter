import React from 'react';
import ExponentTwo from './ExponentTwo';
import ExponentThree from './ExponentThree';
import ExponentFour from './ExponentFour';
import ExponentFive from './ExponentFive';
import ExponentSix from './ExponentSix';

const Exponent = ({ num, count }) => {
	const repetiton = () => {
		const array = [];
		for (let i = 1; i <= num; i++) {
			array.push(count);
		}
		return array;
	};
	const multiplyNum = (arr) => {
		return arr.reduce((acc, curr) => acc * curr, 1);
	};
	return (
		<div className="exponent-counter-container">
			<p className="exponent-label">
				{count}<sup> {num} </sup>
			</p>
			<p className="exponent-result">
				{repetiton().join(' * ')} = 
				<span className="total"> {multiplyNum(repetiton())}</span>
			</p>
		</div>
	);
};

export default Exponent;
