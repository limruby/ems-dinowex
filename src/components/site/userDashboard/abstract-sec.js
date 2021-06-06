<<<<<<< HEAD



const AbstractContent = ({user}) =>  {

  console.log(user);

  function displayTitle(){

    if(user.abstract!==undefined){
    var section = [];

    for (var i=0; i<user.abstract.length; i++){
        section.push(
            <p>
                <b>Title</b>: {user.abstract[0].title}
            </p>
        );
    }

    return section;
  }
  }

  
  function displayContent(){
      var section = [];

    if(user.abstract!=null){
      for (var i=0; i<user.abstract.length; i++){
        section.push(
            <p>
                <b>Content</b>: {user.abstract[0].content}
            </p>
        );
    }
    }
    return section;
    
  }



  function displayKeywords(){
    var section = [];
    if(user.abstract!=null){

    if(user.abstract[0]!=null){
      if(user.abstract[0]['keywords']!=undefined){
        section.push(
            <div>
                <ul> <b>Keywords</b>:
                  {user.abstract[0]['keywords'].map((keyword)=>(
=======
import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';



const PromoContent = () =>  {

  const [result, setResult]=useState([]);



  function displayResult(){
    var section = [];
    if(result.keywords){
        section.push(
            <div>
                <ul>
                  {result.keywords.map((keyword)=>(
>>>>>>> 2dbc05f (sponsor sign up updated)
                    <li>
                     {keyword}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
<<<<<<< HEAD
  }
 }
    return section;
  }

  return (       
    <div>
      <div id="pdfAbstract">

=======
    return section;
  }


  return (       
    <div>
      <div id="pdfAbstract">
        <p>{result.title}</p>
        <p>{result.author}</p>
        <p>{result.affiliation}</p>
        <p>{result.abstract}</p>

        {displayResult()}
>>>>>>> 2dbc05f (sponsor sign up updated)
        
      </div>  
      
    </div>
  );
 
}




<<<<<<< HEAD
export default AbstractContent;
=======
export default PromoContent;
>>>>>>> 2dbc05f (sponsor sign up updated)
