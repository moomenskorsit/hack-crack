import React, { FC } from "react"
import Image from 'next/image';


function getSrc(failed: number ) : string {
    if(failed < 100){
        return '/incredible0.png';
    }else if(failed < 200){
        return '/incredible1.png';
    }else if(failed < 300){
        return '/incredible2.png';
    }else if(failed < 400){
        return '/incredible3.png';
    }else {return '/incredible3.png';}
}

// @ts-ignore
let MrIncredible = ({ failCount }) => {
    return (
        <div className="w-4/5 bg-slate-900 rounded-2xl flex flex-col">
            <div className="p-8 flex flex-col justify-center items-center">
                <Image src={getSrc(failCount)} alt={'nope'} width={300} height={300}></Image>
            </div>
        </div>
    );
};

export default MrIncredible;
