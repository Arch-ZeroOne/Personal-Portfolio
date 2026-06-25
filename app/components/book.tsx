import React from "react";
import { Space_Grotesk } from "next/font/google";
const space_grotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
});
const Book = () => {
  return (
    <div className={space_grotesk.className}>
      <section className="flex items-center  gap-6 w-[80%] mr-auto ml-auto mt-15">
        <div className="flex flex-col items-center">
          <div className="text-center lg:text-left justify-center items-center">
            <h1 className="text-sm sm:text-2xl font-bold text-center">
              Got A Project in Mind?
            </h1>
            <p className="py-6 text-center text-sm sm:text-lg">
              Book a consultation for your web development project. Complete
              this form with your project details, goals, and requirements, and
              we'll get in touch to discuss the best solution for your website.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body flex flex-col items-center w-full">
              <fieldset className="fieldset w-full flex  flex-col items-center">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Project Type</label>
                <select defaultValue="Pick a color" className="select">
                  <option disabled={true}>Project Type</option>
                  <option>Landing Page</option>
                  <option>Fullstack Application</option>
                  <option>IOT and Web Project</option>
                  <option>Console Based Project</option>
                </select>
                <label className="label">Appointment Date</label>
                <input type="datetime-local" className="input" />

                <label className="label">Message(Optional)</label>
                <textarea className="textarea" placeholder="Message"></textarea>

                <button className="btn btn-neutral mt-4 self-center">
                  Book Appointment
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
