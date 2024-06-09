export const Home = () => {
  return (
    <div className="mx-40 my-8">
      <div className="flex justify-between items-center px-5">
        <div className="text-5xl font-extrabold">All Courses</div>
        <div className="flex items-center rounded-md bg-gray-100 px-4 py-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="#808080"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="pl-4">
            <input
              type="text"
              className="bg-gray-100 w-80 outline-none"
              placeholder="Search courses "
            />
          </div>
        </div>
      </div>
      <div className="mt-5 border-4 border-b-gray-300 rounded-md"></div>
    </div>
  );
};
