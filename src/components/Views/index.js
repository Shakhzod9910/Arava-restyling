import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from 'next/image'
import user1 from "../../assets/images/user1.png"
import user2 from "../../assets/images/user2.png"


import "swiper/css";
import "swiper/css/controller";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/navigation";

const Views = () => {
  return (
    <section className="views" id="views">
      <div className="views-wrapper container">
        <div className="header">
          <h1>Mijozlarimizning fikrlari</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A magnis
            facilisis donec etiam dignissim sodales duis act{" "}
          </p>
        </div>
        <div className="desktop">
        <div className="slider-wrapper">
          <Swiper
            className="slider"
            loop={true}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
            spaceBetween={38}
            slidesPerView={3}
            controller={true}
            keyboard={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("")}
            onSwiper={(swiper) => swiper}

          >
            <SwiperSlide className="items">
              <div className="box">
                <p>Sed sed justo, sed ultrices id purus ut eu. Nec justo, hendrerit malesuada adipiscing vel tellus. Ac dui urna massa, sem nibh. Urna commodo, ante leo platea pulvinar risus pulvinar magna pulvinar. Fusce laoreet fames molestie mi nisl sed felis.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user1} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Nec.</h2>
                    <span>Id maecenas aliquam.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Turpis ac, ipsum eget risus. Enim pharetra nisl justo, convallis. Tellus sed maecenas at egestas viverra convallis quis ipsum tortor. Quis etiam sit tellus id quis sed molestie. Dolor aliquet justo, volutpat sapien ut nulla sed. Condimentum ut neque.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user2} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Kamolov Xasan</h2>
                    <span>Director of Ilm Ziynati</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Sed sed justo, sed ultrices id purus ut eu. Nec justo, hendrerit malesuada adipiscing vel tellus. Ac dui urna massa, sem nibh. Urna commodo, ante leo platea pulvinar risus pulvinar magna pulvinar. Fusce laoreet fames molestie mi nisl sed felis.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user1} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Nec.</h2>
                    <span>Id maecenas aliquam.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Turpis ac, ipsum eget risus. Enim pharetra nisl justo, convallis. Tellus sed maecenas at egestas viverra convallis quis ipsum tortor. Quis etiam sit tellus id quis sed molestie. Dolor aliquet justo, volutpat sapien ut nulla sed. Condimentum ut neque.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user2} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Kamolov Xasan</h2>
                    <span>Director of Ilm Ziynati</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="buttons">
              <div className="prev">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12"   />
                    <path d="M9 8L5 12"  />
                    <path d="M9 16L5 12"  />
                    </svg>
                </div>
              </div>
              <div className="next">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L19 12"  />
                    <path d="M15 8L19 12"   />
                    <path d="M15 16L19 12"   />
                    </svg>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        </div>
        <div className="tablet">
        <div className="slider-wrapper">
          <Swiper
            className="slider"
            loop={true}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
            spaceBetween={38}
            slidesPerView={2}
            controller={true}
            keyboard={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("")}
            onSwiper={(swiper) => swiper}

          >
            <SwiperSlide className="items">
              <div className="box">
                <p>Sed sed justo, sed ultrices id purus ut eu. Nec justo, hendrerit malesuada adipiscing vel tellus. Ac dui urna massa, sem nibh. Urna commodo, ante leo platea pulvinar risus pulvinar magna pulvinar. Fusce laoreet fames molestie mi nisl sed felis.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user1} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Nec.</h2>
                    <span>Id maecenas aliquam.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Turpis ac, ipsum eget risus. Enim pharetra nisl justo, convallis. Tellus sed maecenas at egestas viverra convallis quis ipsum tortor. Quis etiam sit tellus id quis sed molestie. Dolor aliquet justo, volutpat sapien ut nulla sed. Condimentum ut neque.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user2} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Kamolov Xasan</h2>
                    <span>Director of Ilm Ziynati</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Sed sed justo, sed ultrices id purus ut eu. Nec justo, hendrerit malesuada adipiscing vel tellus. Ac dui urna massa, sem nibh. Urna commodo, ante leo platea pulvinar risus pulvinar magna pulvinar. Fusce laoreet fames molestie mi nisl sed felis.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user1} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Nec.</h2>
                    <span>Id maecenas aliquam.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Turpis ac, ipsum eget risus. Enim pharetra nisl justo, convallis. Tellus sed maecenas at egestas viverra convallis quis ipsum tortor. Quis etiam sit tellus id quis sed molestie. Dolor aliquet justo, volutpat sapien ut nulla sed. Condimentum ut neque.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user2} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Kamolov Xasan</h2>
                    <span>Director of Ilm Ziynati</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="buttons">
              <div className="prev">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12"   />
                    <path d="M9 8L5 12"  />
                    <path d="M9 16L5 12"  />
                    </svg>
                </div>
              </div>
              <div className="next">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L19 12"  />
                    <path d="M15 8L19 12"   />
                    <path d="M15 16L19 12"   />
                    </svg>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        </div>
        <div className="mobile">
        <div className="slider-wrapper">
          <Swiper
            className="slider"
            loop={true}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
            spaceBetween={38}
            slidesPerView={1.2}
            controller={true}
            keyboard={true}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("")}
            onSwiper={(swiper) => swiper}

          >
            <SwiperSlide className="items">
              <div className="box">
                <p>Sed sed justo, sed ultrices id purus ut eu. Nec justo, hendrerit malesuada adipiscing vel tellus. Ac dui urna massa, sem nibh. Urna commodo, ante leo platea pulvinar risus pulvinar magna pulvinar. Fusce laoreet fames molestie mi nisl sed felis.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user1} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Nec.</h2>
                    <span>Id maecenas aliquam.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Turpis ac, ipsum eget risus. Enim pharetra nisl justo, convallis. Tellus sed maecenas at egestas viverra convallis quis ipsum tortor. Quis etiam sit tellus id quis sed molestie. Dolor aliquet justo, volutpat sapien ut nulla sed. Condimentum ut neque.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user2} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Kamolov Xasan</h2>
                    <span>Director of Ilm Ziynati</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Sed sed justo, sed ultrices id purus ut eu. Nec justo, hendrerit malesuada adipiscing vel tellus. Ac dui urna massa, sem nibh. Urna commodo, ante leo platea pulvinar risus pulvinar magna pulvinar. Fusce laoreet fames molestie mi nisl sed felis.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user1} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Nec.</h2>
                    <span>Id maecenas aliquam.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="items">
              <div className="box">
                <p>Turpis ac, ipsum eget risus. Enim pharetra nisl justo, convallis. Tellus sed maecenas at egestas viverra convallis quis ipsum tortor. Quis etiam sit tellus id quis sed molestie. Dolor aliquet justo, volutpat sapien ut nulla sed. Condimentum ut neque.</p>
                <div className="user">
                  <div className="user-img">
                    <Image src={user2} alt="img" />
                  </div>
                  <div className="username">
                    <h2>Kamolov Xasan</h2>
                    <span>Director of Ilm Ziynati</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="buttons">
              <div className="prev">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12"   />
                    <path d="M9 8L5 12"  />
                    <path d="M9 16L5 12"  />
                    </svg>
                </div>
              </div>
              <div className="next">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L19 12"  />
                    <path d="M15 8L19 12"   />
                    <path d="M15 16L19 12"   />
                    </svg>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        </div>
      </div>
      <div className="partnership container" id="start">
        <div className="view-box">
          <h1>Biz bilan hamkorlik</h1>
          <p>Ismingiz va telefon raqamingizni qoldiring Biz siz bilan bog‘lanamiz</p>
          <form>
            <div className="form-wrapper">
              <div className="input-wrapper">
                <label htmlFor="name">Ismingiz<div className="name-input input">
                  <input id="name" type="text" placeholder="Ismingiz" required /></div></label>
              </div>

              <div className="input-wrapper">
                <label htmlFor="number">Telefon raqamingiz
                  <div className="input phone">
                    <span>+998 9</span>
                    <input type="tel" id="number" placeholder='_ ___ __ __' required />
                  </div>
                </label>
              </div>
            </div>
            <button type="submit" >Yuborish</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Views;
