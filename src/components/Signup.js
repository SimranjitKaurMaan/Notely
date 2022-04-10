import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { signupUser } from '../utils/requestUtils/AuthRequestUtils';
import { FormControl, InputLabel, Input, Radio, FormControlLabel, Button } from '@mui/material';


export const SignUp = () => {
    const [userData, setUserData] = useState({email: '',password: ''});
    const navigate = useNavigate();
    const signupHandler =  async (event) => {
        event.preventDefault();
        const response = await signupUser(userData);
        console.log(response);
        document.cookie = "token=" + response.encodedToken;
        navigate('/');
    }
    const testUserSignupHandler =  async (event) => {
        event.preventDefault();
        setUserData({email:'test',password:'test'});
        const response = await signupUser({email:'test',password:'test'});
        console.log(response);
        document.cookie = "token=" + response.encodedToken;
        navigate('/');
    }
  
    const handleFormDetailsChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setUserData({...userData, [inputName]:inputValue});
    }


    return (<>
    <main>
    <div className="main-section">
        <div className="main-container flex-col-wrap-center">
            <FormControl>
                <div className="sign-up card-container">
                    <div className="input-container flex-col-wrap-center">
                        <h2>Signup</h2>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input name="email" onChange={(event) => handleFormDetailsChange(event)}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" onChange={(event) => handleFormDetailsChange(event)}/>
                        </FormControl>
                        <FormControlLabel value="accepted" control={<Radio />} label="I accept all Terms & Conditions" />
                        <Button variant="contained" onClick={signupHandler}>Create New Account</Button>
                        <Button variant="contained" onClick={testUserSignupHandler}>Create Test Account</Button>
                        <Link to="/login">Already have an account<i className="fa fa-thin fa-chevron-right"></i></Link>
                    </div>
                </div>
            </FormControl>
        </div>
    </div>
  </main></>)
}