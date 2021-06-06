import React, { Component } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import axiosInstance from '../../../../utils/axiosConfig.js';
<<<<<<< HEAD


=======
var data;


const submit=(e)=>{
    e.preventDefault();
    console.log(data)

//     var postData = {

//         bookChapter : {
//             0  : {
//                 'content' : data
//             } 
//         }

//     }
//  console.log(postData);
//     axiosInstance.post("/competitors/update", postData)
//             .then(function(response) {
//               // window.location.href = '/user_dashboard';
//             }).catch(function(error) {
//               console.log(error);
//             })
}

>>>>>>> 172511b (ckeditor)
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
=======
            'outdent',
            'indent',
            '|',
>>>>>>> 172511b (ckeditor)
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
<<<<<<< HEAD
            
=======
            'undo',
            'redo'
>>>>>>> 172511b (ckeditor)
        ]
    },
    language: 'en',
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
<<<<<<< HEAD
=======
            'imageStyle:side'
>>>>>>> 172511b (ckeditor)
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
class EditorSec extends Component {



    render() {
>>>>>>> 172511b (ckeditor)
        return (
            <div className="EditorSec">                
                <CKEditor
                    editor={ Editor }
                    config={ editorConfiguration }
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
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        data = editor.getData();
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
                    } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor.getData() );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.',  editor.getData() );
                    // } }
                />
                <p>Click "Set" to save the data</p>
                <button className="btn btn-primary" onClick={submit}>Set</button>

            </div>
        );
    }
}

export default EditorSec;