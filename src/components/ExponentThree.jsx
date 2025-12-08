function ExponentThree({ count }) {
  return (
    <div className="exp-box">
      <h2>{count}³</h2>
      <p>{count} * {count} * {count} = {count ** 3}</p>
    </div>
  );
}

export default ExponentThree;
