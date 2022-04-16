import { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate , useLocation} from 'react-router';
import { useAuth } from '../contexts/auth-context';
import { signupUser } from '../utils/requestUtils/AuthRequestUtils';
import { FormControl, InputLabel, Input, Button } from '@mui/material';

export const SignUp = () => {
    const {setIsLoggedIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({email: '',password: ''});
    const signupHandler =  async (event) => {
        event.preventDefault();
        const response = await signupUser(userData);
        document.cookie = "token=" + response.encodedToken;
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        navigate(location?.state?.from?.pathname, { replace: true });
        showSignupToast();
    }
    const testUserSignupHandler =  async (event) => {
        event.preventDefault();
        setUserData({email:'test',password:'test'});
        const response = await signupUser({email:'test',password:'test'});
        document.cookie = "token=" + response.encodedToken;
        setIsLoggedIn((isLoggedIn) => !isLoggedIn);
        navigate(location?.state?.from?.pathname, { replace: true });
        showTestSignupToast();
    }
  
    const handleFormDetailsChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setUserData({...userData, [inputName]:inputValue});
    }

    const showTestSignupToast = () => toast.info("You have signed up as a test user");
    const showSignupToast = () => toast.info("You have signed up successfully.")

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
                        <Button variant="contained" style={{margin: 8}} onClick={signupHandler}>Create New Account</Button>
                        <Button variant="contained" style={{margin: 8}} onClick={testUserSignupHandler}>Create Test Account</Button>
                    </div>
                </div>
            </FormControl>
        </div>
    </div>
  </main></>)
}