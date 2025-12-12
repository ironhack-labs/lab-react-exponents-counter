function Exponent({ count, repeat }){
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>{repeat}</sup></p>
      <p className="exponent-result">{`${count} * `.repeat(repeat - 1) + `${count}`} = <span className="total">{count ** repeat}</span></p>
  </div>
  );
}

export default Exponent;