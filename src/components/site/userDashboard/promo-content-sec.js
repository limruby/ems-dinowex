const PromoContent = ({user}) =>  {
 
function displayVideo(){
  if(user.video){
    var section = [];

    for (var i=0; i<user.video.length; i++){
        section.push(
            <li>
              <a href={user.video[i].source}>{user.video[i].name}</a>
            </li>
        );
    }
    return section;

  }
<<<<<<< HEAD
<<<<<<< HEAD
}
 
  return (      
    <div>
      <h4>Videos</h4>
      <ul>
        {displayVideo()}
      </ul>
<<<<<<< HEAD
	  <hr/>
      <h4>Poster</h4>
=======
      <h2>Poster</h2>
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
      <ul>
        {displayPoster()}
      </ul>
    </div>
  );
 
}
 
 
 
 
export default PromoContent;
=======
   
    return (      
      <div>
        <h4>Videos</h4>
        <ul>
          {displayVideo()}
        </ul>
        <h4>Poster</h4>
        <ul>
          {displayPoster()}
        </ul>
      </div>
    );
   
  }
   
   
   
   
  export default PromoContent;
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
=======
}
function displayPoster(){
  if(user.poster){
    var section = [];
 
    for (var i=0; i<user.poster.length; i++){
      const imageBuffer = Buffer.from(user.poster[0].source.data); 
        section.push(
          <li>
          <img src={imageBuffer} alt={user.poster[0].name}/>
       </li>
        );
    }
    return section;
 
  }
}
 
  return (      
    <div>
      <h4>Videos</h4>
      <ul>
        {displayVideo()}
      </ul>
	  <hr/>
      <h4>Poster</h4>
      <ul>
        {displayPoster()}
      </ul>
    </div>
  );
 
}
 
 
 
 
export default PromoContent;
>>>>>>> 962c9ed (merge from before)
