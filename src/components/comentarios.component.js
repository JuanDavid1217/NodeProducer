import React, { Component } from "react";
//import FisicoculturismoDataService from "../services/fisicoculturismo.service";


export default class Coments extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: "none"};
    
        this.visible = this.visible.bind(this);
        this.invisible = this.invisible.bind(this);
    }
    
    visible(event) {
        this.setState({visible: ""});
        event.preventDefault();
    }

    invisible(event) {
        this.setState({visible: "none"});
        event.preventDefault();
    }

    render(){
        return(

            <>

                <button className="styleofButtom" onClick={this.visible}>Comentar</button>
                
                <div id="comentsection" style={{display: this.state.visible}}>
                    <hr />
                    <div className="sec">
                    <textarea id="textarea" className="input-text" placeholder="Nuevo comentario"></textarea>
                    <button className="styleofButtom">Realizar</button>
                    <button className="styleofButtom" onClick={this.invisible}>Cancelar</button>
                    </div>
                </div>
                
            </>

        )
    }
}

