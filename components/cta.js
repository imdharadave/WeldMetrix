import React from "react";
import Container from "./container";
import Contact from "./contact";
const Cta = () => {
  return (
    <div className="bg-black">
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Ready to optimize your welding process?
          </h2>
          {/* <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Get started with WeldMetrix today!
          </p> */}
        </div>
        {/* <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-8 lg:py-4">
            Contct Us
          </a>
        </div> */}
      </div>
    </Container>
    </div>
  );
}

export default Cta;