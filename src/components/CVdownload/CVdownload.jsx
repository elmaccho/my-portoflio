import React from "react";

import MainBtn from "components/MainBtn/MainBtn";

import { saveAs } from "file-saver";

import pdfFile from "Files/CV_Maciej_Chojnacki.pdf";

const onButtonClick = () => {
    saveAs(pdfFile, "CV_Maciej_Chojnacki.pdf");
}

export default function CVdownload(){
    return(
        <MainBtn content="Pobierz CV" onClickEvent={onButtonClick}/>
    )
}