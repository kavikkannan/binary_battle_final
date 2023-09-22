// components/LoginDropdown.js
import Head from 'next/head';
import { useState,useEffect } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'next/navigation';
import { app } from '../config/firebaseConfig';
export default function Register() {
    const auth = getAuth(app);
    const user = auth.currentUser;
    let router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        let token1 = sessionStorage.getItem('Token1')

        if(token1){
            router.push('round1')
        }
    }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
        .then((response) => {
            console.log(response.user)
            sessionStorage.setItem('Token1', response.user.accessToken);
            sessionStorage.setItem('user.email', user.email);
            sessionStorage.setItem('user.uid', user.uid);
            router.push('/round1')
            console.log("hiiii")
        })
        .catch((err) => {
            alert('Cannot Log in')
            console.error(err);
        })
    // Implement your login logic using Firebase or your preferred authentication method
    // For this example, we'll just log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Close the dropdown after handling login
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-cyan-600 hover:bg-cyan-900 w-[5vw] text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out text-white focus:outline-none focus:ring focus:ring-cyan-300"
      >
        Login
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-4 w-[20vw] rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5">
          <div
            className="py-4 px-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="login-menu"
            flex-col
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team Email
              </label>
              <input
                type="text"
                placeholder="Enter your Team Email"
                className="w-full px-3 py-2 border rounded-md text-black opacity-70 focus:outline-none focus:ring focus:ring-cyan-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-3 py-2 border rounded-md text-black opacity-70 focus:outline-none focus:ring focus:ring-cyan-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="bg-cyan-600 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-cyan-300"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

