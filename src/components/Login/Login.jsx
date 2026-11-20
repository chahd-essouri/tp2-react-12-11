import { useState } from "react";
function Login(){
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[erreur,setErreur]=useState({});

function handleSubmit(e){
    e.preventDefault();
    const newerreur={};
    if (email.trim()===""){
        newerreur.email="veuillez indiquer votre email";
    }
    else if(! /\S+@+\S+\.+\S/.test(email)){
        newerreur.email="veuillez introduire un email valide";
    }
    if(password.trim()){
        newerreur.password="veuillez introduire votre mot de passe";
    }
    if(password.length<8){
        newerreur.password=" mot de passe doit avoir au moins 8 caracteres";
    }
    if(!/[A-Z]/.test(password)){
        newerreur.password=" mot de passe doit contenir au moins une lettre majuscule";
    }
    if(!/[0-9]/.test(password)){
        newerreur.password=" mot de passe doit contenir au moins un chiffre";
    }
    if(!/[^a-zA-Z0-9]/.test(password)){
        newerreur.password=" mot de passe doit contenir au moins un caractere special";
    }
    
    if(Object.keys(newerreur).length===0){
        alert("validation avec succees");
    }
    else{
        setErreur(newerreur)
        console.log(newerreur);
    }
}
return (
    <form onSubmit={handleSubmit}>
        
        <div>
            <label htmlFor="email">email</label>
            <input type="text" 
                   name="email" 
                   id="email" 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
                   {
                        erreur.email &&
                        (<span>
                            {erreur.email}
                        </span>)
                    }
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" 
                   name="password" 
                   id="password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                    />
                    {erreur.password &&
                        (<span>
                            {erreur.password}
                        </span>)
                    }
        </div>
        <div>
            <button type="submit">enregistrer</button>
        </div>
    </form>

);
}
export default Login;
