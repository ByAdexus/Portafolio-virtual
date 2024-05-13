import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos CSS de Bootstrap
import 'jquery'; // Importa jQuery (se utiliza globalmente)
import 'bootstrap/dist/js/bootstrap.min.js';



const PortfolioPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div id="top" className="hero background-overlay">
                {/* Hero Content */}
                <div className="hero-content">
                    <h1>I am John Smith</h1>
                    <p className="hero-job"><span>I'M A CREATIVE WEB DEVELOPER</span></p>
                    <p className="hero-job-desc">I STAND ON A SWEET SPOT WHERE DESIGN &amp; CODE INTERSECTS.</p>
                </div>
                {/* Hero Arrow */}
                <div className="hero-arrow page-scroll home-arrow-down">
                    <a href="#intro"><i className="fa fa-angle-double-down" aria-hidden="true"></i></a>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Header Navigation */}
            <header id="masthead" className="site-header">
                <nav id="primary-navigation" className="site-navigation" data-spy="affix">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#portfolio-perfect-collapse" aria-expanded="false">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* Site Logo */}
                            <div className="page-scroll site-logo">
                                <a href="#top">John</a>
                            </div>
                        </div>
                        {/* Main Menu */}
                        <div className="main-menu collapse navbar-collapse" id="portfolio-perfect-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="page-scroll"><a href="#top">Home</a></li>
                                <li className="page-scroll"><a href="#intro">Intro</a></li>
                                <li className="page-scroll"><a href="#about">About</a></li>
                                <li className="page-scroll"><a href="#services">Services</a></li>
                                <li className="page-scroll"><a href="#works">Works</a></li>
                                <li className="page-scroll"><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* End Header Navigation */}

            {/* Main Content */}
            <main id="main" className="site-main">
                {/* Hello Section */}
                <section className="site-section section-hello" id="intro">
                    <div className="container">
                        <h2>HELLO &amp; WELCOME</h2>
                        <p className="section-subtitle"><span>EXPLORE OUR WORLD</span></p>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="main-service text-right">
                                    <div className="rectangle">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                    <h3>We Meet Deadlines</h3>
                                    <p>Your deadline is the most important value for us. Our job is to make sure the job is done perfectly before the deadline.</p>
                                </div>
                                <div className="main-service text-right">
                                    <div className="rectangle">
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                    </div>
                                    <h3>Communication Is Key</h3>
                                    <p>Our team is available to check on your questions and take in feedback as soon as possible.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="big-rectangle">
                                    <img src="src/img/john-logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="main-service text-left">
                                    <div className="rectangle">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                    <h3>Quality Control</h3>
                                    <p>We test everything to make sure that your project is fully functional, cross-browser compatible, and meets your specifications.</p>
                                </div>
                                <div className="main-service text-left">
                                    <div className="rectangle">
                                        <i className="fa fa-list" aria-hidden="true"></i>
                                    </div>
                                    <h3>Pixel Perfect</h3>
                                    <p>We develop meaningful digital products and experiences that matter with design thinking and creative craftsmanship.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Hello Section */}

                {/* About Section */}
                <section className="site-section section-about text-center" id="about">
                    <div className="container">
                        <h2>ABOUT John WORK</h2>
                        <p className="section-subtitle"><span>Our goal is to build products and services</span></p>
                        <div className="row">
                            <div className="col-sm-3 col-xs-6">
                                <div className="feature-about">
                                    <div className="medium-rectangle rectangle">
                                        <i className="fa fa-laptop" aria-hidden="true"></i>
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="feature-about">
                                    <div className="medium-rectangle rectangle">
                                        <i className="fa fa-code" aria-hidden="true"></i>
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>The web development process involves taking the graphical elements defined in the design process and coding them into a custom theme.</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="feature-about">
                                    <div className="medium-rectangle rectangle">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                    <h3>SEO Optimization</h3>
                                    <p>Go farther than you thought you could. With us, you can be in the top results of searches.</p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-6">
                                <div className="feature-about">
                                    <div className="medium-rectangle rectangle">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <h3>Social Media</h3>
                                    <p>It's important to keep your brand consistent and recognizable across all platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section */}

               {/* Skills Section */}
            <section className="site-section section-skills">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>SKILLS WE GOT</h2>
                            <div className="progress-group">
                                <p>Web Design</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <p>Web Development</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <p>Mobile Development</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <p>SEO Optimization</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                            <div className="progress-group">
                                <p>Social Media</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Skills Section */}

            {/* Counters Section */}
            <section className="site-section section-counters text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 col-xs-6 col-sm-offset-1">
                            <div className="counter">
                                <div className="rectangle medium-rectangle">
                                    <i className="fa fa-rocket" aria-hidden="true"></i>
                                    <span className="counter-start" data-to="167" data-speed="2000">167</span>
                                </div>
                                <p>Projects Launched</p>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="counter">
                                <div className="rectangle medium-rectangle">
                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                    <span className="counter-start" data-to="25" data-speed="2000">25</span>
                                </div>
                                <p>Awards won</p>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="counter">
                                <div className="rectangle medium-rectangle">
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                    <span className="counter-start" data-to="98" data-speed="2000">98</span>
                                </div>
                                <p>Proposals Sent</p>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="counter">
                                <div className="rectangle medium-rectangle">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                    <span className="counter-start" data-to="945" data-speed="2000">945</span>
                                </div>
                                <p>Hours of work</p>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-12">
                            <div className="counter">
                                <div className="rectangle medium-rectangle">
                                    <i className="fa fa-coffee" aria-hidden="true"></i>
                                    <span className="counter-start" data-to="256" data-speed="2000">256</span>
                                </div>
                                <p>Cups of coffee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Counters Section */}

           {/* Services Section */}
           <section className="site-section section-services" id="services">
                    <div className="container-fluid">
                        <h2>SERVICES WE OFFER</h2>
                        <p className="section-subtitle"><span>Exceptional level of service</span></p>
                    </div>
                    <div className="container">
                        <div id="services-carousel" className="carousel slide" data-ride="carousel">
                            <div className="item-controls text-center">
                                <a href="#services-carousel" className="left btn carousel-control" data-slide="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                                <a href="#services-carousel" className="right btn carousel-control" data-slide="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                            <div className="carousel-indicators nav-tabs text-center">
                                <a className="active" href="#services-carousel" data-slide-to="0">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="service">
                                            <div className="rectangle">
                                                <i className="fa fa-laptop" aria-hidden="true"></i>
                                            </div>
                                            <p className="hidden-xs">Web design</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#services-carousel" data-slide-to="1">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="service">
                                            <div className="rectangle">
                                                <i className="fa fa-code" aria-hidden="true"></i>
                                            </div>
                                            <p className="hidden-xs">Web development</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#services-carousel" data-slide-to="2">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="service">
                                            <div className="rectangle">
                                                <i className="fa fa-mobile" aria-hidden="true"></i>
                                            </div>
                                            <p className="hidden-xs">Mobile Development</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#services-carousel" data-slide-to="3">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="service">
                                            <div className="rectangle">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </div>
                                            <p className="hidden-xs">SEO optimization</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#services-carousel" data-slide-to="4">
                                    <div className="col-xs-4 col-sm-2">
                                        <div className="service">
                                            <div className="rectangle">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <p className="hidden-xs">Social Media</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="service-info">
                                                <h3 className="service-title">Web Design</h3>
                                                <p>Decorations don’t drive home messages. Content does. Reducing text-based content to a visual design element (the shape of the text) can result in bloated and unrealistic client expectations once real data replaces the dummy content. We allow our design decisions to be dictated by the on-page content and messaging, and often our designers use the actual content to inspire interesting elements that might not have been conceived without it.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <img src="src/img/web-design.jpg" className="img-responsive" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                {/* Add more items for other services */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Services Section */}

                {/* Portfolio/Works section */}
                <section className="site-section section-works" id="works">
                    <div className="container">
                        <h2>RECENT WORKS</h2>
                        <p className="section-subtitle"><span>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</span></p>

                        <div className="portfolio">
                            <ul className="portfolio-sorting list-inline">
                                <li><a href="#" className="active" data-group="all">all</a></li>
                                <li><a href="#" className="" data-group="webdesign">Web Design</a></li>
                                <li><a href="#" className="" data-group="webdev">Web Development</a></li>
                                <li><a href="#" className="" data-group="mobileapps">Mobile apps</a></li>
                            </ul>

                            <div id="grid" className="row">
                                {/* Portfolio items go here */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Works section */}

                {/* Twitter section */}
                <section className="section-background section-twitter background-overlay text-center">
                    <div className="container">
                        <div className="rectangle">
                            <i className="fa fa-twitter"></i>
                        </div>
                        <p>Latest from Twitter</p>
                        <p>So here’s how you can integrate sign up and sign in for your web and iOS apps, with AWS Cognito.</p>
                        <a href="#" className="btn btn-inverted">Follow me</a>
                    </div>
                </section>
                {/* End Twitter section */}

                 {/* Contacts Section */}
                <section className="site-section section-contact" id="contact">
                    <div className="container">
                        <h2>CONTACT MIKE</h2>
                        <p className="section-subtitle"><span>Here I am</span></p>
                        <div className="row">
                            <form>
                                <div className="col-md-4">
                                    <input className="form-control" type="text" placeholder="Name" required />
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" type="email" placeholder="Email" required />
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" type="text" placeholder="Subject" required />
                                </div>
                                <div className="col-sm-12">
                                    <textarea className="form-control" placeholder="Your Message" required></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn btn-inverted">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* End Contacts Section */}

                {/* Social Networks Section */}
                <section className="section-networks blue-bg">
                    <div className="container">
                        <a href="#" className="rectangle">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="rectangle">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#" className="rectangle">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="rectangle">
                            <i className="fa fa-youtube-play"></i>
                        </a>
                        <a href="#" className="rectangle">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="#" className="rectangle">
                            <i className="fa fa-dribbble"></i>
                        </a>
                    </div>
                </section>
                {/* End Social Networks Section */}

            </main>

            {/* Footer */}
            <footer id="colophon" className="site-footer">
                <div className="container-fluid">
                    <ul className="list-unstyled list-inline">
                        <li className="page-scroll"><a href="#top">Home</a></li>
                        <li className="page-scroll"><a href="#intro">Intro</a></li>
                        <li className="page-scroll"><a href="#about">About</a></li>
                        <li className="page-scroll"><a href="#services">Services</a></li>
                        <li className="page-scroll"><a href="#works">Works</a></li>
                        <li className="page-scroll"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="page-scroll">
                        <a href="#top" className="rectangle">
                            <i className="fa fa-angle-double-up"></i>
                        </a>
                    </div>
                </div>
                <div className="container text-center">
                    <p className="copyright">&copy; <a href="http://pixelperfect.mk/" target="_blank">PixelPerfect</a> - 2017</p>
                </div>
            </footer>
            {/* End Footer */}
            
            {/* Modals */}
            <div id="portfolioItem1" className="modal fade fade-scale" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="rectangle" data-dismiss="modal"><i className="fa fa-times"></i></a>
                            <img className="img-res" src="src/img/portfolio-1.jpg" alt="" />
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Project title</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="btn">Visit Page</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* More modals for portfolio items (2-8) can be added similarly */}

            {/* JavaScript */}
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/bootstrap-progressbar.min.js"></script>
            <script src="assets/js/jquery.countTo.min.js"></script>
            <script src="assets/js/jquery.easing.min.js"></script>
            <script src="src/js/jquery.shuffle.min.js"></script>
            <script src="src/js/slick.min.js"></script>
            <script src="src/js/touchswipe.min.js"></script>
            <script src="src/js/script.js"></script>
        </div>
    );
};

export default PortfolioPage;