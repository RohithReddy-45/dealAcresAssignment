function Tags({ tags, isSelected, onClick }) {
  return (
    <div className="flex flex-wrap gap-3 py-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`text-center cursor-pointer text-gray-600 bg-white border-4 ${
            isSelected == tag ? "border-blue-500" : "border-blue-100"
          } rounded-lg py-[0.5px] px-8`}
          onClick={() => onClick(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
