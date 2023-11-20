import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "./components/forms/chexbox";
import { ProductCategoryRow } from "./components/products/productCategoryRow";
import { ProductRow } from "./components/products/productRow";
import { Input } from "./components/forms/input";

function App() {

  const [firstname, setFirstname] = useState('John')
  const [password, setPassword] = useState('MotDePasse')
  const security = useMemo(() =>{
      return PasswordSecurity(password)
  }, [password])

  return <div className="container my-3 vstack gap-2">
      <Input
        label="Nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
      />
      <div>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        Securite: {security}
      </div>
  </div>
}

function PasswordSecurity(password){
  if(password.length <3){
    return 'Faible'
  } else if(password.length < 6){
    return 'Moyen'
  }
  return 'Fort';
}

export default App
