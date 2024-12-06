'use client'
import React, { useState,useEffect } from 'react'

const Index = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const toggleScrollTop = () => {
  //     setIsVisible(window.scrollY > 100);
  //   };

  //   window.addEventListener("scroll", toggleScrollTop);

  //   // Cleanup listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", toggleScrollTop);
  //   };
  // }, []);

  useEffect(() => {
    // Ensure this script runs only on the client-side
    if (typeof window !== 'undefined') {
      document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
          filters.addEventListener('click', function () {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
      });
    }
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


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
        if (window.scrollY > 100) {
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
    <div>
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        <img src="/img/logo.png" alt="" />
        <h1 className="sitename">Connect Logistics</h1> <span>.</span>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Projects</a></li>
          
          {/* <li><a href="contact.html">Contact</a></li> */}
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>

  <main className="main">

    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">

      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 text-center">
              <h2>Welcome to Connect Logistics</h2>
              <p>Connect Logistics offers customized supply chain solutions that streamline your logistics operations and enhance efficiency for your business.</p>
              <a href="#get-started" className="btn-get-started"><i className="bi bi-chat-right-text" style={{width:'50px'}}></i> Inquiries Here</a>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">

        <div className="carousel-item">
          <img src="/img/hero-carousel/Connect3.jpg" alt=""/>
        </div>

        <div className="carousel-item active">
          <img src="/img/hero-carousel/Connect1.jpg" alt=""/>
        </div>

        <div className="carousel-item">
          <img src="/img/hero-carousel/Connect2.jpg" alt=""/>
        </div>

        <div className="carousel-item">
          <img src="/img/hero-carousel/hero-carousel-3.jpg" alt="" />
        </div>

       
        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>

    </section>
    {/* /Hero Section */}

    {/* Get Started Section */}
    {/* <section id="get-started" className="get-started section">

      <div className="container">

        <div className="row justify-content-between gy-4">

          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <div className="content">
              <h3>Minus hic non reiciendis ea possimus at quia.</h3>
              <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.
              </p>
              <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
            </div>
          </div>

          <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
            <form action="forms/quote.php" method="post" className="php-email-form">
              <h3>Get a quote</h3>
              <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
              <div className="row gy-3">

                <div className="col-12">
                  <input type="text" name="name" className="form-control" placeholder="Name" required=""/>
                </div>

                <div className="col-12 ">
                  <input type="email" className="form-control" name="email" placeholder="Email" required=""/>
                </div>

                <div className="col-12">
                  <input type="text" className="form-control" name="phone" placeholder="Phone" required=""/>
                </div>

                <div className="col-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                  <button type="submit">Get a quote</button>
                </div>

              </div>
            </form>
          </div>
           End Quote Form 

        </div>

      </div>

    </section> */}
    {/* /Get Started Section */}

    {/* Constructions Section */}
    <section id="constructions" className="constructions section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Constructions</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg"><img src="/img/constructions-1.jpg" alt=""/></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                    <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg"><img src="/img/constructions-2.jpg" alt=""/></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                    <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* End Card Item */}

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg"><img src="/img/constructions-3.jpg" alt=""/></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Error beatae dolor inventore aut</h4>
                    <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="card-item">
              <div className="row">
                <div className="col-xl-5">
                  <div className="card-bg"><img src="/img/constructions-4.jpg" alt=""/></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                    <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}

        </div>

      </div>

    </section>
    {/* /Constructions Section */}

    {/* Services Section */}
    <section id="services" className="services section light-background">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

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

    {/* Alt Services Section */}
    <section id="alt-services" className="alt-services section">

      <div className="container">

        <div className="row justify-content-around gy-4">
          <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src="/img/alt-services.jpg" alt=""/></div>

          <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>{/* End Icon Box */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>{/* End Icon Box */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">Dine Pad</a></h4>
                <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
              </div>
            </div>{/* End Icon Box */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><a href="" className="stretched-link">Tride clov</a></h4>
                <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
              </div>
            </div>{/* End Icon Box */}

          </div>
        </div>

      </div>

    </section>{/* /Alt Services Section */}

    {/* Features Section */}
    <section id="features" className="features section">

      <div className="container">

        <ul className="nav nav-tabs row  g-2 d-flex" data-aos="fade-up" data-aos-delay="100" role="tablist">

          <li className="nav-item col-3" role="presentation">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
              <h4>Modisit</h4>
            </a>
          </li>{/* End tab nav item */}

          <li className="nav-item col-3" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex={-1} role="tab">
              <h4>Praesenti</h4>
            </a>{/* End tab nav item */}

          </li>
          <li className="nav-item col-3" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex={-1} role="tab">
              <h4>Explica</h4>
            </a>
          </li>{/* End tab nav item */}

          <li className="nav-item col-3" role="presentation">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex={-1} role="tab">
              <h4>Nostrum</h4>
            </a>
          </li>{/* End tab nav item */}

        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

          <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Voluptatem dignissimos provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-1.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

          <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Neque exercitationem debitis</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-2.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

          <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Voluptatibus commodi accusamu</h3>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-3.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

          <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Omnis fugiat ea explicabo sunt</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="/img/features-4.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

        </div>

      </div>

    </section>{/* /Features Section */}

    {/* Projects Section */}
    <section id="projects" className="projects section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          {/* <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-remodeling">Remodeling</li>
            <li data-filter=".filter-construction">Construction</li>
            <li data-filter=".filter-repairs">Repairs</li>
            <li data-filter=".filter-design">Design</li>
          </ul>End Portfolio Filters */}

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img src="/img/projects/remodeling-1.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/construction-1.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/repairs-1.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/design-1.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/remodeling-2.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/construction-2.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/repairs-2.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/design-2.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/remodeling-3.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/construction-3.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/repairs-3.jpg" className="img-fluid" alt=""/>
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
                <img src="/img/projects/design-3.jpg" className="img-fluid" alt=""/>
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

 
    {/* Recent Blog Posts Section */}
    <section id="recent-blog-posts" className="recent-blog-posts section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Blog Posts</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="row gy-5">

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="100">

              <div className="post-img position-relative overflow-hidden">
                <img src="/img/blog/blog-1.jpg" className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                  </div>
                </div>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

              </div>

            </div>
          </div>{/* End post item */}

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="200">

              <div className="post-img position-relative overflow-hidden">
                <img src="/img/blog/blog-2.jpg" className="img-fluid" alt=""/>
                <span className="post-date">July 17</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                  </div>
                </div>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

              </div>

            </div>
          </div>{/* End post item */}

          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src="/img/blog/blog-3.jpg" className="img-fluid" alt=""/>
                <span className="post-date">September 05</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                  </div>
                </div>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

              </div>

            </div>
          </div>{/* End post item */}

        </div>

      </div>

    </section>{/* /Recent Blog Posts Section */}

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
 
  <a href="#" id="scroll-top" className="scroll-top1 d-flex align-items-center justify-content-center " onClick={handleScrollToTop} > <i className="bi bi-chat-right-text" style={{width:'50px'}}></i> Inquiries Here</a>
  <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center " onClick={handleScrollToTop} ><i className="bi bi-arrow-up-short"></i></a>

  {/* Preloader */}
  {/* <div id="preloader"></div>         */}
</div>
  )
}

export default Index