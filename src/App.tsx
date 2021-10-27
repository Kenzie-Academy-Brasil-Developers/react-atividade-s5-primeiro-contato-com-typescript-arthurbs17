import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";
import { useState } from "react";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  const handleUser = (name: string, age: number, hobby: string) => {
    const person = { name: name, age: age, hobby: hobby };

    setUsers([...users, person]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Nome"
          label="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Idade"
          label="Idade"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input
          placeholder="Hobby"
          label="Hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={() => handleUser(name, age, hobby)}>Enviar</button>

        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            age={user.age}
            hobby={user.hobby}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
