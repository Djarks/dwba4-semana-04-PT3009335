class NomeTabela extends React.Component {
  render() {
    return <h2>Componentes curriculares</h2>;
  }
}

ReactDOM.render(<NomeTabela />, document.getElementById('titulo'));

const table = (
  <table>
    <tr>
      <th>DISCIPLINA</th>
      <th>CARGA</th>
      <th>PERÍODO</th>
    </tr>
    <tr>
      <td>Sistemas Operacionais</td>
      <td>66.7</td>
      <td>Noturno</td>
    </tr>
    <tr>
      <td>Inglês</td>
      <td>33.3</td>
      <td>Noturno</td>
    </tr>
    <tr>
      <td>Laboratório de Estruturas de Dados e Programação</td>
      <td>33.3</td>
      <td>Noturno</td>
    </tr>
    <tr>
      <td>Introdução a Banco de Dados</td>
      <td>66.7</td>
      <td>Noturno</td>
    </tr>
</table>
);

ReactDOM.render(table, document.getElementById('tabela'));
