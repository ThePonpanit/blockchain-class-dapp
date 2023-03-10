import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center bg-transparent text-gray-500 text-sm">
      <div className="mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 11a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-3.5-1c-1.5 0-2.798.9-3.376 2.183C3.406 11.593 2.5 9.68 2.5 7.5a5.5 5.5 0 1 1 11 0c0 2.18-.905 4.093-2.624 5.683C10.298 10.9 9 10.1 8 10.1z" />
        </svg>
      </div>
      <div>
        Made by Ponpanit Yakhampor 600612106 &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
