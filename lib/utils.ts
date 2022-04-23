import { allCourses } from '.contentlayer/data';
import { Course } from '.contentlayer/types';

export const getCourseBySlug = (slug: string): Course | null => {
  const course = allCourses.find((c) => c.slug === slug);
  if (course) return course;
  return null;
};

export const getFlatSyllabus = (course: Course): string[] => {
  return course.syllabus.map((s) => s.items).flat();
};

export const getNextUrl = (
  course: Course,
  currentUrl: string
): string | undefined => {
  const flatSyllabus = getFlatSyllabus(course);
  return flatSyllabus[getIndex(course, currentUrl) + 1];
};

export const getIndex = (course: Course, currentUrl: string) => {
  const flatSyllabus = getFlatSyllabus(course);
  return flatSyllabus.findIndex((f: string) => f === currentUrl);
};

export const getProgress = (course: Course, modulesTook: string) => {
  const flatSyllabus = getFlatSyllabus(course);
  const current = modulesTook ? modulesTook.split(',').length : 0;
  const total = flatSyllabus.length;
  const percentage = Math.round((current / total) * 100);
  return {
    current,
    total,
    percentage,
  };
};
