import sharp from "sharp"

const ResizeImage = async (existPath:string, lastPath:string, width:number, height: number)=>{
    await sharp(existPath)
            .resize({width: Number(width), height: Number(height)})
            .toFile(lastPath)
            .then((data:object)=>{
                return true
            })
            .catch((err: object)=>{
                return false
            }) 
}

export default ResizeImage