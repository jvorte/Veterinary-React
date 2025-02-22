import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full min-h-screen text-gray-800 mt-20">
      {/* About Section */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className="flex flex-col justify-center items-center w-full h-full py-12 px-6 bg-gray-50">
          <p className='text-3xl font-bold inline border-b-4 text-gray-800 mb-3 border-slate-500'>About us</p>
          <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="sm:text-left text-3xl font-bold">
              <p className="text-slate-500 mb-4">
                "Where your pets are treated like family! At Furry Friends Vet, we
                provide compassionate care and expert services to keep your furry
                friends happy, healthy, and thriving."
              </p>
              <div className="aboutImg flex justify-center items-center mt-4">
                <img
                  src="/7.jpg"
                  alt="Team"
                  className="w-full max-w-sm rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="text-xl px-4">
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
              <ul className="list-disc mt-4 ml-5 text-1xl space-y-2">
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

      {/* Services Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">Experienced Vets</h3>
            <p>Our team is here for all your pet's needs.</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">Modern Facilities</h3>
            <p>We provide state-of-the-art care for your furry friends.</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-700 mb-2">Emergency Care</h3>
            <p>We're here when you need us most.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
