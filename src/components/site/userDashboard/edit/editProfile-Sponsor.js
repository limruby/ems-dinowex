import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
import { FaTrashAlt } from 'react-icons/fa';
 
 
function EditProfile({data, setData}) {
 
=======


function EditProfile({data, setData}) {

>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
 
 
function EditProfile({data, setData}) {
 
>>>>>>> 082b413 (upload and display company logo)
/////////////////////get login user (REPLACE THIS) ////////////////
const inputChange = input => e => {
    setData({
        ...data,
        [input]: e.target.value
    });
};
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
 
>>>>>>> 082b413 (upload and display company logo)
    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
          if (data.company_name === ""||data.company_pic_name ===""||data.company_contact ===""||data.company_address===""
<<<<<<< HEAD
            ||data.company_website===""|| data.company_logo==="" || data.company_pic_ic===""){
            alert("Form not fill");
        }
        else{
             ///////update to db /////////////
              var postData = {
                _id : data._id,
                company_name : data.company_name,
                company_pic_name : data.company_pic_name,
                company_pic_ic: data.company_pic_ic,
                company_contact : data.company_contact,
                company_address : data.company_address,
                company_website : data.company_website,
                company_logo : data.company_logo
            }

             axiosInstance.post("/api/sponsors/update", postData)
=======
            ||data.company_website===""|| data.company_logo===""){
            alert("Form not fill");
        }
        else{
<<<<<<< HEAD
        	 ///////update to db /////////////
<<<<<<< HEAD
<<<<<<< HEAD
             axiosInstance.post("/competitors/update", data)
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
             axiosInstance.post("/sponsors/update", data)
>>>>>>> e43c0d3 (edit sponsor profile line 26)
=======
=======
             ///////update to db /////////////
>>>>>>> 082b413 (upload and display company logo)
             axiosInstance.post("/sponsors/update", data)
>>>>>>> d526164 (upload sponsor company logo)
             .then(function(response) {
               window.location.href = '/user_dashboard';
             }).catch(function(error) {
               console.log(error);
             })
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const uploadLogoHandler = (element, index) => e => {
=======
    const uploadLogoHandler = (element, index) => e => {
<<<<<<< HEAD
	console.log("asd");
>>>>>>> 082b413 (upload and display company logo)
=======
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
        if(element == 'company_logo'){
          let selectedFile = e.target.files;
            let file = null;
            let fileName = "";
            //Check File is not Empty
            if (selectedFile.length > 0) {
                // Select the very first file from list
                let fileToLoad = selectedFile[0];
                fileName = fileToLoad.name;
                // FileReader function for read the file.
                let fileReader = new FileReader();
                // Onload of file read the file content
                fileReader.onload = function(fileLoadedEvent) {
                    file = fileLoadedEvent.target.result;
                    // Print data in console
                  //data.company_logo[0]['name'] = fileName;
                  //data.company_logo[0]['source'] = fileReader.result;
				data.company_logo={
				'name':fileName,
				'source':fileReader.result
				}
                  //data.company_logo.push({'name':fileName,'source':fileReader.result})
                };
            // Convert data to base64
                 var baseFile = fileReader.readAsDataURL(fileToLoad);
            }
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
	

var obj =[];
  const deleteFile = (element,index) => e => {
    if(element==='company_logo'){
      let obj = data.company_logo;
      obj.splice(index,1);
    }
<<<<<<< HEAD
=======
/////////////////////////////////////////////////////////////
<<<<<<< HEAD
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
>>>>>>> 70358d5 (update kale's progress 17th May 2021)

      setData({
          ...data,
      });
      
  }
///////Display company logo//////
function displayLogo(){
    var section = [];
    if(data.company_logo==null||data.company_logo[0]==null){
      section.push(
            <div className="form-group">                
                <input type="file" onChange={uploadLogoHandler('company_logo', 0)} />
            </div>
          );
    }
    else{
      
      const imageBuffer = Buffer.from(data.company_logo[0].source.data); 
      
      section.push(
        <div>
          <img src={imageBuffer} alt={data.company_logo[0].name} width="150" height="150" responsive/>
                      
                   <p>
				   {data.company_logo[0].name}
				   <button className="deleteBtn " type="button" onClick={deleteFile('company_logo',0)}><FaTrashAlt/></button>
				   </p>
				   
              </div>
      )
    }
    return section;
  }
<<<<<<< HEAD
/////////////////////////////////////////////////////////////
    return(
        <>
        <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
        <div className="form-container">
=======
const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    try {
    axiosInstance.post("/uploads", bodyFormData, {
        headers: { 'Content-Type': 'multipart/form-data'}
    })

    }catch(error){
        console.log(error);
    }
}
=======
>>>>>>> d526164 (upload sponsor company logo)

/////////////////////////////////////////////////////////////
	return(
		<>
		<form onSubmit={handleForm}>
		<div className="form-container">
>>>>>>> 335f562 (testing with uploadfilehandler)
=======
=======
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
/////////////////////////////////////////////////////////////
    return(
        <>
        <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
        <div className="form-container">
>>>>>>> 082b413 (upload and display company logo)
                <h1 className="mb-5">Edit Profile Info</h1>
 
              
                 <div className="form-group">
                    <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
                    <input type="text" className="form-control" name="company_name" id="company_name"
                    placeholder='Company Name' required
                    onChange={inputChange('company_name')} value={data.company_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="company_pic_name"><span>*</span>Full Name of Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='company_pic_name' id="company_pic_name"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('company_pic_name')} value={data.company_pic_name} 
                    />
                </div>
                <div className="form-group">
<<<<<<< HEAD
                    <label htmlFor="company_pic_ic"><span>*</span>IC of Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='company_pic_ic' id="company_pic_ic"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('company_pic_ic')} value={data.company_pic_ic} 
=======
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='text' name='company_contact' id="company_contact"
                    placeholder='Contact Number' required
                    onChange={inputChange('company_contact')} value={data.company_contact} 
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
                    />
                </div>
<<<<<<< HEAD
                <div className="form-group">
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='text' name='company_contact' id="company_contact"
                    placeholder='Contact Number' required
                    onChange={inputChange('company_contact')} value={data.company_contact} 
                    />
                </div>
=======
>>>>>>> 082b413 (upload and display company logo)
 
                <div className="form-group">
                    <label htmlFor="company_address"><span>*</span>Company Address</label>
                    <textarea className="form-control" id="company_address" cols="30" rows="10"
                    onChange={inputChange('company_address')} value={data.company_address} 
                    ></textarea>
                </div>
 
                <div className="form-group">
                    <label htmlFor="company_website"><span>*</span>Company Website</label>
                    <input className="form-control" type='text' name='company_website' id="company_website"
                    placeholder='URL' required
                    onChange={inputChange('company_website')} value={data.company_website} 
                    />
                </div>
 
                <div className="form-group">
<<<<<<< HEAD
<<<<<<< HEAD
                    <label htmlFor="company_logo"><span>*</span>Company Logo With Transparent Background</label><br />
<<<<<<< HEAD
<<<<<<< HEAD
                    {displayLogo()}
=======
                    <label htmlFor="company_website"><span>*</span>Company Logo</label><br />
                    <img src={data.company_logo } alt="" />
<<<<<<< HEAD
                    <input type="file" onChange={inputChange('company_logo')} />
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
                    <label htmlFor="company_logo"><span>*</span>Company Logo With Transparent Background</label><br />
<<<<<<< HEAD
                    <img src={data.company_logo } alt="" />
<<<<<<< HEAD
                    <input type="file" name={data.company_name +" logo"} onChange={uploadFileHandler} />
>>>>>>> 335f562 (testing with uploadfilehandler)
=======
                    <input type="file" onChange={inputChange('company_logo')} name="upload_file"/>
>>>>>>> d526164 (upload sponsor company logo)
=======
=======
                    <img src={data.company_logo} alt="" />
>>>>>>> 3979fae (upload sponsor logo)
                    <input type="file" onChange={inputChange('company_logo')} name="upload_file"/>
>>>>>>> 86840ba (upload file function)
=======
                    <input type="file" onChange={uploadLogoHandler('company_logo', 0)} />
>>>>>>> 082b413 (upload and display company logo)
                </div>
<<<<<<< HEAD

=======
>>>>>>> 3979fae (upload sponsor logo)
=======
                    {displayLogo()}
                </div>

>>>>>>> 70358d5 (update kale's progress 17th May 2021)
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
<<<<<<< HEAD
<<<<<<< HEAD
        )
=======
		)
>>>>>>> 3979fae (upload sponsor logo)
}
<<<<<<< HEAD
 
export default EditProfile;
 
=======

export default EditProfile;
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
        )
}
 
export default EditProfile;
 
>>>>>>> 082b413 (upload and display company logo)
