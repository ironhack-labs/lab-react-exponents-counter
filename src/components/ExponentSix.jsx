function ExponentSix({ count }) {
  return (
    <div className="exp-box">
      <h2>{count}⁶</h2>
      <p>{count} * {count} * {count} * {count} * {count} * {count} = {count ** 6}</p>
    </div>
  );
}

export default ExponentSix;
