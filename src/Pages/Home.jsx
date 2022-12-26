import { GoogleLoginButton } from "react-social-login-buttons";

export default function Home({login,setLogin}){


const  handleClick=()=>{
    setTimeout(()=>{
     alert("You log in ") 
      setLogin(true);
    },500)
  }
return(

  <div className="home">

    <div className="login">
      {!login &&
      
      <GoogleLoginButton  style={{width:300}} onClick={handleClick} />
      }
    </div>
  </div>
)

  
}