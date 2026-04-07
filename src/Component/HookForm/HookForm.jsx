import React from 'react';
import useInputField from '../../Hooks/InputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnChange]= useInputField('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submitted', name , email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' onChange={nameOnChange} defaultValue={name} />
                <br />
                <input type="email" name="email" placeholder='email' onChange={emailOnChange} />
                <br />
                <input type="password" name="password" placeholder='Password' onChange={passwordOnChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
