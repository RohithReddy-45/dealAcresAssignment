import Button from "./Button";

function About() {
  return (
    <>
      <div className="relative mt-16">
        <div className="relative h-80 sm:h-96 lg:h-96 w-full">
          <img
            src="/assets/about.png"
            alt="room"
            className="h-full w-full object-cover bg-center bg-no-repeat"
          />
        </div>

        <div className="absolute bg-white border-4 border-blue-300 p-5 space-y-10 rounded-md text-center w-full max-w-screen-xl drop-shadow-md top-2/3 sm:top-60 lg:top-1/2 transform -translate-x-1/2 left-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Choose Deal Acres?
          </h2>
          <p className="text-start text-lg lg:text-sm">
            Deal Acres is the only place where you can sell your property easily
            and quickly. If you are looking for one of the top free property
            listing sites in India, Deal Acres came first. When it comes to the
            free property listing, it becomes difficult to pick one that will
            actually help you rent or sell your residential or commercial
            property, then Deal Acres is one of the friendliest and
            fastest-growing real estate websites in India today, with some of
            the simple and easy facilities for uploading your property.
          </p>

          <p className="text-start text-lg lg:text-sm">
            Property listing is the best way to reach out to potential customers
            who need to buy a home or home for rent. Homebuyers or tenants can
            shortlist the best among the pool of the real estate listings.
          </p>

          <p className="text-start text-lg lg:text-sm">
            So, a builder, an owner, or an agent does not need to spend hours
            selling the house online or trying a hand at the online rental.
            Listing property is a process of a few minutes and you are done.
            Deal Acres has traffic and thousands of prospective homebuyers and
            tenants who visit the website every day. Sell your property quickly
            with Deal Acres.
          </p>

          <Button>List Your Property for FREE NOW!</Button>
        </div>
      </div>
      <div className="p-6 gap-7 flex flex-col mt-[100%] sm:mt-[80%] md:mt-[60%] lg:mt-[30%] lg:px-32 px-10 container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Everything you need to know about Deal Acres FREE Property Listing...
        </h2>
        <div className="space-y-3">
          <p className="font-semibold text-xl">
            What is Free Property Listing?
          </p>
          <p>
            It is a process where a builder, as an owner or agent, can list
            their property for free on this real estate portal. Through this,
            you can sell or rent your property effectively and efficiently. It
            is the perfect way to reach the audience who want to rent their home
            or buy their dream home. By doing property listing you save your
            time for selling or renting it.
          </p>

          <p className="font-semibold text-xl">Advantages of Free Listing</p>
          <ul className="list-disc list-inside pl-5">
            <li>Provide free online exposure to more buyers.</li>
            <li>A platform for selling and buying real estate.</li>
            <li>Interact with and engage potential customers in your area.</li>
            <li>Negotiate and expedite the purchase.</li>
            <li>
              You can save money by working as your own real estate agent.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
