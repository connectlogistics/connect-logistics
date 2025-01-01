'use client'
import React, { useEffect } from 'react'
import OverlayModal from '@/global_components/InquiryModal';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';


const About = () => {
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
                            <li><Link href="/" >Home</Link></li>
                            <li><Link href="/about" className="active">About</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
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
                <div className="page-title dark-background" style={{backgroundImage: "url(/img/page-title-bg.jpg)"}}>
                    <div className="container position-relative">
                        <h1>About</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><Link href="">Home</Link></li>
                                <li className="current">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}

                {/* About Section */}
                <section id="about" className="about section">

                    <div className="container">

                        <div className="row position-relative">

                            <div className="col-lg-7 about-img" data-aos="zoom-out" data-aos-delay="200"><Image fill={true} src="/img/about1.jpg" alt=''/></div>

                            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                                <h2 className="inner-title">Company History</h2>
                                <div className="our-story">
                                    <h4>Est 1988</h4>
                                    <h3>Our Story</h3>
                                    <p>Connect Logistics Cargo LLC was established with a vision to be an indispensable partner to its clients, providing global logistics solutions with a network of agents across Europe, Asia, CIS, Africa, the Baltic region, and the Middle East. The company was founded on the principles of reliability, efficiency, and a commitment to connecting local businesses to a world of opportunity.</p>
                                    {/* <ul>
                                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                                        <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                                        <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                                    </ul> */}
                                    <p>Over the years, Connect Logistics Cargo LLC has expanded its services to include a wide range of logistics solutions. This expansion has been driven by the companies commitment to innovation and customer satisfaction.</p>

                                    <div className="watch-video d-flex align-items-center position-relative">
                                        <i className="bi bi-play-circle"></i>
                                        <Link href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox stretched-link">Watch Video</Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>{/* /About Section */}

                {/* Stats Counter Section */}
                <section id="stats-counter" className="stats-counter section">

                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Stats</h2>
                        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
                    </div>{/* End Section Title */}

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>{/* End Stats Item */}

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Projects</p>
                                    </div>
                                </div>
                            </div>{/* End Stats Item */}

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-headset color-green flex-shrink-0"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>
                            </div>{/* End Stats Item */}

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="bi bi-people color-pink flex-shrink-0"></i>
                                    <div>
                                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Hard Workers</p>
                                    </div>
                                </div>
                            </div>{/* End Stats Item */}

                        </div>

                    </div>

                </section>{/* /Stats Counter Section */}

                {/* Alt Services Section */}
               
                {/* /Alt Services Section */}

                {/* Alt Services 2 Section */}
               {/* /Alt Services 2 Section */}

                {/* Team Section */}
                <section id="team" className="team section">

                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
                    </div>{/* End Section Title */}

                    <div className="container">

                        <div className="row gy-5">

                            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <Image width={300} height={300} src="/img/team/team-1.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                        <Link href="#"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    {/* <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p> */}
                                </div>
                            </div>{/* End Team Member */}

                            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                                <div className="member-img">
                                    <Image width={300} height={300} src="/img/team/team-2.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                        <Link href="#"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    {/* <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p> */}
                                </div>
                            </div>{/* End Team Member */}

                            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                                <div className="member-img">
                                    <Image width={300} height={300} src="/img/team/team-3.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                        <Link href="#"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    {/* <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p> */}
                                </div>
                            </div>{/* End Team Member */}

                            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
                                <div className="member-img">
                                    <Image width={300} height={300} src="/img/team/team-4.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                        <Link href="#"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    {/* <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p> */}
                                </div>
                            </div>{/* End Team Member */}

                            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
                                <div className="member-img">
                                    <Image width={300} height={300} src="/img/team/team-5.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                        <Link href="#"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Brian Doe</h4>
                                    <span>Marketing</span>
                                    {/* <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p> */}
                                </div>
                            </div>{/* End Team Member */}

                            <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
                                <div className="member-img">
                                    <Image width={300} height={300} src="/img/team/team-6.jpg" className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter-x"></i></Link>
                                        <Link href="#"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Josepha Palas</h4>
                                    <span>Operation</span>
                                    {/* <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p> */}
                                </div>
                            </div>{/* End Team Member */}

                        </div>

                    </div>
                </section>
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
            <Link href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center " onClick={handleScrollToTop}><i className="bi bi-arrow-up-short"></i></Link>
        </>
    )
}

export default About