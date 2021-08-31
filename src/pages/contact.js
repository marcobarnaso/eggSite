import dog from "../images/dog.png";

const Contact = () => {
  return (
    <div className="flex flex-col h-screen  justify-center items-center bg-gray-700">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl uppercase font-black text-yellow-100">
        Contact
      </h1>
      <img src={dog} alt="dog" className="h-40 my-10" />
      <h6 className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl uppercase font-black text-yellow-100">
        Marvin Rojas
      </h6>
    </div>
  );
};

export default Contact;
