import "./Main.css" 
import SubContent from "../SubContent/SubContent"
import Advertisement from "../Advertisement/Advertisement"

const Main = () => {
    return (
    <div className="containerMain">
        <div className="subContainerMain">
            <SubContent/><SubContent/><SubContent/>
        </div>
        <Advertisement/>
    </div>)
}

export default Main