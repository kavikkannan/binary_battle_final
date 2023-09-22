"use client"
import { useEffect, useState } from 'react'
import {
  collection,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
// import { useRouter } from 'next/router';
import { database } from '../config/firebaseConfig';
import {
  getAuth,
}from 'firebase/auth';
export default function Scoreboard() {
  const [Mtcode, setMcode] = useState("");
  const [teamlist,setteamlist]=useState([]);
  const auth = getAuth();
//   const router = useRouter();
  const user = auth.currentUser;
  const teamref=collection(database,"teams")
  const [email, setemail] = useState('');  // Initialize with an empty string
  const [uid, setuid] = useState('');  // Initialize with an empty string

    useEffect(() => {
        const storedemail = sessionStorage.getItem('user.email');
        const storeduid = sessionStorage.getItem('user.uid');
        setemail(storedemail || '');
        setuid(storeduid || '');
    }, []);
  //NEW TRY
  let user_data;
if (email && uid) {
  user_data = doc(database, email, uid);
} else {
  // Handle the case where email or uid is empty
  console.error('Email or UID is empty.');
}
  //NEW TRY
  const getteamlist = async()=>{
    try{
    const data = await getDocs(teamref);
    const filtereddata=data.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id,
    }));
    setteamlist(filtereddata);
    } catch(err){
      console.error(err);
    }
  };
  useEffect(()=>{
    getteamlist();
  },[]);
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <div className="bg-blue-800 text-white py-4 px-8 rounded-t-lg">
        <div className="flex justify-between">
          <h2>Team Name</h2>
          <h2>Score</h2>
        </div>
      </div>
      {teamlist.sort((a, b) => (b.r1mark + b.r2mark + b.r3mark) - (a.r1mark + a.r2mark + a.r3mark)).map((team) => (
        <div key={team.id} className="bg-gradient-to-r from-blue-900 via-blue-500 to-green-800 py-4 px-8 rounded-lg">
          <div className="flex justify-between">
            <h3>{team.id}</h3>
            <h3>{team.r1mark + team.r2mark + team.r3mark}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}