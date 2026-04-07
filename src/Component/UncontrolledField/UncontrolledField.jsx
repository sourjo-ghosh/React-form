import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const HandleSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="email" ref={emailRef} name="email" placeholder='Email' />
                <br />
                <input type="password" ref={passwordRef} name="password" placeholder='Enter your password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;