import Span from "../Element/Box/Box";
import BoxModel from "../Element/Box/Box";
import './Box.css'
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://media.dash.org/wp-content/uploads/DashyQR.png",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://media.dash.org/wp-content/uploads/GgosiusXYAA2cdp.jpeg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 3,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://media.dash.org/wp-content/uploads/62PdCouTvNPDFdqJorCLnfauvZdwTKWtZntNNHJQanu8qs7PSbCvMhqBqw1JLU8PzopWDBtQTojuQ31tmyRwfdjiuHJc7Rp8MV5mnr6hrPuroJn.png",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: "https://media.dash.org/wp-content/uploads/GkKryyxWAAAEwRE.jpeg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
];

export default function Box() {
  return (
    <div className="bg-white text-center mt-30">
      <h2 className="title text-4xl font-bold text-sky-500  tracking-tight text-gray-900 ">
        Latest news and reviews
      </h2>
      {/*  */}
      <div className="max-w-7xl mx-auto px- pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3   gap-6 text-center">
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/DashyQR.png"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/GgosiusXYAA2cdp.jpeg"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/4PYjjVwJ1UdtKm2UoLdRggqmP8si9jxVB4qXcg8PFw3fnYKZchaC1JorCnmHSfDgr5uq9k5aFSEBCtNbJqw8tgF82m4x1ztEEGbbF3NpKVY.png"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/introducing-dash-evolution-the-future-of-decentralized-applications.jpg"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/image-10.png"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/GTgdvkhXkAAkat-.jpeg"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
        </div>
      </div>
      {/* {products.map((product) => (
        <div
          key={product.id}
          className="group relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm "
        >
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}
