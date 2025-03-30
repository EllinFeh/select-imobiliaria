import React from 'react'
import NavbarDois from "@/components/navbarimovel";
import Card from "@/components/card-colect";

export default function imovelOne() {
    return (
        <div>
            <NavbarDois></NavbarDois>
            <div className="bg-[url('/images/imoveltree.png')] bg-cover bg-center flex h-screen justify-center items-center">
                <Card id_imovel="VEM_24174" /> 
            </div>
        </div>
    )
}
