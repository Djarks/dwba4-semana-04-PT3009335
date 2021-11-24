//INSERINDO O PARÁGRAFO 1 COM UMA CONSTANTE (JSX)

const paragrafo1 = <p>O <b>Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</b> – é uma autarquia federal de ensino.</p>;

ReactDOM.render(paragrafo1, document.getElementById('p1'));

//INSERINDO O PARÁGRAFO 2 COM UMA FUNÇÃO COMPONENTE

function Paragrafo2() {
  return <p>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</p>;
}

ReactDOM.render(<Paragrafo2 />, document.getElementById('p2'));

//INSERINDO O PARÁGRAFO 3 COM UMA CLASSE COMPONENTE

class Paragrafo3 extends React.Component {
  render() {
    return <p>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</p>;
  }
}

ReactDOM.render(<Paragrafo3 />, document.getElementById('p3'));

//INSERINDO O PARÁGRAFO 4 COM UMA CONSTANTE (SEM JSX)

const paragrafo4 = React.createElement('p', {}, 'Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.');

ReactDOM.render(paragrafo4, document.getElementById('p4'));

//INSERINDO OS PARÁGRAFOS 5 E 6 REFERENCIANDO COMPONENTES DENTRO DE COMPONENTES

function Paragrafo6() {
  return <p>O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.</p>;
}
  function Paragrafo5() {
  return (
  <>
  <p>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</p>
  <Paragrafo6 />
  </>
  );
}
ReactDOM.render(<Paragrafo5 />, document.getElementById('p5'));

//INSERINDO O PARÁGRAFO 7 COM UMA CONSTANTE (JSX)

const paragrafo7 = <p>Localizado em <b>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</b></p>;

ReactDOM.render(paragrafo7, document.getElementById('p7'));