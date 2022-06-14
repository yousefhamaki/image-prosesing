import {RequestHandler} from "express"

function QueryCheck(query: {[key:string]: String|number|any}, params: {[key: string]:string}){
    const result = []
    for(var key in params){
        const stand = params[key].split("|")
        
        if(stand.indexOf("required") > -1){
            if(!params.hasOwnProperty(key)){
                result[result.length] = "oops! " + key + " is Required"
            }
        }
        if(params.hasOwnProperty(key)){
            if(stand.indexOf("number") > -1){
                if(isNaN(Number(query[key]))){
                    result[result.length] = "oh! oh " + key + " must be number"
                }
            }
        }
        
    }
    return result
}

export default QueryCheck