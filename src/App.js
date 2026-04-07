import fotoperfil from './foto2.jpeg'
import './App.css'
function App() {
  return (
    <div>
      <header>
      <h1>Olá, Sejam bem-vindos ao meu Currículo Virtual!!!</h1>
      <img src={fotoperfil}></img>
      <h1>Richard Garcia e Victor Hugo</h1>
      </header>

      <main>
        <section>
          <h2> Objetivo: Ter uma experiência de como trabalhar na área ADS</h2>
        </section>
      <section>
        <h1>Dados para contato</h1>
        <h2>Richard e Victor</h2>
        <p>44 99751-6282</p>
        <p>E-mail: richard.pompei.garcia@escola.pr.gov.br</p>
        <p>Linkdin xxxxxxxx</p>
         <p>GitHub: xxxxxx</p>
      </section>


      <section>
        <h1>formação</h1>
        <div>
          <article>
          <h2>Ensino médio profissinalizante em Desenvolvimento de Sistema </h2>
          <p> Intituição: Colégio Santa Maria Goretti</p>
          <p>Ano de Conclusão: 2027</p>
          </article>
          <article>
            <h2></h2>
            <p>Instituição: Pam</p>
            <p>Ano de Conclusão: 2023 a 2024</p>
          </article>
          </div>
  
      </section>

      <section>
        <h1>Experiência Profissional</h1>
        <div>
          <article>
            <p>Empresa: Pam</p>
            <p>funcão/cargo: adm</p>
            <p>Período: 2023 a 2024</p>
          </article>
        </div>
      </section>
      
      </main>

      <footer>
        <div>Desolvido por Richard e Victor</div>
      </footer>
    </div>
  );
}

export default App;
