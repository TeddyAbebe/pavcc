import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function Banner() {
  return ( 
    <section className="main-slider main-slider-one" >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={false}
        effect="fade"
        pagination={{
          el: '#main-slider-pagination',
          type: 'bullets', 
          clickable: true,
        }}
        navigation={{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        {/*Start Single Swiper Slide*/}
        <SwiperSlide>
          <div
            className="image-layer"
            style={{
              backgroundImage:
                'url(/assets/conbiz/images/backgrounds/main-slider-1-1.png)',
            }}
          />
          <div className="image-layer-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-slider__content text-center">
                  <div className="shape1">
                    <img
                      src="/assets/conbiz/images/shapes/main-slider-one-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4> Pan Africa Venture Capital Consortium </h4>
                      <span className="right" />
                    </div>
                    <h2 className="section-title__title">
                    is a dynamic investment platform dedicated to fostering innovation and  <br />
                    entrepreneurship across the African continent
                    </h2>
                  </div>
                  <div className="main-slider__button-box">
                    <div className="btns-box">
                      <a href="#" className="thm-btn">
                        Get Started
                      </a>
                    </div>
                    <div className="banner-video-gallery">
                      <div className="video-box">
                        <a
                          className="video-popup"
                          title="Video Gallery"
                          href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                          style={{ visibility: 'visible' }}
                        >
                          <i className="fa fa-play" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="title-box">
                        <h5>Watch Video</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Swiper Slide*/}

        {/*Start Single Swiper Slide*/}
        <SwiperSlide>
          <div
            className="image-layer"
            style={{
              backgroundImage:
                'url(/assets/conbiz/images/backgrounds/main-slider-1-2.png)',
            }}
          />
          <div className="image-layer-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-slider__content text-center">
                  <div className="shape1">
                    <img
                      src="/assets/conbiz/images/shapes/main-slider-one-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>PA Entrepreneurship Development Center </h4>
                      <span className="right" />
                    </div>
                    <h2 className="section-title__title">
                    The PAEDC offers a comprehensive suite of services designed to support  <br />
                    entrepreneurs at various stages of their journey
                    </h2>
                  </div>
                  <div className="main-slider__button-box">
                    <div className="btns-box">
                      <a href="#" className="thm-btn">
                       Get Sterted
                      </a>
                    </div>
                    <div className="banner-video-gallery">
                      <div className="video-box">
                        <a
                          className="video-popup"
                          title="Video Gallery"
                          href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                          style={{ visibility: 'visible' }}
                        >
                          <i className="fa fa-play" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="title-box">
                        <h5>Watch Video</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Swiper Slide*/}

        {/*Start Single Swiper Slide*/}
        <SwiperSlide>
          <div
            className="image-layer"
            style={{
              backgroundImage:
                'url(/assets/conbiz/images/backgrounds/main-slider-1-3.png)',
            }}
          />
          <div className="image-layer-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-slider__content text-center">
                  <div className="shape1">
                    <img
                      src="/assets/conbiz/images/shapes/main-slider-one-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>The Pan Africa Investment Exchange </h4>
                      <span className="right" />
                    </div>
                    <h2 className="section-title__title">
                    is a premier membership platform designed to connect entrepreneurs with investors, fostering a vibrant ecosystem for  <br />
                    business growth across the continent
                    </h2>
                  </div>
                  <div className="main-slider__button-box">
                    <div className="btns-box">
                      <a href="#" className="thm-btn">
                      Get Started
                      </a>
                    </div>
                    <div className="banner-video-gallery">
                      <div className="video-box">
                        <a
                          className="video-popup"
                          title="Video Gallery"
                          href="https://www.youtube.com/watch?v=FgA6MwKmmc0"
                          style={{ visibility: 'visible' }}
                        >
                          <i className="fa fa-play" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="title-box">
                        <h5>Watch Video</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Swiper Slide*/}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-pagination" id="main-slider-pagination" />
      <div className="main-slider__nav">
        <div
          className="swiper-button-prev"
          id="main-slider__swiper-button-next"
        >
          <span className="icon-left" />
        </div>
        <div
          className="swiper-button-next"
          id="main-slider__swiper-button-prev"
        >
          <span className="icon-right" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
