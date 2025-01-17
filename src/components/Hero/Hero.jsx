import Image1 from "../../assets/Women.png";
import Image2 from "../../assets/sale.png";
import Image3 from "../../assets/Shopping.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    descriotion:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    descriotion:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    descriotion:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function Hero() {
  var setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    sliderToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
      <div className="relative overflow-hidden  min-h-[550px] sm:min-h-[650px] bg-slate-100 flex justify-center  items-center dark:bg-gray-950  dark:text-white duration-200">
        <div className="h-[700px]  w-[700px] bg-primary/40 absolute -top-1/2  right-0 rounded-xl rotate-45 -z-9"></div>
        <div className="container pb-8 sm:pb-0">
          <Slider {...setting}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl  sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <p className="text-sm">{data.descriotion}</p>
                    <div>
                      <button className="bg-gradient-to-t from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                        Order
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Hero;