// import React, { useState } from "react";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";


// export const Login = () => {
//     const [_, setCookies] = useCookies(["access_token"]);
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     const navigate = useNavigate();
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       if (!username || !password) {
//         alert(`Please provide username & password!`);
//         return false;
//       }
  
//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:3001/auth/login",
//           {
//             username,
//             password,
//           }
//         );
//         console.log("response", JSON.stringify(response));
  
//         setCookies("access_token", response.data.token);
//         window.localStorage.setItem("userID", response.data.userID);
//         navigate("/");
  
//       } catch (error) {
//         alert(error.response.data.message);
//       }
//     };
  
//     return (
//       <div className="auth-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Login</h2>
          
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(event) => setUsername(event.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   };
  