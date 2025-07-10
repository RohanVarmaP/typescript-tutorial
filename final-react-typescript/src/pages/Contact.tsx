import React from 'react'

const Contact = () => {
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log("Form submitted");
        // Handle form submission logic here
    }

    return (
        <section className="contact-container">
            {/* Left - About Section */}
            <div className="contact-left">
                <h2>About Us</h2>
                <p>
                    We are a passionate team of developers dedicated to building high-quality web applications.
                    With React and Django, we deliver scalable and user-friendly solutions tailored to modern business needs.
                </p>
                <p>
                    Whether it's e-commerce, dashboards, or portfolio sites, our mission is to create seamless digital experiences.
                </p>
            </div>

            {/* Right - Contact Section */}
            <div className="contact-right">
                <h2>Contact Us</h2>
                <p>If you have any queries or collaboration ideas, feel free to reach out:</p>
                <ul>
                    <li>Email: contact@example.com</li>
                    <li>Phone: +1 234 567 8901</li>
                    <li>Location: Bengaluru, India</li>
                </ul>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows={5} required></textarea>
                    <button type="submit" onClick={handleClick}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
