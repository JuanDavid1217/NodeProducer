import React, { Component, useState } from "react";
//import FisicoculturismoDataService from "../services/fisicoculturismo.service";
import KafkaService from "../services/kafka.service";

function savereaction(e, status, selection, publication, user) {
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction(selection);
    console.log(publication);
    console.log(user);
    e.preventDefault();
}

export default class ReactionsLike extends Component {
    constructor(props) {
        const {publication_id, usuario}=props;
        super(props);
        this.state = {value: 'default',
                      id_publication: publication_id,
                      user: usuario};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        console.log(`Seleccionaste ${event.target.value}`);
        this.setState({value: event.target.value});
        event.preventDefault();
    }


    render(){
        return(
            <>
            <select id="selection" className="styleofButtom" value={this.state.value} onChange={this.handleChange}
            onClick={(e) => {
                    
                        savereaction(e, 1, this.state.value, this.state.id_publication, this.state.user)
                    
                }
            }>
            <option style={{display:"none"}} value="default" >Me gusta</option>
            <option className="styleoflike" value="like" >👍 Me gusta</option>
            <option className="styleofLoved" value="love" >💖 Me encanta</option>
            <option className="styleofFun" value="fun" >😂 Me divierte</option>
            <option className="styleofSad" value="sad" >😭 Me entristece</option>
            <option className="styleofAngry" value="angry">😡 Me enoja</option>
            </select>

            <button className="styleofButtom" onClick={()=>console.log(this.state.value)}>✅Enviar</button>

            <button onClick={(e) => {
                    e.preventDefault();
                    savereaction(e, 1, this.state.value, this.state.id_publication, this.state.user)
                      
                    }
                } >
                 Love
            </button>
            </>
        )
    }
}

