import './App.css';
import './hojaestilos/testimonio.css';
import Testimonio from './componentes/testimonio.js';
function App() {
  return (
    <div className="App">
      <div className="contendor-principal">
        <h1>Caballeros del Zodiaco</h1>
        <Testimonio 
          imagen='fenix'
          nombre='Ikki de Fénix'
          cargo='Bronze Saints'
          testimonio='Ikki es el Caballero de la constelación de Fénix. Se caracteriza por tener el cosmos más agresivo y violento entre los Caballeros. Acostumbra andar separado del resto de los Caballeros de Bronce, sin embargo siempre aparece oportunamente en los momentos de necesidad. '/>
        <Testimonio
          imagen='cisne'
          nombre='Hyōga de Cisne'
          cargo='Bronze Saints'
          testimonio='Hyōga es uno de los personajes principales del manga y anime Saint Seiya y sus derivados, conocido como Los Caballeros del Zodiaco. Es el Santo de bronce del Cisne, y su constelación protectora es la de Cygnus.'
        />
        <Testimonio
          imagen='dragon'
          nombre='Shiryū de Dragón'
          cargo='Bronze Saints'
          testimonio='Shiryū es uno de los personajes principales del manga y anime Saint Seiya conocido como Los Caballeros del Zodiaco. Es el Santo de bronce del Dragón. Es también un personaje de manga Saint Seiya Next Dimension'
        />
        <Testimonio
          imagen='andromeda'
          nombre='Shun de Andromeda'
          cargo='Bronze Saints'
          testimonio='Shun es uno de los personajes principales del manga y anime Saint Seiya conocido como Los Caballeros del Zodiaco. Es el Santo de bronce de Andrómeda. Se caracteriza por su personalidad pacifista, su carácter delicado y porque no le gusta herir a los demás'
        />
        <Testimonio 
          imagen='pegasus'
          nombre='Seiya de Pegaso'
          cargo='Bronze Saints'
          testimonio='es el personaje principal de la serie de manga y anime Saint Seiya y el Saint de Pegasus durante las Guerras Santas en el siglo XX hasta antes de los eventos ocurridos en Next Dimension. Es la reencarnación del pasado Bronze Saint de Pegasus Tenma y del "Primer Pegasus", el primer humano en herir al dios Hades desde la era mitológica.'
        />
      </div>
    </div>
  );
}

export default App;
