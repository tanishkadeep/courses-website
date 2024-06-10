import { useEffect, useState } from "react";
import { AppDispatch } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCourses,
  getCoursesStatus,
  fetchCourses,
  getCoursesError,
} from "../features/courses/coursesSlice";
import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  const courses = useSelector(selectAllCourses);
  const dispatch: AppDispatch = useDispatch();
  const courseStatus = useSelector(getCoursesStatus);
  const error = useSelector(getCoursesError);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus]);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(filter.toLowerCase()) ||
      course.instructor.toLowerCase().includes(filter.toLowerCase())
  );

  let content;

  if (courseStatus === "loading") {
    content = (
      <div className=" flex justify-center items-center h-[80vh] text-xl font-bold text-gray-400">
        Loading...
      </div>
    );
  } else if (courseStatus === "succeeded") {
    content = filteredCourses.map((course) => (
      <div className="p-4 mx-4 my-8 md:mx-10 border rounded-lg shadow-md">
        <Link
          to={`/courses/${course.id}`}
          className="flex flex-col md:flex-row items-center"
        >
          <div>
            <img
              src={course.thumbnail}
              alt={course.name}
              className="min-w-40 md:max-w-80"
            />
          </div>
          <div className="md:pl-10 w-full pt-5 md:pt-0">
            <div className="text-3xl font-extrabold">{course.name}</div>
            <div className="py-2 italic text-gray-700 font-semibold">
              {course.instructor}
            </div>
            <div className="text-sm ">{course.description}</div>
          </div>
        </Link>
      </div>
    ));
  } else if (courseStatus === "failed") {
    content = <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <Appbar />
      <div className=" mx-5 lg:mx-40 my-16">
        <div className="flex flex-col lg:flex-row justify-between items-center px-5">
          <div className="text-5xl font-extrabold lg:pb-0 pb-5 text-center">
            All Courses
          </div>
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
                className="bg-gray-100 w-48 sm:w-80 outline-none"
                placeholder="Search courses"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-10 border-4 border-b-gray-300 rounded-md"></div>
        <div>{content}</div>
      </div>
      <Footer/>
    </div>
  );
};
