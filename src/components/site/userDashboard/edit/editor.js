import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import axiosInstance from '../../../../utils/axiosConfig.js';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 8930f2e (merge from alexia)
var data;


const submit=(e)=>{
    e.preventDefault();
    console.log(data)
<<<<<<< HEAD

=======
	
>>>>>>> 8930f2e (merge from alexia)
//     var postData = {

//         bookChapter : {
//             0  : {
//                 'content' : data
//             } 
//         }

//     }
//  console.log(postData);
<<<<<<< HEAD
//     axiosInstance.post("/competitors/update", postData)
//             .then(function(response) {
//               // window.location.href = '/user_dashboard';
//             }).catch(function(error) {
//               console.log(error);
//             })
}

>>>>>>> 172511b (ckeditor)
=======
     axiosInstance.post("/competitors/update", data)
             .then(function(response) {
               // window.location.href = '/user_dashboard';
             }).catch(function(error) {
               console.log(error);
             })
}

>>>>>>> 8930f2e (merge from alexia)
=======


>>>>>>> 8654e33 (edit folder)
const editorConfiguration = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
<<<<<<< HEAD
<<<<<<< HEAD
=======
            'outdent',
            'indent',
            '|',
>>>>>>> 172511b (ckeditor)
=======
            'outdent',
            'indent',
            '|',
>>>>>>> 8930f2e (merge from alexia)
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
<<<<<<< HEAD
<<<<<<< HEAD
            
=======
            'undo',
            'redo'
>>>>>>> 172511b (ckeditor)
=======
            'undo',
            'redo'
>>>>>>> 8930f2e (merge from alexia)
        ]
    },
    language: 'en',
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
<<<<<<< HEAD
<<<<<<< HEAD
=======
            'imageStyle:side'
>>>>>>> 172511b (ckeditor)
=======
            'imageStyle:side'
>>>>>>> 8930f2e (merge from alexia)
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    }
};

<<<<<<< HEAD
<<<<<<< HEAD

class EditorSec extends Component {
    render() {

        var data;
    	var initialData;
		
		if(this.props.bookChapter_data==null||this.props.bookChapter_data[0]==undefined||this.props.bookChapter_data[0]['content']==null){
				initialData="";
			}else{
				initialData = this.props.bookChapter_data[0]['content'];
			}

        const submit=(e)=>{
            e.preventDefault();
            console.log(data)

            var postData = {
                _id : this.props.id
                ,
                bookChapter : this.props.bookChapter_data
            }
			if(postData.bookChapter==null||postData.bookChapter[0]==undefined||postData.bookChapter[0]['content']==null){
				postData.bookChapter.push({'content':data})
			}else{
				postData.bookChapter[0]['content'] = data;
			}
            

         // console.log(postData);
            // axiosInstance.post("/competitors/update", postData)
            //         .then(function(response) {
            //           // window.location.href = '/user_dashboard';
            //         }).catch(function(error) {
            //           console.log(error);
            //         })
        }

=======
=======
>>>>>>> 8930f2e (merge from alexia)
class EditorSec extends Component {
    render() {

        var data;


<<<<<<< HEAD
    render() {
<<<<<<< HEAD
>>>>>>> 172511b (ckeditor)
=======
>>>>>>> 8930f2e (merge from alexia)
=======
        const submit=(e)=>{
            e.preventDefault();
            console.log(data)

            var postData = {
                _id : this.props.id
                ,
                bookChapter : this.props.bookChapter_data
            }

            postData.bookChapter[0]['content'] = data

         // console.log(postData);
            // axiosInstance.post("/competitors/update", postData)
            //         .then(function(response) {
            //           // window.location.href = '/user_dashboard';
            //         }).catch(function(error) {
            //           console.log(error);
            //         })
        }

>>>>>>> 8654e33 (edit folder)
        return (
            <div className="EditorSec">                
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
<<<<<<< HEAD
<<<<<<< HEAD
                    data={initialData}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        data = editor.getData();
=======
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
>>>>>>> 172511b (ckeditor)
=======
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
<<<<<<< HEAD
>>>>>>> 8930f2e (merge from alexia)
=======
                        data = editor.getData();
>>>>>>> 8654e33 (edit folder)
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        data = editor.getData();
<<<<<<< HEAD
<<<<<<< HEAD
						var postData = {
						_id : this.props.id,
						bookChapter : this.props.bookChapter_data
						}
			
					if(postData.bookChapter==null||postData.bookChapter[0]==undefined||postData.bookChapter[0]['content']==null){
						postData.bookChapter.push({'content':data})
					}else{
						postData.bookChapter[0]['content'] = data;
					}
                    //console.log( { event, editor, data } );
=======
                        console.log( { event, editor, data } );
>>>>>>> 172511b (ckeditor)
=======
                        console.log( { event, editor, data } );
>>>>>>> 8930f2e (merge from alexia)
                    } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor.getData() );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.',  editor.getData() );
                    // } }
                />
<<<<<<< HEAD
<<<<<<< HEAD
                <p>Click "Set" to save the data</p>
=======
                <br/>
>>>>>>> 8930f2e (merge from alexia)
=======
                <p>Click "Set" to save the data</p>
>>>>>>> 8654e33 (edit folder)
                <button className="btn btn-primary" onClick={submit}>Set</button>

            </div>
        );
    }
}

export default EditorSec;