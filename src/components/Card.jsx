function Card({ title, description, imageSrc, date }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-80 md:w-96 lg:w-80">
      <img
        src={imageSrc}
        alt="News"
        className="w-full h-48 sm:h-60 object-cover"
      />
      <div className="px-4 py-3 sm:py-4">
        <h2 className="text-xl sm:text-2xl line-clamp-2 font-semibold mb-2">
          {title}
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
        <div className="flex justify-between items-center mt-3 sm:mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-xs sm:text-sm">{date}</span>
          </div>
          <div>
            <img
              src="/assets/share.svg"
              alt="share"
              className="size-6 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
