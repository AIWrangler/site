import React from "react";

const defaultData = [
  {
    name: "Jonathan Stark",
    image: {
      src: "https://cdn.tuk.dev/assets/photo-1575978108872-9b1429a19a0f.jfif",
    },
    email: "jonathanstark97@gmail.com",
    applied: "Applied on 28 March, 2020",
    completed: "Completed Profile Screening",
  },
  {
    name: "Hannah Geller",
    image: {
      src: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    },
    email: "hannahgeller89@gmail.com",
    applied: "Applied on 28 March, 2020",
    completed: "Completed Profile Screening",
  },
  {
    name: "Andres Berlin",
    image: {
      src: "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg",
    },
    email: "andresberlin72@gmail.com",
    applied: "Applied on 28 March, 2020",
    completed: "Completed Profile Screening",
  },
  {
    name: "Ashley Wilson",
    image: {
      src: "https://cdn.tuk.dev/assets/beautiful-woman-medium-shot-with-pink-background_23-2148316670.jpg",
    },
    email: "ashleywilson99@gmail.com",
    applied: "Applied on 28 March, 2020",
    completed: "Completed Profile Screening",
  },
];

const Index = (props) => {
    let {data} = props
    if (!data){ data = defaultData}
    return (
      <div>
        <div className="container px-6 py-10 mx-auto">
          {data &&
            data.map((item) => (
              <div className="bg-white rounded sm:shadow dark:bg-gray-800">
                <div className="flex flex-wrap items-center justify-between w-11/12 px-8 mx-auto mb-2 xl:w-full xl:mb-0 lg:mb-0">
                  <div className="py-5 xl:w-1/5">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded">
                        <img
                          src={item.image.src}
                          alt={item.image.alt || item.name}
                          className="object-cover w-full h-full overflow-hidden rounded shadow"
                        />
                      </div>
                      <p className="pl-2 text-lg font-normal text-gray-800 dark:text-gray-100">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="py-5 xl:w-1/5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#718096"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={3} y={5} width={18} height={14} rx={2} />
                        <polyline points="3 7 12 13 21 7" />
                      </svg>
                      <p className="pl-2 text-sm font-normal text-gray-600 dark:text-gray-400">
                        {item.email}
                      </p>
                    </div>
                  </div>
                  <div className="py-5 xl:w-1/5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-calendar-event"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#718096"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={4} y={5} width={16} height={16} rx={2} />
                        <line x1={16} y1={3} x2={16} y2={7} />
                        <line x1={8} y1={3} x2={8} y2={7} />
                        <line x1={4} y1={11} x2={20} y2={11} />
                        <rect x={8} y={15} width={2} height={2} />
                      </svg>
                      <p className="pl-2 text-sm font-normal text-gray-600 dark:text-gray-400">
                        {item.applied}
                      </p>
                    </div>
                  </div>
                  <div className="py-5 xl:w-1/5">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        height={20}
                        fill="#68D391">
                        <path
                          className="heroicon-ui"
                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                        />
                      </svg>
                      <p className="pl-2 text-sm font-normal text-gray-600 dark:text-gray-400">
                        {item.completed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
};
export default Index;
