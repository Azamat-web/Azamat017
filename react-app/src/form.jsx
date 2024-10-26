import React from 'react';
import { useCheckValidation } from './utils/useCheckValidation';

const Form = () => {
    const { value: nameValue, error: nameError, setValue: setNameValue } = useCheckValidation(value => value.length < 5);
    const { value: surnameValue, error: surnameError, setValue: setSurnameValue } = useCheckValidation(value => value.length < 3);
    const { value: fathernameValue, error: fathernameError, setValue: setFathernameValue } = useCheckValidation(value => value.length < 3);
    const { value: emailValue, error: emailError, setValue: setEmailValue } = useCheckValidation(value => !value.includes('@gmail.com'));
    const { value: phoneValue, error: phoneError, setValue: setPhoneValue } = useCheckValidation(value => !value.includes(+998) || value.length > 13 || value.length < 13);
    const { value: passwordValue, error: passwordError, setValue: setPasswordValue } = useCheckValidation(value => value.length < 8);

    return (
        <div>
            <form>
                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: nameError ? 'red' : 'black' }}
                    />
                    {nameError && <p style={{ color: 'red', marginTop: 0 }}>Invalid</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="text"
                        placeholder="Surname"
                        value={surnameValue}
                        onChange={(e) => setSurnameValue(e.target.value)}
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: surnameError ? 'red' : 'black' }}
                    />
                    {surnameError && <p style={{ color: 'red', marginTop: 0 }}>Invalid</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="text"
                        placeholder="Fathername"
                        value={fathernameValue}
                        onChange={(e) => setFathernameValue(e.target.value)}
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: fathernameError ? 'red' : 'black' }}
                    />
                    {fathernameError && <p style={{ color: 'red', marginTop: 0 }}>Invalid</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: emailError ? 'red' : 'black' }}
                    />
                    {emailError && <p style={{ color: 'red', marginTop: 0 }}>Invalid</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="text"
                        placeholder="Phone number"
                        value={phoneValue}
                        onChange={(e) => setPhoneValue(e.target.value)}
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: phoneError ? 'red' : 'black' }}
                    />
                    {phoneError && <p style={{ color: 'red', marginTop: 0 }}>Invalid</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: passwordError ? 'red' : 'black' }}
                    />
                    {passwordError && <p style={{ color: 'red', marginTop: 0 }}>Invalid</p>}
                </div>
            </form>
        </div>
    );
};

export default Form;