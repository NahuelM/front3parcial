//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({datos}) => {

  return (
    <div style={{display:'flex', backgroundColor:'lightgrey', color:'black',marginTop: '10px'}}>
        Libro {datos.nombre} con codigo ISBN:{datos.codigo} ingreado correctamente.
    </div>
  )
}

export default Card;
