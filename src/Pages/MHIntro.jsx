import me from "../assets/seber.png";

const MHIntro = () => {
  return (
    <div className="flex justify-around">
      {/* text */}
      <div className="pt-20">
        <h1 className="text-5xl font-extrabold">
          <span className="text-gray-500">Hi I'am</span> <br />
          <span className="text-purple-900">Mahamudul Hasan Seber</span>
        </h1>
        <h1 className="pt-6 text-3xl font-bold">
          <span className="text-purple-500">Frontend Developer</span> || Web
          Enthusiast
        </h1>
        <p className="max-w-md pt-4 text-lg text-gray-600">
          I love turning ideas into beautiful, user-friendly websites.
          Passionate about clean code, responsive design, and bringing
          creativity to every project I build.
        </p>
      </div>
      {/* img */}
      <div>
        <img
          src={me}
          class="animate-gradient-x rounded-full border-4 border-dashed border-purple-950 shadow-[0_0_25px_5px_rgba(128,0,128,0.5)] bg-gradient-to-br from-purple-800 via-black to-purple-500"
        />
      </div>
    </div>
  );
};

export default MHIntro;
