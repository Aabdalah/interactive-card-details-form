import Form from "./Form";
export default function Container(){
    return(
            <div className="image-container">
                <div className="card-front">
                    <div className="header">
                        <div className="big-circle"></div>
                        <div className="small-circle"></div>
                    </div>
                    <div className="middle">
                        <p>0000</p>
                        <p>0000</p>
                        <p>0000</p>
                        <p>0000</p>
                    </div>
                    <div className="footer">
                        <p>JANE APPLESSED</p>
                        <p>00/00</p>
                    </div>
                </div>
                <div className="card-back">
                    <p>000</p>
                </div>
            </div>
    );
}