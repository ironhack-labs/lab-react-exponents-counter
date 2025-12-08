function ExponentFour({ count }) {
  return (
    <div className="exp-box">
      <h2>{count}⁴</h2>
      <p>{count} * {count} * {count} * {count} = {count ** 4}</p>
    </div>
  );
}

export default ExponentFour;
