import { useState } from "react";

export default function Person() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    } 

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>Enter your full name</h2>
            <label>
                First Name:{' '}
                <input 
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            
            <label>
                Second Name: {' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange} 
                />
            </label>

            <p>
                Full Name: <b> {' '} {fullName} </b>
            </p>
        </>
    );
}
