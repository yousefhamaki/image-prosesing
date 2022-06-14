import sharp from "sharp";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ResizeImage = async (
  existPath: string,
  lastPath: string,
  width: number,
  height: number
): Promise<boolean> => {
  const result = await sharp(existPath)
    .resize({ width: Number(width), height: Number(height) })
    .toFile(lastPath)
    .then((data) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
  return result;
};

it("expect resized to throw error", async () => {
  expect(
    await ResizeImage(
      `${__dirname}/../../../images/p2.jpg`,
      "images/resized/p2_250-40.png",
      250,
      40
    )
  ).toBeFalse;
});

it("expect resized width to equal (250)", async () => {
  expect(
    await await ResizeImage(
      "images/p2.jpg",
      "images/resized/p2_250-400.png",
      251,
      401
    )
  ).toBeTrue;
});
