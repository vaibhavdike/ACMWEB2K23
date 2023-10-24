import './about.css'
import { Instagram, GitHub, YouTube, Twitter, LinkedIn, Facebook } from '@mui/icons-material'

export default function About() {
  return (
    <div className='aboutContainer'>
      <div className="aboutTop">

        <h1 className="topText">About Us</h1>
      </div>
      <div className="aboutmiddle">
        <div className="middleLeft">
          <div className="section1">
            <h3 className='setion1Headline'>What'S ACM?</h3>
          </div>
          <div className="section2">
            <p className='section2Para'>DYPIEMR ACM Student Chapter was established in 2017 with a view of fostering technical and non-technical qualities in an individual and helping them to shape their destiny.The main aim of this student chapter is to ensure every individual grow in technical as wells as non-technical achive success in there careers.</p>
          </div>
          <div className="section3">
            <div className="section3Items">
              <Instagram style={{ marginRight: "20px" }} />
              <GitHub style={{ marginRight: "20px" }} />
              <Facebook style={{ marginRight: "20px" }} />
              <Twitter style={{ marginRight: "20px" }} />
              <LinkedIn style={{ marginRight: "20px" }} />
              <YouTube style={{ marginRight: "20px" }} />
            </div>

          </div>
          <div className="section4"></div>
          <button type="button" id='Button' class="btn btn-light" style={{ backgroundColor: "#c7cdd2", marginLeft: "15px", marginTop: "8px" }}>Learn More..</button>
        </div>
        <div className="middleRight">

          <div className="middlescrollbar">


            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/Assets1/Images/sliderImg.jpeg" className="d-block w-100" alt="..." style={{ height: "330px", objectFit: "cover" }} />
                </div>
                <div className="carousel-item">
                  <img src="/Assets1/Images/sliderImg.jpeg" className="d-block w-100" alt="..." style={{ height: "330px", objectFit: "cover" }} />
                </div>
                <div className="carousel-item">
                  <img src="/Assets1/Images/sliderImg.jpeg" className="d-block w-100" alt="..." style={{ height: "330px", objectFit: "cover" }} />
                </div>
              </div>


            </div>
          </div>


        </div>


      </div>
      <div className="aboutBottom">


      </div>


    </div>
  )
}

