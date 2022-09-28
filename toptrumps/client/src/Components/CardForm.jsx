import { useState } from "react"
import TopTrumpsService from "../services/TopTrumpsService"
import "../css/Master.css"


const CardForm = ({addNewCard}) => {

  const [formData, setFromData] = useState({
    Individual: "",
    "Most Lovable": null,
    Smartest: null,
    Fattest: null,
    "Biggest Nerd": null,
    "Greatest Anarchist": null,
    "Walk of Fame Rating": null,
    "img_url": ""
  })

  const onChange = (e) =>  {
    const NewFormData = Object.assign({}, formData)
    NewFormData[e.target.name] = e.target.value
    setFromData(NewFormData)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addNewCard(formData)
    setFromData(
      {
      Individual: "",
      "Most Lovable": "",
      Smartest: "",
      Fattest: "",
      "Biggest Nerd": "",
      "Greatest Anarchist": "",
      "Walk of Fame Rating": "",
      "img_url": ""
      }
    )
    }
  
  return (
    <div className="card-whole">
      <form onSubmit={onSubmit}>
        <h2>Add Card:</h2>
        <div className="formwrap">
            <label htmlFor="Individual">Individual:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="text"
                  name="Individual"
                  id="Individual"
                  required
                  value={formData.Individual}
            />
                        <br></br>
        </div>
        <div className="formwrap">
            <label htmlFor="img_url">ImageUrl:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="text"
                  name="img_url"
                  id="img_url"
                  required
                  value={formData["img_url"]}
            />
                        <br></br>
            
        </div>
        <div className="formwrap">
            <label htmlFor="MostLovable">Most Lovable:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="number"
                  name="Most Lovable"
                  id="Most Lovable"
                  required
                  value={formData["Most Lovable"]}
            />
                        <br></br>
            
        </div>
        <div className="formwrap">
            <label htmlFor="Smartest">Smartest:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="number"
                  name="Smartest"
                  id="Smartest"
                  required
                  value={formData.Smartest}
            />
                        <br></br>
            
        </div>
        <div className="formwrap">
            <label htmlFor="Fattest">Fattest:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="number"
                  name="Fattest"
                  id="Fattest"
                  required
                  value={formData.Fattest}
            />
                        <br></br>
            
        </div>
        <div className="formwrap">
            <label htmlFor="BiggestNerd">Biggest Nerd:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="number"
                  name="Biggest Nerd"
                  id="Biggest Nerd"
                  required
                  value={formData["Biggest Nerd"]}
            />
                        <br></br>
            
        </div>
        <div className="formwrap">
            <label htmlFor="GreatestAnarchist">Greatest Anarchist:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="number"
                  name="Greatest Anarchist"
                  id="Greatest Anarchist"
                  required
                  value={formData["Greatest Anarchist"]}
            />
                        <br></br>
            
        </div>
        <div className="formwrap">
            <label htmlFor="WalkOfFameRating">Walk of Fame Rating:</label>
            <br></br>
            <input
                  onChange={onChange}
                  type="number"
                  name="Walk of Fame Rating"
                  id="Walk of Fame Rating"
                  required
                  value={formData["Walk of Fame Rating"]}
            />
                        <br></br>
            
        </div>
        <input className="saveformbutton" type="submit" value="Save" id="save"/>
      </form>

    </div>
  )
}

export default CardForm