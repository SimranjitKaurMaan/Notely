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
        navigate('/login');
    }
    const testUserSignupHandler =  async (event) => {
        event.preventDefault();
        setUserData({email:'test',password:'test'});
        const response = await signupUser(userData);
        console.log(response);
        document.cookie = "token=" + response.encodedToken;
        navigate('/');
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
                            <Input id="email" name="email" autoComplete="email" autoFocus onChange={(event) => setUserData({...userData, email: event.target.value})}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" onChange={(event) => setUserData({...userData, password: event.target.value})}/>
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