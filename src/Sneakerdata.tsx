import React, { useState, useEffect } from "react";
import "./sneakerdata.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { FaRegStar } from "react-icons/fa6";

// Define types for the sneaker data
export interface Sneaker {
  id: number;
  shoeName: string;
  brand: string;
  thumbnail: string;
  retailPrice: number;
}

const Sneakerdata: React.FC = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://sneaker-database-stockx.p.rapidapi.com/getproducts?keywords=sneakers&limit=10",
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
        setIsLoading(false);
        throw new Error("Network response was not ok");
      }

      setIsLoading(false);

      const data = await response.json();
      console.log(data);
      setSneakers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="lds-hourglass"></div>;
  }

  return (
    <div className="cover">
      <div className="sneaker-info">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          style={{ padding: 30 }}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {sneakers.map((sneaker) => (
            <SwiperSlide className="take">
              <div style={{ marginLeft: 10, width: 1 }}>
                <div className="cards" key={sneaker.id}>
                  {" "}
                  <img src={sneaker.thumbnail} alt={sneaker.shoeName} />
                  <p style={{ fontWeight: 700 }}>{sneaker.brand}</p>
                  <p>{sneaker.shoeName}</p>
                  <p style={{ color: "#3a3a3a" }}>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </p>
                  <p style={{ color: "green" }}>${sneaker.retailPrice}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sneakerdata;
