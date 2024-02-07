export default function Exponent({ count, exp }) {
  function _numbs(count) {
    let answer = "";
    for (let i = 1; i < exp; i++) {
      answer += `${count} * `;
    }
    return answer + ` ${count}`;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{exp}</sup>
      </p>
      <p className="exponent-result">
        {_numbs(count)} = <span className="total">{(count **= exp)}</span>
      </p>
    </div>
  );
}
