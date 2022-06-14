import {Request, Response } from "express"
import SearchFile from "./../traits/SearchFile"
import QueryCheck from "../traits/CheckQuery"
import ResizeImage from "../traits/ResizeImage"

const imagesPath = __dirname + "/../../../images/"
const resizePath = __dirname + "/../../../images/resize/"

exports.Home = (req: Request, res: Response)=>{
    res.send("Hello from image prosessing api" )
}

exports.upload = async (req: Request, res: Response)=>{
    /* request query handler */
    const required: { [key: string]: string; } = {image: "required", width: "required|number", height: "required|number"}
    const requestInfo: string[] = QueryCheck(req.query, required)
    if(requestInfo.length > 0){
        return res.send(requestInfo[0])
    }

    /* handler image exist and resize exist */
    const image: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined = req.query.image
    const width: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined = req.query.width
    const height: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined = req.query.height
    const original: string = image + ".jpg"
    const resized: string = `${image}_${width}-${height}.jpg`
    const existPath: string = imagesPath + original
    const lastPath: string = `${resizePath + resized}`
    const exist: boolean = SearchFile(existPath)
    const resize: boolean = SearchFile(lastPath)

    if(exist){
        if(resize){
            //should return image from resize folder
            res.send(`<img src=${`images/resize/${resized}`} />`)
        }else{
            //should resize image and save it in resize folder then return the image resized
            await ResizeImage(existPath, lastPath, Number(width), Number(height)).then(() =>{    
                res.send(`<img src=${`images/resize/${resized}`} />`)
            }).catch(() => {
                const error: string = "Oops! image failed resize please try again"
                res.send(error)
            });   
        }
        
    }else{
        const errorImage: string = "oops! image not found"
        return res.status(404).send(errorImage)
    }

}

export default exports