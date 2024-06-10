import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { Appbar } from "../components/Appbar";
import { useEffect } from "react";
import {
  selectAllCourses,
  getCoursesStatus,
  fetchCourses,
  markCourseAsCompleted,
} from "../features/courses/coursesSlice";
import { ProgressBar } from "../components/ProgressBar";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const courses = useSelector(selectAllCourses);
  const courseStatus = useSelector(getCoursesStatus);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus, courses]);

  const enrolledCourses = courses.filter(
    (course) => course.enrollmentStatus === "Enrolled"
  );

  const handleMarkAsCompleted = (courseId: string) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  return (
    <div>
      <Appbar />
      <div className="my-16 md:mx-24 sm:mx-16 mx-8 lg:mx-32">
        <div className="text-4xl font-extrabold mb-8">My Courses</div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {enrolledCourses.map((course) => (
            <div className="border-2 border-gray-300 rounded-lg">
              <Link to={`/courses/${course.id}`}>
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-full  h-44 sm:h-56  object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/courses/${course.id}`}
                  className="text-xl font-bold"
                >
                  {course.name}
                </Link>
                <div className="italic py-2">{course.instructor}</div>
                <div className="text-sm">Due: {course.duration}</div>
              </div>
              <div className="px-4 flex justify-between items-center mb-6">
                <ProgressBar progress={course.progress} />
                <div className="pl-4 text-sm font-medium">
                  {course.progress}%
                </div>
              </div>

              <button
                onClick={() => handleMarkAsCompleted(course.id)}
                className="bg-gray-100 cursor-pointer py-2 font-semibold hover:bg-gray-200 w-full"
              >
                Mark as completed
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
