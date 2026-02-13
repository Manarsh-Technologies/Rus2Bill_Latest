
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Home.css';

const Home = () => {
    const [activeTab, setActiveTab] = useState('field');
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState<string | null>('1');
    const [isContactFormVisible, setIsContactFormVisible] = useState(false);
    const [isScheduleDemoVisible, setIsScheduleDemoVisible] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setActiveSlide(0);
        setIsMobileNavOpen(false); // Close mobile nav if open
    };

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const tabsData: any = {
        field: {
            title: 'Field User Flow',
            slides: [
                {
                    title: 'Identify Project',
                    desc: "Identify the activity location you're performing.",
                    img: 'images/amtslides-v1/fielduser/step_1.png',
                    fullDesc: "Identify the activity location you're performing."
                },
                {
                    title: 'Choose Units',
                    desc: "Pick the units you're working on for this location.",
                    img: 'images/amtslides-v1/fielduser/step_2.png',
                    fullDesc: "Pick the units you're working on for this location."
                },
                {
                    title: 'Update Work Details',
                    desc: 'Enter quantities or measurements and capture required photos.',
                    img: 'images/amtslides-v1/fielduser/step_3.png',
                    fullDesc: 'Enter quantities or measurements and capture required photos.'
                },
                {
                    title: 'Submit',
                    desc: 'Review your entries and submit the update.',
                    img: 'images/amtslides-v1/fielduser/step_4.png',
                    fullDesc: 'Review your entries and submit the update.'
                }
            ]
        },
        audit: { // Corresponds to "Safety Audit Flow"
            title: 'Safety Audit Flow',
            slides: [
                {
                    title: 'Dashboard',
                    desc: 'Review project status & issues to address',
                    img: 'images/amtslides/admin/1-Admin-App-Flow-dashboard.png',
                    fullDesc: 'Review project status & issues to address.'
                },
                {
                    title: 'Project Details & Job Details',
                    desc: 'Add new project or review project details and address project issues.',
                    img: 'images/amtslides/admin/2-Admin-App-Flow-project-and-job-details.png',
                    fullDesc: 'Add new project or review project details and address project issues.'
                },
                {
                    title: 'Create Reports',
                    desc: 'Export custom reports about status, finances, and quality.',
                    img: 'images/amtslides/admin/3-Admin-App-Flow-create-reports.png',
                    fullDesc: 'Export custom reports about status, finances, and quality.'
                }
            ]
        },
        inspector: {
            title: 'Inspector Audit Flow',
            slides: [
                {
                    title: 'Identify Project',
                    desc: 'Select your project, sheet, and inspection location to begin.',
                    img: 'images/amtslides-v1/fielduser/step_1.png',
                    fullDesc: 'Select your project, sheet, and inspection location to begin.'
                },
                {
                    title: 'Choose Units for Inspection',
                    desc: 'Choose the project, sheet, and units that require inspection.',
                    img: 'images/amtslides-v1/fielduser/step_2.png',
                    fullDesc: 'Choose the project, sheet, and units that require inspection.'
                },
                {
                    title: 'Inspect & Verify',
                    desc: 'Answer checklist questions, review work quality, and capture proof photos on-site.',
                    img: 'images/amtslides-v1/fielduser/step_3.png',    
                    fullDesc: 'Answer checklist questions, review work quality, and capture proof photos on-site.'
                },
                {
                    title: 'Submit Inspection',
                    desc: 'Sign off and submit the inspection report instantly.',
                    img: 'images/amtslides-v1/fielduser/step_4.png',
                    fullDesc: 'Sign off and submit the inspection report instantly.'
                }
            ]
        }
    };

    const currentTabContent = tabsData[activeTab];

    const nextSlide = () => {
        if (currentTabContent && activeSlide < currentTabContent.slides.length - 1) {
            setActiveSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide(prev => prev - 1);
        }
    };

    return (
        <div className="home-wrapper">
             <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <div className="container">
                    <a className="navbar-brand d-none-small" href="index.html"><img src="images/logo.svg" alt="RUS2Bill" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="images/logo.svg" alt="icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#work-structure">Work Structure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#product-features">Product Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#free-demo">FREE Demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="faqs.html">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mob-login">
                        <a className="btn btn-login" href="login.html">Login / Sign Up</a>
                    </div>
                </div>
            </nav>

            <main className="main-area">
                <div className="banner-top-section">
                    <div className="banner-top-over">
                        <div className="container">
                            <div className="row rw-alc rev-col">
                                <div className="col-md-6">
                                    <div className="banner-caption">
                                        <h1>Easy real time monitoring of construction workflow</h1>
                                        <p>RUS2Bill Supports Rapid Invoicing of Construction Projects with improved accuracy by allowing for real-time recording Field Progress.</p>
                                        <a href="#free-demo" className="btn btn-green">Schedule a FREE Demo</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner-hero">
                                        <div className="banner-hero-in ">
                                            <img src="images/top-banner.png" alt="Top Banner" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Slider Area */}
                <div className="built-box-area vdarea">
                    <div className="container">
                        <div className="video-box text-center">
                            <h2 className="heading-1">How this app work?</h2>
                            {/* How It Slider Start */}
                            <div className="light-gr-bg amtslidebx-section" >
                                <div className="testi-fix">
                                    <div className="dskhide smallnavpil" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                                        <span id="myselecthd">{currentTabContent.title}</span> 
                                        <span className="icdcaret" id="opennavpill"><i className="fa fa-caret-down"></i></span>
                                    </div>
                                    <ul className={`nav nav-pills nav-fill amsldie-pill ${isMobileNavOpen ? 'd-block' : ''}`} id="howit2" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${activeTab === 'field' ? 'active' : ''}`} onClick={() => handleTabChange('field')} type="button">Field User Flow</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${activeTab === 'audit' ? 'active' : ''}`} onClick={() => handleTabChange('audit')} type="button">Safety Audit Flow</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${activeTab === 'inspector' ? 'active' : ''}`} onClick={() => handleTabChange('inspector')} type="button">Inspector Audit Flow</button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="myTabContent1">
                                    <div className="tab-pane fade show active" role="tabpanel">
                                        <div className="amtslide-section cars-ind-out2 ">
                                            <div className="amtslide-box">
                                                <div className="testi-fix">
                                                    <div className="carousel slide">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-3">
                                                                <div className={`carousel-sldem thumbindias ${activeTab === 'field' ? 'filedid' : activeTab === 'audit' ? 'safteyid' : 'inspectid'}`}>
                                                                    {currentTabContent.slides.map((slide:any, index:number) => (
                                                                        <button 
                                                                            key={index} 
                                                                            type="button" 
                                                                            className={`${activeSlide === index ? 'active currentbtn' : ''} ${index < activeSlide ? 'completed' : ''}`}
                                                                            onClick={() => setActiveSlide(index)}
                                                                        >
                                                                            <span className="sll-t1">{slide.title}</span> 
                                                                            <span className="sll-desc">{slide.desc}</span> 
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-9">
                                                                <div className="carousel-inner">
                                                                    <div className="carousel-item active">
                                                                        <div className="asr-caption">
                                                                            <div className="row">
                                                                                <div className="col-lg-12">
                                                                                    <div className="sld-body">
                                                                                        <span className="indesc dskhide">{currentTabContent.slides[activeSlide]?.fullDesc}</span> 
                                                                                        <img src={currentTabContent.slides[activeSlide]?.img} alt={currentTabContent.slides[activeSlide]?.title} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <button 
                                                                        className="arrowOut1 arr-lft1" 
                                                                        type="button"
                                                                        onClick={prevSlide}
                                                                        style={{ display: activeSlide === 0 ? 'none' : 'flex' }}
                                                                    >
                                                                        <i className="fa fa-caret-left"></i>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button 
                                                                        className="arrowOut1 arr-rgt1" 
                                                                        type="button"
                                                                        onClick={nextSlide}
                                                                        style={{ display: activeSlide === currentTabContent.slides.length - 1 ? 'none' : 'flex' }}
                                                                    >
                                                                        <i className="fa fa-caret-right"></i>
                                                                        <span className="visually-hidden">Next</span>
                                                                    </button>  
                                                                </div>
                                                                <div className="carousel-indicators">
                                                                    {currentTabContent.slides.map((_:any, index:number) => (
                                                                        <button 
                                                                            key={index}
                                                                            type="button" 
                                                                            className={activeSlide === index ? 'active' : ''} 
                                                                            onClick={() => setActiveSlide(index)}
                                                                        ></button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Built with */}
                <div className="built-box-area pd-100" id="work-structure">
                    <div className="container">
                        <div className="clear-50"></div>
                        <div className="title-grn">
                            <h1>Simple Work Structure</h1>
                        </div>
                        <div className="built-box-inner">
                            <h2 className="heading-1">Built with three types<br /> of users in mind.</h2>
                            <div className="clear-40"></div>
                            <div className="box-3-built slider">
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="item">
                                            <div className="box-3 rd-bx pd-box">
                                                <div className="box-3-mid">
                                                    <div className="box-3-head">
                                                        <img src="images/admins.svg" alt="admins" />
                                                        <h3>Admin users</h3>
                                                    </div>
                                                    <p>Admin users are the back office, who sends out your invoices.</p>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="built-price">
                                                                <p>Less than 20 licenses</p>
                                                                <span className="currency-blt">$</span>
                                                                <span className="amount-blt">50</span>
                                                                <span className="duration-blt">Monthly</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="box-3-bottom">
                                                                <a className="btn btn-white-gr" href="signup">Sign Up</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="item">
                                            <div className="box-3 gr-bx pd-box">
                                                <div className="box-3-mid">
                                                    <div className="box-3-head">
                                                        <img src="images/feild-users.svg" alt="feild-users" />
                                                        <h3>Field Users</h3>
                                                    </div>
                                                    <p>Field Users are the front line, who report all the work being done in real time.</p>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="built-price">
                                                                <p>Less than 20 licenses</p>
                                                                <span className="currency-blt">$</span>
                                                                <span className="amount-blt">25</span>
                                                                <span className="duration-blt">Monthly</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="box-3-bottom">
                                                                <a className="btn btn-white-gr" href="signup">Sign Up</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="item">
                                            <div className="box-3 bl-bx pd-box">
                                                <div className="box-3-mid">
                                                    <div className="box-3-head">
                                                        <img src="images/inspectors.svg" alt="inspectors" />
                                                        <h3>Inspectors</h3>
                                                    </div>
                                                    <p>Inspectors protect your investment as they submit safety reports and document incidents.</p>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="built-price">
                                                                <p>Less than 20 licenses</p>
                                                                <span className="currency-blt">$</span>
                                                                <span className="amount-blt">25</span>
                                                                <span className="duration-blt">Monthly</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-5">
                                                            <div className="box-3-bottom">
                                                                <a className="btn btn-white-gr" href="signup">Sign Up</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear-50"></div>
                        <div className="box-part2">
                            <div className="row">
                                <div className="col-lg-4 blk-bx brd-rds form-sidebx">
                                    <div className="box-part2-one">
                                        <div className="box-3-head">
                                            <img src="images/enterprise.svg" alt="enterprise" />
                                            <h3>Enterprise</h3>
                                        </div>
                                        <div className="box-3-mid ">
                                            <div className="hide-desk grn-text">
                                                <p>Greater than 20 license</p>
                                                <div className="built-price wh-curr mb-3">
                                                    <span className="currency-blt-big">$</span>
                                                    <span className="amount-blt-big">5K</span>
                                                    <span className="duration-blt-big">Starting</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <ul className="list-tick">
                                                <li>Unit Logic</li>
                                                <li>Make Field Life Easier!</li>
                                                <li>EZ As-Built</li>
                                                <li>24/7 Tool Support</li>
                                                <li>Custom Development Options</li>
                                                <li>including White Label</li>
                                            </ul>
                                            <div className="hide-desk">
                                                <button id="contactShow" onClick={() => setIsContactFormVisible(!isContactFormVisible)} className="btn btn-green">Contact Us</button>
                                            </div>
                                            <div className="hide-mob">
                                                <hr />
                                                <p className="text-white">Greater than 20 license</p>
                                                <div className="built-price wh-curr mb-3">
                                                    <span className="currency-blt-big">$</span>
                                                    <span className="amount-blt-big">5K</span>
                                                    <span className="duration-blt-big">Starting</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-lg-8 ${isContactFormVisible ? 'd-block' : 'd-none d-lg-block'}`}>
                                    <div className="box-part2-two">
                                        <form id="inquiry-form" method="post" action="javascript:void(0);">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name*" required />
                                                <span id="alt1" style={{ color: 'red' }}></span>
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" name="compname" id="compname" placeholder="Company Name" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Business Email*" />
                                                <span id="alt3" style={{ color: 'red' }}></span>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <input type="tel" className="form-control" name="phone" id="phone" pattern="[0-9]{10}" placeholder="Phone Number*" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <select className="form-select" name="csize" id="csize" required defaultValue="">
                                                            <option disabled value="">- Select Company Size -</option>
                                                            <option value="30">less than 30 </option>
                                                            <option value="40">less than 40 </option>
                                                            <option value="50">less than 50 </option>
                                                            <option value="50">50+ </option>
                                                        </select>
                                                        <span id="alt4" style={{ color: 'red' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <textarea className="form-control" name="message" id="message" rows={4} placeholder="How did you hear about us?*" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-green">Send Message</button>
                                        </form>
                                        <div id="response-message"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>

                 {/* Product Feature Start */}
                    <div className="product-section pd-100 cars-ind-out" id="product-features">
                        <div className="container">
                            <div className="product-section-fxw">
                                <div className="title-grn">
                                    <h1>Product Features</h1>
                                </div>
                                <div className="clear-10"></div>
                                <div className="product-area">
                                      <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="box-feat">
                                                    <div className="box-feat-head">
                                                        <div className="car-image"> <img src="images/Unit-Logic-icon.svg" alt="Unit Logic" /> </div>
                                                    </div>
                                                    <div className="box-feat-mid">
                                                        <h3>Unit Logic</h3>
                                                        <p>Preload your unit-based logic to mitigate errors from the field and increase accuracy of reporting.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                             <div className="col-md-4 mb-4">
                                                <div className="box-feat">
                                                    <div className="box-feat-head">
                                                        <div className="car-image"> <img src="images/Make-Field-Life-Easier-icon.svg" alt="Field Life" /> </div>
                                                    </div>
                                                    <div className="box-feat-mid">
                                                        <h3>Make Field Life Easier!</h3>
                                                        <p>Allow the field to work ONLINE or OFFLINE as they perform their tasks.</p>
                                                    </div>
                                                </div>
                                            </div>

                                             <div className="col-md-4 mb-4">
                                                <div className="box-feat">
                                                    <div className="box-feat-head">
                                                        <div className="car-image"> <img src="images/EZ-As-Built-icon.svg" alt="EZ As-Built" /> </div>
                                                    </div>
                                                    <div className="box-feat-mid">
                                                        <h3>EZ As-Built</h3>
                                                        <p>Automate your redline process. As the field is performing their work, the as-built is being created!</p>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                 {/* Free Demo  */}
                   <div className="free-demo pd-100" id="free-demo">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="schd-img pd-box hide-mob">
                                        <img src="images/Rus2bill-logo-drkbg.svg" alt="Rus2bill-logo-drkbg" />
                                    </div>
                            
                                    <div className="scdemon-sec hide-desk">
                                        <button type="button" id="scheduleShow" onClick={() => setIsScheduleDemoVisible(!isScheduleDemoVisible)} className="dmsch btn btn-white-gr">Schedule Demo</button>
                                    </div>
                                </div>
                                
                                <div className={`col-lg-7 hide-mob sch-frmb ${isScheduleDemoVisible ? 'd-block' : 'd-none d-lg-block'}`}>
                                    <div className="box-part2-two">
                                        <form id="inquiry-form2" action="javascript:void(0);" method="post">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" name="name2" id="name2" placeholder="Name*" required />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" name="compname2" id="compname2" placeholder="Company Name" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" className="form-control" name="email2" id="email2" placeholder="Business Email*" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <input type="tel" className="form-control" name="phone2" id="phone2" pattern="[0-9]{10}" placeholder="Phone Number*" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <select className="form-select" name="csize2" id="csize2" required defaultValue="">
                                                            <option disabled value="">- Select Company Size -</option>
                                                            <option value="30">less than 30 </option>
                                                            <option value="40">less than 40 </option>
                                                            <option value="50">less than 50 </option>
                                                            <option value="50">50+ </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Date/Time pickers simplified for now */}
                                             <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <input type="date" className="form-control date-icon" name="date2" id="date2" placeholder="Select Date" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <input type="time" className="form-control time-icon" name="time2" id="time2" placeholder="Select Time" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <textarea className="form-control" name="message2" id="message2" rows={4} placeholder="How did you hear about us?*" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-green btn-right">Submit</button>
                                        </form>         
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>

                {/* Social Area */}
                <div className="gm-socially-active pd-100 light-gr-bg">
                    <div className="container cont-comp">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="soc-cont">
                                    <div className="gm-big-social-icons mb-5">
                                        <a target="_blank" href="https://www.instagram.com/rus2bill/" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                                        <a target="_blank" href="https://www.linkedin.com/company/rus2bill/" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                    <h2 className="heading-1">We’re socially active. Follow us.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <section className="faq-section pd-100">
                    <div className="container">
                        <div className="title-grn">
                            <h1>FAQs</h1>
                        </div>
                        <div className="mb-5">
                            <h2 className="heading-1">Lets clear your doubts.</h2>
                        </div>
                        <div className="faq-box">
                            <div className="accordion black-acord mb-4" id="faqHome">
                                {['1', '2', '3', '4', '5'].map((id) => (
                                    <div className="accordion-item" key={id}>
                                        <h2 className="accordion-header">
                                            <button 
                                                className={`accordion-button ${activeAccordion === id ? '' : 'collapsed'}`} 
                                                type="button" 
                                                onClick={() => toggleAccordion(id)}
                                            >
                                                {id === '1' && 'How do I sign up for Rus2Bill ?'}
                                                {id === '2' && 'Is RUS2BILL available on the Apple play store and Android Market Place?'}
                                                {id === '3' && 'How many members of my team can be a part of my RUS2BILL account?'}
                                                {id === '4' && 'How often do I get charged for my RUS2BILL account?'}
                                                {id === '5' && 'Do Field Users have the same access as Super Admins?'}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${activeAccordion === id ? 'show' : ''}`}>
                                            <div className="accordion-body">
                                                {id === '1' && 'If you’re ready, just click the sign-up button and you’ll be redirected to fill in your credentials and your account will be created! Please sign up for a free demo if you need more information and one of our experts will schedule a meeting time that accommodates to your schedule.'}
                                                {id === '2' && 'Yes, RUS2Bill is available on both the Apple play store and Android Market Place!'}
                                                {id === '3' && 'When you sign-up, you’re provided Super Admin access in desktop view and one free field worker account via mobile app view. Freely add and remove users as you’re charged for only active accounts.'}
                                                {id === '4' && 'To sign-up, there’s an initial $70 charge that includes your Super Admin account and one free field worker account. When you need to add more members, there will be a $50 charge per added member.'}
                                                {id === '5' && 'No, Field Users will only have access to the mobile app. Super Admins have access to both desktop and mobile view, keeping all financial information private to the super admin account view.'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <div className="viewBtn">
                                <a href="faqs.html" className="btn btn-green">View All </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="foot-left">
                                    <div className="foot-social mb-5 mt-2 hide-desk">
                                        <a href="https://www.instagram.com/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Insta-footer.svg" alt="Insta-footer" className="sc-ft" /></a>
                                        <a href="https://www.linkedin.com/company/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Linkedin-Footer.svg" alt="Linkedin-Footer" className="sc-ft" /></a>
                                        <img src="images/call.svg" alt="Insta-footer" className="sc-ft" /><a href="tel:+1(440) 904-6496" className="ft-call">+1 (440) 904-6496</a>
                                    </div>
                                    <img src="images/Rus2bill-logo-drkbg.svg" alt="footer-logo" className="mb-3 footer-logo" />
                                    <h4 className="mb-4 hide-mob">&copy; RUS2BILL is a registered trademark</h4>
                                    <div className="copy-mobile">
                                        <p>&copy;2023 RUS2BILL</p>
                                    </div>
                                    <div className="foot-social hide-mob">
                                        <a href="https://www.instagram.com/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Insta-footer.svg" alt="Insta-footer" className="sc-ft" /></a>
                                        <a href="https://www.linkedin.com/company/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Linkedin-Footer.svg" alt="Linkedin-Footer" className="sc-ft" /></a>
                                        <img src="images/call.svg" alt="Insta-footer" className="sc-ft" /><a href="tel:+1(440) 904-6496" className="ft-call">+1 (440) 904-6496</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="foot-right">
                                    <p>We strive to make our website content accessible and user-friendly. If you are having difficulty viewing the content on this website or navigating the site, please contact our Customer Service Team via hello@rus2bill.com we will be happy to assist you.</p>
                                    <div className="ft-list">
                                        <ul>
                                            <li> <a href="privacy.html"  >Privacy </a></li>
                                            <li> <a href="terms-and-conditions.html"  >Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fxd-icon">
                            <a href="signup"><img src="images/15-days-trail.svg" alt="15-days-trail" className="img-fluid trial-logo-fx" /></a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Home;
