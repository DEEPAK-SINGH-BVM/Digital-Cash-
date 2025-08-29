import HeroComponents from "../../Element/Hero/Hero";
import "./Hero.css"
export default function Hero() {

  return (
    <div className=" bg-white  Img-Div relative  bg-sky-900 font-Inter, sans-serif ">
      <HeroComponents
        HeroImg={
          "https://media.dash.org/wp-content/uploads/institutions-business-meeting.jpg  "
        }
        HeroTitle={"Operate with confidence in the "}
        HeroTitle2={"new world of digital Currencies"}
      />
    </div>
  );
}
