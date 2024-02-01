import React, { useEffect, useState, useRef } from "react";
import "./Body.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { FaArrowRight } from "react-icons/fa";
import { Sneaker } from "./Sneakerdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

const Body = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [booting, setBooting] = useState(true);

  const progressCircle = useRef<HTMLDivElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=boots&limit=10",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "sneaker-database-stockx.p.rapidapi.com",
            "X-RapidAPI-Key":
              "2a3981fab4msh85de8db5bac8ad7p1a76e8jsnf19031ce831d",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setBooting(false);
        throw new Error("Response is not working");
      }

      setBooting(false);

      const data = await response.json();
      setSneakers(data);
      console.log(data);
    } catch (error) {
      console.log("Something weird is happening!", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Use return statement to render JSX
  return (
    <div className="container-boot-info">
      {booting && <div>Loading...</div>}

      <div className="latter">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          spaceBetween={30}
          style={{ padding: 30 }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {sneakers.map((sneaker) => (
            <SwiperSlide className="take" key={sneaker.id}>
              <div style={{ marginLeft: 10, width: 1 }}>
                <div className="boots">
                  <img src={sneaker.thumbnail} alt={sneaker.shoeName} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="boot-ad">
        <h1 className="ad">Limited stock available!</h1>
        <h1 className="ad-2">Boots for all seasons!!</h1>
        <p>
          Step into a world where every stride is an adventure, and every
          journey is an opportunity to rediscover the joy of walking. The
          footwear is not just a boot; it's a statement, a commitment to
          embracing life's paths with confidence and enthusiasm
        </p>
        <button className="body-button">
          <FaArrowRight className="arrow-right" />
          Shop now
        </button>
      </div>
      <div className="details">
        <h1>01.</h1>
        <h2>Research</h2>
        <p>
          As the quest for the ideal shoe unfolds, researchers delve into the
          biomechanics of gait.
        </p>
      </div>
      <div className="details">
        <h1 className="number">02.</h1>
        <h2 className="idea">Idea & Concept</h2>
        <p className="text">
          In the ever-evolving landscape of footwear, each pair becomes a
          testament to the continuous pursuit of excellence.
        </p>
      </div>
      <div className="details">
        <h1 className="number">03.</h1>
        <h2 className="idea">Design & Production</h2>
        <p>
          The artistry of shoe design parallels the precision of marksmanship,
          where attention to detail is paramount.
        </p>
      </div>
      <div className="details">
        <h1>04.</h1>
        <h2>Sales & Support</h2>
        <p>
          Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus
          nec ullam corper.
        </p>
      </div>
    </div>
  );
};

export default Body;
