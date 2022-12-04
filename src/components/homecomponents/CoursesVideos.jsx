import React from 'react';
import { BsFillStarFill} from 'react-icons/bs';
import course1 from '../../assets/svgs/course1.svg';
import course2 from '../../assets/svgs/course2.svg';
import playBtn from '../../assets/svgs/playBtn.svg';
import Slider from 'react-slick';

const CoursesVideos = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };
  return (

    <div className="container-fluid courseSection pb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="font-bold ml-10 mt-5 courseSectionTitle">Sex-Ed Courses For Kids</h1>
          </div>
          <div className="col-12 d-none d-md-block ml-10">
            <p className="CourseSubTitle">
              First time in India in animated story format
            </p>
          </div>
          <div className="col-12 d-block d-md-none ms-4">
            <p className="CourseSubTitle">
              First time in India in animated <br /> story format
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col CourseContainer d-none d-md-block">
            <div className="card rounded-0">
              <img src={course1} className="CourseImage" />
              <img src={playBtn} className="playBtn" />
              <div className="card-body">
                <div className="rating d-flex">
                  {/* <img src={star} /> */}
                  <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                </div>
                <p className="CourseDataTitle text-wrap">
                  Quit Looking at Pornography Break..
                </p>
                <p className="CourseParagraph">
                  Oriental Sexual Knowledge: The importance of Love and its
                  interrelati..
                </p>
              </div>
              <div className="mx-3 d-flex justify-content-between authorBox">
                <p className="my-auto text-gray-600">By Henry King</p>
                <button className="courseReadBtn">124 read this</button>
              </div>
              <span className="mx-3">
                <hr />
              </span>
              <div className="mx-3 d-flex justify-content-between ">
                <div className="d-flex">
                  <p className="price">₹ 1099</p>
                  <p className="strikedPrice">₹ 1400</p>
                </div>
                <div className="px-3 d-flex">
                  <p className="buyNowText underline">Buy Now </p>
                  <div>
                    <p className="buyNowImageArrow">{'>'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col CourseContainer d-none d-md-block">
            <div className="card rounded-0">
              <img src={course2} className="CourseImage" />
              <img src={playBtn} className="playBtn" />
              <div className="card-body">
                <div className="rating d-flex">
                  {/* <img src={star} /> */}
                  <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                </div>
                <p className="CourseDataTitle text-wrap">
                  Quit Looking at Pornography Break..
                </p>
                <p className="CourseParagraph">
                  Oriental Sexual Knowledge: The importance of Love and its
                  interrelati..
                </p>
              </div>
              <div className="mx-3 d-flex justify-content-between authorBox">
                <p className="my-auto text-gray-600">By Henry King</p>
                <button className="courseReadBtn">124 read this</button>
              </div>
              <span className="mx-3">
                <hr />
              </span>
              <div className="mx-3 d-flex justify-content-between ">
                <div className="d-flex">
                  <p className="price">₹ 1099</p>
                  <p className="strikedPrice">₹ 1400</p>
                </div>
                <div className="px-3 d-flex">
                  <p className="buyNowText underline">Buy Now </p>
                  <div>
                    <p className="buyNowImageArrow">{'>'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Slider */}

        <div className="row d-block d-md-none">
          <Slider {...settings}>
            <div className="col CourseContainer">
              <div className="card rounded-0">
                <img src={course1} className="CourseImage" />
                <img src={playBtn} className="playBtn" />
                <div className="card-body">
                  <div className="rating d-flex">
                    {/* <img src={star} /> */}
                    <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                  </div>
                  <p className="CourseDataTitle text-wrap">
                    Quit Looking at Pornography Break..
                  </p>
                  <p className="CourseParagraph">
                    Oriental Sexual Knowledge: The importance of Love and its
                    interrelati..
                  </p>
                </div>
                <div className="mx-3 d-flex justify-content-between authorBox">
                  <p className="my-auto courseAuthor">By Henry King</p>
                  <button className="courseReadBtn">124 read this</button>
                </div>
                <span className="mx-3">
                  <hr />
                </span>
                <div className="mx-3 d-flex justify-content-between ">
                  <div className="d-flex">
                    <p className="price">₹ 1099</p>
                    <p className="strikedPrice">₹ 1400</p>
                  </div>
                  <div className="px-3 d-flex">
                    <p className="buyNowText">Buy Now </p>
                    <div>
                      <p className="buyNowImageArrow">{'>'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col CourseContainer">
              <div className="card rounded-0">
                <img src={course2} className="CourseImage" />
                <img src={playBtn} className="playBtn" />
                <div className="card-body">
                  <div className="rating d-flex">
                    {/* <img src={star} /> */}
                    <span className="mx-1"><BsFillStarFill color="#FEB422" className="imgStar" /> 4.2</span>
                  </div>
                  <p className="CourseDataTitle text-wrap">
                    Quit Looking at Pornography Break..
                  </p>
                  <p className="CourseParagraph">
                    Oriental Sexual Knowledge: The importance of Love and its
                    interrelati..
                  </p>
                </div>
                <div className="mx-3 d-flex justify-content-between authorBox">
                  <p className="my-auto courseAuthor">By Henry King</p>
                  <button className="courseReadBtn">124 read this</button>
                </div>
                <span className="mx-3">
                  <hr />
                </span>
                <div className="mx-3 d-flex justify-content-between ">
                  <div className="d-flex">
                    <p className="price">₹ 1099</p>
                    <p className="strikedPrice">₹ 1400</p>
                  </div>
                  <div className="px-3 d-flex">
                    <p className="buyNowText">Buy Now </p>
                    <div>
                      <p className="buyNowImageArrow">{'>'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CoursesVideos;

// <div className="my-3 col col-md-5">
//             <div className="card">
//             <img src="https://quer.vercel.app/static/media/prnch01.0580e4f9aa3e55aa65d0.png" class="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <div className="d-flex"><span><BsFillStarFill color="#FEB422"/></span><p className="p-1">4.2</p></div>
//                 <div className="card-title text-truncate "><h3 className="fw-bolder">How to Quit Looking at Pornography and Break..</h3></div>
//             <p>Oriental Sexual Knowledge: The importance of Love and its interrelati..</p>
//             <div className="d-flex justify-content-between">
//                 <p>By Henry King</p>
//                 <p>124 read this</p>
//             </div>
//             <hr/>
//             <div className="d-flex justify-content-between">
//                 <div className="d-flex"><h3><BiRupee/>1099</h3><span className="text-sm text-decoration-line-through">1400</span></div>
//                 <a href="#"><p>Buy Now <span>{">"}</span></p></a>
//             </div>
//             </div>
//             </div>
//           </div>
