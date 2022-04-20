import  react from 'react';
import  '../hojaestilos/testimonio.css';

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
       src={require(`../imagenes/${props.imagen}.jpg`)}
       alt='caballero de bronce' />
       <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
          <p className='cargo-testimonio'><strong>{props.cargo}</strong></p>
          <p className='texto-testimonio'>{props.testimonio}</p>
         </div>
    </div>
  );
}
export default Testimonio;

