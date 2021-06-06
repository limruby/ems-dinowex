import React from 'react';
import PdfDownloader from './../../PdfDownloader';

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
      </div>  
  );
 
}




<<<<<<< HEAD
<<<<<<< HEAD
export default Members;
=======
export default Members;
>>>>>>> c5b9c68 (complete userdashboard)
=======
export default Members;
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
