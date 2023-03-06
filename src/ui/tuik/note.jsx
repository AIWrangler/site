const defaultItem = {
  title: "UX designer",
  subtitle:
    "What does success as a UX designer look like and how to get there systematically",
  image: "https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png",
};
const defaultList = Array.from({ length: 20 }, (_, index) => index + 1).map(index=>defaultItem);

const Index = (props) => {
  let { list } = props;
  if (!list) {
    list = defaultList;
  }
  return (
    <div>
      <div className="mx-auto container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((item) => (
            <a
              href={`/resources/${item.slug}`}
              class=" transform hover:-translate-y-1 transition-all duration-200">
              <div className="w-full h-72 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4 hover:bg-slate-200 hover:shadow-md hover:border-opacity-0">
                <div>
                  <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
                    {item.title}
                  </h3>
                  <div class="line-clamp-3">{item.subtitle}</div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-center flex-no-wrap">
                    <div className="w-42 h-24 bg-cover bg-center">
                      <img
                        src={item.image.src}
                        alt={item.image.alt ? item.image.alt : item.title}
                        className="h-full w-full overflow-hidden object-cover border-2 border-white dark:border-gray-700 shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
