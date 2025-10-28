// components/Exponent.jsx
function Exponent({ num, exponent }) {
  return (
    <p>
      n<sup>{exponent}</sup> = {num ** exponent}
    </p>
  );
}

export default Exponent;
