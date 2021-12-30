import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import swal from 'sweetalert';
import initial from '../Firebase/firebase.init'

initial()
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const history=useHistory()
    const [admin,setAdmin]=useState(false)
    const [isLogin,setisLogin]=useState(false);
    const [name,setName]=useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const GoogleLogin=()=>{
     
     return signInWithPopup(auth, Googleprovider)
        // .then(result=>{
        //     console.log(result.user)
        //     setUser(result.user);
        // })
    }

    const handleCreateUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const newUser={email,displayName:name}
            setUser(newUser)
            // save user to databse 
            saveUserDatabase(email,name,'POST')
            setUser(result)
            swal("Good job!", "Account has been created!", "success");
            // setUserName(name)
            userProfile()
          
          })
          .catch(error => error.message)
      }

      const handleSignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            setUser(result.user)
            swal("Sign in Successful!", "Welcome !")
          })
          .catch(error => error.message)
      }

      const handleUpdate= event=>{
        setName(event.target.value)
       }

       //sign up functionality
       const userProfile=()=>{
        updateProfile(auth.currentUser,{displayName:name})
          .then(result=>{
    
          })

         
      }
     

    useEffect(()=>{
        onAuthStateChanged (auth,user=>{
            if(user){
                setUser(user)
            }
            setIsLoading(false);
        })
    },[])

    const logout=()=>{
      setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
            // .finally(() => setIsLoading(false));
        }).finally(()=> setIsLoading(false));
        swal("Logout Successful!", "You are logged out!", "success");
        // history.push('/login')
       
    
    }

    // admin role the database 
    useEffect(()=>{
      fetch(`https://shielded-beach-03067.herokuapp.com/userLogin/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])

      //  user registration information (store to the database )
      const saveUserDatabase =(email,displayName,method) => {
        const user={email,displayName}
        fetch('https://shielded-beach-03067.herokuapp.com/userLogin', {
          method:method,
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(user)
        })
        .then()
  
      }


    
    return{
        user,
        GoogleLogin,
        admin,
        isLoading,
        saveUserDatabase,
        logout,
        handleCreateUser,
        handleSignInUser,
        isLogin,
        handleUpdate,
        userProfile
    }
}
export default useFirebase