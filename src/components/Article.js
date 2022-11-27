import React from 'react';
import './article.css'
import axios from "axios";
import ReactDOM from 'react-dom';
import moment from 'moment'
import 'moment/locale/fr';


moment.locale('fr');


let baseUrl = 'http://localhost:3003/articles';

const Article = ({myprops,mypropId,myprops2}) => {
   
 
    const  handleClickDelete = async () => {
        axios.delete('http://localhost:3003/articles/'+mypropId).then(
            response =>{const fetchRecettes = async () =>{
                let reponse =await  axios.get(baseUrl);
                    myprops2(reponse.data);
                    console.log("nombre de messages : " + reponse.data.length);
            }
            fetchRecettes();
        });
    }


    const  handleClickUpdate = () => {
        let nodeHide = document.getElementById("article"+mypropId);
        let nodeSeek = document.getElementById(mypropId);

        let divArcicle = ReactDOM.findDOMNode(nodeHide);
        divArcicle.style.display = 'none';

        let divArticleUpdate = ReactDOM.findDOMNode(nodeSeek);
        divArticleUpdate.style.display = 'flex';
        setBlogNom(myprops.author)
        setBlogMessage(myprops.content);
    }

    const  handleClickUpdateValidate = async () => {
        const tempoA = {
            author : blogNom,
            content :blogMessage,
            date : myprops.date,
            id: mypropId
        };
        axios.put('http://localhost:3003/articles/'+mypropId, tempoA).then(
            response =>{const fetchRecettes = async () =>{
                let reponse =await  axios.get(baseUrl);
                    myprops2(reponse.data);
                    console.log("nombre de messages : " + reponse.data.length);
            }
            fetchRecettes();
            handleClickUpdateCancel()
        });
    }

    const handleClickUpdateCancel = () =>{
        let nodeHide = document.getElementById("article"+mypropId);
        let nodeSeek = document.getElementById(mypropId);

        let divArcicle = ReactDOM.findDOMNode(nodeHide);
        divArcicle.style.display = 'flex';

        let divArticleUpdate = ReactDOM.findDOMNode(nodeSeek);
        divArticleUpdate.style.display = 'none';
    }
    
    const [blogNom, setBlogNom] = React.useState('');
    const  handleChangeNom = (event) =>{
        setBlogNom(event.target.value);
    }

    const [blogMessage, setBlogMessage] = React.useState('');
    const  handleChangeMessage = (event) =>{
        setBlogMessage(event.target.value);
    }
    ///Gestion des dates

    let valideFormateDate = moment.unix(myprops.date / 1000) ;
    return (
        <div>  
        <div id={mypropId}  className='divArtivle2'>
            <input id='' type='text' value={blogNom} onChange={handleChangeNom}></input>
            <textarea type='text' value={blogMessage} onChange={handleChangeMessage}></textarea>
            <button onClick={handleClickUpdateValidate}>Valider</button> 
            <button onClick={handleClickUpdateCancel}>Annuler</button> 
        </div>

        <div id={"article" + mypropId} className='divArtivle'>
            <div id='artcile-head'>
                <h1>{myprops.author}</h1>
                <p>{valideFormateDate.format('dddd, D MMMM YYYY H:mm')}</p>
            </div>
            <p>{myprops.content}</p>

            <div id="article-footer">
                <button onClick={handleClickUpdate}>Modifier</button>        
                <button onClick={handleClickDelete}>Supprimer</button> 
            </div>  
        </div>
        </div>
    );
};

export default Article;