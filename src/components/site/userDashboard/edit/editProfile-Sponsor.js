<<<<<<< HEAD
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
 
 
function EditProfile({data, setData}) {
 
/////////////////////get login user (REPLACE THIS) ////////////////
const inputChange = input => e => {
    setData({
        ...data,
        [input]: e.target.value
    });
};
 
    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
          if (data.company_name === ""||data.company_pic_name ===""||data.company_contact ===""||data.company_address===""
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
             .then(function(response) {
               window.location.href = '/user_dashboard';
             }).catch(function(error) {
               console.log(error);
             })
        }
    }
    const uploadLogoHandler = (element, index) => e => {
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
	

var obj =[];
  const deleteFile = (element,index) => e => {
    if(element==='company_logo'){
      let obj = data.company_logo;
      obj.splice(index,1);
    }

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
/////////////////////////////////////////////////////////////
    return(
        <>
        <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
        <div className="form-container">
                <h1 className="mb-5">Edit Profile Info</h1>
 
=======

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
    
      company_name:'UM',
      PIC_name: 'PICUser',
      phone: '011111111111',
      company_address: 'UM, Jln Uni, 560000',
      company_website: 'https://www.youtube.com/',
      company_logo:'https://www.w3schools.com/images/w3schools_green.jpg',   

});

    const inputChange = input => e => {
        setState({
        	...user,
            [input]: e.target.value
        });
    };

    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
          if (user.company_name ==""||user.PIC_name==""||user.phone==""||user.company_address==""
            ||user.company_website==""|| user.company_logo==""){
            alert("Form not fill");
        }
        else{
        	///////update to db /////////////
        	console.log(user);
        }
    }

/////////////////////////////////////////////////////////////

	return(
		<>
		<form onSubmit={handleForm}>
		<div className="form-container">
                <h1 className="mb-5">Edit Profile Info</h1>

>>>>>>> 2dbc05f (sponsor sign up updated)
              
                 <div className="form-group">
                    <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
                    <input type="text" className="form-control" name="company_name" id="company_name"
                    placeholder='Company Name' required
<<<<<<< HEAD
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
                    <label htmlFor="company_pic_ic"><span>*</span>IC of Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='company_pic_ic' id="company_pic_ic"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('company_pic_ic')} value={data.company_pic_ic} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='text' name='company_contact' id="company_contact"
                    placeholder='Contact Number' required
                    onChange={inputChange('company_contact')} value={data.company_contact} 
                    />
                </div>
 
                <div className="form-group">
                    <label htmlFor="company_address"><span>*</span>Company Address</label>
                    <textarea className="form-control" id="company_address" cols="30" rows="10"
                    onChange={inputChange('company_address')} value={data.company_address} 
                    ></textarea>
                </div>
 
=======
                    onChange={inputChange('company_name')} value={user.company_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="PIC_name"><span>*</span>Company Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='PIC_name' id="PIC_name"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('PIC_name')} value={user.PIC_name} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone"><span>*</span>Phone Number</label>
                    <input className="form-control" type='text' name='phone' id="phone"
                    placeholder='Phone Number' required
                    onChange={inputChange('phone')} value={user.phone} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company_address"><span>*</span>Company Address</label>
                    <textarea className="form-control" id="company_address" cols="30" rows="10"
                    onChange={inputChange('company_address')} value={user.company_address} 
                    ></textarea>
                </div>

>>>>>>> 2dbc05f (sponsor sign up updated)
                <div className="form-group">
                    <label htmlFor="company_website"><span>*</span>Company Website</label>
                    <input className="form-control" type='text' name='company_website' id="company_website"
                    placeholder='URL' required
<<<<<<< HEAD
                    onChange={inputChange('company_website')} value={data.company_website} 
                    />
                </div>
 
                <div className="form-group">
                    <label htmlFor="company_logo"><span>*</span>Company Logo With Transparent Background</label><br />
                    {displayLogo()}
                </div>

                <br />
=======
                    onChange={inputChange('company_website')} value={user.company_website} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company_website"><span>*</span>Company Logo</label><br />
                    <img src={user.company_logo } alt="" />
                    <input type="file" onChange={inputChange('company_logo')} />
                </div>
	    

                <br />

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
<<<<<<< HEAD
        )
}
 
export default EditProfile;
 
=======

		)

}

export default EditAccount;
>>>>>>> 2dbc05f (sponsor sign up updated)
