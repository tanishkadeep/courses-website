export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-32 py-6 font-medium text-gray-700 bg-gray-300">
      <div>
        Made with <span className="text-red-500 px-1.5 text-xl">❤️</span> by
      </div>
      <a href="https://github.com/tanishkadeep">
        <span className="hover:underline pl-2 font-extrabold">
          Tanishka Deep
        </span>
      </a>
    </div>
  );
};
