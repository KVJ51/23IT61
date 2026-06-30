export default function App() {
  return "Notifications App";
}

// Notification App
import {useState, useEffort} from "react"
function App(){

  const[Notifications,setNotifications] = useState([])
  const[n,setN] = useState(5)
  const[Loading,setLoading] = useState(True)
  const[Error,setError] = useState()

  if(Loading) return <p>Loading</p>
  if(Error) return <p>Error Occured</p>
}