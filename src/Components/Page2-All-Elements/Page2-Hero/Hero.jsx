import HeroComponents from "../../Element/Hero/Hero";

export default function Hero() {

  return (
    <div className="Img-Div relative  bg-sky-900 font-Inter, sans-serif ">
      <HeroComponents
        HeroImg={
          "https://media.dash.org/wp-content/uploads/Individuals3_optimised.jpg"
        }
        HeroTitle={"Digital money that’s better than cash."}
        HeroParagraph={"Dash is instant, global, and easy to use."}
      />
    </div>
  );
}
