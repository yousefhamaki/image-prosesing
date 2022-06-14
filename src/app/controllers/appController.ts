import {Request, Response } from "express"
import SearchFile from "./../traits/SearchFile"
import QueryCheck from "../traits/CheckQuery"
import sharp from "sharp"

const imagesPath = __dirname + "/../../../images/"
const resizePath = __dirname + "/../../../images/resize/"

exports.Home = (req: Request, res: Response)=>{
    res.send("Hello from image prosessing api" )
}

exports.upload = async (req: Request, res: Response)=>{
    /* request query handler */
    const required = {image: "required", width: "required|number", height: "required|number"}
    const requestInfo = QueryCheck(req.query, required)
    if(requestInfo.length > 0){
        return res.send(requestInfo[0])
    }

    /* handler image exist and resize exist */
    const image = req.query.image
    const width = req.query.width
    const height = req.query.height
    const original = image + ".jpg"
    const resized = `${image}_${width}-${height}.jpg`
    const existPath: any = imagesPath + original
    const lastPath: any = `${resizePath + resized}`
    const exist = SearchFile(existPath)
    const resize = SearchFile(lastPath)

    if(exist){
        if(resize){
            //should return image from resize folder
            res.send(`<img src=${`images/resize/${resized}`} />`)
        }else{
            //should resize image and save it in resize folder then return the image resized
            await sharp(existPath)
            .resize({width: Number(width), height: Number(height)})
            .toFile(lastPath)
            .then(data=>{
                res.send(`<img src=${`images/resize/${resized}`} />`)
            })
            .catch(err=>{
                res.send("Oops! image failed resize please try again")
            })      
        }
        
    }else{
        return res.status(404).send("oops! image not found")
    }

}

export default exports