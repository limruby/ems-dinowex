<<<<<<< HEAD
import React, {useState, useEffect} from 'react';


const CompetitionMaterial = ({user}) =>  {

 
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


const PromoContent = ({user}) =>  {


function displayPoster(){
  if(user.poster[0]){
    return (<p>{user.poster[0].name}</p>)
  }  
}

function displayAchievement(){
  if(user.achievement){
    var section = [];

    for (var i=0; i<user.achievement.length; i++){
        section.push(
            <li>
                Name: {user.achievement.name}
>>>>>>> 7c0a793 (merged with alexia's branch)
            </li>
        );
    }
    return section;

  }
}

function displayPublication(){
<<<<<<< HEAD
  if(user.publications){
    var section = [];

    for (var i=0; i<user.publications.length; i++){
        section.push(
            <li>
               {user.publications[i].name}
=======
  if(user.publication){
    var section = [];

    for (var i=0; i<user.publication.length; i++){
        section.push(
            <li>
                Name: {user.publication.name}
>>>>>>> 7c0a793 (merged with alexia's branch)
            </li>
        );
    }
    return section;
<<<<<<< HEAD
=======

  }
}

function displayGrant(){
  if(user.grant){
    var section = [];

    for (var i=0; i<user.grant.length; i++){
        section.push(
            <li>
                Name: {user.grant.name}
            </li>
        );
    }
    return section;

  }
}

function displayVideo(){
  if(user.poster){
    return (<a href="{user.video.name}">{user.video.name}</a>)
  }  
}
>>>>>>> 7c0a793 (merged with alexia's branch)

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

=======
>>>>>>> 7c0a793 (merged with alexia's branch)
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


export default CompetitionMaterial;
