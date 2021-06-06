import React from 'react';
<<<<<<< HEAD
import html2pdf from "html2pdf.js";

const PdfDownloader = ({rootElementId , downloadFileName}) => {
    function addScript(url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.head.appendChild(script);
    }
    addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');
    const submitHandler = (e) => {
        window.scrollTo(0, 0);
        var element = document.getElementById(rootElementId);
        var opt = {
          margin:       1,
          filename:    downloadFileName,
          image:        { type: 'png', quality: 1.00 },
          html2canvas:  { scale: 1 },
          jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
   
  
   // New Promise-based usage:
   //html2pdf().set(opt).from(element).save();
   
   // Old monolithic-style usage:
   html2pdf(element, opt);
}
    return <button className="btn btn-primary" onClick={submitHandler}>Download PDF</button>
=======
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const PdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button onClick={downloadPdfDocument}>Download Pdf</button>
>>>>>>> 2dbc05f (sponsor sign up updated)

}

export default PdfDownloader;