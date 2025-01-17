import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return <><div className="home" >
    <main>
      <h1>Tech World!</h1>
      <p>Solution to all your problems.</p>
    </main>

  </div>
  <div className="home2">
    <img src={vg} alt = "Graphics" />

    <div>
      <p>
      We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
      </p>
    </div>

  </div>

  <div className="home3" id = "about">
    <div>
      <h1>Who are we? </h1>
      <p>
        We provide solutions to all kind of software-related problems.
        Also we help people to create websites,as we work as web developer.
        We create websites in javascript for both front-end and back-end.
      </p>
    </div>
  </div>

  <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
  </>
};

export default Home;