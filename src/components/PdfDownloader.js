import React from 'react';
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image';
import { jsPDF } from "jspdf";

const PdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const div = document.getElementById(rootElementId);
        window.scrollTo(0, 0);
    	
		html2canvas(div)
      .then((canvas) => {
            //! MAKE YOUR PDF
            var pdf = new jsPDF('p', 'pt', 'letter');

            for (var i = 0; i <= div.clientHeight/980; i++) {
                //! This is all just html2canvas stuff
                var srcImg  = canvas;
                var sX      = 0;
                var sY      = 980*i; // start 980 pixels down for every new page
                var sWidth  = 1000;
                var sHeight = 980;
                var dX      = 0;
                var dY      = 0;
                var dWidth  = 900;
                var dHeight = 980;

                var onePageCanvas = document.createElement("canvas");
                onePageCanvas.setAttribute('width', 900);
                onePageCanvas.setAttribute('height', 980);
                var ctx = onePageCanvas.getContext('2d');
                // details on this usage of this function: 
                // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

                // document.body.appendChild(canvas);
                var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

                var width         = onePageCanvas.width;
                var height        = onePageCanvas.clientHeight;

                //! If we're on anything other than the first page,
                // add another page
                if (i > 0) {
                    pdf.addPage(); //8.5" x 11" in pts (in*72)
                }
                //! now we declare that we're working on that page
                pdf.setPage(i+1);
                //! now we add content to that page!
                pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

            }
            //! after the for loop is finished running, we save the pdf.
            pdf.save('Test.pdf');
        }
      );
            //if (pdf) {
              //domtoimage.toPng(input)
                //.then(imgData => {
                //  pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                 // pdf.save(`${downloadFileName}.pdf`);
               // });
          //  }
		  
		 }

    return <button className="btn btn-primary" onClick={downloadPdfDocument}>Download Pdf</button>

}

export default PdfDownloader;