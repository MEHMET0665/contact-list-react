import contacts from "../contacts.js"
import Card from "./Card"
import Avatar from "./Avatar"
import Details from "./Details"
function App(){

  return (
  <div>
    <h1 className="heading">My Contacts</h1>
    {contacts.map(item=>{
      return (
      <div>
        <Card name={item.name} img={item.imgURL} phone={item.phone} mail={item.email}/>
      </div>

      )
    })
  }
   
  </div>
  )
}

export default App;