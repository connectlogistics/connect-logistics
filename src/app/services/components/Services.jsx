'use client'
import React, { useEffect } from 'react'
import OverlayModal from '@/global_components/InquiryModal';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';

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
                        <Image width={60} height={100} src="/img/logo.png" alt=""  />
                        <h1 className="sitename">Connect Logistics</h1> <span>.</span>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/services" className="active">Services</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            {/* <li><Link href="blog.html">Blog</Link></li>
          <li className="dropdown"><Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
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
                            {/* <li><Link href="contact.html">Contact</Link></li> */}
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
                                <li><Link href="">Home</Link></li>
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
                                    <h3>Freight Forwarding</h3>
                                    <p>Detail services such as sea freight, air freight, and overland transport. Mention specific services like FCL (Full Container Load) and LCL (Less than Container Load) consolidation, door-to-door delivery, and custom brokerage and clearance.</p>
                                    <Link href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></Link>
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

                {/* Features Cards Section */}
               {/* /Features Cards Section */}

                {/* Alt Services 2 Section */}
                <section id="alt-services-2" className="alt-services-2 section">

                    <div className="container">

                        <div className="row justify-content-around gy-4">

                            <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                                <h3>Streamlining Your Logistics Operations</h3>
                                <p>In todays fast-paced business environment, efficient logistics management is essential for success. At Connect  Logistics, we specialize in providing comprehensive logistics solutions tailored to meet the unique needs of your business. Our services encompass everything from freight transportation and warehousing to supply chain management and real-time tracking.</p>

                                <div className="row">

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-easel flex-shrink-0"></i>
                                        <div>
                                            <h4>Expertise</h4>
                                            <p>With years of experience in the logistics industry, our team understands the complexities of supply chains and is equipped to handle challenges effectively.</p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-patch-check flex-shrink-0"></i>
                                        <div>
                                            <h4>Technology-Driven Solutions</h4>
                                            <p>We leverage the latest technology to optimize your logistics processes, ensuring timely deliveries and enhanced visibility.</p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                    <div className="col-lg-6 icon-box d-flex">
                                        <i className="bi bi-brightness-high flex-shrink-0"></i>
                                        <div>
                                            <h4>Customer-Centric Approach</h4>
                                            <p>Your satisfaction is our priority. We work closely with you to understand your requirements and provide personalized solutions</p>
                                        </div>
                                    </div>{/* End Icon Box */}

                                </div>

                            </div>

                            <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
                                <Image fill={true} src="/img/service1.jpg" alt="" />
                            </div>

                        </div>

                    </div>

                </section>{/* /Linklt Services 2 Section */}

            </main>

            <footer id="footer" className="footer dark-background">

                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <Link href="index.html" className="logo d-flex align-items-center">
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
            <Link href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center " onClick={handleScrollToTop}><i className="bi bi-arrow-up-short"></i></Link>
        </>
    )
}

export default Services