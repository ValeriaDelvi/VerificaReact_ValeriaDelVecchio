import { useState } from "react";
import { IoEyeSharp as ShowPassword } from "react-icons/io5";
import { FaEyeSlash as HidePassword } from "react-icons/fa6";
import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import PasswordChecklist from "react-password-checklist"



import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* function onClick(e) {
    e.preventDefault();
    if (username.length < 2) {
      setErrorMessage("username troppo corto, servono almeno 3 caratteri");
      if (validazioneEmail(email)) {
        setErrorMessage("email ok")
      } else setErrorMessage("email non valida");
    }

  } */
  function onClick(e) {
    e.preventDefault();

    if(username.length > 2){
      if(validazioneEmail(email)){
        setErrorMessage("email ok")
      }
    } else {
      setErrorMessage("username troppo corto, servono almeno 3 caratteri");
    }
  }

  function validazioneEmail(email) {

    if (email == '') {
      setErrorMessage("Devi indicare un indirizzo email");
      return false;
    }
    // verifico se è un indirizzo valido
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorMessage("L'indirizzo email che hai inserito e' valido")
      return true;
    }
    else {
      setErrorMessage("L'indirizzo email che hai inserito non e' valido");
      return false
    }
  }

  function changePasswordInputType() {
    if (passwordInputType === "text") {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }




  return (
    <>
      <Header title="Signup" icon={<DashboardIcon />} to="/" />;
      <Card>
        <h1 className="text-2xl">Sign Up</h1>
        <form className="w-full">
          {/* username div */}
          <div className="w-full">
            <Input type="text" placeholder="username" value={username} onChange={event => setUsername(event.target.value)} />
          </div>
          {/* email div */}
          <div className="w-full">
            <Input type="email" placeholder="example@test.com" value={email} onChange={event => setEmail(event.target.value)} />
          </div>
          {/* password div */}
          <div className="w-full flex relative">
            <Input type={passwordInputType} placeholder="password" value={password} onChange={handlePasswordChange} />
            <span className="absolute right-3 top-3.5 cursor-pointer" onClick={changePasswordInputType}>
              {passwordInputType === "text" ? <HidePassword /> : <ShowPassword />}
            </span>
          </div>
          {/* controllo password div */}
          {/* password div */}

          <form>
            <Input type={passwordInputType} placeholder="controllo password" onChange={e => setPasswordAgain(e.target.value)} />

            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={5}
              value={password}
              valueAgain={passwordAgain}
              onChange={(isValid) => { }}
            />

            {/* Button div */}
            <div className="w-full">
              <Button title="Sign Up" onClick={onClick} />
            </div>
          </form>

        </form>
        <p>{errorMessage}</p>
      </Card>
    </>
  )
}

export default Signup;
