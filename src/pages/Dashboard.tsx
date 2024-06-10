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
import { ClipLoader } from "react-spinners";
import { Footer } from "../components/Footer";

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

  const handleMarkAsCompleted = (courseId: string) => {
    dispatch(markCourseAsCompleted(courseId));
  };

  return (
    <div>
      <Appbar />
      <div className="my-16 md:mx-24 sm:mx-16 mx-8 lg:mx-32 min-h-[70vh]">
        <div className="text-4xl font-extrabold mb-8">My Courses</div>
        {courseStatus === "loading" ? (
          <div className="flex justify-center items-center h-[47vh]">
            <ClipLoader size={40} color={"#123abc"} loading={true} />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="border-2 border-gray-300 rounded-lg flex flex-col h-full"
              >
                <Link to={`/courses/${course.id}`}>
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="w-full h-44 sm:h-56 object-cover rounded-t-lg"
                  />
                </Link>
                <div className="p-4 flex-1 flex flex-col">
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-xl font-bold"
                  >
                    {course.name}
                  </Link>
                  <div className="italic py-2">{course.instructor}</div>
                  <div className="text-sm pb-4">Due: {course.duration}</div>
                  <div className="mt-auto flex pb-2 justify-between items-center">
                    <ProgressBar progress={course.progress} />
                    <div className="pl-4 text-sm font-medium">
                      {course.progress}%
                    </div>
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
        )}
      </div>
      <Footer />
    </div>
  );
};
