<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, {useState, useEffect} from 'react';


const CompetitionMaterial = ({user}) =>  {
<<<<<<< HEAD

 
console.log(user);

function displayPoster(){

  // if(user.poster!=undefined){  //after mount
  //     if(user.poster.length){
  //       return (<p>{user.poster[0].name}</p>)
  //     }
  //     else{
  //       return (<p>empty</p>)
  //     }
  // }  

  if(user.poster){
    var section = [];

    for (var i=0; i<user.poster.length; i++){
        section.push(
            <li>
               {user.poster[i].name}
            </li>
        );
    }
    return section;

  }

}


function displayAchievement(){
  if(user.achievements){
    var section = [];

    for (var i=0; i<user.achievements.length; i++){
        section.push(
            <li>
              {user.achievements[i].name}
=======
import React from 'react';


=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
import React, {useState, useEffect} from 'react';


>>>>>>> d4022a0 (update Alexia's code)
=======
import React, {useState, useEffect} from 'react';


>>>>>>> d526164 (upload sponsor company logo)
const PromoContent = ({user}) =>  {
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)

 
console.log(user);

function displayPoster(){

  // if(user.poster!=undefined){  //after mount
  //     if(user.poster.length){
  //       return (<p>{user.poster[0].name}</p>)
  //     }
  //     else{
  //       return (<p>empty</p>)
  //     }
  // }  

  if(user.poster){
    var section = [];

    for (var i=0; i<user.poster.length; i++){
        section.push(
            <li>
               {user.poster[i].name}
            </li>
        );
    }
    return section;

  }

}


function displayAchievement(){
  if(user.achievements){
    var section = [];

    for (var i=0; i<user.achievements.length; i++){
        section.push(
            <li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                Name: {user.achievement.name}
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
                Name: {user.achievements.name}
>>>>>>> d4022a0 (update Alexia's code)
=======
                Name: {user.achievements.name}
>>>>>>> d526164 (upload sponsor company logo)
=======
              {user.achievements[i].name}
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
            </li>
        );
    }
    return section;

  }
}

function displayPublication(){
<<<<<<< HEAD
<<<<<<< HEAD
  if(user.publications){
    var section = [];

    for (var i=0; i<user.publications.length; i++){
        section.push(
            <li>
               {user.publications[i].name}
=======
  if(user.publication){
=======
  if(user.publications){
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
    var section = [];

    for (var i=0; i<user.publications.length; i++){
        section.push(
            <li>
<<<<<<< HEAD
                Name: {user.publication.name}
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
               {user.publications[i].name}
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
            </li>
        );
    }
    return section;
<<<<<<< HEAD
=======

  }
}

function displayGrant(){
  if(user.grants){
    var section = [];

    for (var i=0; i<user.grants.length; i++){
        section.push(
            <li>
               {user.grants[i].name}
            </li>
        );
    }
    return section;

  }
}

function displayVideo(){
  if(user.video){
    var section = [];

    for (var i=0; i<user.video.length; i++){
        section.push(
            <li>
               return (<a href={user.video[0].source}>{user.video[0].name}</a>)
            </li>
        );
    }
    return section;

  }

}
>>>>>>> 7c0a793 (merged with alexia's branch)

  }
}

function displayGrant(){
  if(user.grants){
    var section = [];

<<<<<<< HEAD
    for (var i=0; i<user.grants.length; i++){
        section.push(
            <li>
               {user.grants[i].name}
            </li>
        );
    }
    return section;

  }
}

function displayVideo(){
  if(user.video){
    var section = [];

    for (var i=0; i<user.video.length; i++){
        section.push(
            <li>
               <a href={user.video[0].source}>{user.video[0].name}</a>
            </li>
        );
    }
    return section;

  }

}

  return (       
    <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 7c0a793 (merged with alexia's branch)
=======

>>>>>>> d4022a0 (update Alexia's code)
=======
  return (       
    <div>

>>>>>>> d526164 (upload sponsor company logo)
    <h5>Poster</h5>
    {displayPoster()}
    <hr/>
    <h5>Achievements</h5>    
    <ul>
      {displayAchievement()}
    </ul>
    <hr/>
    <h5>Publications</h5>    
    <ul>
      {displayPublication()}
    </ul>
    <hr/>
    <h5>Grants</h5>    
    <ul>
      {displayGrant()}
    </ul>
    <hr/>
    <h5>Video</h5>
     {displayVideo()}
    
    </div>
  );
 
}


<<<<<<< HEAD
<<<<<<< HEAD
export default CompetitionMaterial;
=======
export default PromoContent;
>>>>>>> d526164 (upload sponsor company logo)
=======
export default CompetitionMaterial;
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
