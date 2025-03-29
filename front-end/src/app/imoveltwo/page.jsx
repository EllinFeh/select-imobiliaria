import React from 'react'
import NavbarDois from "@/components/navbarimovel";
import Card from "@/components/card-colect";

export default function imovelOne() {
    return (
        <div>
            <NavbarDois></NavbarDois>
            <div className="bg-[url('/images/imoveltwo.png')] bg-cover bg-center flex h-screen justify-center items-center">
                <Card id_imovel="169959" />
            </div>
        </div>
    )
}
