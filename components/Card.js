import App from "./App.js"
import Avatar from "./Avatar"
import Details from "./Details"

function Card(props){
  return (
  <div className="card">
    <div className="top">
      <h2 className="name ">{props.name}</h2>
      <Avatar img={props.img}/>
    </div>
    <div className="bottom">
    <Details phone={props.phone} mail={props.mail}/>
    </div>
  </div>
  )
}

export default Card;