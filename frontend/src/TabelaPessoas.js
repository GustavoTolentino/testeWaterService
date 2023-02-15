import React from 'react';

function TabelaPessoas(props) {
  const pessoas = props.pessoas;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {pessoas.map(pessoa => (
          <tr key={`${pessoa.nome}-${pessoa.sobrenome}`}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.sobrenome}</td>
            <td>{pessoa.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaPessoas;