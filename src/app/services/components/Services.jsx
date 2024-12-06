'use client'
import React, { useEffect } from 'react'

const Services = () => {
    useEffect(()=>{
        const aosInit=()=> {
            AOS.init({
              duration: 600,
              easing: 'ease-in-out',
              once: false,
              mirror: false
            });
            console.log("aos inited")
          }
          aosInit()
    },[])

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
        
        // Ensure the header has required classes before toggling
        if (!selectHeader.classList.contains('scroll-up-sticky') &&
            !selectHeader.classList.contains('sticky-top') &&
            !selectHeader.classList.contains('fixed-top')) {
          return;
        }
  
        // Toggle 'scrolled' class based on scroll position
        if (window.scrollY > 100) {
          selectBody.classList.add('scrolled');
        } else {
          selectBody.classList.remove('scrolled');
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services" className="active">Services</a></li>
                            <li><a href="/projects">Projects</a></li>
                            {/* <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
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
                        <h1>Services</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}

                {/* Services Section */}
                <section id="services" className="services section light-background">

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item  position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-mountain-city"></i>
                                    </div>
                                    <h3>Nesciunt Mete</h3>
                                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>{/* End Service Item */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                    </div>
                                    <h3>Eosle Commodi</h3>
                                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>{/* End Service Item */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-compass-drafting"></i>
                                    </div>
                                    <h3>Ledo Markt</h3>
                                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>{/* End Service Item */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-trowel-bricks"></i>
                                    </div>
                                    <h3>Asperiores Commodit</h3>
                                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>{/* End Service Item */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-helmet-safety"></i>
                                    </div>
                                    <h3>Velit Doloremque</h3>
                                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>{/* End Service Item */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                    </div>
                                    <h3>Dolori Architecto</h3>
                                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>{/* End Service Item */}

                        </div>

                    </div>

                </section>{/* /Services Section */}

                {/* Features Cards Section */}
                <section id="features-cards" className="features-cards section">

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <h3>Quasi eaque omnis</h3>
                                <p>Eius non minus autem soluta ut ui labore omnis quisquam corrupti autem odit voluptas quos commodi magnam occaecati.</p>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2"></i> <span>Ullamco laboris nisi ut aliquip</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Duis aute irure dolor in reprehenderit</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                                </ul>
                            </div>{/* End feature item*/}

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <h3>Et nemo dolores consectetur</h3>
                                <p>Ducimus ea quam et occaecati est. Temporibus in soluta labore voluptates aut. Et sit soluta non repellat sed quia dire plovers tradoria</p>

                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2"></i> <span>Enim temporibus maiores eligendi</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Ut maxime ut quibusdam quam qui</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Officiis aspernatur in officiis</span></li>
                                </ul>
                            </div>{/* End feature item*/}

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <h3>Staque laboriosam modi</h3>
                                <p>Velit eos error et dolor omnis voluptates nobis tenetur sed enim nihil vero qui suscipit ipsum at magni. Ipsa architecto consequatur aliquam</p>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2"></i> <span>Quis voluptates laboriosam numquam</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Debitis eos est est corrupti</span></li>
                                </ul>
                            </div>{/* End feature item*/}

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <h3>Dignissimos suscipit iste</h3>
                                <p>Molestiae occaecati assumenda quia saepe nobis recusandae at dicta ducimus sequi numquam commodi est in consequatur ea magnam quia itaque</p>
                                <ul className="list-unstyled">
                                    <li><i className="bi bi-check2"></i> <span>Veritatis qui reprehenderit quis</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Accusantium vel numquam sunt minus</span></li>
                                    <li><i className="bi bi-check2"></i> <span>Voluptatem pariatur est sationem</span></li>
                                </ul>
                            </div>{/* End feature item*/}

                        </div>

                    </div>

                </section>{/* /Features Cards Section */}

                {/* Alt Services 2 Section */}
                <section id="alt-services-2" className="alt-services-2 section">

                    <div className="container">

                        <div className="row justify-content-around gy-4">

                            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                                <h3>Enim quis est voluptatibus aliquid consequatur</h3>
                                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                                <div className="row">

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-easel flex-shrink-0"></i>
                                        <div>
                                            <h4>Lorem Ipsum</h4>
                                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias </p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-patch-check flex-shrink-0"></i>
                                        <div>
                                            <h4>Nemo Enim</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise</p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-brightness-high flex-shrink-0"></i>
                                        <div>
                                            <h4>Dine Pad</h4>
                                            <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit</p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-brightness-high flex-shrink-0"></i>
                                        <div>
                                            <h4>Tride clov</h4>
                                            <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit</p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                </div>

                            </div>

                            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
                                <img src="/img/features-3-2.jpg" alt="" />
                            </div>

                        </div>

                    </div>

                </section>{/* /Alt Services 2 Section */}

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
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
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
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center active" onClick={handleScrollToTop}><i className="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default Services