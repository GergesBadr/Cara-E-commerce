import { HiChevronRight } from "react-icons/hi2";
import { ARTICLES } from "../../utils/constants";

function Articles() {
  return (
    <section className="responsive-container mt-28 space-y-24 2xl:mx-auto 2xl:max-w-[1336px]">
      {ARTICLES.map((article) => {
        return (
          <article key={article.id} className="flex flex-col gap-6 md:flex-row">
            <div className="relative basis-1/2">
              <span className="absolute -top-[45px] -z-10 h-[60px] text-7xl font-semibold text-gray-400">
                {article.date}
              </span>
              <img
                src={article.imageSrc}
                alt={article.imageAlt}
                loading="lazy"
                className="aspect-[2/1.5] max-h-[400px] w-full object-cover object-center"
              />
            </div>

            <div className="basis-1/2 space-y-4">
              <h2 className="heading-2"> {article.title} </h2>
              <p className="sec-text leading-relaxed">{article.description}</p>
              <button
                aria-label={`Continue reading ${article.title} article`}
                className="flex items-center justify-center gap-2 font-semibold text-teal-700 duration-200 hover:text-teal-600 dark:text-teal-500
                [&>svg]:duration-200 [&>svg]:hover:translate-x-1"
              >
                <span>Continue reading</span>
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Articles;
