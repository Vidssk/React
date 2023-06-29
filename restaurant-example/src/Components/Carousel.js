import React from 'react';
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  handleNextSlide = () => {
    const { slides } = this.props;
    const {currentSlide } = this.state;
    const totalSlides = slides.length;
    const nextSlide = (currentSlide + 1) % totalSlides;
    this.setState({currentSlide: nextSlide});
  };

  handlePreviousSlide = () => {
    const {slides} = this.props;
    const {currentSlide} = this.state;
    const totalSlides = slides.length;
    const previousSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    this.setState({ currentSlide: previousSlide});
  };

  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;
    
    return (
      <div className="carousel">
        <button onClick={this.handlePreviousSlide}>Previous</button>
        <div className="slide-container">
          {/* Render the current slide */}
          <img src={slides[currentSlide].imageUrl} alt={slides[currentSlide].caption} />
          <p>{slides[currentSlide].caption}</p>
        </div>
        <button onClick={this.handleNextSlide}>Next</button>
      </div>
    );
  }
}

export default Carousel;
