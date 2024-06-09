import { useEffect, useState } from "react";
import { AppDispatch } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCourses,
  getCoursesStatus,
  fetchCourses,
} from "../features/courses/coursesSlice";

export const Home = () => {
  const courses = useSelector(selectAllCourses);
  const dispatch: AppDispatch = useDispatch();
  const courseStatus = useSelector(getCoursesStatus);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus, dispatch]);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(filter.toLowerCase()) ||
      course.instructor.toLowerCase().includes(filter.toLowerCase())
  );

  let content;

  content = filteredCourses.map((course) => JSON.stringify(course));

  return (
    <div className=" mx-5 lg:mx-40 my-8">
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
      <div className="mt-5 border-4 border-b-gray-300 rounded-md"></div>
      <div>{content}</div>
    </div>
  );
};
