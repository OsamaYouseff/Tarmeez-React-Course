import { useState } from "react";
import "./LoanForm.css";

import PopUpMsg from "./PopUpMsg.js";
import InputComponent from "./Input.js";

export default function LoanForm() {
    ////// variables
    let [formData, setFormData] = useState({
        name: "",
        phone: "",
        age: 0,
        salary: "",
        isEmployee: false,
    });

    let [modelMsg, setModelMsg] = useState("The form was send successfully");

    const [showModel, setShowModel] = useState(false);
    const [isError, setIsError] = useState(false);

    let isSubmitBtnDisabled =
        formData.name === "" ||
        formData.phone === "" ||
        formData.age === "" ||
        formData.salary === "" ||
        formData.isEmployee === false;

    ////// functions
    function handelUserName(newValue) {
        setFormData({
            ...formData,
            name: newValue,
        });
    }
    function handelPhoneNumber(newValue) {
        setFormData({
            ...formData,
            phone: newValue,
        });
    }
    function handelAge(newValue) {
        setFormData({
            ...formData,
            age: newValue,
        });
    }
    function handelSalary(newValue) {
        setFormData({
            ...formData,
            salary: newValue,
        });
    }
    function handelIsAnEmployee(event) {
        setFormData({
            ...formData,
            isEmployee: event.target.checked,
        });
    }
    function isNameValid() {
        return formData.name !== "" && formData.name.length >= 3;
    }
    function isPhoneValid() {
        return (
            formData.phone !== "" &&
            formData.phone.length >= 10 &&
            formData.phone.length <= 13
        );
    }
    function isAgeValid() {
        return formData.age >= 18 && formData.age <= 100;
    }
    function isSalaryValid() {
        return formData.salary !== 0;
    }

    function sendLoanFormData() {
        if (!isNameValid()) {
            setModelMsg("Please Enter a Valid Name");
            setIsError(true);
            setShowModel(true);
            return;
        } else if (!isPhoneValid()) {
            setModelMsg("Please Enter a Valid Phone Number");
            setIsError(true);
            setShowModel(true);
            return;
        } else if (!isAgeValid()) {
            setModelMsg("Please Enter a Valid Age");
            setIsError(true);
            setShowModel(true);
            return;
        } else if (!isSalaryValid()) {
            setModelMsg("Please Enter choice your salary");
            setShowModel(true);
            setIsError(true);
            return;
        } else {
            setModelMsg("The form was send successfully");
            setIsError(false);
            setShowModel(true);
        }
    }

    function handelHideModel() {
        if (showModel === true) {
            setShowModel(false);
        }
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    console.log(formData);
                    e.preventDefault();
                }}
            >
                <h1>A Loan Request Form</h1>

                <InputComponent
                    title="Name"
                    handelChange={handelUserName}
                    value={formData.name}
                />
                <InputComponent
                    title="Phone Number"
                    handelChange={handelPhoneNumber}
                    value={formData.phone}
                />
                <InputComponent
                    title="Age"
                    handelChange={handelAge}
                    value={formData.age}
                />

                <div className="input-block">
                    <label>Salary : </label>
                    <select value={formData.salary} onChange={handelSalary}>
                        <option>Less than $500</option>
                        <option>Between $500 and $2000</option>
                        <option>above $2000</option>
                    </select>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    Are you an Employee?
                    <input
                        className={"is-employee"}
                        type="checkbox"
                        value={formData.isEmployee}
                        checked={formData.isEmployee === true}
                        onChange={handelIsAnEmployee}
                    />
                </div>
                <input
                    type="submit"
                    disabled={isSubmitBtnDisabled}
                    className={
                        isSubmitBtnDisabled ? "submit-btn" : "submit-btn active"
                    }
                    onClick={sendLoanFormData}
                />
            </form>
            <div onClick={handelHideModel}>
                <PopUpMsg isVisible={showModel} isError={isError}>
                    {modelMsg}
                </PopUpMsg>
            </div>
        </>
    );
}
