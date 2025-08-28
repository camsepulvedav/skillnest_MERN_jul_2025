import "./Main.css" 
import Section from "../Section/Section"
import Banner from "../Banner/Banner"

const Main = () => {
    return (
    <div className="containerMain">
        <div className="subContainerMain">
            <Section/><Section/><Section/>
        </div>
        <Banner/>
    </div>)
}

export default Main