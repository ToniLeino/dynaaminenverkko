import './App.css';
import {useState} from 'react'

function App() {
  const [paino, setPaino] = useState(0)
  const [pullo, setPullo] = useState(0)
  const [tunti, setTunti] = useState(0)
  const [sukupuoli, setSukupuoli] = useState('mies');
  const [verenalkoholinpitoisuus, setPitoisuus] = useState(0);
  

  
 

  function laske() {
    let Litrat = pullo * 0.33
    let Grammat = Litrat * 8 * 4.5
    let Palonopeus = paino / 10
    let GrammojaJäljellä = Grammat - (Palonopeus*tunti)

    if (sukupuoli === "mies"){
      let verenalkoholinpitoisuus = GrammojaJäljellä / (paino * 0.7)
      if (verenalkoholinpitoisuus < 0){
        setPitoisuus(0)
      }
      else{
        setPitoisuus(verenalkoholinpitoisuus)
      }
    }
    else if (sukupuoli === "nainen"){
      let verenalkoholinpitoisuus = GrammojaJäljellä / (paino * 0.6)
      if (verenalkoholinpitoisuus < 0){
        setPitoisuus(0)
      }
      else{
        setPitoisuus(verenalkoholinpitoisuus)
      }
    }
    
    
  }
  
  

  


  
  return (
    <div>
      <h3>Alkometri</h3>
      <form onSubmit={laske}>
      <div>
        <label>Paino</label>
        <input value = {paino} onChange={e => setPaino(e.target.value)} />
      </div>
      <div>
        <label>Pullot</label>
        <select value = {pullo} onChange={e => setPullo(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Aika</label>
        <select type="number" value = {tunti} onChange={e =>setTunti(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label>Sukupuoli</label>
        <input type="radio" name="sukupuoli" value ="mies" onChange={e => setSukupuoli(e.target.value)} defaultChecked/><label>Mies</label>
        <input type="radio" name="sukupuoli" value ="nainen" onChange={e => setSukupuoli(e.target.value)} /><label>Nainen</label>
      </div>
      <div>
        <label>Verenalkoholipitoisuus</label>
        <output> {verenalkoholinpitoisuus.toFixed(2)}</output>
      </div>
      <button type="button" onClick={laske}>Laske</button>
      </form>
    </div>
    
    
  
    
  );

}
export default App;