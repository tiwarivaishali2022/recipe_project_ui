// import React, { useState } from "react";
// import axios from "axios";

// export const Register = () => {
//     const [name, setName] = useState("");
  
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
//     // const [_, setCookies] = useCookies(["access_token"]);
//     // const navigate = useNavigate();
  
//     const resetForm = () => {
//       setUsername("");
//       setPassword("");
//       setName("");
//     };
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       if (!name || !username || !password) {
//         alert(`Please provide name, username & password!`);
//         return false;
//       }
//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:3001/auth/register",
//           {
//             name,
//             username,
//             password,
//           }
//         );
//         console.log("response", JSON.stringify(response));
//         alert("Registration Completed! Now login.");
  
//         resetForm();
  
//       } catch (error) {
//         alert(error.response.data.message);
//       }
//     };
  
//     return (
//       <div className="auth-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Register</h2>
//           <div className="form-group">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </div>
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
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   };
  
  