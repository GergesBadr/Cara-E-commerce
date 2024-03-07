import { useSearchParams } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useProducts } from "../../services/useProducts";
import { PRODUCTS_PER_PAGE } from "../../utils/constants";
import Spinner from "../../components/Spinner";

function ShopPagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data = {}, isLoading } = useProducts();

  if (isLoading) return <Spinner />;

  const currPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(data?.total / PRODUCTS_PER_PAGE);

  function goToPrevPage() {
    const handlePrevious = currPage === 1 ? currPage : currPage - 1;
    searchParams.set("page", handlePrevious);
    setSearchParams(searchParams);
  }

  function goToNextPage() {
    const handleNext = currPage === totalPages ? currPage : currPage + 1;
    searchParams.set("page", handleNext);
    setSearchParams(searchParams);
  }

  function goToPageByNum(num) {
    searchParams.set("page", num);
    setSearchParams(searchParams);
  }

  if (totalPages < 2) return null;

  return (
    <div className="mt-12 space-y-4 px-6 text-center">
      <div className="flex items-center justify-center gap-1 md:gap-3">
        <button
          onClick={goToPrevPage}
          disabled={currPage === 1}
          aria-label="Go to previous page"
          className="dark:bg-dark-bg flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-white text-gray-400 disabled:cursor-not-allowed disabled:border-none
        disabled:bg-gray-400 disabled:text-gray-100 dark:border-gray-700  dark:disabled:bg-gray-500 [&:not(:disabled)>svg]:hover:-translate-x-1 [&>svg]:duration-200"
        >
          <HiArrowLeft className="h-5 w-5" />
        </button>
        {/* Numbers */}
        {[...Array(totalPages)]?.map((_, index) => {
          // Determine if the current page should be displayed
          const isCurrPage = index + 1 === currPage;
          // Determine if the current page is within the range to be displayed
          const withinRange = Math.abs(currPage - (index + 1)) <= 2;
          // Display buttons only if it's the current page or within the range
          if (isCurrPage || withinRange) {
            return (
              <button
                key={index + 1}
                onClick={() => goToPageByNum(index + 1)}
                disabled={currPage === index + 1}
                aria-label={`Page ${index + 1}`}
                className="dark:bg-dark-bg flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-white text-lg font-semibold
                duration-200 hover:border-teal-700 disabled:cursor-not-allowed disabled:border-teal-700 dark:border-gray-700
                dark:hover:border-teal-700 dark:disabled:border-teal-700"
              >
                {index + 1}
              </button>
            );
          }
        })}
        {/* Numbers */}
        <button
          onClick={goToNextPage}
          disabled={currPage === totalPages}
          aria-label="Go to next page"
          className="dark:bg-dark-bg flex h-10 w-10 items-center justify-center rounded-lg border-2 bg-white text-gray-400 disabled:cursor-not-allowed disabled:border-none
        disabled:bg-gray-400 disabled:text-gray-100 dark:border-gray-700 dark:disabled:bg-gray-500 [&:not(:disabled)>svg]:hover:translate-x-1 [&>svg]:duration-200"
        >
          <HiArrowRight className="h-5 w-5" />
        </button>
      </div>

      <p className="sec-text text-lg">
        Page {currPage} of {totalPages}
      </p>
    </div>
  );
}

export default ShopPagination;
