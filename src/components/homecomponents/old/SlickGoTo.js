import React, { Component } from "react";
import Slider from "react-slick";

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <div>
        <div className="container">
          <div className="row border  border-dark">
            <div className="col-6 border border-success ">
              <div className="container">
                <div className="row border border-primary ">
                  <div className="col">
                    <Slider
                      ref={(slider) => (this.slider = slider)}
                      {...settings}
                    >
                      <div>
                        <img src="https://quer.vercel.app/static/media/doc3.d97cf74a2cf4c94d2556.png" />
                      </div>
                      <div>
                        <img src="https://quer.vercel.app/static/media/doc2.5db52f5b427f580c9c94.png" />
                      </div>
                      <div>
                        <img src="https://quer.vercel.app/static/media/doc1.41562db3411b5f5ea144.png" />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="row border border-primary customHeight">
                  <div className="col">
                    <input
                      onChange={(e) => this.slider.slickGoTo(e.target.value)}
                      value={this.state.slideIndex}
                      type="range"
                      min={0}
                      max={2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col border border-success customHeight"></div>
          </div>
        </div>
      </div>
    );
  }
}
