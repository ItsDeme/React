export default function Card(props){

function Like(){
    console.log("Liked - ", props.name, props.clan);
}

    return (
     <div className='card'>
      <img src={props.img} alt="" />
      <p>{props.name} {props.clan}</p>
      <p>Anime name: {props.anime}</p>
      <button onClick={() => Like(props.name)}> Like </button>
     </div>
    )
}