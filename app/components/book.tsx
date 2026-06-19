import React from "react";

const Book = () => {
  return (
    <section className="flex items-center  gap-6 w-[50%] mr-auto ml-auto mt-15">
      <div className="text-center lg:text-left justify-center items-center">
        <h1 className="text-3xl font-bold">Got A Project in Mind?</h1>
        <p className="py-6">
          Book a consultation for your web development project. Complete this
          form with your project details, goals, and requirements, and we'll get
          in touch to discuss the best solution for your website.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
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

            <button className="btn btn-neutral mt-4">Book Appointment</button>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default Book;
