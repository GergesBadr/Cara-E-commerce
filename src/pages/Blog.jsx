import BlogBanner from "../features/blog/BlogBanner";
import Articles from "../features/blog/Articles";
import AnimatedPage from "./AnimatedPage";
import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    document.title = "Cara E-commerce | Blog";
  }, []);

  return (
    <AnimatedPage>
      <BlogBanner />
      <Articles />
    </AnimatedPage>
  );
}

export default Blog;
