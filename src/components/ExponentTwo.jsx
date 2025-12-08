function ExponentTwo({ count }) {
  return (
    <div className="exp-box">
      <h2>{count}²</h2>
      <p>{count} * {count} = {count ** 2}</p>
    </div>
  );
}
export default ExponentTwo;
