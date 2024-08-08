import Link from "next/link";
import React from "react";
import { RedirectQuestionProps } from "./types";

const RedirectQuestion = ({
  question,
  route,
  link_text,
}: RedirectQuestionProps) => {
  return (
    <p className="text-center text-gray-400 my-4">
      {question}{" "}
      <Link
        href={route}
        className="text-primary-blue hover:text-primary-blue-dark transition-all duration-300"
      >
        {link_text}
      </Link>
    </p>
  );
};

export default RedirectQuestion;
