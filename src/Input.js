import "./LoanForm.css";
export default function Input({ title, value, handelChange }) {
    return (
        <>
            <div className="input-block">
                <label>{title} : </label>
                <input
                    type="text"
                    placeholder="User Name"
                    value={value}
                    onChange={(event) => {
                        handelChange(event.target.value);
                    }}
                />
            </div>
        </>
    );
}
