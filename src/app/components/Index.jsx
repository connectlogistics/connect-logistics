'use client'
import OverlayModal from '@/global_components/InquiryModal';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import AOS from 'aos';




const Index = () => {

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <div>
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <Link href="/" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        <Image width={60} height={100} src="/img/logo.png" alt=""  />
        <h1 className="sitename">Connect Logistics</h1> <span>.</span>
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link href='/' className="active">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          
          {/* <li><Link href="">Contact</Link></li> */}
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
              {/* <OverlayModal isMain={true}/> */}
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">

        <div className="carousel-item">
          <Image fill={true} src="/img/hero-carousel/Connect3.jpg" alt=""/>
        </div>

        <div className="carousel-item active">
          <Image fill={true} src="/img/hero-carousel/Connect1.jpg" alt=""/>
        </div>

        <div className="carousel-item">
          <Image fill={true} src="/img/hero-carousel/Connect2.jpg" alt=""/>
        </div>

        <div className="carousel-item">
          <Image fill={true} src="/img/hero-carousel/hero-carousel-3.jpg" alt="" />
        </div>

       
        <Link className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </Link>

        <Link className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </Link>

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
        {/* <section id="constructions" className="constructions section"> */}

          {/* Section Title */}
          {/* <div className="container section-title" data-aos="fade-up">
            <h2>Constructions</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div> */}
          {/* End Section Title */}

          {/* <div className="container">

            <div className="row gy-4">

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg"><Image fill={true} src="/img/constructions-1.jpg" alt=""/></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                        <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End Card Item */}

              {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg"><Image fill={true} src="/img/constructions-2.jpg" alt=""/></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                        <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            {/* End Card Item */}

              {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg"><Image fill={true} src="/img/constructions-3.jpg" alt=""/></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Error beatae dolor inventore aut</h4>
                        <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End Card Item */}

              {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg"><Image fill={true} src="/img/constructions-4.jpg" alt=""/></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                        <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End Card Item */}

            {/* </div> */}

          {/* </div> */}

        {/* </section> */}
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
              <h3>Freight Forwarding</h3>
              <p>Detail services such as sea freight, air freight, and overland transport. Mention specific services like FCL (Full Container Load) and LCL (Less than Container Load) consolidation, door-to-door delivery, and custom brokerage and clearance.</p>              <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
              </div>
                 <h3>Supply Chain Management</h3>
                                    <p>Explain how your company manages the entire supply chain, including procurement, warehousing, and distribution. Highlight any specialized services like just-in-time delivery or vendor-managed inventory.</p>
              <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3>Warehousing and Storage</h3>
                                    <p>Describe your warehousing facilities, including security measures, climate-controlled storage, and inventory management systems.</p>
              <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-trowel-bricks"></i>
              </div>
              <h3>Custom Brokerage Services</h3>
                                    <p>Detail your expertise in customs clearance, documentation, and compliance with regulatory requirements.</p>
              <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-helmet-safety"></i>
              </div>
              <h3>Tracking and Monitoring</h3>
                                    <p>Highlight any real-time tracking systems that allow customers to monitor their shipments. This can include integration with tracking tools and updates on shipment status.</p>
              <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>{/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fa-solid fa-arrow-up-from-ground-water"></i>
              </div>
              <h3>Relocation Services</h3>
                <p>If applicable, describe services related to moving and relocating goods, whether for personal or commercial purposes.</p>
              <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>{/* End Service Item */}

        </div>

      </div>

    </section>{/* /Services Section */}

    {/* Alt Services Section */}
    <section id="alt-services" className="alt-services section">

      <div className="container">

        <div className="row justify-content-around gy-4">
          <div className="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><Image fill={true} src="/img/alt-services.jpg" alt=""/></div>

          <div className="col-lg-5 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <h3>Why Choose Connect Logistics Cargo LLC?</h3>
            {/* <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p> */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-easel flex-shrink-0"></i>
              <div>
                <h4><Link href="" className="stretched-link">Global Network</Link></h4>
                <p>With a network of agents in multiple regions, we offer global reach and local expertise.</p>
              </div>
            </div>{/* End Icon Box */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-patch-check flex-shrink-0"></i>
              <div>
                <h4><Link href="" className="stretched-link">Safe and Secure</Link></h4>
                <p>Our facilities are equipped with advanced security measures, including round-the-clock camera surveillance, to ensure the safety of your goods.</p>
              </div>
            </div>{/* End Icon Box */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><Link href="" className="stretched-link">Flexible Solutions</Link></h4>
                <p>We offer tailored logistics solutions to meet the unique needs of each client, ensuring flexibility and adaptability.</p>
              </div>
            </div>{/* End Icon Box */}

            <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-brightness-high flex-shrink-0"></i>
              <div>
                <h4><Link href="" className="stretched-link">Expert Team</Link></h4>
                <p>Our team of experienced professionals is dedicated to providing efficient and reliable logistics solutions.</p>
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
            <Link href='' className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
              <h4>Warehousing and Storage</h4>
            </Link>
          </li>{/* End tab nav item */}

          <li className="nav-item col-3" role="presentation">
            <Link href='' className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex={-1} role="tab">
              <h4>Customer-Centric Approach</h4>
            </Link>{/* End tab nav item */}

          </li>
          <li className="nav-item col-3" role="presentation">
            <Link href='' className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex={-1} role="tab">
              <h4>Efficiency and Reliability</h4>
            </Link>
          </li>{/* End tab nav item */}

          <li className="nav-item col-3" role="presentation">
            <Link href='' className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex={-1} role="tab">
              <h4>Safety and Security</h4>
            </Link>
          </li>
          {/* End tab nav item */}

        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

          <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>State-of-the-Art Warehousing</h3>
                <p>Located in the Jebel Ali Free Zone, offering 510 square meters of storage space and additional open yard facilities for bulk storage. The warehouses are equipped with secure and climate-controlled storage options</p>
              </div>
              <div className="col-lg-6 order-1  order-lg-2 text-center">
                <Image width={600} height={300} src="/img/features-1.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

          <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Clear Communication</h3>
                
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Prompt response times and efficient problem-solving skills to address client inquiries and resolve issues quickly.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Tailored logistics solutions to meet the specific needs of clients, ensuring flexibility and reliability.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <Image width={600} height={300} src="/img/features-2.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

          <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Inventory Management</h3>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Comprehensive control of available stock and data management to plan and anticipate demand, avoiding stockouts and ensuring the correct product is delivered in the right amount, at the right place, and at the right time.</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Expertise in selecting the most efficient routes, modes of transportation, and carrier options to reduce transit times and costs.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <Image width={600} height={300} src="/img/features-3.jpg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>{/* End tab content item */}

          <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Safe and Secure</h3>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Ensuring all shipments are safe and secure, with options for insured transportation to protect against losses.</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <Image width={600} height={300} src="/img/features-4.jpg" alt="" className="img-fluid"/>
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
                <Image width={415} height={300} src="/img/projects/remodeling-1.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/construction-1.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/repairs-1.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/design-1.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/remodeling-2.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/construction-2.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/repairs-2.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/design-2.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/remodeling-3.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/construction-3.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/repairs-3.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/projects/design-3.jpg" className="img-fluid" alt=""/>
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
                <Image width={415} height={300} src="/img/blog/blog-1.jpg" className="img-fluid" alt=""/>
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

                <Link href="" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>

              </div>

            </div>
          </div>{/* End post item */}

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="200">

              <div className="post-img position-relative overflow-hidden">
                <Image width={415} height={300} src="/img/blog/blog-2.jpg" className="img-fluid" alt=""/>
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

                <Link href="" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>

              </div>

            </div>
          </div>{/* End post item */}

          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <Image width={415} height={300} src="/img/blog/blog-3.jpg" className="img-fluid" alt=""/>
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

                <Link href="" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>

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
  <Link href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center " onClick={handleScrollToTop} ><i className="bi bi-arrow-up-short"></i></Link>

  {/* Preloader */}
  {/* <div id="preloader"></div>         */}
</div>
  )
}

export default Index