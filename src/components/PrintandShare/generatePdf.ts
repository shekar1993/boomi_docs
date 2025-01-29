import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const generatePdf = (combinedContent, pdfOptions) => {
    if(ExecutionEnvironment.canUseDOM){
        const html2pdf = require('html2pdf.js')
        html2pdf()
        .from(combinedContent)
        .set(pdfOptions)
        .toPdf()
        .get("pdf")
        .then(function (pdf) {
          var totalPages = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(100);
            var copyrightText =
              "© 2024 Copyright Boomi, LP. ALL RIGHTS RESERVED.";
            var pageInfo = "Page " + i + " of " + totalPages;
            var contentWidth = pdf.internal.pageSize.getWidth();
            var contentHeight = pdf.internal.pageSize.getHeight();
            // pdf.addImage(BoomiDocLogo, 'JPEG', pdf.internal.pageSize.getWidth() - 1.1, pdf.internal.pageSize.getHeight() - 0.25, 1, 0.2);
            // if(i !== 1){
            //   pdf.text('Text header', 0.3, 0.3);
            // }
            pdf.text(copyrightText, 0.5, contentHeight - 0.33);
            pdf.text(pageInfo, contentWidth / 1.15, contentHeight - 0.33);
          }
        })
        .save();
    }
}

export default generatePdf;