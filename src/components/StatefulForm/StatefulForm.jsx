import { useState } from "react";



 

const StatefulForm = () => {
  const[email,setEmail]=useState(null);
  const[password,setPassword]=useState(null);
    const handleSubmit=e=>{
     e.preventDefault();
     console.log(email);

    }

    const handleEmailChang=e=>{
     console.log(e.target.value);
     setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
      setPassword(e.target.value);
    } 
     return (
        <div>
             <form onSubmit={handleSubmit}>

<input type="text" name="name" />
<br/>

<input
onChange={handleEmailChang}

type="email" name="email" id="" />
<br/>
<input 
onChange={}
type="password" name="password" />
<br/>
<input type="submit" value="Submit" />

</form>
        </div>
    );
};

export default StatefulForm;