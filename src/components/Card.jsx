function Card({ title, description, image, color }) {
  const colorClasses = {
    gold: {
      bg: "bg-gold",
      text: "text-gold",
      btnHover: "hover:bg-gold hover:text-white hover:border-white",
    },
    cyan: {
      bg: "bg-cyan",
      text: "text-cyan",
      btnHover: "hover:bg-cyan hover:text-white hover:border-white",
    },
    green: {
      bg: "bg-green",
      text: "text-green",
      btnHover: "hover:bg-green hover:text-white hover:border-white",
    },
  };

  const bgClass = colorClasses[color] || {
    bg: "bg-bg-gray",
    text: "text-bg-gray",
    btnHover: "hover:bg-bg-gray hover:text-white hover:border-white",
  };

  return (
    <div
      className={`${bgClass.bg} p-8 md:p-12 flex flex-col justify-between first:rounded-t-lg last:rounded-b-lg md:h-full md:first:rounded-l-lg md:first:rounded-r-none md:last:rounded-r-lg md:last:rounded-l-none
`}
    >
      <div>
        <img src={image} alt={title} className="mb-6 h-12" />
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase mb-4">
          {title}
        </h2>
        <p className="max-w-[80%] text-transparent-white leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <button
        className={`bg-bg-gray ${bgClass.text} font-semibold py-3 px-8 rounded-full border-2 border-transparent ${bgClass.btnHover} transition-colors duration-300 w-fit capitalize text-sm`}
      >
        Learn More
      </button>
    </div>
  );
}

export default Card;
