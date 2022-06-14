
const QueryCheck = (query: any, params: any)=>{
    const result = []
    for(var key in params){
        const stand = params[key].split("|")
        
        if(stand.indexOf("required") > -1){
            if(!query[key]){
                result[result.length] = "oops! " + key + " is Required"
            }
        }
        if(query[key]){
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