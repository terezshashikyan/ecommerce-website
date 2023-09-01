import "./style.css";
import person from "./img/img1.png";
import Typography from "@mui/material/Typography";

function About() {
  
  return (
    <section>
      <Typography variant="h1">About Us</Typography>
      <div className="container">
        <div className="about-text">
          <p>
            Welcome to Toy Land, a treasure trove of children’s toys, games, and
            gifts. Our aim was to create a magical space for kids (and kids at
            heart), where they could touch, play and interact with the toys they
            see. To create an experience, not just a shopping trip. To supply
            our valued customer with toys of the highest quality and value for
            money.
          </p>
          <Typography variant="h2">Safe, High Quality Products</Typography>
          <p>
            Safety and quality are top priorities for Toyland. Parents and
            customers can find safe and environmentally friendly toys in our
            stores. All products are made to the highest quality standards and
            have passed all required safety tests.
          </p>

          <h2>Accelerated Digital Transformation</h2>
          <p>
            Toyland launched its Tmall Store, adding to a diverse range of
            online platforms for customers to access its wide range of products
            Thanks to an extensive online reach, hundreds of millions of
            Mainland customers can access one of the greatest ranges of toys, be
            confident of product authenticity and rest assured thanks to the toy
            safety guarantee found at Toyland.
          </p>
          <h2>Get in Touch</h2>
          <p>
          We invite you to explore our online store, where you'll find a carefully curated collection of toys that inspire wonder and joy. Connect with us on social media to stay updated on our latest arrivals, special promotions, and community happenings.
          </p>
        </div>
        <div className="about-img">
          <img src={person} alt="image" className="personImg" />
        </div>
      </div>
      </section>

  );
}

export default About;

//About