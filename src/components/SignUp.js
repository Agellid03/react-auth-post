import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const SignUp = () => {
  //* useRef pour récuperer ce qui est dans l'Email
  const registerEmail = useRef();
  const registerPassword = useRef();
  //* useState pour le changement de pseudo , ne fonctionne pas avec useRef
  const [displayName, setDisplayName] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        //* Fonctions asynchrone pour mettre a jour les données
        .then(async (userAuth) => {
          // * await pcq fonctions asynchrone et on demande a updateProfil sur displayName donc pseudo
          await userAuth.user.updateProfile({
            displayName,
          });
          console.log(userAuth);
          // * Le seul cas ou on reload pour que le surnom s'affiche et soit charger
          window.location.reload();
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            required
            //* evenement onChange pour l'incrementation du pseudo
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            autoComplete="on"
            ref={registerPassword}
            required
          />
          <input type="submit" value="Valider inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
