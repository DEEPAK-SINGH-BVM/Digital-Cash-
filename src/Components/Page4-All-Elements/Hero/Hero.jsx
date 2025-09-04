import HeroComponents from "../../Element/Hero/Hero";
export default function Hero() {
  return (
    <div className=" bg-white  Img-Div relative  bg-sky-900 font-Inter, sans-serif ">
      <HeroComponents
        HeroImg={"https://media.dash.org/wp-content/uploads/background-2.png"}
        HeroTitle={"Dash Platform "}
        HeroParagraph={"Manage your data on the blockchain"}
      />
    </div>
  );
}
