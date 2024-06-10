import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { Appbar } from "../components/Appbar";
import { useEffect } from "react";
import {
  selectAllCourses,
  getCoursesStatus,
  fetchCourses,
} from "../features/courses/coursesSlice";
import { ProgressBar } from "../components/ProgressBar";

export const Dashboard = () => {
  const courses = useSelector(selectAllCourses);
  const courseStatus = useSelector(getCoursesStatus);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus, dispatch]);

  const enrolledCourses = courses.filter(
    (course) => course.enrollmentStatus === "Enrolled"
  );

  return (
    <div>
      <Appbar />
      <div className="my-16 md:mx-24 sm:mx-16 mx-8 lg:mx-32">
        <div className="text-4xl font-extrabold mb-8">My Courses</div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {enrolledCourses.map((course) => (
            <div className="border-2  border-gray-300 rounded-lg">
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full  h-44 sm:h-56  object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="text-xl font-bold">{course.name}</div>
                <div className="italic py-2">{course.instructor}</div>
                <div className="text-sm">Due: {course.duration}</div>
              </div>
              <div className="px-4 flex justify-between items-center mb-6">
                <ProgressBar progress={course.progress} />
                <div className="pl-4 text-sm font-medium">
                  {course.progress}%
                </div>
              </div>
              <div className="bg-gray-100 cursor-pointer flex justify-center items-center py-2 font-semibold hover:bg-gray-200">
                {" "}
                <button>Mark as completed</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
