export default function HeroComponents({
  HeroImg,
  HeroTitle,
  HeroTitle2,
  HeroParagraph,
}) {
  return (
    <div className="Img-Div relative  bg-sky-900 font-Inter, sans-serif ">
      <div className="relative overflow-hidden Box h-[650px]">
        <div>
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full h-[980px] object-cover opacity-70 banner"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <h2 className="text-5xl text-white font-bold italic">{HeroTitle}</h2>
          <h2 className="text-5xl text-white font-bold italic">{HeroTitle2}</h2>
          <p className="mt-3 text-lg text-white  font-semibold">
            {HeroParagraph}
          </p>
        </div>
      </div>
    </div>
  );
}
