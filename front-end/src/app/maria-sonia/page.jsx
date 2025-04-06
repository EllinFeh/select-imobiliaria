import React from 'react'
import NavbarDois from "@/components/navbarimovel";
import Card from "@/components/card-colect";

export default function imovelOne() {
    return (
        <div>
            <NavbarDois></NavbarDois>
            <div className="bg-[url('/images/imovelone.png')] bg-cover bg-center flex h-screen justify-center items-center">
                <div className='justify-center flex items-center flex-col'>
                    <img className='w-[260px] mt-16' src="./images/sonialogo.png" alt="" />
                    <Card id_imovel="VEM_31686" />
                </div>
            </div>
        </div>
    )
}
