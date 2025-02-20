// About.jsx
import React from "react";

const About = () => {
  return (
    // Main container with full width/height and background
    <div name="about" id="about"  className="w-full min-h-screen  bg-[#dde7e5] text-gray-800">
      {/* Content container with cyan background */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Title section using grid */}
        <div className="py-12 px-6 rounded-md flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-green-300">
                Veterinary Center
              </p>
            </div>
            <div></div>
          </div>
          {/* Content section with responsive grid */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-left text-2xl font-bold">
              <p>
                "Where your pets are treated like family! At Furry Friends Vet,
                we provide compassionate care and expert services to keep your
                furry friends happy, healthy, and thriving. 🐾"
              </p>
              <div className="aboutImg flex justify-center items-center mt-4">
                <img src="public/team.png" alt="Team" className="mx-auto ml-4" />
              </div>
            </div>
            <div>
              <p>
                At Furry Friends Vet, we understand that your pets are more than
                just animals—they’re part of your family. That’s why we’re
                committed to providing the highest standard of care to keep them
                healthy, happy, and thriving.
              </p>
              <p className="mt-3">
                Our team of experienced veterinarians and caring staff are
                passionate about animals and dedicated to their well-being.
                Whether it’s a routine check-up, a necessary vaccination, or
                specialized care for a medical condition, we’re here to support
                you every step of the way.
              </p>
              <ul className="list-disc mt-4 ml-5 space-y-2">
                <li>Comprehensive health examinations</li>
                <li>
                  Preventive care, including vaccinations and parasite control
                </li>
                <li>Emergency and critical care services</li>
                <li>Surgical procedures and dental care</li>
                <li>Nutritional counseling and wellness plans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
