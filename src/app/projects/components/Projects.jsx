'use client'
import React, { useEffect } from 'react'
import OverlayModal from '@/global_components/InquiryModal';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';


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

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    
        // Function to toggle mobile navigation
        const mobileNavToogle = () => {
          bodyElement?.classList.toggle('mobile-nav-active');
          mobileNavToggleBtn?.classList.toggle('bi-list');
          mobileNavToggleBtn?.classList.toggle('bi-x');
        };
    
        // Add event listener for the toggle button
        mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);
    
        // Handle same-page/hash links
        const navLinks = document.querySelectorAll('#navmenu a');
        navLinks.forEach(navmenu => {
          navmenu.addEventListener('click', () => {
            if (bodyElement?.classList.contains('mobile-nav-active')) {
              mobileNavToogle();
            }
          });
        });
    
        // Handle dropdown toggles
        const dropdownToggles = document.querySelectorAll('.navmenu .toggle-dropdown');
        dropdownToggles.forEach(toggle => {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggle.parentNode?.classList.toggle('active');
            toggle.parentNode?.nextElementSibling?.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
          });
        });
    
        // Cleanup function to remove all event listeners
        return () => {
          mobileNavToggleBtn?.removeEventListener('click', mobileNavToogle);
    
          navLinks.forEach(navmenu => {
            navmenu.removeEventListener('click', () => {
              if (bodyElement?.classList.contains('mobile-nav-active')) {
                mobileNavToogle();
              }
            });
          });
    
          dropdownToggles.forEach(toggle => {
            toggle.removeEventListener('click', (e) => {
              e.preventDefault();
              toggle.parentNode?.classList.toggle('active');
              toggle.parentNode?.nextElementSibling?.classList.toggle('dropdown-active');
              e.stopImmediatePropagation();
            });
          });
        };
      }, []);
    

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

                    <Link href="" className="logo d-flex align-items-center">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        <Image width={60} height={100} src="/img/logo.png" alt="" />
                        <h1 className="sitename">Connect Logistics</h1> <span>.</span>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/" >Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/projects" className="active">Projects</Link></li>
                            {/* <li><Link href="">Blog</Link></li> */}
                            {/* <li className="dropdown"><Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
            <ul>
              <li><Link href="#">Dropdown 1</Link></li>
              <li className="dropdown"><Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link href="#">Deep Dropdown 1</Link></li>
                  <li><Link href="#">Deep Dropdown 2</Link></li>
                  <li><Link href="#">Deep Dropdown 3</Link></li>
                  <li><Link href="#">Deep Dropdown 4</Link></li>
                  <li><Link href="#">Deep Dropdown 5</Link></li>
                </ul>
              </li>
              <li><Link href="#">Dropdown 2</Link></li>
              <li><Link href="#">Dropdown 3</Link></li>
              <li><Link href="#">Dropdown 4</Link></li>
            </ul>
          </li> */}
                            {/* <li><Link href="">Contact</Link></li> */}
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
                                <li><Link href="">Home</Link></li>
                                <li className="current">Projects</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}

                {/* Projects Section */}
                <section id="projects" className="projects section">

                    <div className="container">

                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                            {/* <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-remodeling">Remodeling</li>
                                <li data-filter=".filter-construction">Construction</li>
                                <li data-filter=".filter-repairs">Repairs</li>
                                <li data-filter=".filter-design">Design</li>
                            </ul> */}

                            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/forall/pexels-alexander-isreb-880417-1797428.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/remodeling-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/forall/pexels-elevate-1267338 (1).jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/construction-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/forall/pexels-tomfisk-2231744.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Branding 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/repairs-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/forall/pexels-tomfisk-3057960.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 1</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/design-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/c1-a.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/remodeling-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/c1-b.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/construction-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/2-a.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Branding 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/repairs-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/2-b.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 2</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/design-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/2-c.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/remodeling-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-construction">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/3-a.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Product 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/construction-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-repairs">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/3-b.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Branding 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/repairs-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>{/* End Portfolio Item */}

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
                                    <div className="portfolio-content h-100">
                                        <Image width={415} height={300} src="/img/3-c.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Books 3</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link href="/img/projects/design-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link href="" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
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
                            <Link href="" className="logo d-flex align-items-center">
                                <span className="sitename">Connect Logistics</span>
                            </Link>
                            <div className="footer-contact pt-3">
                                <p> Dubai 6 - N518 Street - Mina Jebel Ali </p>
                                <p>Jebel Ali Freezone - Dubai</p>
                                <p className="mt-3"><strong>Phone:</strong> <span>+971 52 695 5786</span></p>
                                <p><strong>Email:</strong> <span>connectclc.com</span></p>
                            </div>
                            <div className="social-links d-flex mt-4">
                                <Link href=""><i className="bi bi-twitter-x"></i></Link>
                                <Link href=""><i className="bi bi-facebook"></i></Link>
                                <Link href=""><i className="bi bi-instagram"></i></Link>
                                <Link href=""><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About us</Link></li>
                                <li><Link href="#">Services</Link></li>
                                <li><Link href="#">Terms of service</Link></li>
                                <li><Link href="#">Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><Link href="#">Air Freight</Link></li>
            <li><Link href="#"> Sea Freight</Link></li>
            <li><Link href="#">Car Lashing and Loading</Link></li>
            <li><Link href="#"> Warehousing & Handling</Link></li>
            <li><Link href="#">Packing & Removal</Link></li>
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
            <Link href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center  " onClick={handleScrollToTop}><i className="bi bi-arrow-up-short"></i></Link>
        </>
    )
}

export default Projects