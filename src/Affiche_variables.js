import React from "react";

const Affiche_variables = ({login, mdp}) => {
    const login_logged = false;
    const mdp_logged = false;
  return(
    <div>
        <input placeholder="login">{login}</input>
        <input placeholder="mdp">{mdp}</input>
        <button>Valider</button>

        {login_logged ?(
           <p>login ?</p>
        ):(
            <p>rien</p>
        )}
        
        {mdp_logged ?(
           <p>MDP ?</p>
        ):(
            <p>rien</p>
        )}
        
    </div>
  );
}

export default Affiche_variables;
