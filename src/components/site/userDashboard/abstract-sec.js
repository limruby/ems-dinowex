


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
                    <li>
                     {keyword}
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
      <div id="pdfAbstract">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
       

        {displayTitle()}
        {displayContent()}
        {displayKeywords()}
>>>>>>> c5b9c68 (complete userdashboard)
=======

>>>>>>> f475b73 (html2canvas print PDF preview)
=======

>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
        
      </div>  
      
    </div>
  );
 
}




<<<<<<< HEAD
<<<<<<< HEAD
export default AbstractContent;
=======
export default AbstractContent;
>>>>>>> c5b9c68 (complete userdashboard)
=======
export default AbstractContent;
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
