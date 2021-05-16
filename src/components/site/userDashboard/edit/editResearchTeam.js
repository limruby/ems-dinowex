
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditTeam({data, setData}) {

/////////////////////get login user (REPLACE THIS) ////////////////
const [tempData, setTemp] = useState({
	tempName : "",
    tempAff : "",
    tempEmail: ""
});
const showUpload=(e)=>{
    if(data.members.length < 5){
        e.preventDefault();
    if(tempData.tempName!==""){
      if(tempData.tempName===""){
        alert("Incomplete Form");
      }
    }
    else if(tempData.tempAff===""){
      if(tempData.tempAff===""){
        alert("Incomplete Form");
      }
    }
    else if(tempData.tempEmail===""){
        if(tempData.tempEmail===""){
          alert("Incomplete Form");
        }
      }
    if (tempData.tempName!=="" && tempData.tempAff!=="" && tempData.tempEmail!==""){
      data.members.push({'name':tempData.tempName,'affiliation':tempData.tempAff, 'email':tempData.tempEmail})
       
    }
    setData({
        ...data,
      })
          tempData.tempName="";
          tempData.tempAff="";
          tempData.tempEmail="";
 
          setTemp({
                ...tempData,
          });
    }
    else {
        window.alert("You've exceeded the limit of members!");
    }
       
}
var obj =[];
  const deleteFile = (element,index) => e => {
    if(element==='members'){
      let obj = data.members;
      obj.splice(index,1);
    } 
      setData({
          ...data,
         
      });
      console.log(data);
  }
 
const inputChange = (element, index) => e => {
   
    if(element === 'name'){
        tempData.tempName=e.target.value;
            }
    if(element === 'affiliation'){
        tempData.tempAff=e.target.value;
    }
    if(element === 'email'){
        tempData.tempEmail=e.target.value;
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
        if(tempData.tempName!==""){
            if(tempData.tempName===""){
              alert("Incomplete Form");
            }
          }
          else if(tempData.tempAff!==""){
            if(tempData.tempAff===""){
              alert("Incomplete Form");
            }
          }
          else if(tempData.tempEmail!==""){
            if(tempData.tempEmail===""){
              alert("Incomplete Form");
            }
          }
          if (tempData.tempName!=="" && tempData.tempAff!=="" && tempData.tempEmail!==""){
            data.members.push({'name':tempData.tempName,'email':tempData.tempEmail, 'affiliation':tempData.tempAff})
             
          }
          setData({
              ...data,
            })
       
       
           console.log(data);
       
           axiosInstance.post("/competitors/update", data)
                  .then(function(response) {
                     window.location.href = '/user_dashboard';
                  }).catch(function(error) {
                    console.log(error);
                  })
       
       
        };

///////display forms//////
    function displayMembers(){
        var section = [];
        if(data.members==null||data.members[0]==null||data.members.length<5){
        
            section.push(
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', 0)} value={tempData.tempName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="affiliation">Affiliation</label>
                        <input type="text" className="form-control" name="affiliation" id="affiliation"
                        onChange={inputChange('affiliation', 0)} value={tempData.tempAff} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" id="email"
                        onChange={inputChange('email', 0)} value={tempData.tempEmail} />
                    </div>
                    <div>
                    <button onClick={showUpload} className="btn btn-primary">Add</button>
                </div>  
                </div>
            );
        }
     if(data.members!==undefined) {
        for (var i=0; i<data.members.length; i++){
        section.push(
            <div>    
                <p><b>Team Member {i+1}</b></p>
                       <p>{data.members[i].name}</p>
                       <p>{data.members[i].affiliation}</p>
                       <p>{data.members[i].email}</p>
                        <button className="deleteBtn" type="button" onClick={deleteFile('members',i)}> delete</button>
                  </div>
          )
        }
    }
        return section;

    
}

/////////////////////////////////////////////////////////////

	return(
		<>
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h5>Team Members</h5>
                
               	{displayMembers()} 
                               
              

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

export default EditTeam;