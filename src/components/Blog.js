import React from 'react';
import Article from './Article';
import BlogForm from './BlogForm';
import NavList from './NavList';
import axios from "axios";
import './blogForm.css';

const Blog = () => {

    let baseUrl = 'http://localhost:3003/articles';
  
    const [article, setArticle] = React.useState();
  
      React.useEffect(() =>{
        const fetchRecettes = async () =>{
            let reponse =await  axios.get(baseUrl);
            console.log("nombre de messages : " + reponse.data.length);
            setArticle(reponse.data);

        }
        fetchRecettes();
          
    },[setArticle]);


      
    
    if (!article) return (
        <div>
            <p> Pas de post</p>
        </div>
    );
    const listItem = article.map((m) => <Article myprops={m} mypropId={m.id} myprops2={setArticle} key={m.id}/>); 
    
    return (
        <div>
            <NavList/>
            <BlogForm myprops={setArticle}/>
            {listItem}
        </div>
    );
};

export default Blog;