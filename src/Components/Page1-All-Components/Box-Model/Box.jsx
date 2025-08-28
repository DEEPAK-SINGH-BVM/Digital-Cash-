import BoxModel from "../../Element/Box/Box";
import "./Box.css";

const boxData = [
  {
    h6: "August 26, 2024",
    h4: "1 min Read",
    src: "https://media.dash.org/wp-content/uploads/DashyQR.png",
    h5: "Dash QR Swaps Are Here for Everyone via LeoDEX",
    p: "We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... ",
  },
  {
    h6: "August 26, 2024",
    h4: "1 min Read",
    src: "https://media.dash.org/wp-content/uploads/GgosiusXYAA2cdp.jpeg",
    h5: "Dash QR Swaps Are Here for Everyone via LeoDEX",
    p: "We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... ",
  },
  {
    h6: "August 26, 2024",
    h4: "1 min Read",
    src: "https://media.dash.org/wp-content/uploads/4PYjjVwJ1UdtKm2UoLdRggqmP8si9jxVB4qXcg8PFw3fnYKZchaC1JorCnmHSfDgr5uq9k5aFSEBCtNbJqw8tgF82m4x1ztEEGbbF3NpKVY.png",
    h5: "Dash QR Swaps Are Here for Everyone via LeoDEX",
    p: "We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... ",
  },
  {
    h6: "August 26, 2024",
    h4: "1 min Read",
    src: "https://media.dash.org/wp-content/uploads/introducing-dash-evolution-the-future-of-decentralized-applications.jpg",
    h5: "Dash QR Swaps Are Here for Everyone via LeoDEX",
    p: "We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... ",
  },
  {
    h6: "August 26, 2024",
    h4: "1 min Read",
    src: "https://media.dash.org/wp-content/uploads/image-10.png",
    h5: "Dash QR Swaps Are Here for Everyone via LeoDEX",
    p: "We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... ",
  },
  {
    h6: "August 26, 2024",
    h4: "1 min Read",
    src: "https://media.dash.org/wp-content/uploads/GTgdvkhXkAAkat-.jpeg",
    h5: "Dash QR Swaps Are Here for Everyone via LeoDEX",
    p: "We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... ",
  },
];

export default function Box() {
  return (
    <div className="bg-white text-center mt-30">
      <h2 className="title text-4xl font-bold text-sky-500 tracking-tight text-gray-900">
        Latest news and reviews
      </h2>

      <div className="max-w-7xl mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 text-center">
          {boxData.map((item, index) => (
            <BoxModel
              key={index}
              h6={item.h6}
              h4={item.h4}
              src={item.src}
              h5={item.h5}
              p={item.p}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
