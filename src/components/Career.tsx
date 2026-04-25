import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Market Level Project</h4>
                <h5>
                  <a
                    href="https://ficokart.com/"
                    target="_blank"
                    data-cursor="disable"
                  >
                    Ficokart Shopping App
                  </a>
                </h5>
              </div>
              <h3>
                Live
                <span className="live-dot"></span>
              </h3>
            </div>
            <p>
              I have also developed an application named Focokart, which is an
              e-commerce medical shopping app designed for easy and efficient
              online purchasing of healthcare products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing Services</h4>
                <h5>
                  <a
                    href="https://wa.me/9520457366"
                    target="_blank"
                    data-cursor="disable"
                  >
                    Whatsapp: 9520457366
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I also do freelancing work in website and app development. If you
              want to hire me for your project, feel free to contact me directly.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Our Company</h4>
                <h5>
                  <a
                    href="https://www.cybershoora.com/"
                    target="_blank"
                    data-cursor="disable"
                  >
                    Cybershoora
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              We also have a company named CyberShoora that provides complete IT
              solutions, including website development, app development,
              designing, and UI/UX.
              <br />
              <br />
              We handle everything from start to finish to deliver high-quality
              digital products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
