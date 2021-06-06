import React from 'react';
import PdfDownloader from './../../PdfDownloader';

<<<<<<< HEAD
const Members = ({user}) =>  {
  function displayMembers(){
    var section = [];

  if(user.members!=null){
    for (var i=0; i<user.members.length; i++){
      section.push(
          <p>
              <b>Name:</b> {user.members[i].name} &nbsp;
              <b>Affiliation</b>: {user.members[i].affiliation}&nbsp;&nbsp;
              <b>Email</b>: {user.members[i].email}
          </p>              
      );
  }
  }
  return section;
  
}
  return (       
    <div>
         <div>
        {displayMembers()}
      </div> 
=======
const result = {
    members:[
        { 
          name: 'John Doe',
          affiliation: 'competitor',
          email: 'asd@gmail.com'
        },
        { 
          name: 'Mary Jane',
          affiliation: 'competitor',
          email: 'ert@gmail.com'
        }
    ]
}


// pdf output based on div id=pdf...


const Content = () =>  {

  return (       
    <div>
        <ul>
          {result.members.map((member)=>(

            <li>
             Name: {member.name}  <br/>
             Affiliation: {member.affiliation} <br/>
             Email: {member.email} <br/><br/>
            </li>
            
            ))}
        </ul>
>>>>>>> 2dbc05f (sponsor sign up updated)
      </div>  
  );
 
}




<<<<<<< HEAD
export default Members;
=======
export default Content;
>>>>>>> 2dbc05f (sponsor sign up updated)
