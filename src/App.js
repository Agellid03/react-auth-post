import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import ConnectModal from "./components/ConnectModal";
import CreatePost from "./components/CreatePost";
import "./styles/layouts/header.scss";
import { auth } from "./utils/firebase.config";

const App = () => {
  //* Un useState pour gerer l'etat de connexion de l'util
  const [user, setUser] = useState(null);
  // * ULTRAPRATIQUE :methode de firebase qui surveille chaque changement d'auth ( si on est connecter)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={() => handleLogout()}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        )}
        {user ? <CreatePost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
