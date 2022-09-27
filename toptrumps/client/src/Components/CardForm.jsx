import { useState } from "react"
import TopTrumpsService from "../services/TopTrumpsService"
import "../css/cardform.css"


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
            <input
                  onChange={onChange}
                  type="text"
                  name="Individual"
                  id="Individual"
                  required
                  value={formData.Individual}
            />
        </div>
        <div className="formwrap">
            <label htmlFor="img_url">ImageUrl:</label>
            <input
                  onChange={onChange}
                  type="text"
                  name="img_url"
                  id="img_url"
                  required
                  value={formData["img_url"]}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="MostLovable">Most Lovable:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Most Lovable"
                  id="Most Lovable"
                  required
                  value={formData["Most Lovable"]}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="Smartest">Smartest:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Smartest"
                  id="Smartest"
                  required
                  value={formData.Smartest}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="Fattest">Fattest:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Fattest"
                  id="Fattest"
                  required
                  value={formData.Fattest}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="BiggestNerd">Biggest Nerd:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Biggest Nerd"
                  id="Biggest Nerd"
                  required
                  value={formData["Biggest Nerd"]}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="GreatestAnarchist">Greatest Anarchist:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Greatest Anarchist"
                  id="Greatest Anarchist"
                  required
                  value={formData["Greatest Anarchist"]}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="WalkOfFameRating">Walk of Fame Rating:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Walk of Fame Rating"
                  id="Walk of Fame Rating"
                  required
                  value={formData["Walk of Fame Rating"]}
            />
            
        </div>
        <input className="saveformbutton" type="submit" value="Save" id="save"/>
      </form>

    </div>
  )
}

export default CardForm