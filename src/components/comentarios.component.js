import React, { Component } from "react";
import KafkaService from "../services/kafka.service";
//import FisicoculturismoDataService from "../services/fisicoculturismo.service";

function savecomments(e, status, user, publication, comment) {
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.comment(user, publication, comment);
    console.log(publication);
    console.log(user);
    e.preventDefault();
}

export default class Coments extends Component {
    constructor(props) {
        super(props);
        const {publication_id, usuario}=props;
        this.state = {visible: "none",
                      comment: '',
                      id_publication: publication_id,
                      user: usuario};
    
        this.visible = this.visible.bind(this);
        this.invisible = this.invisible.bind(this);
        this.changeComment = this.changeComment(this);
    }
    
    visible(event) {
        this.setState({visible: ""});
        event.preventDefault();
    }

    invisible(event) {
        this.setState({visible: "none"});
        event.preventDefault();
    }

    changeComment(event, data){
        this.setState({comment: data});
        //event.preventDefault();
    }

    render(){
        return(

            <>

                <button className="styleofButtom" onClick={this.visible}>Comentar</button>
                
                <div id="comentsection" style={{display: this.state.visible}}>
                    <hr />
                    <div className="sec">
                    <textarea id="textarea" className="input-text" placeholder="Nuevo comentario" name='text' onChangeText={this.changeComment}></textarea>
                    <button className="styleofButtom"
                    onClick={(e) => {
                        savecomments(e, 1, this.state.user, this.state.id_publication, this.state.comment)
                    }}>Realizar</button>
                <button className="styleofButtom" onClick={this.invisible}>Cancelar</button>
                    </div>
                </div>
                
            </>

        )
    }
}

