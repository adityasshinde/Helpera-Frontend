import { authActions } from "../redux-store/auth";
import { redirect } from "react-router-dom";

export const loginUserMain=(email,password)=>{
      return async(dispatch)=>{
        const loginUser=async(email,password)=>{
            let response=await fetch(process.env.REACT_APP_HELPERA_LOGIN_URL,{
                method:'POST',
                headers:{
                        'Content-Type':'application/json'
                },
                body:JSON.stringify({'email':email,'password':password})
            }) 
            let data=await response.json()
            let authError={}
            if(response.status===200){
                console.log("Logged in successfully");
                localStorage.setItem("token",data.token)
            redirect("/")

            }
            else{
                authError={
                    message:"Email or password is incorrect",
                    code:response.status,
                    response:response.statusText
                }
                alert('something went wrong');
            }
            dispatch(authActions.setAuthError(authError));
            dispatch(authActions.setUser(data.result));
            dispatch(authActions.setToken(data.token));
        }
        try{
            await loginUser(email,password);
           }catch(error){}
  
    }
}