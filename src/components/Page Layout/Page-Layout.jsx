import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header-component";
import FooterComponent from "../Footer/Footer-component";

export default function PageLayout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <FooterComponent/>
        </>
    )
}