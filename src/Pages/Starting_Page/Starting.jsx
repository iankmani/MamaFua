import "./Starting.css"
import mamafua from "../../../public/pics/mamafua.jpeg"

const Starting = () => {
  return (
    <div className="starting_page">
        <div className="start-title">
            <h1>mamafua</h1>
        </div>
        <div className="start-img">
            <img src={mamafua} alt="picture of mamafua" />
        </div>
        <div className="start-question">
            <p>Are we available in your Location?<br />
            <a href="#">Check now</a></p>

        </div>
        <div className="start-input">
            <input type="text" placeholder="input your location" />
        </div>
        <div className="start-quick-link">
            <a href="#">Use current location</a>
        </div>
        <div className="start-button">
            <button>continue</button>
        </div>
    </div>
  )
}

export default Starting