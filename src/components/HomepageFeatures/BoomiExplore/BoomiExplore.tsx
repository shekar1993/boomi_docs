import React, { useState, useEffect } from "react";
import "./BoomiExplore.scss";
import ExploreCardLayout from "./ExploreCardLayout/ExploreCardLayout";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import homePageControls from "../../Controls";

type CarouselCaretTypes = {
  swiperInstance: SwiperClass;
  responsiveView?: boolean;
};

type CarouselSwiperTypes = {
  swiperInstance: SwiperClass | undefined;
  setSwiperInstance: (SwiperClass) => void;
  setShowPrevCaretBtn: (boolean) => void;
  setShowNextCaretBtn: (boolean) => void;
  responsiveView?: boolean;
};

const CarouselPrevCaret: React.FC<CarouselCaretTypes> = ({
  swiperInstance,
  responsiveView,
}) => {
  return (
    <ex-icon-button
      icon="Left caret"
      flavor="branded"
      type="secondary"
      circular=""
      tooltiptext={responsiveView ? "" : "Previous"}
      size="default"
      onClick={() => {
        if (swiperInstance && swiperInstance.slidePrev) {
          swiperInstance.slidePrev();
        }
      }}
      data-testid="prev-left-caret"
    ></ex-icon-button>
  );
};

const CarouselNextCaret: React.FC<CarouselCaretTypes> = ({
  swiperInstance,
  responsiveView,
}) => {
  return (
    <ex-icon-button
      icon="Right caret"
      flavor="branded"
      type="secondary"
      circular=""
      tooltiptext={responsiveView ? "" : "Next"}
      size="default"
      onClick={() => {
        if (swiperInstance && swiperInstance.slideNext) {
          swiperInstance.slideNext();
        }
      }}
      data-testid="next-right-caret"
    ></ex-icon-button>
  );
};

const CarouselSwiper: React.FC<CarouselSwiperTypes> = ({
  swiperInstance,
  setSwiperInstance,
  setShowPrevCaretBtn,
  setShowNextCaretBtn,
}) => {
  useEffect(() => {
    if (swiperInstance?.isBeginning) {
      setShowPrevCaretBtn(false);
    }
    if (swiperInstance?.isEnd) {
      setShowNextCaretBtn(false);
    }
  }, [swiperInstance]);

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  const updateCaretStatus = () => {
    if (swiperInstance?.isBeginning) {
      setShowPrevCaretBtn(false);
    } else {
      setShowPrevCaretBtn(true);
    }
    if (swiperInstance?.isEnd) {
      setShowNextCaretBtn(false);
    } else {
      setShowNextCaretBtn(true);
    }
  };

  return (
    <Swiper
      onSlideChange={updateCaretStatus}
      onSwiper={handleSwiperInit}
      slidesPerView={3}
      spaceBetween={16}
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      className="carousel"
      breakpoints={{
        997: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        690: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      }}
    >
      {homePageControls?.homePageExploreSection?.exploreCards?.map(
        (cardDetails) => {
          return (
            <SwiperSlide key={cardDetails?.id}>
              <ExploreCardLayout cardDetails={cardDetails} />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

const CarouselSwiperResponsive: React.FC<CarouselSwiperTypes> = ({
  swiperInstance,
  setSwiperInstance,
  setShowPrevCaretBtn,
  setShowNextCaretBtn,
  responsiveView,
}) => {
  useEffect(() => {
    if (swiperInstance?.isBeginning) {
      setShowPrevCaretBtn(false);
    }
    if (swiperInstance?.isEnd) {
      setShowNextCaretBtn(false);
    }
  }, [swiperInstance]);

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  const updateCaretStatus = () => {
    if (swiperInstance?.isBeginning) {
      setShowPrevCaretBtn(false);
    } else {
      setShowPrevCaretBtn(true);
    }
    if (swiperInstance?.isEnd) {
      setShowNextCaretBtn(false);
    } else {
      setShowNextCaretBtn(true);
    }
  };

  return (
    <Swiper
      onSlideChange={updateCaretStatus}
      onSwiper={handleSwiperInit}
      slidesPerView={3}
      spaceBetween={16}
      modules={[Pagination, Navigation]}
      loop={true}
      className="carousel"
      breakpoints={{
        997: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        681: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      }}
    >
      {homePageControls?.homePageExploreSection?.exploreCards?.map(
        (cardDetails) => {
          return (
            <SwiperSlide key={cardDetails?.id}>
              <ExploreCardLayout
                cardDetails={cardDetails}
                responsiveView={responsiveView}
              />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

const BoomiExplore: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
  const [swiperInstanceResponsive, setSwiperInstanceResponsive] =
    useState<SwiperClass>();
  const [showPrevCaretBtn, setShowPrevCaretBtn] = useState(true);
  const [showNextCaretBtn, setShowNextCaretBtn] = useState(true);

  return (
    <div className="boomi-explore-wrapper" data-testid="boomi-explore-wrapper">
      <div className="section-header">
        {homePageControls?.homePageExploreSection?.sectionHeader}
      </div>
      <div className="explore-container">
        <div
          className={`prev-left-side-caret ${
            showPrevCaretBtn ? "show-prev-left-side-caret" : ""
          }`}
        >
          <CarouselPrevCaret swiperInstance={swiperInstance as SwiperClass} />
        </div>
        <div className="carousel-wrapper" data-testid="carousel-wrapper">
          <div className="carousel-desktop-version">
            <CarouselSwiper
              swiperInstance={swiperInstance}
              setSwiperInstance={setSwiperInstance}
              setShowPrevCaretBtn={setShowPrevCaretBtn}
              setShowNextCaretBtn={setShowNextCaretBtn}
            />
          </div>
          <div className="carousel-responsive-version">
            <CarouselSwiperResponsive
              swiperInstance={swiperInstanceResponsive}
              setSwiperInstance={setSwiperInstanceResponsive}
              setShowPrevCaretBtn={setShowPrevCaretBtn}
              setShowNextCaretBtn={setShowNextCaretBtn}
              responsiveView={true}
            />
          </div>
          <div className="prev-next-bottom-buttons">
            <CarouselPrevCaret
              swiperInstance={swiperInstanceResponsive as SwiperClass}
              responsiveView={true}
            />
            <CarouselNextCaret
              swiperInstance={swiperInstanceResponsive as SwiperClass}
              responsiveView={true}
            />
          </div>
        </div>
        <div
          className={`next-right-side-caret ${
            showNextCaretBtn ? "show-next-right-side-caret" : ""
          }`}
        >
          <CarouselNextCaret swiperInstance={swiperInstance as SwiperClass} />
        </div>
      </div>
    </div>
  );
};

export default BoomiExplore;
