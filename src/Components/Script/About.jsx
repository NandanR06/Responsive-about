import React from 'react'
import '../Style/About.css'
import image from '../../assets/abtuss.jpeg'

export default function About() {
    return (
        <div className='about'>
            <img src={image} alt="about" />
            <div className="about-info">
                <h2>About Us</h2>
                <p>Your go-to destination for affordable and high-quality web development solutions.
                    Our dedicated team of skilled developers and designers specializes in crafting sleek,
                    dynamic websites tailored to your unique needs.<br/> From responsive design to seamless functionality,
                    we ensure that your website not only looks great but also drives tangible results for your business.<br/>
                    Additionally, we're committed to fostering talent and innovation through virtual internships, providing
                    aspiring developers and designers with hands-on experience and mentorship. Join us at WebCook and let's
                    cook up something amazing for your online presence.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}
