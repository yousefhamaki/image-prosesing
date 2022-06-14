import ResizeImage from "../app/traits/ResizeImage";

it("expect resized to be (true)", async ()=>{
    expect(await ResizeImage(`${__dirname}/../../../images/p2.jpg`, "images/resized/p2_250-40.png", 250, 40)).toBeFalse
})

it("expect resized to be (false)", async ()=>{
    expect(await ResizeImage("/images/p2", "images/resized/p2_250-400.png", 250, 400)).toBeFalse
})
