import { useState } from "react";
import { useCredentials } from "../../contexts";
import axios from "axios";

export default function Login() {
  const { emailValue, setEmailValue, passwordValue, setPasswordValue } =
    useCredentials();
  const [name, setName] = useState("");

  const loginRequest = async (dataObj) => {
    // const options = {
    //   method: "POST",
    //   mode: "cors",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: dataObj.password ? JSON.stringify(dataObj) : null,
    // };
    // const otherOptions = {
    //   method: "GET",
    //   mode: "cors",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Set-Cookie": "AuthCookieLogin",
    //   },
    // };
    // const response = await fetch("http://localhost:3001/users/login", options);
    // const data = await response.json();
    // console.log(data);
    // const otherResponse = await fetch(
    //   "http://localhost:3001/users/isUserAuth",
    //   otherOptions
    // );
    // const otherData = await otherResponse.json();
    // console.log(otherData);

    const obj = { name: dataObj["username"] };
    await axios.post("http://localhost:3001/new", obj, {
      withCredentials: true,
    });
  };

  const retrieveToken = async () => {
    const { data } = await axios.get("http://localhost:3001/name", {
      withCredentials: true,
    });

    setName(data.message);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginRequest({ username: emailValue, password: passwordValue });
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    // <form className="input-form" onSubmit={() => navigate(`/${searchValue}`)}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{name}</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          marginTop: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          value={emailValue}
          onChange={handleEmailChange}
          style={{ marginBottom: "20px", height: "44px" }}
          className="input-field"
          // value={searchValue}
          // onChange={handleSearchValue}
        />
        <input
          value={passwordValue}
          onChange={handlePasswordChange}
          style={{ marginBottom: "20px", height: "44px" }}
          className="input-field"
          // value={searchValue}
          // onChange={handleSearchValue}
        />
        <button type="submit" className="load-btn">
          Login
        </button>
        <button onClick={retrieveToken} className="load-btn">
          Retrieve
        </button>
      </form>
    </div>
  );
}
