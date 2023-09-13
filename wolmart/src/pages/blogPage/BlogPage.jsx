import { Link } from "react-router-dom";

import blogImg from "../../assets/images/blog/2cols/1.jpg";

const BlogPage = () => {
  return (
    <>
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Blog</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav mb-6">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content mb-10 pb-2">
          <div className="container">
            <div className="row gutter-lg">
              <div className="main-content">
                <div className="row cols-sm-2">
                  <article className="post post-grid-type overlay-zoom mb-6 fashion">
                    <figure className="post-media br-sm">
                      <Link to="/blog/123">
                        <img
                          src={blogImg}
                          width={600}
                          height={420}
                          alt="blog"
                        />
                      </Link>
                    </figure>
                    <div className="post-details">
                      <div className="post-cats text-primary">
                        <Link to="#">Fashion</Link>
                      </div>
                      <h4 className="post-title">
                        <Link to="/blog/123">
                          New found the men dress for summer
                        </Link>
                      </h4>
                      <div className="post-content">
                        <p>
                          Sed pretium, ligula sollicitudin laoreet viverra,
                          tortor libero sodales leo, eget blandit nunc tortor eu
                          nibh. Suspendisse potenti.Sed egstas, ant at vulputate
                          volutpat, uctus metus libero eu augue, vitae luctus…
                        </p>{" "}
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-primary"
                        >
                          (read more)
                        </a>
                      </div>
                      <div className="post-meta">
                        by{" "}
                        <Link to="#" className="post-author">
                          John Doe
                        </Link>
                        -{" "}
                        <Link to="#" className="post-date">
                          03.01.2021
                        </Link>
                        <Link to="#" className="post-comment">
                          <i className="w-icon-comments" />
                          <span>7</span>Comments
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
                <ul className="pagination justify-content-center">
                  <li className="prev disabled">
                    <a
                      href="#"
                      aria-label="Previous"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-left" />
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <Link to="#" aria-label="Next">
                      Next
                      <i className="w-icon-long-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* End of Main Content */}

              <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
                <div className="sidebar-overlay">
                  <Link to="#" className="sidebar-close">
                    <i className="close-icon" />
                  </Link>
                </div>
                <Link to="#" className="sidebar-toggle">
                  <i className="fas fa-chevron-left" />
                </Link>
                <div className="sidebar-content">
                  <div className="sticky-sidebar">
                    <div className="widget widget-search-form">
                      <div className="widget-body">
                        <form
                          action="#"
                          method="GET"
                          className="input-wrapper input-wrapper-inline"
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search in Blog"
                            autoComplete="off"
                            required=""
                          />
                          <button className="btn btn-search">
                            <i className="w-icon-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* End of Widget search form */}
                    <div className="widget widget-categories mb-0">
                      <h3 className="widget-title bb-no">Categories</h3>
                      <ul className="widget-body filter-items search-ul">
                        <li>
                          <Link to="blog.html">Clothes</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Entertainment</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Fashion</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Lifestyle</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Others</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Shoes</Link>
                        </li>
                        <li>
                          <Link to="blog.html">Technology</Link>
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget categories */}
                    <div className="widget widget-posts">
                      <h3 className="widget-title bb-no">Popular Posts</h3>
                      <div className="widget-body">
                        <div className="swiper">
                          <div className="swiper-container swiper-theme nav-top">
                            <div className="swiper-wrapper row cols-1">
                              <div className="swiper-slide widget-col">
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src={blogImg} alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <Link to="#" className="post-date">
                                        March 1, 2021
                                      </Link>
                                    </div>
                                    <h4 className="post-title">
                                      <Link to="post-single.html">
                                        Fashion tells about who you are from
                                        external point
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src={blogImg} alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <Link to="#" className="post-date">
                                        March 1, 2021
                                      </Link>
                                    </div>
                                    <h4 className="post-title">
                                      <Link to="post-single.html">
                                        Fashion tells about who you are from
                                        external point
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src={blogImg} alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <Link to="#" className="post-date">
                                        March 1, 2021
                                      </Link>
                                    </div>
                                    <h4 className="post-title">
                                      <Link to="post-single.html">
                                        Fashion tells about who you are from
                                        external point
                                      </Link>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Widget posts */}

                    <div className="widget widget-tags">
                      <h3 className="widget-title bb-no">Browse Tags</h3>
                      <div className="widget-body tags">
                        <Link to="#" className="tag">
                          Fashion
                        </Link>
                        <Link to="#" className="tag">
                          Style
                        </Link>
                        <Link to="#" className="tag">
                          Travel
                        </Link>
                        <Link to="#" className="tag">
                          Women
                        </Link>
                        <Link to="#" className="tag">
                          Men
                        </Link>
                        <Link to="#" className="tag">
                          Hobbies
                        </Link>
                        <Link to="#" className="tag">
                          Shopping
                        </Link>
                        <Link to="#" className="tag">
                          Photography
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* End of Page Content */}
      </main>
    </>
  );
};

export default BlogPage;
