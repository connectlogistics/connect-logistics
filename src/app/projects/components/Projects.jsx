'use client'
import React, { useEffect } from 'react'
import OverlayModal from '@/global_components/InquiryModal';

const Projects = () => {
    useEffect(() => {
        const aosInit = () => {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: false,
                mirror: false
            });
            console.log("aos inited")
        }
        aosInit()
    }, [])

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleScrolled = () => {
          const selectBody = document.querySelector('body');
          const selectHeader = document.querySelector('#header');
          const selectInquiry= document.querySelector('.scroll-top1');
          const selectScrollTop= document.querySelector('.scroll-top');
          
          // Ensure the header has required classes before toggling
          if (!selectHeader.classList.contains('scroll-up-sticky') &&
              !selectHeader.classList.contains('sticky-top') &&
              !selectHeader.classList.contains('fixed-top')) {
            return;
          }
    
          // Toggle 'scrolled' class based on scroll position
          if (window.scrollY > 40) {
            selectBody.classList.add('scrolled');
            selectInquiry.classList.add('active');
            selectScrollTop.classList.add('active');
          } else {
            selectBody.classList.remove('scrolled');
            selectInquiry.classList.remove('active');
            selectScrollTop.classList.remove('active');
          }
        };
    
        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);
    
        // Cleanup event listeners on unmount
        return () => {
          document.removeEventListener('scroll', toggleScrolled);
          window.removeEventListener('load', toggleScrolled);
        };
      }, []);

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        <img src="/img/logo.png" alt="" />
                        <h1 className="sitename">Connect Logistics</h1> <span>.</span>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="/" >Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/projects" className="active">Projects</a></li>
                            {/* <li><a href="blog.html">Blog</a></li> */}
                            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
                            {/* <li><a href="contact.html">Contact</a></li> */}
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                </div>
            </header>

            <main className="main">

                {/* Page Title */}
                <div className="page-title dark-background" style={{backgroundImage:'url(/img/page-title-bg.jpg)'}}>
                    <div className="container position-relative">
                        <h1>Projects</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Projects</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}

                {/* Projects Section */}
                <section id="projects" className="projects section">

                    <div className="container">

                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-remodeling">Remodeling</li>
                                <li data-filter=".filter-construction">Construction</li>
                                <li data-filter=".filter-repairs">Repairs</li>
                                <li data-filter=".filter-design">Design</li>
                            </ul>{/* End Portfolio Filters */}

                            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/remodeling-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/remodeling-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/construction-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/construction-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/repairs-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Branding 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/repairs-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/design-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/design-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/remodeling-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/remodeling-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/construction-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/construction-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/repairs-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Branding 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/repairs-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/design-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/design-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/remodeling-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/remodeling-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/construction-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/construction-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/repairs-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Branding 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/repairs-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/projects/design-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <a href="/img/projects/design-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                            </div>{/* End Portfolio Container */}

                        </div>

                    </div>

                </section>{/* /Projects Section */}

            </main>

            <footer id="footer" className="footer dark-background">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span className="sitename">Connect Logistics</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p> Dubai 6 - N518 Street - Mina Jebel Ali </p>
                                <p>Jebel Ali Freezone - Dubai</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+971 52 695 5786</span></p>
                                <p><strong>Email:</strong> <span>connectclc.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <a href=""><i className="bi bi-twitter-x"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><a href="#">Air Freight</a></li>
            <li><a href="#"> Sea Freight</a></li>
            <li><a href="#">Car Lashing and Loading</a></li>
            <li><a href="#"> Warehousing & Handling</a></li>
            <li><a href="#">Packing & Removal</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Hic solutasetp</h4>
                            <ul>
                                <li><a href="#">Molestiae accusamus iure</a></li>
                                <li><a href="#">Excepturi dignissimos</a></li>
                                <li><a href="#">Suscipit distinctio</a></li>
                                <li><a href="#">Dilecta</a></li>
                                <li><a href="#">Sit quas consectetur</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Nobis illum</h4>
                            <ul>
                                <li><a href="#">Ipsam</a></li>
                                <li><a href="#">Laudantium dolorum</a></li>
                                <li><a href="#">Dinera</a></li>
                                <li><a href="#">Trodelas</a></li>
                                <li><a href="#">Flexo</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Connect Logistics</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">


                    </div>
                </div>

            </footer>

            {/* Scroll Top */}
            <OverlayModal/>
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center  " onClick={handleScrollToTop}><i className="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default Projects