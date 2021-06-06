import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
<<<<<<< HEAD
<<<<<<< HEAD
import { FaTrashAlt } from 'react-icons/fa';
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
import { FaTrashAlt } from 'react-icons/fa';
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
 
function EditAccount({data, setData}) {
 
const showUpload=(e)=>{
<<<<<<< HEAD
<<<<<<< HEAD
  e.preventDefault();
    if(data.video.length < 5){
      if (tempData.tempVidName!=="" && tempData.tempVidPath!==""){
        data.video.push({'name':tempData.tempVidName,'source':tempData.tempVidPath})
        setData({
          ...data,
        })
            tempData.tempVidName="";
            tempData.tempVidPath="";
   
            setTemp({
                  ...tempData,
            });
      }  
      else if(tempData.tempVidName!=="" && tempData.tempVidPath===""){
          alert("Incomplete Form");  
      }
      else if(tempData.tempVidName==="" && tempData.tempVidPath!==""){
          alert("Incomplete Form");
      }  
      else if(tempData.tempVidName==="" && tempData.tempVidPath===""){
        alert("Incomplete Form");
    }
      }
=======
=======
  e.preventDefault();
>>>>>>> 1848300 (validation test complete)
    if(data.video.length < 5){
      if (tempData.tempVidName!=="" && tempData.tempVidPath!==""){
        data.video.push({'name':tempData.tempVidName,'source':tempData.tempVidPath})
        setData({
          ...data,
        })
            tempData.tempVidName="";
            tempData.tempVidPath="";
   
            setTemp({
                  ...tempData,
            });
      }  
      else if(tempData.tempVidName!=="" && tempData.tempVidPath===""){
          alert("Incomplete Form");  
      }
      else if(tempData.tempVidName==="" && tempData.tempVidPath!==""){
          alert("Incomplete Form");
      }  
      else if(tempData.tempVidName==="" && tempData.tempVidPath===""){
        alert("Incomplete Form");
    }
<<<<<<< HEAD
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
      }
>>>>>>> 1848300 (validation test complete)
       
}
const [tempData, setTemp] = useState({
  tempVidName : "",
  tempVidPath : ""
});
 
console.log(data)
///////display forms//////
//poster form
  function displayPosterForm(){
    var section = [];
    if(data.poster==null||data.poster[0]==null){
      section.push(
            <div className="form-group">                
                <input type="file" onChange={inputChange('poster', 0)} />
            </div>
          );
    }
    else{
   
      section.push(
        <div>          
<<<<<<< HEAD
<<<<<<< HEAD
                   <p>{data.poster[0].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('poster',0)}> <FaTrashAlt/></button>
           </p>
                   
=======
                   <p>{data.poster[0].name}</p>
                    <button className="deleteBtn" type="button" onClick={deleteFile('poster',0)}> delete</button>
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
                   <p>{data.poster[0].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('poster',0)}> <FaTrashAlt/></button>
           </p>
                   
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
              </div>
      )
    }
    return section;
  }
 
//display list of video URLs
  function displayVideoForm(){
    var section = [];

    if(data.video!=null){
        for(var i=0; i<data.video.length; i++){  
            section.push(
              <p>
                          {data.video[i].name}
<<<<<<< HEAD
<<<<<<< HEAD
                          <button className="deleteBtn" type="button" onClick={deleteFile('video',i)}> <FaTrashAlt/></button>
=======
                          <button className="deleteBtn" type="button" onClick={deleteFile('video',i)}> delete</button>
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
                          <button className="deleteBtn" type="button" onClick={deleteFile('video',i)}> <FaTrashAlt/></button>
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
                        </p>

                        
                );
            }       
    }
    if(data.video==null||data.video[0]==null||data.video.length<5){     
            
              section.push(    
                <div>
        <div className="form-group">
                    <label htmlFor="videoName">Video Name </label>
                    <input type="text" className="form-control" name="videoName" id="videoName"
                    onChange={inputChange('vidName', 0)} value={tempData.tempVidName} />
                </div>
 
                <div className="form-group">
                    <label htmlFor="videoPath">Video URL </label>
                    <input type="text" className="form-control" name="videoPath" id="videoPath"
                    onChange={inputChange('vidPath', 0)} value={tempData.tempVidPath} />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div>
                                        <button onClick={showUpload} className="btn btn-primary">Add</button>
                                </div>
              </div>            
          )         
               
=======
              </div>            
          )               
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
                <div>
                                        <button onClick={showUpload} className="btn btn-primary">Add</button>
                                </div>
              </div>            
          )         
               
>>>>>>> 1848300 (validation test complete)
    }
    return section;
  }
 
 
  //////action performed//////
  var obj =[];
  const deleteFile = (element,index) => e => {
    if(element==='poster'){
      let obj = data.poster;
      obj.splice(index,1);
    }
    else if(element==='video'){
      let obj = data.video
      obj.splice(index,1);
    }
      setData({
          ...data,
         
      });
      console.log(data);
  }
 
 
   const inputChange = (element, index) => e => {
    let selectedFile = e.target.files;
    let file = null;
    let fileName = "";
    if(element === 'poster'){
    if (selectedFile.length > 0) {
        // Select the very first file from list
        let fileToLoad = selectedFile[0];
        fileName = fileToLoad.name;
        // FileReader function for read the file.
        let fileReader = new FileReader();
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            file = fileLoadedEvent.target.result;
              data.poster.push({'name':fileName,'source':fileReader.result})
<<<<<<< HEAD
<<<<<<< HEAD
              setData({
                ...data
          })
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
              setData({
                ...data
          })
>>>>>>> 1848300 (validation test complete)
                             
        };
    // Convert data to base64
         var baseFile = fileReader.readAsDataURL(fileToLoad);
    }
  }
   
        if(element === 'vidName'){
                        tempData.tempVidName=e.target.value;
            }
    if(element === 'vidPath'){
        tempData.tempVidPath=e.target.value;
    }
    setTemp({
      ...tempData
    });
    setData({
        ...data,
      })
     console.log(data);
  };
 
 
  const handleForm=(e)=>{
      e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD

      var postData = {
          _id : data._id,
          poster : data.poster,
          video : data.video
      }

     axiosInstance.post("/api/sponsors/update", postData)
=======
      // perform all neccassary validations
    // video: if name !null, path must !null
    if(tempData.tempVidName!==""){
      if(tempData.tempVidPath===""){
        alert("Incomplete Form");
      }
    }
    else if(tempData.tempVidPath!==""){
      if(tempData.tempVidName===""){
        alert("Incomplete Form");
      }
    }
    if (tempData.tempVidName!=="" && tempData.tempVidPath!==""){
      data.video.push({'name':tempData.tempVidName,'source':tempData.tempVidPath})
       
    }
    setData({
        ...data,
      })
 
 
     console.log(data);
 
=======
>>>>>>> 1848300 (validation test complete)
     axiosInstance.post("/sponsors/update", data)
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
            .then(function(response) {
               window.location.href = '/user_dashboard';
            }).catch(function(error) {
              console.log(error);
            })
 
<<<<<<< HEAD
<<<<<<< HEAD
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
>>>>>>> 1848300 (validation test complete)
  };
 
  return(
    <>
            <form onSubmit={handleForm}>
      <div className="form-container">
                <h1 className="mb-5">Edit Promotional content</h1>
 
<<<<<<< HEAD
                <h5>Poster<i className="caution"> (*Max 1)</i></h5>    
=======
                <h5>Poster</h5>    
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                           
                {displayPosterForm()}
                               
                <hr/>
 
<<<<<<< HEAD
                 <h5>Video<i className="caution"> (*Max 5)</i></h5>
                 {displayVideoForm()}
=======
                 <h5>Video</h5>
                 {displayVideoForm()}
<<<<<<< HEAD
                                <div>
                                        <button onClick={showUpload} className="btn btn-primary">Add</button>
                                </div>
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
>>>>>>> 1848300 (validation test complete)
               
                <br />
               
                <div className="col-4 btn-group">
                    <Link to="/user_dashboard">
                        <button className="btn btn-danger back-btn">Back</button>
                    </Link>
                    <input className="btn btn-primary" type="submit" value="Update" />
                </div>
            </div>
            </form>
        </>
  )
}
 
export default EditAccount;