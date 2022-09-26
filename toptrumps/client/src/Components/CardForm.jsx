import { useState } from "react"
import TopTrumpsService from "../services/TopTrumpsService"


const CardForm = ({addCard}) => {

  const [formData, setFromData] = useState({
    Individual: "",
    MostLovable: null,
    Smartest: null,
    Fattest: null,
    BiggestNerd: null,
    GreatestAnarchist: null,
    WalkOfFameRating: null,
    ImageUrl: ""
  })

  const onChange = (e) =>  {
    const NewFormData = Object.assign({}, formData)
    NewFormData[e.target.name] = e.target.value
    setFromData(NewFormData)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    TopTrumpsService.addTopTrump(formData).then((data) => {
      addCard(data)
    })

    setFromData({
      Individual: "",
      MostLovable: null,
      Smartest: null,
      Fattest: null,
      BiggestNerd: null,
      GreatestAnarchist: null,
      WalkOfFameRating: null,
      ImageUrl: ""
    })
  }
  
  return (
    <div className="checkinformwhole">
      <form onSubmit={onSubmit}>
        <h2>Create Guest:</h2>
        <div className="formwrap">
            <label htmlFor="name">Individual:</label>
            <input
                  onChange={onChange}
                  type="text"
                  name="individual"
                  id="individual"
                  required
                  value={formData.Individual}
            />

        </div>

        <div className="formwrap">
            <label htmlFor="name">Most Lovable:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Most Lovable"
                  id="Most Lovable"
                  required
                  value={formData.MostLovable}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="name">Smartest:</label>
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
            <label htmlFor="name">Fattest:</label>
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
            <label htmlFor="name">Biggest Nerd:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Biggest Nerd"
                  id="Biggest Nerd"
                  required
                  value={formData.BiggestNerd}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="name">Greatest Anarchist:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Greatest Anarchist"
                  id="Greatest Anarchist"
                  required
                  value={formData.GreatestAnarchist}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="name">Walk of Fame Rating:</label>
            <input
                  onChange={onChange}
                  type="number"
                  name="Walk of Fame Rating"
                  id="Walk of Fame Rating"
                  required
                  value={formData.WalkOfFameRating}
            />
            
        </div>
        <div className="formwrap">
            <label htmlFor="name">ImageUrl:</label>
            <input
                  onChange={onChange}
                  type="text"
                  name="ImageUrl"
                  id="ImageUrl"
                  required
                  value={formData.ImageUrl}
            />
            
        </div>
        <input className="saveformbutton" type="submit" value="Save" id="save"/>
      </form>

    </div>
  )
}

export default CardForm