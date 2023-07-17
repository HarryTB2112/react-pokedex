import { useCredentials } from "../../contexts";

export default function Login() {
  const { emailValue, setEmailValue, passwordValue, setPasswordValue } =
    useCredentials();

  const loginRequest = async (dataObj) => {
    const options = {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: dataObj.password ? JSON.stringify(dataObj) : null,
    };

    const response = await fetch("http://localhost:3001/users/login", options);
    const data = await response.json();
    console.log(data);
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
      </form>
    </div>
  );
}
