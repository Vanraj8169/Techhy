import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
      <main>
        <h1>Techyy</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>
          We are your one and only solution to the tech problems  you face every day. we are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
    </div>


    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>I 'm tech-savvy  who enjoys solving problems related to technology. I am knowledgeable and skilled in this field, and are able to apply expertise to a variety of technical issues. I am an asset to any team, and are able to bring your unique perspective and skills to the table in order to find creative solutions to complex problems. My passion for technology drives you to stay up-to-date on the latest developments and trends, and I am always looking for ways to expand my knowledge and expertise. Overall, I am a valuable resource for anyone in need of help with technical issues, and are able to provide reliable and effective support.</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>

        <article>
          <div
            style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
          </div>

          <div
            style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
          </div>
          
          <div
            style={{
              animationDelay: "0.7s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
          </div>

          <div
            style={{
              animationDelay: "0.9s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home