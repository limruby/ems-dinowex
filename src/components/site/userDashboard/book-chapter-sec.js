import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import parse from 'html-react-parser';

const Content = ({user}) =>  {

  function displayIntroduction(){
      var section = [];

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
                <b>Introduction</b>: {user.bookChapter[0].introduction}
            </p>              
        );
    }
    }
    return section;
    
  }
  function displayContent(){
      var section = [];
     

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
                <b>Content</b>: {parse(user.bookChapter[0].content)}
            </p>
        );
    }
    }
    return section;
    
  }


  function displayConclusion(){
      var section = [];

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
                <b>Conclusion</b>: {user.bookChapter[0].conclusion}
            </p>
        );
    }
    }
    return section;
    
  }


function displayReference(){
    var section = [];
    if(user.bookChapter!=null){

    if(user.bookChapter[0]!=null){
      if(user.bookChapter[0]['references']!=undefined){
        section.push(
            <div>
                <ul> <b>References</b>:
                  {user.bookChapter[0]['references'].map((reference)=>(
                    <li>
                     {reference}
=======
import axiosInstance from '../../../utils/axiosConfig.js';


const Content = () =>  {

  const [result, setResult]=useState([]);

   const account_id = localStorage.getItem('user_id');

   


  function displayResult(){
    var section = [];
    if(result.keywords){
        section.push(
            <div>
                <ul>
                  {result.keywords.map((keyword)=>(
                    <li>
                     {keyword}
>>>>>>> 2dbc05f (sponsor sign up updated)
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
<<<<<<< HEAD
  }
 }
=======
>>>>>>> 2dbc05f (sponsor sign up updated)
    return section;
  }

  return (       
    <div>
      <div>
<<<<<<< HEAD

=======
        <p>{result.inroduction}</p>
        <p>{result.content}</p>
        <p>{result.conclusion}</p>

        {displayResult()}
>>>>>>> 2dbc05f (sponsor sign up updated)
      </div>  
      
    </div>
  );
 
}


<<<<<<< HEAD
=======


>>>>>>> 2dbc05f (sponsor sign up updated)
export default Content;