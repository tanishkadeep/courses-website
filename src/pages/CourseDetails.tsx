import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchCourses,
  getCoursesStatus,
  selectAllCourses,
} from "../features/courses/coursesSlice";
import { useEffect } from "react";
import { AppDispatch } from "../app/store";
import { Appbar } from "../components/Appbar";
import { Footer } from "../components/Footer";
import { ClipLoader } from "react-spinners";

export const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const courses = useSelector(selectAllCourses);
  const courseStatus = useSelector(getCoursesStatus);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (courseStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [courseStatus]);

  const course = courses.find((c) => c.id === courseId);
  if (courseStatus === "loading")
    return (
      <div>
        <Appbar />
        <div className="flex justify-center items-center h-[64vh]">
          <ClipLoader size={40} color={"#123abc"} loading={true} />
        </div>
        <Footer />
      </div>
    );
  if (!course) {
    return (
      <div className="mt-40 font-extrabold text-2xl text-center text-red-500">
        Course not found
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="my-16 mx-16 sm:mx-24 md:mx-40 flex flex-col justify-center items-center">
        <div>
          <img
            src={course.thumbnail}
            alt={course.name}
            className="rounded-md mb-10 md:max-w-lg"
          />
        </div>
        <div className="text-lg">
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
            {course.name}
          </div>
          <div>
            <b>Instructor:</b> {course.instructor}
          </div>
          <div>
            <b>Description:</b> {course.description}
          </div>
          <div>
            <b>Enrollment Status:</b> {course.enrollmentStatus}
          </div>
          <div>
            <b>Duration:</b> {course.duration}
          </div>
          <div>
            <b>Schedule:</b> {course.schedule}
          </div>
          <div>
            <b>Location:</b> {course.location}
          </div>
          <div>
            <b>Prerequisites:</b> {course.prerequisites.join(", ")}
          </div>
          <details>
            <summary className="text-xl font-extrabold mt-8 cursor-pointer">
              Syllabus
            </summary>
            <div className="mt-2">
              {course.syllabus.map((item) => (
                <div className="my-3">
                  <div className="font-bold">Week {item.week}</div>
                  <div className="font-semibold">Topic: {item.topic}</div>
                  <div className="italic">{item.content}</div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
      <Footer />
    </div>
  );
};
