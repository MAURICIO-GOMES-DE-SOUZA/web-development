import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";

// Tipagem
type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Joao-Pedro-de-Souza-dos-Santos");
  const [auxName, setAuxName] = useState("Joao-Pedro-de-Souza-dos-Santos");
  const [data, setData] = useState<UserData>({} as UserData);

  function AddCount() {
    // closures
    setCount((prevState) => prevState + 1);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event?.preventDefault(); 
    setAuxName(name);
  }

  useEffect(() => {
    // hook
    fetch("https://api.github.com/users/${auxName}")
      .then((response) => response.json())
      .then((data) => setData(data));
      

    console.log("Effect");
  }, [auxName]);

  console.log(data);

  return (
    <>
      <h1>Class-03-States</h1>
      <p>Name:{name}</p>
      <p>Count:{count}</p>
      <button onClick={AddCount}>Add&gt;</button>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: 24 }}
      >
        <input type="text" onChange={handleChangeName} />
        <button>Pesquisar</button>
      </form>


  {data && (<UserCard/>)}
  
</>

)
}

