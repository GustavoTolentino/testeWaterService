import './App.css';
import React, { useState } from 'react';
import api from './api.js';
import TabelaPessoas from './TabelaPessoas';

function App() {
  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);

  const handleGet = async () => {
    const response = await api.get('');
    const objectsArray = response.data.split('\n');
    const pessoas = [];

    objectsArray.forEach(objStr => {
      const obj = JSON.parse(objStr);
      const nome = obj['Nome'];
      const sobrenome = obj['Sobrenome'];
      const idade = obj['Idade'];

      pessoas.push({ nome, sobrenome, idade });
    });

    setUsers(pessoas);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('excel', file);
    try {
      const response = await api.post('/', formData);
      console.log(response.data);
    } catch (error) {
      alert("Arquivo Invalido");
    }
  };

  return (
    <div className="App">
      <h1>Formulário de Envio Excel</h1>
      <form onSubmit={handleSubmit}>
        <label>Clique aqui para enviar seu arquivo xlsx:</label>
        <input type="file" name="excel" onChange={handleFileChange} />
        <button type="submit">Enviar</button>
      </form>
      <div className="container">
        <TabelaPessoas pessoas={users} />
        <button onClick={handleGet}>Buscar Pessoas</button>
      </div>
    </div>
  );
}

export default App;