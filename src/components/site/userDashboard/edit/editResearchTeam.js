<<<<<<< HEAD
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';

function EditTeam({data, setData}) {

/////////////////////get login user (REPLACE THIS) ////////////////
const [tempData, setTemp] = useState({
	tempName : "",
    tempAff : "",
    tempEmail: ""
});
const showUpload=(e)=>{
    if(data.members.length < 4){
        e.preventDefault();
    if (tempData.tempName!=="" && tempData.tempAff!=="" && tempData.tempEmail!==""){
      data.members.push({'name':tempData.tempName,'affiliation':tempData.tempAff, 'email':tempData.tempEmail})   
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
    if(tempData.tempName!==""){
      if(tempData.tempAff===""||tempData.tempEmail===""){
        alert("Incomplete Form");
      }
    }
    else if(tempData.tempAff!==""){
      if(tempData.tempName===""||tempData.tempEmail===""){
        alert("Incomplete Form");
      }
    }
    else if(tempData.tempEmail!==""){
        if(tempData.tempName===""||tempData.tempAff===""){
          alert("Incomplete Form");
        }
      }
 
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

     console.log(data);
};

	const handleForm=(e)=>{
    {/* 
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
            */}
       
       
           e.preventDefault();


           var postData = {
                _id : data._id,
                members : data.members
              }
       
           axiosInstance.post("/api/competitors/update", postData)
                  .then(function(response) {
                     window.location.href = '/user_dashboard';
                  }).catch(function(error) {
                    console.log(error);
                  })
       
       
        };

///////display forms//////
    function displayMembers(){
        var section = [];
        if(data.members==null||data.members[0]==null||data.members.length<4){
        
            section.push(
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', 0)} value={tempData.tempName} />
=======

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditTeam() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [result, setState] = useState({
	members:[
	    { 
	      name: 'John Doe',
	      affiliation: 'asdasd',
	      email: 'asd@gmail.com'
	    },
	    { 
	      name: 'Marry Jane',
	      affiliation: 'qweqwe',
	      email: 'qwe@gmail.com'
	    }
	],
});


const inputChange = (element, index) => e => {
    if(!result.members[index]){
        //not exist thus add 
        if(element=='name'){
            result.members.push({'name':e.target.value, 'affiliation':'', 'email':''});
        }
        else if(element=='affiliation'){
            result.members.push({'name':'', 'affiliation':e.target.value, 'email':''});
        }
        else if(element=='email'){
            result.members.push({'name':'', 'affiliation':'', 'email':e.target.value});
        }
    }
    else{
        //if exist then update
        if(element=='name'){
            result.members[index].name = e.target.value;
        }
        else if(element=='affiliation'){
            result.members[index].affiliation = e.target.value;
        } 
        else if(element=='email'){
            result.members[index].email = e.target.value;
        }
    }
    setState({
        ...result,
        
    });
};

	const handleForm=(e)=>{
		e.preventDefault();
		// perform all neccassary validations
		
	   for(var i=0; i<result.members.length; i++){
	        
	        let obj = result.members[i];
	        if(obj.name ==''&& obj.affiliation==''&& obj.email==''){
	            //remove empty
	            result.members.splice(i,1);	        
	        }
	    }
	    for(var i=0; i<result.members.length; i++){
	    	let obj = result.members[i];
	        if(obj.name =='' || obj.affiliation==''||obj.email==''){
	            alert('Incomplete form.')         
	        }
	    }

	    setState({
	        ...result,
	        
	    });
	    ///////replace row in db /////////////
	   	console.log(result);
    }


    function displayExistedForm (){
        var section = [];

        for (var i=0; i<result.members.length; i++){
            section.push(
                <div>
                    <div className="form-group">
                        <h5>Team Member {i+1}</h5>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', i)} value={result.members[i].name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="affiliation">Affiliation</label>
                        <input type="text" className="form-control" name="affiliation" id="affiliation"
                        onChange={inputChange('affiliation', i)} value={result.members[i].affiliation} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" id="email"
                        onChange={inputChange('email', i)} value={result.members[i].email} />
                    </div>

                </div>
            );
        }

        return section;

    }

    function displayAddBtn (){
        var section = [];
        var i = result.members.length + tempState.counter;

        if (i<=5){
            section.push(
                <div>
                    <button className="addBtn" type="button" onClick={tempInput()}> Add</button>
                </div>
            );
        i++;
        }

        return section;

    }

    const [tempState, setTempt] = useState({
        counter:0,
        defaultLength: result.members.length
    });

    const tempInput = () => e => {
        var temp = tempState.counter;
        setTempt({
            ...tempState,
            counter: temp+1
        });
    };

    function displayEmptyForm (){
        var section = [];

        if(result.members.length<5){
        for (var i=result.members.length; i<tempState.defaultLength+tempState.counter; i++){
            section.push(
                <div>
                    <div className="form-group">
                        <h5>Team Member {i+1}</h5>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" id="name"
                        onChange={inputChange('name', i)} />
>>>>>>> 2dbc05f (sponsor sign up updated)
                    </div>
                    <div className="form-group">
                        <label htmlFor="affiliation">Affiliation</label>
                        <input type="text" className="form-control" name="affiliation" id="affiliation"
<<<<<<< HEAD
                        onChange={inputChange('affiliation', 0)} value={tempData.tempAff} />
=======
                        onChange={inputChange('affiliation', i)}  />
>>>>>>> 2dbc05f (sponsor sign up updated)
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" id="email"
<<<<<<< HEAD
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
                        <button className="deleteBtn" type="button" onClick={deleteFile('members',i)}> <FaTrashAlt/></button>
                  </div>
          )
        }
    }
        return section;

    
}
=======
                        onChange={inputChange('email', i)}  />
                    </div>

                </div>
            );
        }
        }
        return section;
    }
>>>>>>> 2dbc05f (sponsor sign up updated)

/////////////////////////////////////////////////////////////

	return(
		<>
            <form onSubmit={handleForm}>
			<div className="form-container">
                <h5>Team Members</h5>
<<<<<<< HEAD
                
               	{displayMembers()} 
                               
              
=======

               	{displayExistedForm()}

                {displayEmptyForm()}
                 
                {displayAddBtn()}
>>>>>>> 2dbc05f (sponsor sign up updated)

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