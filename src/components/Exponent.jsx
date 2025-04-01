export default function Exponent({count, exponent}){
    return(
        <div className="exponent-counter-container">
            <p className="exponent-label">n<sup>{exponent}</sup></p>
            <p className="exponent-result">{count} * {count} = <span className="total">{count**exponent}</span></p>
        </div>
    )
}