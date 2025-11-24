const Card = ({ image, heading, description, content }) => {
  return (
    <div className="p-3 bg-gray-200 rounded-2xl">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text-wrap">
        <p className="text-4xl font-bold">{heading}</p>
        <p className="break-all font-semibold">{description}</p>
      </div>
      <footer className="mt-2">
        <a
          href={content}
          className="bg-indigo-600 hover:bg-white p-2 rounded-2xl ">
          Read More..
        </a>
      </footer>
    </div>
  );
};

export default Card;
