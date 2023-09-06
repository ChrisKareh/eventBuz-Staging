const verification = () => {
    <div className="containerVerification">
        <header>
            <i className="bx bxs-check-shield"></i>
        </header>
        <h4>Enter OTP Code</h4>
        <form action="#">
            <div className="input-field">
                <input type="number" />
                <input type="number" disabled />
                <input type="number" disabled />
                <input type="number" disabled />
            </div>
            <button>Verify OTP</button>
        </form>
    </div>
}

export default verification