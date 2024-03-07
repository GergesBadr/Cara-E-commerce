import Button from "../../components/Button";

function Banners() {
  return (
    <section className="responsive-container mt-24 grid grid-cols-1 gap-8 text-white lg:grid-cols-4">
      <div className="col-span-1 flex h-[400px] flex-col items-start justify-center gap-4 rounded-xl bg-[url('./assets/banners/buy-one-get-one.jpg')] bg-cover bg-center bg-no-repeat pl-12 lg:col-span-2">
        <p className="text-gray-100">crazy deals</p>
        <h3 className="heading-3">Buy 1 get 1 free</h3>
        <p className="text-gray-100">
          The best classic dress is on the sale at cara!
        </p>
        <Button variation="sec" extraClasses="text-white border-white">
          Learn More
        </Button>
      </div>

      <div className="col-span-1 flex h-[400px] flex-col items-start justify-center gap-4 rounded-xl bg-[url('./assets/banners/upcomming-season.jpg')] bg-cover bg-center bg-no-repeat pl-12 lg:col-span-2">
        <p className="text-gray-100">spring/summer</p>
        <h3 className="heading-3">upcomming season</h3>
        <p className="text-gray-100">
          The best classic dress is on sale at cara!
        </p>
        <Button> Collection </Button>
      </div>

      <div className="col-span-1 grid grid-cols-1 gap-8 lg:col-span-4 lg:grid-cols-3">
        <div className="flex h-[400px] flex-col items-start justify-center gap-4 rounded-xl bg-[url('./assets/banners/seasonal-sale.jpg')] bg-cover bg-center bg-no-repeat pl-8 lg:h-[320px]">
          <h3 className="heading-3 uppercase">Seasonal Sale</h3>
          <span className="font-medium tracking-wider text-red-600">
            Winter collection &ndash; 50% OFF
          </span>
        </div>

        <div className="flex h-[400px] flex-col items-start justify-center gap-4 rounded-xl bg-[url('./assets/banners/new-footwear.jpg')] bg-cover bg-center bg-no-repeat pl-8 lg:h-[320px]">
          <h3 className="heading-3 uppercase">New footwear collection</h3>
          <span className="font-medium tracking-wider text-red-600">
            Spring / Summer 2022
          </span>
        </div>

        <div className="flex h-[400px] flex-col items-start justify-center gap-4 rounded-xl bg-[url('./assets/banners/t-shirts.jpg')] bg-cover bg-center bg-no-repeat pl-8 lg:h-[320px]">
          <h3 className="heading-3 uppercase">T-shirts</h3>
          <span className="font-medium tracking-wider text-red-600">
            New trendy t-shirts
          </span>
        </div>
      </div>
    </section>
  );
}

export default Banners;
