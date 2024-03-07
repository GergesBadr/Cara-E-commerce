function BlogBanner() {
  return (
    <section className="h-[350px] bg-[url('./assets/banners/blog.jpg')] bg-cover bg-top bg-no-repeat ">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-[rgb(0,0,0,30%)] px-6 text-center text-white">
        <h1 className="heading-1">#readmore</h1>
        <p className="text-lg tracking-wider text-gray-200">
          Read all case studies about our products!
        </p>
      </div>
    </section>
  );
}

export default BlogBanner;
