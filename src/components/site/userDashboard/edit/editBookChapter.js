import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
<<<<<<< HEAD
import { FaTrashAlt } from 'react-icons/fa';
import Editor from './editor';

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
	                      <button className="deleteBtn" type="button" onClick={deleteReference(index)}> <FaTrashAlt/></button>
	                    </li>
	                    ))}
	                </ul>
	            </div>
	        );
	    }

	    return section;
	}
=======

function EditBookChapter() {

	/////////////////////get login user (REPLACE THIS) ////////////////
	const [result, setState] = useState({
	    introduction : "intro for bookChapter",
	    content: "paragraph for bookChapter",
	    conclusion: "conclusion for bookChapter",
	    references: [
	      "REF sample 1",
	      "REF sample 2"
	    ]
	})

	const inputChange = input => e => {
	    setState({
	    	...result,
	        [input]: e.target.value
	    });
	};

>>>>>>> 2dbc05f (sponsor sign up updated)
	//display empty Reference field
	function displayReferencesForm(){
	    var section = [];
	    
        section.push(
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" name="reference" id="reference"
<<<<<<< HEAD
                    placeholder='reference'                    
                    onChange={tempInput('reference')} value={tempState.reference}/>
                	<button className="btn btn-primary" type="button" onClick={addReference()}> Add</button>

					<br/>
                	

=======
                    placeholder='reference' required                    
                    onChange={tempInput('reference')} value={tempState.reference}/>
                	<button className="addBtn" type="button" onClick={addReference()}> Add</button>
>>>>>>> 2dbc05f (sponsor sign up updated)
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
<<<<<<< HEAD
		if(!data.bookChapter[0]){
			data.abstract.push({'references': []})
			
		}
		else if(data.bookChapter[0]&&!data.bookChapter[0]['references']){
			data.bookChapter[0]['references']=[];
		}
			data.bookChapter[0]['references'].push(tempState.reference);
		
	    setData({
	        ...data,
	        
	    });
	    console.log(data.bookChapter);
=======
	    result.references.push(tempState.reference);
	    setState({
	        ...result,
	        
	    });
	    console.log(result);
>>>>>>> 2dbc05f (sponsor sign up updated)
	    //clear tempStateReference
	    setTempt({
	    	...tempState,
	    	reference: ""
	    });
<<<<<<< HEAD
	}

	//////// remove reference ////////////
	const deleteReference = (index) => e => {
	    data.bookChapter[0]['references'].splice(index,1);
	    setData({
	        ...data,
	        
	    });
	    console.log(data.bookChapter);
=======

	}


	//////// remove reference ////////////
	const deleteReference = (index) => e => {
	    result.references.splice(index,1);
	    setState({
	        ...result,
	        
	    });
	    console.log(result);
>>>>>>> 2dbc05f (sponsor sign up updated)
	}

	const handleForm=(e)=>{
	e.preventDefault();
	// perform all neccassary validations
<<<<<<< HEAD
		var postData = {
                _id : data._id,                
                bookChapter : data.bookChapter
            }


	   axiosInstance.post("/api/competitors/update", postData)
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


=======
	   if (result.bookChapter ==""){
	        alert("Form not fill");
	    }
	    else{
	    	///////update to db /////////////
	    	console.log(result);
	    }
	}

>>>>>>> 2dbc05f (sponsor sign up updated)
	/////////////////////////////////////////////////////////////

		return(
			<>
	            <form onSubmit={handleForm}>
				<div className="form-container">
	                <h1 className="mb-5">Edit Book Chapter</h1>

	                <div className="form-group">
	                    <label htmlFor="introduction">Introduction</label>
	                    <textarea className="form-control" id="introduction" cols="30" rows="10"
<<<<<<< HEAD
                    	onChange={inputChange('introduction')} value={checkExist('introduction', 0)} />
=======
                    	onChange={inputChange('introduction')} value={result.introduction} />
>>>>>>> 2dbc05f (sponsor sign up updated)
	                </div>

	                <div className="form-group">
	                    <label htmlFor="content">Content </label>
<<<<<<< HEAD
						<Editor id = {data._id} bookChapter_data = {data.bookChapter}/>
=======
	                    <textarea className="form-control" id="content" cols="30" rows="10"
                    	onChange={inputChange('content')} value={result.content} />
>>>>>>> 2dbc05f (sponsor sign up updated)
	                </div>
					
					 <div className="form-group">
	                    <label htmlFor="conclusion">Conclusion </label>
	                    <textarea className="form-control" id="conclusion" cols="30" rows="10"
<<<<<<< HEAD
                    	onChange={inputChange('conclusion')} value={checkExist('conclusion', 0)} />
	                </div>

                   	<h5>References</h5>
	                {displayReferences()}
=======
                    	onChange={inputChange('conclusion')} value={result.conclusion} />
	                </div>

                   	<h5>References</h5>
	                <ul>
	                    {result.references.map((reference, index)=>(

	                    <li>
	                      {reference}
	                      <button className="deleteBtn" type="button" onClick={deleteReference('reference',index)}> delete</button>
	                    </li>
	                    ))}
	                </ul>
>>>>>>> 2dbc05f (sponsor sign up updated)
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