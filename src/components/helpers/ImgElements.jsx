import Img1 from "../../assets/BackgroundImages/Screenshot 2023-11-08 094030.png";
import Img2 from "../../assets/BackgroundImages/WaveofKanagawa 2.png";
import Img3 from "../../assets/BackgroundImages/Bird on tree 1.png";
  
const getRandom = (array) => {
  if(!array) return null;
  return array[Math.floor(Math.random() * array?.length)];
}

const ImgElement = ({ theme }) => {
  // console.log(theme?.images?.filter(e => e.position === "top-left"))
  // console.log(getRandom(theme?.images?.filter(e => e.position === "top-left")))
  const topLeft = "/src/assets/BackgroundImages/" +getRandom(theme?.images?.filter(e => (e.position === "top-left") || (e.position === "topLeft")))?.url;
  const topRight = "/src/assets/BackgroundImages/" +getRandom(theme?.images?.filter(e => (e.position === "top-right") || (e.position === "topRight")))?.url;
  const bottomLeft = "/src/assets/BackgroundImages/" +getRandom(theme?.images?.filter(e => (e.position === "bottom-left") || (e.position === "bottomLeft")))?.url;
  const bottomRight = "/src/assets/BackgroundImages/" +getRandom(theme?.images?.filter(e => (e.position === "bottom-right") || (e.position === "bottomRight")))?.url;
  
  // console.log(topLeft, topRight, bottomLeft, bottomRight);

  return (
    <>
      <div className={"h-auto w-auto overflow-visible fixed top-16 left-0 max-width-25 max-height-25"}>
        <img src={theme?topLeft : Img3} alt="" width="100%" height="100%"/>
      </div>
      <div className={"h-auto w-auto overflow-visible fixed bottom-0 left-0"}>
        <img src={theme? bottomLeft :Img2} alt="" width={400} />
      </div>
      <div
        className={
          "h-auto w-auto overflow-visible fixed bottom-0 right-0 float-right flex justify-end"
        }
      >
        <img src={theme? bottomRight : Img1} alt="" width={180} />
      </div>
    </>
  );
};

export default ImgElement;
