<<<<<<< HEAD
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
=======
import React from 'react';


////////////////////////////get logined user promotional content or competition material///////////////////////////////////


  const result = {
    videos: [
      {
        name: 'first video',
        path: 'video url1'
      },
      {
        name: 'second video',
        path: 'video url2'
      },{
        name: 'third video',
        path: 'video url3'
      },
    ],
    flyers: [
      {
        name: 'first flyer.jpg'
      },
      {
        name: 'second flyer.jpg'
      }

      // {
      //   "_id" : <ObjectId>,
      //   "length" : <num>,
      //   "chunkSize" : <num>,
      //   "uploadDate" : <timestamp>,
      //   "md5" : <hash>,
      //   "filename" : <string>,
      //   "contentType" : <string>,
      //   "aliases" : <string array>,
      //   "metadata" : <any>,
      // }

    ]

  }

//////////////////////////////////////////////////////////////////////////////////////////////////


const PromoContent = ({user}) =>  {

  return (       
    <div>
      <h2>Videos</h2>
      <ul>
        {result.videos.map((video)=>(

          <li>
            Name: {video.name}<br/> Url: {video.path}
          </li>

          ))}
      </ul>
      <h2>Flyers</h2>
      <ul>
        {result.flyers.map((flyer)=>(

          <li>
            Name: {flyer.name}<br/>
          </li>

          ))}
>>>>>>> 2dbc05f (sponsor sign up updated)
      </ul>
    </div>
  );
 
}
<<<<<<< HEAD
 
 
 
 
=======




>>>>>>> 2dbc05f (sponsor sign up updated)
export default PromoContent;