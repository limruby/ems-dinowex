import React from 'react';
import PdfDownloader from '../../PdfDownloader'; 

const PdfPreview = ({user, account}) =>  {
  function displayTitle(){
    if(user.abstract!==undefined){
    var section = [];

    for (var i=0; i<user.abstract.length; i++){
        section.push(
            <p style={header}>
                <b>{user.abstract[0].title}</b>
            </p>
        );
    }
    return section;
  }
  }
   const defaultStyle = {
      font: 'TimesNewRoman',
      fontSize: 11,
      alignment: 'justify'
    }    
    const header = {
      fontSize: 12,
      alignment: 'center'
    }
  return (       
      <div>
          <PdfDownloader rootElementId="downloadPdf" downloadFileName="OMG" />
          <div id="downloadPdf" style={defaultStyle}>
              <p>{displayTitle()}</p>
          </div>
      </div>
  );
}
export default PdfPreview;