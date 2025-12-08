function ExponentFive({ count }) {
  return (
    <div className="exp-box">
      <h2>{count}⁵</h2>
      <p>{count} * {count} * {count} * {count} * {count} = {count ** 5}</p>
    </div>
  );
}

export default ExponentFive;
