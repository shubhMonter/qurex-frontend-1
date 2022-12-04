import React from "react";
import Slider from "react-slick";

const LearnMore = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h1>Learn more about your condition</h1>
        </div>
        <div className="col text-end py-2">
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill"
          >
            View All
          </button>
        </div>
      </div>

      <Slider {...settings} className="my-5">
        <div className=" container">
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <img
                  className="mx-4 ms-5"
                  src="https://s3-alpha-sig.figma.com/img/8fb8/3d5f/7dfb76bebbf30f0ce5a6db1f610bfa63?Expires=1668384000&Signature=ZZp6v2FkP3onBYppTW4PmiaH0MmS~06-dTgKIHM1kJCD5MPZSn-TrlvF7On8D27UlRvouV3-GGptSO7RDm4FaHVBiuedMUPVqbUnmiWSdc-oYwzOIUKz5kXXdEP76VS8nHUhCDehuD59T1iCNZPJ439I6MlxZjpBLKsoXJK4M~IR8H2QCIefVeXs85qwu76HmlZopQQ66GOUMk97y77nqAF1ntKdLzm~1b2PEo0PSstAdud8C9BAgG-zb7zgO9Ct-EAwlouVKCF6Jbfv~0fRdUUCa6rZ7TcmgggJR22KfMDSFAKacyUdbsubw~UPmG5wMTAeL7rUo3gBHhtN3Rx0xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  width={"80px"}
                />
                <h3 className="px-1 ms-3  px-lg-5">Causes</h3>
                <p className="px-1  ms-3 px-lg-5 mb-5">
                  Health conditions such as peripheral artery disease,
                  atherosclerosis, diabetes, hypertension, obesity, etc, can
                  cause reduced blood flow to the penis due to artery narrowing.
                  Furthermore, injury to the spinal cord or radiation therapy
                  can disrupt or harm nerves present in the penis.{" "}
                </p>
                <div className="d-flex">
                  <p className="px-1 px-lg-5 mb-4 ms-3">
                    Learn More <span>{">"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" container">
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <img
                  className="mx-4 ms-5"
                  src="https://s3-alpha-sig.figma.com/img/d439/8bef/4bedf794dcd4d60a055c4216e9d4edce?Expires=1668384000&Signature=Z77riU1mLMIts89BIzG1QvKKUwl2WmTTA0xSbmNM88fmjKfnjSZDGqsi5yTRN-MCjom9FyYJ-bfvbNPWwuQ3LOyUd1ApKoiii7rfGfvbxWp0GaFuly6nl2K1ODQ7qbocuKxe2TmKNA9RotruJu6akA3xZgnvneCV2ayIulboHPcx4i8LhX6Nn2wR5lGPMtRmwcUiX7Tt37SyCstoOEFX8zhX6~gn3IFXRAMc0zC-PXmhDZjuLt5swr30mtMkr0JWYXpJgwn0SBZmqlyvQQUURKFrCEL3ou5ZYjVMSq9Fqucax3dUp8neIgXm1xo7R0lAN97ZVPRvqS8gyF9fUiaEOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  width={"80px"}
                />
                <h3 className="px-1 ms-3 px-lg-5">Symptoms</h3>
                <div className="fs-6 ms-3 px-1 px-lg-5 fw-light">
                  <p>The symptoms of erectile dysfunction include:</p>
                  <ul>
                    <li>Difficulty in getting an erection</li>
                    <li>Difficulty in maintaining an erection</li>
                    <li>
                      Getting a partial erection, not firm/hard enough for
                      vaginal penetration
                    </li>
                    <li>Reduced libido or sexual desire</li>
                    
                  </ul>
                </div>
                <div className="d-flex">
                  <p className="px-1 px-lg-5 mb-5 ms-3">
                    Learn More <span>{">"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className=" container">
          <div className="row">
            <div className="col-12 ">
              <div className="card">
                <img
                  className="mx-4 ms-5"
                  src="https://s3-alpha-sig.figma.com/img/8fb8/3d5f/7dfb76bebbf30f0ce5a6db1f610bfa63?Expires=1668384000&Signature=ZZp6v2FkP3onBYppTW4PmiaH0MmS~06-dTgKIHM1kJCD5MPZSn-TrlvF7On8D27UlRvouV3-GGptSO7RDm4FaHVBiuedMUPVqbUnmiWSdc-oYwzOIUKz5kXXdEP76VS8nHUhCDehuD59T1iCNZPJ439I6MlxZjpBLKsoXJK4M~IR8H2QCIefVeXs85qwu76HmlZopQQ66GOUMk97y77nqAF1ntKdLzm~1b2PEo0PSstAdud8C9BAgG-zb7zgO9Ct-EAwlouVKCF6Jbfv~0fRdUUCa6rZ7TcmgggJR22KfMDSFAKacyUdbsubw~UPmG5wMTAeL7rUo3gBHhtN3Rx0xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  width={"80px"}
                />
                <h3 className="px-1 ms-3 px-lg-5">Causes</h3>
                <p className="px-1 ms-3 px-lg-5 mb-5">
                  Health conditions such as peripheral artery disease,
                  atherosclerosis, diabetes, hypertension, obesity, etc, can
                  cause reduced blood flow to the penis due to artery narrowing.
                  Furthermore, injury to the spinal cord or radiation therapy
                  can disrupt or harm nerves present in the penis.{" "}
                </p>
                <div className="d-flex">
                  <p className="px-1 px-lg-5 mb-5 ms-3">
                    Learn More <span>{">"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default LearnMore;
