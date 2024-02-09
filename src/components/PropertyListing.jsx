function PropertyListing() {
  return (
    <section className="flex flex-col space-y-10 mt-10 p-5 items-center justify-center">
      <p className="font-bold text-center text-2xl lg:text-3xl uppercase">
        Step by Step Guide for Free Property Listing
      </p>

      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-center lg:space-x-10">
        <ListGuide
          image="/assets/listimg1.png"
          title="Step 1 : Add proper detail"
          description="Start filling the form with a few basic details like type of property, Area, Location, etc."
        />
        <ListGuide
          image="/assets/listimg2.png"
          title="Step 2 : Add Images & Videos"
          description="Upload your property images or videos either from your Mobile or Desktop."
        />
        <ListGuide
          image="/assets/listimage3.png"
          title="Step 3 : Add Pricing"
          description="Upload the expected price of your property, and now it is ready to post.."
        />
      </div>
    </section>
  );
}

function ListGuide({ title, description, image }) {
  return (
    <div className="flex flex-col items-center gap-5 w-full lg:w-1/4 text-center">
      <img src={image} alt={title} />
      <p className="font-bold text-lg">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default PropertyListing;
