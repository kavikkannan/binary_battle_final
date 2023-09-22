"use client"
import Head from 'next/head';
import { useEffect } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { database} from './config/firebaseConfig';
export default function Register() {
    const auth = getAuth();
    const user = auth.currentUser;
    const router=useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token1', response.user.accessToken);
                sessionStorage.setItem('user.email', user.email);
                sessionStorage.setItem('user.uid', user.uid);
                console.log(user.email);
                sessionStorage.removeItem('Token2')
                router.push('/rounds/round1')
            })
            .catch((err) => {
                alert('Cannot Log in')
                console.error(err);
            })
    }
    useEffect(() => {
        let token1 = sessionStorage.getItem('Token1')
        let token2 = sessionStorage.getItem('Token2')

        if(token1){
            router.push('/rounds/round1')
        }
        if(token2){
          router.push('/')
      }
    }, [])
    return (
      <body class="flex h-screen bg-indigo-700 m-auto">
        <div class="w-full max-w-xs m-auto bg-indigo-500 rounded p-5 m-auto rounded">
          <img class="w-20 h-20 mx-auto mb-5" src="https://ik.imagekit.io/jmd1/logo.png?updatedAt=1695337750981" />
          <Head>
            <title>BINARY BATTLES AUTH</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div
            className="py-4 px-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="login-menu"
            flex-col
          >
            <div>
              <label class="block mb-2 text-indigo-500" for="username">Team Email</label>
              <input
                type="text"
                placeholder="Enter your Team Email"
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label class="block mb-2 text-indigo-500" for="password">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            >
              Log In
            </button>
          </div>
        </div>
      </body>
    )
}
