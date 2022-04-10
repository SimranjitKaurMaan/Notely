import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { loginUser } from "../utils/requestUtils/AuthRequestUtils";
import { Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel } from "@mui/material";

export const Login = () => {
    const [userData , setUserData] = useState({email: '',password: ''});
    const navigate = useNavigate();
    const loginHandler =  async (event) => {
        event.preventDefault();
        const response = await loginUser(userData);
        if(response && response.encodedToken){
            navigate('/');
        } else{
            console.error(response.errors[0]);
        }
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
                        <div className="login card-container">
                            <div className="input-container flex-col-wrap-center">
                                <h2>Login</h2>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input name="email" autoFocus onChange={(event) => handleFormDetailsChange(event)}/>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input name="password" type="password" onChange={(event) => handleFormDetailsChange(event)}/>
                                </FormControl>
                                <FormControlLabel control={<Checkbox/>} label="Remember me" />
                                <Button variant="contained" onClick={loginHandler}>Login</Button>
                                <Link to="/signup">Don't have an account<i className="fa fa-thin fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </FormControl>    
                </div>
            </div>
        </main>
    </>)}