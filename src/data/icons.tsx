import {SVGProps} from "react";

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        height="1em"
        viewBox="0 0 64 64"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M17.718 7h-.002c-6.814 0-12.18 3.957-14.723 10.855c-5.788 15.71 15.227 29.479 24.2 35.357c1.445.946 3.082 2.019 3.404 2.354L31.851 57l1.397-1.292c.232-.204 1.305-.891 2.342-1.555c8.605-5.508 31.459-20.141 25.402-36.318c-2.566-6.857-7.941-10.79-14.742-10.79c-5.744 0-11.426 2.763-14.313 6.554C28.955 9.75 23.345 7 17.718 7"
          fill="currentColor"
        ></path>
      </svg>
    )
  }