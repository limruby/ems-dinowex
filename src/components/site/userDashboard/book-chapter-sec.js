import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import parse from 'html-react-parser';
=======
>>>>>>> c5b9c68 (complete userdashboard)

const Content = ({user}) =>  {
=======
import parse from 'html-react-parser';
>>>>>>> 248fc10 (added /api/ to axios GET POST)

<<<<<<< HEAD
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
     
=======
const Content = ({user}) =>  {

  function displayIntroduction(){
      var section = [];
>>>>>>> c5b9c68 (complete userdashboard)
=======
import parse from 'html-react-parser';

const Content = ({user}) =>  {

  function displayIntroduction(){
      var section = [];
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed

    if(user.bookChapter!=null){
      for (var i=0; i<user.bookChapter.length; i++){
        section.push(
            <p>
<<<<<<< HEAD
<<<<<<< HEAD
                <b>Content</b>: {parse(user.bookChapter[0].content)}
=======
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
<<<<<<< HEAD
<<<<<<< HEAD
                <b>Content</b>: {user.bookChapter[0].content}
>>>>>>> c5b9c68 (complete userdashboard)
=======
                <b>Content</b>: {parse(user.bookChapter[0].content)}
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
                <b>Content</b>: {parse(user.bookChapter[0].content)}
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
  }
 }
    return section;
  }

  return (       
    <div>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {displayIntroduction()}
        {displayContent()}
        {displayConclusion()}
        {displayReference()}
>>>>>>> c5b9c68 (complete userdashboard)
=======

>>>>>>> f475b73 (html2canvas print PDF preview)
=======

>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
      </div>  
      
    </div>
  );
 
}


export default Content;