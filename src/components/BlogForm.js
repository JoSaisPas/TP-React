import React from 'react';
import './blogForm.css';
import axios from "axios";
import moment from 'moment/moment';




let baseUrl = 'http://localhost:3003/articles';

const BlogForm = ({myprops}) => {

const [blogNom, setBlogNom] = React.useState('');

const  handleChangeNom = (event) =>{
    setBlogNom(event.target.value);
}

const [blogMessage, setBlogMessage] = React.useState('');
const  handleChangeMessage = (event) =>{
    setBlogMessage(event.target.value);
}

const [blogPost, setBlogPos] = React.useState();
const  handleClick = async () => {
    if(blogNom.length > 0 && blogMessage.length > 100){

        let unixFormat = moment(new Date()).unix() * 1000;

        
        const tempoA = {
            author : blogNom,
            content : blogMessage,
            date : unixFormat,
        };
      
       axios.post('http://localhost:3003/articles', tempoA)
        .then(response =>{const fetchRecettes = async () =>{
            let reponse =await  axios.get(baseUrl);
                myprops(reponse.data);
                console.log("nombre de messages : " + reponse.data.length);
        }
        fetchRecettes();
        setBlogMessage('');
        setBlogNom('');
        });
    }else{
        console.log("Nom vide et/ou message inférieur à 100 caractères")
    }
    
}


    return (
        <div id='form-div'>
            <h1 id='form-titre'>BLOG</h1>
            <input id='form-nom' type="text"  placeholder='Nom' onChange={handleChangeNom} value={blogNom}/>
            <textarea id='form-message' type="text"  placeholder='Message' onChange={handleChangeMessage} value={blogMessage}/>
            <label >Veuillez saisir un nom ainsi qu'un message d'au moins 100 caractères</label>
            <button id='form-button' type="submit" onClick={handleClick}>Envoyer</button>
        </div>
    );
};

export default BlogForm;