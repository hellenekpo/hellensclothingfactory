import React, { useState, ChangeEvent } from "react";

const PhoneNumber = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        const targetValue = phoneNumberAutoFormat(e.target.value);
        setValue(targetValue);
    };

    return (
        <>
            <div>
                <input

                    type="tel" value={value} onChange={onChange} maxLength={14} />
            </div>
            <div>{value}</div>
        </>
    );
};

export default PhoneNumber;