import { cryptoData, cryptoAssets } from "./Data";

export function fetchCrypto(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(cryptoData)
        },2000)
    })
}
export function fetchAssets(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(cryptoAssets)
        },2000)
    })
}