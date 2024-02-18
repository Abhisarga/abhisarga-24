import Img1 from "../../assets/BackgroundImages/Screenshot 2023-11-08 094030.png";
import Img2 from "../../assets/BackgroundImages/WaveofKanagawa 2.png";
import Img3 from "../../assets/BackgroundImages/Bird on tree 1.png";

const ImgElement = () => {
  return (
    <>
      <div className={"h-auto w-auto overflow-visible fixed top-16 left-0"}>
        <img src={Img3} alt="" width={500} />
      </div>
      <div className={"h-auto w-auto overflow-visible fixed bottom-0 left-0"}>
        <img src={Img2} alt="" width={400} />
      </div>
      <div
        className={
          "h-auto w-auto overflow-visible fixed bottom-0 right-0 float-right flex justify-end"
        }
      >
        <img src={Img1} alt="" width={180} />
      </div>
    </>
  );
};

export default ImgElement;
