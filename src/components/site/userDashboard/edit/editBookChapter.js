import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
<<<<<<< HEAD
<<<<<<< HEAD
import { FaTrashAlt } from 'react-icons/fa';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Editor from './editor';
<<<<<<< HEAD
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
import { FaTrashAlt } from 'react-icons/fa';
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
=======
>>>>>>> 172511b (ckeditor)
=======
import Editor from "./editor.js";
=======
>>>>>>> 09b1a14 (merge from before)
=======
import Editor from './editor';
>>>>>>> 8930f2e (merge from alexia)

<<<<<<< HEAD
>>>>>>> 962c9ed (merge from before)

=======
>>>>>>> 8654e33 (edit folder)
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditBookChapter({data, setData}) {


    const inputChange = input => e => {
	    if(input=='introduction'){
			if(!data.bookChapter[0]){
				data.bookChapter.push({'introduction': e.target.value})			}
			else{
				data.bookChapter[0].introduction = e.target.value;
			}
		}
		if(input=='content'){
			if(!data.bookChapter[0]){
				data.bookChapter.push({'content': e.target.value})			}
			else{
				data.bookChapter[0].content = e.target.value;
			}
		}
		if(input=='conclusion'){
			if(!data.bookChapter[0]){
				data.bookChapter.push({'conclusion': e.target.value})			}
			else{
				data.bookChapter[0].conclusion = e.target.value;
			}
		}
	    setData({
	    	...data,
	    });
	};
		//display Reference
	function displayReferences(){
	    var section = [];

	    if(data.bookChapter!=undefined&&data.bookChapter[0]!=undefined&&data.bookChapter[0]['references']!=undefined){
	        section.push(
	            <div>
	                <ul>
	                    {data.bookChapter[0]['references'].map((reference, index)=>(

	                    <li>
	                      {reference}
<<<<<<< HEAD
<<<<<<< HEAD
	                      <button className="deleteBtn" type="button" onClick={deleteReference(index)}> <FaTrashAlt/></button>
=======
	                      <button className="deleteBtn" type="button" onClick={deleteReference(index)}> delete</button>
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
	                      <button className="deleteBtn" type="button" onClick={deleteReference(index)}> <FaTrashAlt/></button>
>>>>>>> 70358d5 (update kale's progress 17th May 2021)
	                    </li>
	                    ))}
	                </ul>
	            </div>
	        );
	    }

	    return section;
	}
	//display empty Reference field
	function displayReferencesForm(){
	    var section = [];
	    
        section.push(
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" name="reference" id="reference"
                    placeholder='reference'                    
                    onChange={tempInput('reference')} value={tempState.reference}/>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                	<button className="btn btn-primary" type="button" onClick={addReference()}> Add</button>

					<br/>
                	

=======
					<br/>
                	<button className="addBtn btn-primary btn" type="button" onClick={addReference()}> Add</button>
>>>>>>> 962c9ed (merge from before)
=======
                	<button className="addBtn" type="button" onClick={addReference()}> Add</button>
>>>>>>> 8654e33 (edit folder)
=======
                	<button className="btn btn-primary" type="button" onClick={addReference()}> Add</button>
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
					<br/>
                	<button className="addBtn btn btn-primary" type="button" onClick={addReference()}> Add</button>
>>>>>>> ab7142a (edit-bookchapter-content-done)
                </div>

                <hr/>
            </div>
        );
	    

	    return section;

	}


	const [tempState, setTempt] = useState({
		reference:""
	});

	const tempInput = input => e => {
	    setTempt({
	    	...tempState,
	    	reference: e.target.value
	    });
	};

	//////// add reference ////////////
	const addReference = () => e => {
		if(!data.bookChapter[0]){
			data.abstract.push({'references': []})
			
		}
<<<<<<< HEAD
<<<<<<< HEAD
		else if(data.bookChapter[0]&&!data.bookChapter[0]['references']){
			data.bookChapter[0]['references']=[];
		}
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
		else if(data.bookChapter[0]&&!data.bookChapter[0]['references']){
			data.bookChapter[0]['references']=[];
		}
>>>>>>> c5b9c68 (complete userdashboard)
			data.bookChapter[0]['references'].push(tempState.reference);
		
	    setData({
	        ...data,
	        
	    });
	    console.log(data.bookChapter);
	    //clear tempStateReference
	    setTempt({
	    	...tempState,
	    	reference: ""
	    });
	}

	//////// remove reference ////////////
	const deleteReference = (index) => e => {
	    data.bookChapter[0]['references'].splice(index,1);
	    setData({
	        ...data,
	        
	    });
	    console.log(data.bookChapter);
	}

	const handleForm=(e)=>{
	e.preventDefault();
	// perform all neccassary validations
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8654e33 (edit folder)
		var postData = {
                _id : data._id,                
                bookChapter : data.bookChapter
            }


<<<<<<< HEAD
<<<<<<< HEAD
	   axiosInstance.post("/api/competitors/update", postData)
=======
	   axiosInstance.post("/competitors/update", data)
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
	   axiosInstance.post("/competitors/update", postData)
>>>>>>> 8654e33 (edit folder)
=======
	   axiosInstance.post("/api/competitors/update", postData)
>>>>>>> 248fc10 (added /api/ to axios GET POST)
            .then(function(response) {
              window.location.href = '/user_dashboard';
            }).catch(function(error) {
              console.log(error);
            })
	}


//load data to input field value
	function checkExist(element, index){
	    var value="";
	    if(data.bookChapter==undefined ||data.bookChapter[0]==undefined){
	        return ' ';
	    }
	    else if(data.bookChapter[0].introduction && element==="introduction"){
	    	return data.bookChapter[0].introduction;
	    }
	    else if(data.bookChapter[0].content && element==="content"){
	    	return data.bookChapter[0].content;
	    }    
	   	else if(data.bookChapter[0].conclusion && element==="conclusion"){
	    	return data.bookChapter[0].conclusion;
	    }  

	    console.log(data.bookChapter)
	}


	/////////////////////////////////////////////////////////////

		return(
			<>
	            <form onSubmit={handleForm}>
				<div className="form-container">
	                <h1 className="mb-5">Edit Book Chapter</h1>

	                <div className="form-group">
	                    <label htmlFor="introduction">Introduction</label>
	                    <textarea className="form-control" id="introduction" cols="30" rows="10"
                    	onChange={inputChange('introduction')} value={checkExist('introduction', 0)} />
	                </div>

	                <div className="form-group">
	                    <label htmlFor="content">Content </label>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
						<Editor id = {data._id} bookChapter_data = {data.bookChapter}/>
=======
	                    <textarea className="form-control" id="content" cols="30" rows="10"
                    	onChange={inputChange('content')} value={checkExist('content', 0)} />
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
	                    <Editor/>
>>>>>>> 172511b (ckeditor)
=======
						<br/>
						<Link to="/user_dashboard/edit_chapter_content">
	                        <button className="btn btn-primary">Edit Content</button>
	                    </Link>
 
>>>>>>> 962c9ed (merge from before)
=======
	                    <Editor/>
>>>>>>> 8930f2e (merge from alexia)
=======
	                    <Editor id = {data._id} bookChapter_data = {data.bookChapter}/>
>>>>>>> 8654e33 (edit folder)
=======
						<Editor id = {data._id} bookChapter_data = {data.bookChapter}/>
>>>>>>> f475b73 (html2canvas print PDF preview)
	                </div>
					
					 <div className="form-group">
	                    <label htmlFor="conclusion">Conclusion </label>
	                    <textarea className="form-control" id="conclusion" cols="30" rows="10"
                    	onChange={inputChange('conclusion')} value={checkExist('conclusion', 0)} />
	                </div>

                   	<h5>References</h5>
	                {displayReferences()}
	                {displayReferencesForm()}

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

export default EditBookChapter;