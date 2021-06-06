import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import axiosInstance from '../../../../utils/axiosConfig.js';

function EditAbstract({data, setData}) {

    console.log(data.abstract)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8654e33 (edit folder)
    const inputChange = input => e => {

        if(input=='title'){
            if(!data.abstract[0]){
                data.abstract.push({'title': e.target.value})            }
            else{
                data.abstract[0].title = e.target.value;
            }
        }
        if(input=='content'){
            if(!data.abstract[0]){
                data.abstract.push({'content': e.target.value})            }
            else{
                data.abstract[0].content = e.target.value;
            }
        }
        setData({
            ...data,
        });
    };

    //display Keyword
    function displayKeywords(){
        var section = [];

        if(data.abstract!=undefined&&data.abstract[0]!=undefined&&data.abstract[0]['keywords']!=undefined){
            section.push(
                <div>
                    <ul>
                        {data.abstract[0]['keywords'].map((keyword, index)=>(

                        <li>
                          {keyword}
                          <button className="deleteBtn" type="button" onClick={deleteKeyword(index)}> delete</button>
                        </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return section;
    }
    //display empty Keyword field
    function displayKeywordsForm(){
        var section = [];

        if(data.abstract!==undefined){
            if(data.abstract==null||data.abstract[0]==undefined||data.abstract[0].keywords==null){
            section.push(
                <div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keyword" id="keyword"
                        placeholder='keyword'                    
                        onChange={tempInput('keyword')} value={tempState.keyword}/>
                        <p/>
                        <button className="addBtn btn btn-primary" type="button" onClick={addKeyword()}> Add</button>
                    </div>

                    <hr/>
                </div>
            );
            }
                else if(data.abstract[0].keywords.length<5){
            section.push(
                <div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keyword" id="keyword"
                        placeholder='keyword'                    
                        onChange={tempInput('keyword')} value={tempState.keyword}/>
                        <p/>
                        <button className="addBtn btn btn-primary" type="button" onClick={addKeyword()}> Add</button>
                    </div>

                    <hr/>
                </div>
            );
                
            }
        }
        return section;
    }


    const [tempState, setTempt] = useState({
        keyword:""
    });

    const tempInput = input => e => {
        setTempt({
            ...tempState,
            keyword: e.target.value
        });
    };

    //////// add keyword ////////////
    const addKeyword = () => e => {
    
        if(!data.abstract[0]){
            data.abstract.push({'keywords': []})
        }
        else if(data.abstract[0]&&!data.abstract[0]['keywords']){
            data.abstract[0]['keywords']=[];
        }

        data.abstract[0]['keywords'].push(tempState.keyword);
        setData({
            ...data,
            
        });
        console.log(data.abstract);
        //clear tempStateKeyword
        setTempt({
            ...tempState,
            keyword: ""
        });

    }


    //////// remove keyword ////////////
    const deleteKeyword = (index) => e => {
        console.log(index)
        console.log(data.abstract[0]['keywords'][index])

        data.abstract[0]['keywords'].splice(index,1);

        console.log(index)
        setData({
            ...data,
            
        });
        console.log(data.abstract);
    }


    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
           var postData = {
                _id : data._id,                
                abstract : data.abstract
            }
            
<<<<<<< HEAD
            axiosInstance.post("/api/competitors/update", postData)
=======
=======
>>>>>>> 962c9ed (merge from before)
	const inputChange = input => e => {

		if(input=='title'){
			if(!data.abstract[0]){
				data.abstract.push({'title': e.target.value})			}
			else{
				data.abstract[0].title = e.target.value;
			}
		}
		if(input=='content'){
			if(!data.abstract[0]){
				data.abstract.push({'content': e.target.value})			}
			else{
				data.abstract[0].content = e.target.value;
			}
		}
	    setData({
	    	...data,
	    });
	};

	//display Keyword
	function displayKeywords(){
	    var section = [];

	    if(data.abstract!=undefined&&data.abstract[0]!=undefined&&data.abstract[0]['keywords']!=undefined){
	        section.push(
	            <div>
	                <ul>
	                    {data.abstract[0]['keywords'].map((keyword, index)=>(

	                    <li>
	                      {keyword}
	                      <button className="deleteBtn" type="button" onClick={deleteKeyword(index)}> delete</button>
	                    </li>
	                    ))}
	                </ul>
	            </div>
	        );
	    }

	    return section;
	}
	//display empty Keyword field
	function displayKeywordsForm(){
	    var section = [];

<<<<<<< HEAD
	    if(data.abstract.keywords!==null||data.abstract.keywords.length<5){
	        section.push(
=======
	    if(data.abstract!==undefined){
			if(data.abstract==null||data.abstract[0]==undefined||data.abstract[0].keywords==null){
			section.push(
>>>>>>> 962c9ed (merge from before)
	            <div>
	                <div className="form-group">
	                    <input type="text" className="form-control" name="keyword" id="keyword"
	                    placeholder='keyword'                    
	                    onChange={tempInput('keyword')} value={tempState.keyword}/>
<<<<<<< HEAD
	                	<button className="addBtn" type="button" onClick={addKeyword()}> Add</button>
=======
						<p/>
	                	<button className="addBtn btn btn-primary" type="button" onClick={addKeyword()}> Add</button>
>>>>>>> 962c9ed (merge from before)
	                </div>

	                <hr/>
	            </div>
	        );
<<<<<<< HEAD
	    }

=======
			}
				else if(data.abstract[0].keywords.length<5){
	        section.push(
	            <div>
	                <div className="form-group">
	                    <input type="text" className="form-control" name="keyword" id="keyword"
	                    placeholder='keyword'                    
	                    onChange={tempInput('keyword')} value={tempState.keyword}/>
						<p/>
	                	<button className="addBtn btn btn-primary" type="button" onClick={addKeyword()}> Add</button>
	                </div>

	                <hr/>
	            </div>
	        );
				
			}
		}
>>>>>>> 962c9ed (merge from before)
	    return section;
	}


	const [tempState, setTempt] = useState({
		keyword:""
	});

	const tempInput = input => e => {
	    setTempt({
	    	...tempState,
	    	keyword: e.target.value
	    });
	};

	//////// add keyword ////////////
	const addKeyword = () => e => {
	
		if(!data.abstract[0]){
			data.abstract.push({'keywords': []})
		}
		else if(data.abstract[0]&&!data.abstract[0]['keywords']){
			data.abstract[0]['keywords']=[];
		}

	    data.abstract[0]['keywords'].push(tempState.keyword);
	    setData({
	        ...data,
	        
	    });
	    console.log(data.abstract);
	    //clear tempStateKeyword
	    setTempt({
	    	...tempState,
	    	keyword: ""
	    });

	}


	//////// remove keyword ////////////
	const deleteKeyword = (index) => e => {
		console.log(index)
		console.log(data.abstract[0]['keywords'][index])

	    data.abstract[0]['keywords'].splice(index,1);

	    console.log(index)
	    setData({
	        ...data,
	        
	    });
	    console.log(data.abstract);
	}


	const handleForm=(e)=>{
		e.preventDefault();
	// perform all neccassary validations
	   
	    	
	    	axiosInstance.post("/competitors/update", data)
<<<<<<< HEAD
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
        const inputChange = input => e => {
 
                if(input=='title'){
                        if(!data.abstract[0]){
                                data.abstract.push({'title': e.target.value})                   }
                        else{
                                data.abstract[0].title = e.target.value;
                        }
                }
                if(input=='content'){
                        if(!data.abstract[0]){
                                data.abstract.push({'content': e.target.value})                 }
                        else{
                                data.abstract[0].content = e.target.value;
                        }
                }
            setData({
                ...data,
            });
        };
 
        //display Keyword
        function displayKeywords(){
            var section = [];
 
            if(data.abstract!=undefined&&data.abstract[0]!=undefined&&data.abstract[0]['keywords']!=undefined){
                section.push(
                    <div>
                        <ul>
                            {data.abstract[0]['keywords'].map((keyword, index)=>(
 
                            <li>
                              {keyword}
                              <button className="deleteBtn" type="button" onClick={deleteKeyword(index)}> delete</button>
                            </li>
                            ))}
                        </ul>
                    </div>
                );
            }
 
            return section;
        }
        //display empty Keyword field
        function displayKeywordsForm(){
            var section = [];
 
            if(data.abstract!==undefined){
                        if(data.abstract==null||data.abstract[0]==undefined){
                        section.push(
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="keyword" id="keyword"
                            placeholder='keyword'                    
                            onChange={tempInput('keyword')} value={tempState.keyword}/>
                                                <p/>
                                <button className="addBtn btn btn-primary" type="button" onClick={addKeyword()}> Add</button>
                        </div>
 
                        <hr/>
                    </div>
                );
                        }
                                else if(data.abstract[0].keywords.length<5){
                section.push(
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="keyword" id="keyword"
                            placeholder='keyword'                    
                            onChange={tempInput('keyword')} value={tempState.keyword}/>
                                                <p/>
                                <button className="addBtn btn btn-primary" type="button" onClick={addKeyword()}> Add</button>
                        </div>
 
                        <hr/>
                    </div>
                );
                               
                        }
                }
            return section;
        }
 
 
        const [tempState, setTempt] = useState({
                keyword:""
        });
 
        const tempInput = input => e => {
            setTempt({
                ...tempState,
                keyword: e.target.value
            });
        };
 
        //////// add keyword ////////////
        const addKeyword = () => e => {
       
                if(!data.abstract[0]){
                        data.abstract.push({'keywords': []})
                }
                else if(data.abstract[0]&&!data.abstract[0]['keywords']){
                        data.abstract[0]['keywords']=[];
                }
 
            data.abstract[0]['keywords'].push(tempState.keyword);
            setData({
                ...data,
               
            });
            console.log(data.abstract);
            //clear tempStateKeyword
            setTempt({
                ...tempState,
                keyword: ""
            });
 
        }
 
 
        //////// remove keyword ////////////
        const deleteKeyword = (index) => e => {
                console.log(index)
                console.log(data.abstract[0]['keywords'][index])
 
            data.abstract[0]['keywords'].splice(index,1);
 
            console.log(index)
            setData({
                ...data,
               
            });
            console.log(data.abstract);
        }
 
 
        const handleForm=(e)=>{
                e.preventDefault();
        // perform all neccassary validations
           
               
                axiosInstance.post("/competitors/update", data)
>>>>>>> 3c5d2dd (resolved issues)
=======
>>>>>>> 962c9ed (merge from before)
=======
            axiosInstance.post("/competitors/update", postData)
>>>>>>> 8654e33 (edit folder)
            .then(function(response) {
              window.location.href = '/user_dashboard';
            }).catch(function(error) {
              console.log(error);
            })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        
    }



    /////////////////////////////////////////////////////////////

        
=======
=======
>>>>>>> 962c9ed (merge from before)
	    
	}
=======
        
    }
>>>>>>> 8654e33 (edit folder)



    /////////////////////////////////////////////////////////////

<<<<<<< HEAD
		
<<<<<<< HEAD
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
           
        }
 
 
 
        /////////////////////////////////////////////////////////////
 
               
>>>>>>> 3c5d2dd (resolved issues)
=======
>>>>>>> 962c9ed (merge from before)
=======
        
>>>>>>> 8654e33 (edit folder)
//load data to input field value
function checkExist(element, index){
    var value="";
    if(data.abstract==undefined ||data.abstract[0]==undefined){
        return ' ';
    }
    else if(data.abstract[0].title && element==="title"){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return data.abstract[0].title;
    }
    else if(data.abstract[0].content && element==="content"){
        return data.abstract[0].content;
=======
    	return data.abstract[0].title;
    }
    else if(data.abstract[0].content && element==="content"){
    	return data.abstract[0].content;
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
        return data.abstract[0].title;
    }
    else if(data.abstract[0].content && element==="content"){
        return data.abstract[0].content;
>>>>>>> 3c5d2dd (resolved issues)
=======
    	return data.abstract[0].title;
    }
    else if(data.abstract[0].content && element==="content"){
    	return data.abstract[0].content;
>>>>>>> 962c9ed (merge from before)
=======
        return data.abstract[0].title;
    }
    else if(data.abstract[0].content && element==="content"){
        return data.abstract[0].content;
>>>>>>> 8654e33 (edit folder)
    }    
   

    console.log(data.abstract)
}
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
        return(
            <>
                <form onSubmit={handleForm}>
                <div className="form-container">
                    <h1 className="mb-5">Edit Abstract</h1>

                    <div className="form-group">
                        <label htmlFor="name"><span>*</span>Project Title</label>
                        <input type="text" className="form-control" name="title" id="title"
                        placeholder='project title' required                    
                        onChange={inputChange('title')} value={checkExist('title', 0)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="abstract">Abstract </label>
                        <textarea className="form-control" id="abstract" cols="30" rows="10"
                        onChange={inputChange('content')} value={checkExist('content', 0)}/>
                    </div>


<<<<<<< HEAD
                    <h5>Keywords</h5>

                    {displayKeywords()}

                    {displayKeywordsForm()}

                     
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
=======
=======



>>>>>>> 962c9ed (merge from before)
		return(
			<>
	            <form onSubmit={handleForm}>
				<div className="form-container">
	                <h1 className="mb-5">Edit Abstract</h1>
=======
        return(
            <>
                <form onSubmit={handleForm}>
                <div className="form-container">
                    <h1 className="mb-5">Edit Abstract</h1>
>>>>>>> 8654e33 (edit folder)

                    <div className="form-group">
                        <label htmlFor="name"><span>*</span>Project Title</label>
                        <input type="text" className="form-control" name="title" id="title"
                        placeholder='project title' required                    
                        onChange={inputChange('title')} value={checkExist('title', 0)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="abstract">Abstract </label>
                        <textarea className="form-control" id="abstract" cols="30" rows="10"
                        onChange={inputChange('content')} value={checkExist('content', 0)}/>
                    </div>


                    <h5>Keywords</h5>

                    {displayKeywords()}

                    {displayKeywordsForm()}

                     
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

<<<<<<< HEAD
	}
<<<<<<< HEAD
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)

=======
 
 
 
                return(
                        <>
                    <form onSubmit={handleForm}>
                                <div className="form-container">
                        <h1 className="mb-5">Edit Abstract</h1>
 
                        <div className="form-group">
                            <label htmlFor="name"><span>*</span>Project Title</label>
                            <input type="text" className="form-control" name="title" id="title"
                            placeholder='project title' required                    
                            onChange={inputChange('title')} value={checkExist('title', 0)} />
                        </div>
 
                        <div className="form-group">
                            <label htmlFor="abstract">Abstract </label>
                            <textarea className="form-control" id="abstract" cols="30" rows="10"
                        onChange={inputChange('content')} value={checkExist('content', 0)}/>
                        </div>
 
 
                        <h5>Keywords</h5>
 
                        {displayKeywords()}
 
                        {displayKeywordsForm()}
 
                                         
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
 
>>>>>>> 3c5d2dd (resolved issues)
=======

>>>>>>> 962c9ed (merge from before)
=======
    }

>>>>>>> 8654e33 (edit folder)
export default EditAbstract;