
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import './Home.css';
import ProgressStepper from './ProgressStepper';

const Home = () => {
    const [activeTab, setActiveTab] = useState('field');
    const [activeSlide, setActiveSlide] = useState(0);
    const stepperRef = useRef<HTMLDivElement>(null);
    // const [activeAccordion, setActiveAccordion] = useState<string | null>('1');
    const [isContactFormVisible, setIsContactFormVisible] = useState(false);
    const [isScheduleDemoVisible, setIsScheduleDemoVisible] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isSliderNavOpen, setIsSliderNavOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeUserBox, setActiveUserBox] = useState(0);
    const [activeFeatureBox, setActiveFeatureBox] = useState(0);
    const mobileSliderRef = useRef<HTMLDivElement>(null);



    const testimonials = [
        {
            text: "“The different roles do allow for strong collaboration on real-time progress and to have a lot of the pieces of a construction project in one place. RUS2BILL gives the opportunity to my field workers to feel more in charge of their role with real-time reporting.”",
            author: "Mike",
            role: "Construction company owner"
        },
        {
            text: "“This is an app aimed at construction professionals and provides a thorough means of managing multiple projects across multiple people and teams including field users, admins, and inspectors”",
            author: "Karl Naso",
            role: "Contruction Manager"
        }
    ];

    const nextTestimonial = () => {
        const next = (activeTestimonial + 1) % testimonials.length;
        const element = document.getElementById(`testimonial-box-${next}`);
        if (element) {
            const container = element.parentElement?.parentElement;
            if (container) {
                container.scrollTo({
                    left: element.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
        setActiveTestimonial(next);
    };

    const prevTestimonial = () => {
        const prev = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
        const element = document.getElementById(`testimonial-box-${prev}`);
        if (element) {
            const container = element.parentElement?.parentElement;
            if (container) {
                container.scrollTo({
                    left: element.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
        setActiveTestimonial(prev);
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setActiveSlide(0);
        setIsMobileNavOpen(false); // Close mobile nav if open
        setIsSliderNavOpen(false); // Close slider dropdown on mobile
        if (mobileSliderRef.current) {
            mobileSliderRef.current.scrollLeft = 0;
        }
    };

    // const toggleAccordion = (id: string) => {
    //     setActiveAccordion(activeAccordion === id ? null : id);
    // };

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
                    img: 'images/amtslides-v1/admin/1-Admin-App-Flow-dashboard.png',
                    fullDesc: 'Review project status & issues to address.'
                },
                {
                    title: 'Project Details & Job Details',
                    desc: 'Add new project or review project details and address project issues.',
                    img: 'images/amtslides-v1/admin/2-Admin-App-Flow-project-and-job-details.png',
                    fullDesc: 'Add new project or review project details and address project issues.'
                },
                {
                    title: 'Create Reports',
                    desc: 'Export custom reports about status, finances, and quality.',
                    img: 'images/amtslides-v1/admin/3-Admin-App-Flow-create-reports.png',
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
                    img: 'images/amtslides-v1/inspector/inspector_step2.png',
                    fullDesc: 'Choose the project, sheet, and units that require inspection.'
                },
                {
                    title: 'Inspect & Verify',
                    desc: 'Answer checklist questions, review work quality, and capture proof photos on-site.',
                    img: 'images/amtslides-v1/inspector/inspector_step3.png',
                    fullDesc: 'Answer checklist questions, review work quality, and capture proof photos on-site.'
                },
                {
                    title: 'Submit Inspection',
                    desc: 'Sign off and submit the inspection report instantly.',
                    img: 'images/amtslides-v1/inspector/inspector_step4.png',
                    fullDesc: 'Sign off and submit the inspection report instantly.'
                }
            ]
        }
    };

    const currentTabContent = tabsData[activeTab];

    const nextSlide = () => {
        if (currentTabContent && activeSlide < currentTabContent.slides.length - 1) {
            const nextIdx = activeSlide + 1;
            setActiveSlide(nextIdx);
            if (mobileSliderRef.current) {
                mobileSliderRef.current.scrollTo({
                    left: nextIdx * mobileSliderRef.current.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    const prevSlide = () => {
        if (activeSlide > 0) {
            const prevIdx = activeSlide - 1;
            setActiveSlide(prevIdx);
            if (mobileSliderRef.current) {
                mobileSliderRef.current.scrollTo({
                    left: prevIdx * mobileSliderRef.current.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="home-wrapper">
             <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
                <div className="container">
                    <a className="navbar-brand" href="index.html"><img src="images/logo.svg" alt="RUS2Bill" /></a>
                    <button className="navbar-toggler" type="button" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} aria-controls="navbarCollapse" aria-expanded={isMobileNavOpen} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMobileNavOpen ? 'show' : ''}`} id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#work-structure" onClick={() => setIsMobileNavOpen(false)}>Work Structure</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#product-features" onClick={() => setIsMobileNavOpen(false)}>Product Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#free-demo" onClick={() => setIsMobileNavOpen(false)}>FREE Demo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="faqs.html" onClick={() => setIsMobileNavOpen(false)}>FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#free-demo" onClick={() => setIsMobileNavOpen(false)}>Contact</a>
                            </li>
                        </ul>
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
                                        <p>RUS2BILL Supports Rapid Invoicing of Construction Projects with improved accuracy by allowing for real time recording of Field Progress.</p>
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
                                    <div className="dskhide smallnavpil" onClick={() => setIsSliderNavOpen(!isSliderNavOpen)}>
                                        <span id="myselecthd">{currentTabContent.title}</span> 
                                        <span className="icdcaret" id="opennavpill"><i className="fa fa-caret-down"></i></span>
                                    </div>
                                    <ul className={`nav nav-pills nav-fill amsldie-pill ${isSliderNavOpen ? 'd-block' : ''}`} id="howit2" role="tablist">
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
                                                        {/* MOBILE VIEW (New Horizontal Stepper) */}
                                                        <div className="d-md-none">
                                                            <div className="flex flex-col items-center">
                                                                <div className="w-full mb-8">
                                                                    <ProgressStepper 
                                                                        steps={currentTabContent.slides.map((s: any) => s.title)}
                                                                        currentStep={activeSlide}
                                                                        onStepClick={(index) => {
                                                                            setActiveSlide(index);
                                                                            if (mobileSliderRef.current) {
                                                                                mobileSliderRef.current.scrollTo({
                                                                                    left: index * mobileSliderRef.current.offsetWidth,
                                                                                    behavior: 'smooth'
                                                                                });
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div 
                                                                    className="w-full overflow-x-auto flex flex-nowrap snap-x snap-mandatory hide-scroll"
                                                                    ref={mobileSliderRef}
                                                                    onScroll={(e) => {
                                                                        const target = e.currentTarget;
                                                                        const scrollLeft = target.scrollLeft;
                                                                        const width = target.offsetWidth;
                                                                        const index = Math.round(scrollLeft / width);
                                                                        if (index !== activeSlide && index >= 0 && index < currentTabContent.slides.length) {
                                                                            setActiveSlide(index);
                                                                        }
                                                                    }}
                                                                >
                                                                    {currentTabContent.slides.map((slide: any, index: number) => (
                                                                        <div key={index} className="w-full flex-shrink-0 snap-center px-2">
                                                                            <div className="sld-body text-center">
                                                                                <p className="text-lg text-gray-700 mb-6">
                                                                                    {slide.fullDesc}
                                                                                </p>
                                                                                <div className="inline-block max-w-full">
                                                                                    <img 
                                                                                        src={slide.img} 
                                                                                        alt={slide.title} 
                                                                                        className="w-full h-auto object-contain"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* DESKTOP VIEW (Original Vertical Stepper) */}
                                                        <div className="d-none d-md-block">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-5">
                                                                    <div 
                                                                        ref={stepperRef}
                                                                        className={`carousel-sldem thumbindias ${activeTab === 'field' ? 'filedid' : activeTab === 'audit' ? 'safteyid' : 'inspectid'}`}
                                                                    >
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
                                                                <div className="col-lg-8 col-md-7">
                                                                    <div className="carousel-inner">
                                                                        <div className="carousel-item active">
                                                                            <div className="asr-caption">
                                                                                <div className="sld-body text-center">
                                                                                    <img 
                                                                                        src={currentTabContent.slides[activeSlide]?.img} 
                                                                                        alt={currentTabContent.slides[activeSlide]?.title} 
                                                                                        className="max-h-[500px] object-contain"
                                                                                    />
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
                                                                </div>
                                                            </div>
                                                        </div>
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
                                <div className="row" onScroll={(e) => {
                                    const target = e.target as HTMLDivElement;
                                    const scrollLeft = target.scrollLeft;
                                    const itemWidth = target.offsetWidth * 0.96; 
                                    const newActive = Math.round(scrollLeft / itemWidth);
                                    if (newActive !== activeUserBox && newActive >= 0 && newActive <= 2) {
                                        setActiveUserBox(newActive);
                                    }
                                }}>
                                    <div className="col-md-4 mb-4" id="user-box-0">
                                        <div className="item">
                                            <div className="box-3 rd-bx pd-box">
                                                <div className="box-3-mid">
                                                    <div className="box-3-head">
                                                        <img src="images/admins.svg" alt="admins" />
                                                        <h3>Admin User</h3>
                                                    </div>
                                                    <p>Admin users are the back office, that sends out your invoices.</p>
                                                    <div className="recommendation-acc">
                                                        <h6>RECOMMENDATION</h6>
                                                        <p>Assign at least 2 admins per project for optimal project progress.</p>
                                                    </div>
                                                     <hr />
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="built-price">
                                                                <p>Individual License</p>
                                                                <span className="currency-blt">$</span>
                                                                <span className="amount-blt">200</span>
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
                                    <div className="col-md-4 mb-4" id="user-box-1">
                                        <div className="item">
                                            <div className="box-3 gr-bx pd-box">
                                                <div className="box-3-mid">
                                                    <div className="box-3-head">
                                                        <img src="images/feild-users.svg" alt="feild-users" />
                                                        <h3>Field User</h3>
                                                    </div>
                                                    <p>Field Users are the front line. They report all the work being done in real time.</p>
                                                    <div className="recommendation-acc">
                                                        <h6>RECOMMENDATION</h6>
                                                        <p>One License per crew</p>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="built-price">
                                                                <p>Individual License</p>
                                                                <span className="currency-blt">$</span>
                                                                <span className="amount-blt">100</span>
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
                                    <div className="col-md-4 mb-4" id="user-box-2">
                                        <div className="item">
                                            <div className="box-3 bl-bx pd-box">
                                                <div className="box-3-mid">
                                                    <div className="box-3-head">
                                                        <img src="images/inspectors.svg" alt="inspectors" />
                                                        <h3>Inspector</h3>
                                                    </div>
                                                    <p>Inspectors protect your investment as they submit safety reports and document incidents.</p>
                                                    <div className="recommendation-acc">
                                                        <h6>RECOMMENDATION</h6>
                                                        <p>One License per crew 2-3 member crew</p>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <div className="built-price">
                                                                <p>Individual License</p>
                                                                <span className="currency-blt">$</span>
                                                                <span className="amount-blt">150</span>
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
                                <div className="user-box-dots hide-desk text-center">
                                    {[0, 1, 2].map((index) => (
                                        <span 
                                            key={index} 
                                            className={`dot ${activeUserBox === index ? 'active' : ''}`}
                                            onClick={() => {
                                                const element = document.getElementById(`user-box-${index}`);
                                                if (element) {
                                                    const container = element.parentElement;
                                                    if (container) {
                                                        const offset = element.offsetLeft - (container.clientWidth - element.clientWidth) / 2;
                                                        container.scrollTo({
                                                            left: offset,
                                                            behavior: 'smooth'
                                                        });
                                                        setActiveUserBox(index);
                                                    }
                                                }
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="clear-50"></div>
                        <div className="row pricing-row-premium">
                            <div className="col-lg-4 mb-4 admin-card-parent d-none d-lg-block">
                                <div className="admin-support-card">
                                    <div className="recommendation-tag">
                                        <span>RUS2BILL'S RECOMMENDATION</span>
                                    </div>
                                    <div className="admin-card-inner">
                                         <img src="images/Rus2bill-Icon.svg" alt="R Icon" className="admin-logo" />
                                         <h3>RUS2BILL Admin Support</h3>
                                         <ul className="list-tick-admin">
                                             <li>Add on service</li>
                                             <li>Fee applies per project</li>
                                         </ul>
                                         <div className="admin-divider"></div>
                                         <div className="admin-bottom-row">
                                             <div className="admin-price-area">
                                                 <p>Individual Support</p>
                                                 <div className="built-price wh-curr">
                                                     <span className="currency-blt">$</span>
                                                     <span className="amount-blt">780</span>
                                                     <span className="duration-blt">Monthly</span>
                                                 </div>
                                             </div>
                                             <div className="admin-signup-btn">
                                                <a className="btn btn-white-pill" href="signup">Sign Up</a>
                                             </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-0 col-lg-8 col-12 mb-4 pricing-card-col-right">
                                <div className="overflow-hidden rounded-[20px] h-full  ">
                                    <div className="flex flex-col lg:flex-row h-full">
                                        {/* Enterprise Info Side */}
                                        <div className={`lg:w-[42%] flex flex-col ${isContactFormVisible ? 'hidden lg:flex' : 'flex'}`}>
                                            {/* Mobile View - Matching User Image */}
                                            <div className="lg:hidden bg-white">
                                                <div className="relative pt-10">
                                                    {/* Overlapping Icon */}
                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center z-10 border-[1px] border-gray-100">
                                                        <img src="images/enterprise.svg" alt="enterprise" className="w-8 h-8" />
                                                    </div>
                                                    {/* Dark Header */}
                                                    <div className="bg-[#24231F] rounded-t-[10px] pt-12 pb-8 text-center px-4 mx-2">
                                                        <h3 className="text-4xl font-normal text-white m-0 tracking-tight  ">Enterprise</h3>
                                                    </div>
                                                    {/* Light Body */}
                                                    <div className="bg-[#F1F5F0] py-3 p-1 md:p-8 rounded-b-[20px] mx-2 mb-2 shadow-sm border-x border-b border-gray-100">
                                                        <div className="flex items-baseline justify-center gap-1 mb-1">
                                                            <span className="text-[#05A34A] text-xl font-medium self-start mt-2">$</span>
                                                            <span className="text-[#05A34A] text-6xl font-bold">5K</span>
                                                            <span className="text-[#05A34A] text-xl font-medium ml-2">Starting</span>
                                                        </div>
                                                        <div className="w-3/4 h-[1px] bg-gray-300 mx-auto mb-3"></div>
                                                        <p className="text-[#05A34A] text-center font-medium text-lg mb-8 uppercase tracking-wider">Greater than 20 licenses</p>
                                                        
                                                        <ul className="space-y-1 md:space-y-4 mb-10 text-left">
                                                            {[
                                                                "Unit Logic",
                                                                "Make Field Life Easier!",
                                                                "EZ As-Built",
                                                                "24/7 Tool Support",
                                                                "Custom Development Options",
                                                                "including White Label"
                                                            ].map((item, idx) => (
                                                                <li key={idx} className="flex items-start gap-4">
                                                                    <div className="mt-1 flex-shrink-0">
                                                                        <i className="fa fa-check-circle text-[#49A054] text-xl"></i>
                                                                    </div>
                                                                    <span className="text-[#24231F] text-[17px] leading-relaxed font-normal opacity-90">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <button 
                                                            onClick={() => setIsContactFormVisible(true)} 
                                                            className="w-auto px-10 bg-[#2a2b2a] hover:bg-[#048a3e] text-white font-bold py-2.5 rounded-xl transition-all shadow-md active:scale-95 text-lg ml-5"
                                                        >
                                                            Contact Us
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Desktop View - Premium Dark Theme */}
                                            <div className="hidden lg:flex flex-col h-full bg-[#24231F] p-10 text-white justify-between">
                                                <div>
                                                    <div className="flex items-center gap-4 mb-8">
                                                        <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm shadow-inner overflow-hidden">
                                                            <img src="images/enterprise.svg" alt="enterprise" className="w-10 h-10 object-contain" />
                                                        </div>
                                                        <h3 className="text-3xl font-medium m-0 tracking-tight">Enterprise</h3>
                                                    </div>
                                                    
                                                    <ul className="space-y-4 mb-10">
                                                        {[
                                                            "Unit Logic",
                                                            "Make Field Life Easier!",
                                                            "EZ As-Built",
                                                            "24/7 Tool Support",
                                                            "Custom Development Options including White Label"
                                                        ].map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-4 group">
                                                                <div className="mt-1.5 flex-shrink-0">
                                                                    <i className="fa fa-check-circle text-[#05A34A] text-xl group-hover:scale-110 transition-transform"></i>
                                                                </div>
                                                                <span className="text-[16px] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity font-light">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="mt-auto border-t border-white/10 pt-8">
                                                    <p className="text-[#08C95C] font-semibold mb-2 tracking-wide uppercase text-xs">Greater than 20 licenses</p>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-xl font-medium self-start mt-2">$</span>
                                                        <span className="text-7xl font-bold">5K</span>
                                                        <span className="text-xl opacity-60 ml-3">Starting</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Form Side */}
                                        <div className={`lg:w-[58%] bg-[#EDF2E9] p-8 lg:p-12 ${isContactFormVisible ? 'block' : 'hidden lg:block'}`}>
                                            <div className="flex justify-between items-center mb-10 lg:hidden">
                                                <h3 className="text-3xl font-bold text-[#24231F]">Contact Us</h3>
                                                <button onClick={() => setIsContactFormVisible(false)} className="bg-white/50 p-3 rounded-full hover:bg-white transition-colors">
                                                    <i className="fa fa-times text-xl text-[#24231F]"></i>
                                                </button>
                                            </div>

                                            <form id="inquiry-form" method="post" action="javascript:void(0);" className="space-y-6">
                                                <div className="space-y-1">
                                                    <input 
                                                        type="text" 
                                                        className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-[#08C95C] focus:ring-4 focus:ring-[#08C95C]/10 outline-none transition-all placeholder:text-gray-400 text-[#24231F] font-medium" 
                                                        name="name" 
                                                        id="name" 
                                                        placeholder="Full Name*" 
                                                        required 
                                                    />
                                                    <span id="alt1" className="text-red-500 text-xs"></span>
                                                </div>
                                                <div>
                                                    <input 
                                                        type="text" 
                                                        className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-[#08C95C] focus:ring-4 focus:ring-[#08C95C]/10 outline-none transition-all placeholder:text-gray-400 text-[#24231F] font-medium" 
                                                        name="compname" 
                                                        id="compname" 
                                                        placeholder="Company Name" 
                                                    />
                                                </div>

                                                <div className="space-y-1">
                                                    <input 
                                                        type="email" 
                                                        className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-[#08C95C] focus:ring-4 focus:ring-[#08C95C]/10 outline-none transition-all placeholder:text-gray-400 text-[#24231F] font-medium" 
                                                        name="email" 
                                                        id="email" 
                                                        placeholder="Business Email Address*" 
                                                        required
                                                    />
                                                    <span id="alt3" className="text-red-500 text-xs"></span>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    <input 
                                                        type="tel" 
                                                        className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-[#08C95C] focus:ring-4 focus:ring-[#08C95C]/10 outline-none transition-all placeholder:text-gray-400 text-[#24231F] font-medium" 
                                                        name="phone" 
                                                        id="phone" 
                                                        pattern="[0-9]{10}" 
                                                        placeholder="Phone Number*" 
                                                        required 
                                                    />
                                                    <div className="space-y-1">
                                                        <select 
                                                            className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-[#08C95C] focus:ring-4 focus:ring-[#08C95C]/10 outline-none transition-all text-gray-700 font-medium appearance-none cursor-pointer" 
                                                            name="csize" 
                                                            id="csize" 
                                                            required 
                                                            defaultValue=""
                                                        >
                                                            <option disabled value="">- Select Company Size -</option>
                                                            <option value="30">less than 30 </option>
                                                            <option value="40">less than 40 </option>
                                                            <option value="50">less than 50 </option>
                                                            <option value="50">50+ </option>
                                                        </select>
                                                        <span id="alt4" className="text-red-500 text-xs"></span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <textarea 
                                                        className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white shadow-sm focus:border-[#08C95C] focus:ring-4 focus:ring-[#08C95C]/10 outline-none transition-all placeholder:text-gray-400 text-[#24231F] font-medium resize-none" 
                                                        name="message" 
                                                        id="message" 
                                                        rows={4} 
                                                        placeholder="Message (How did you hear about us?)*" 
                                                        required
                                                    ></textarea>
                                                </div>

                                                <button 
                                                    type="submit" 
                                                    className="w-full lg:w-auto px-12 py-4 bg-[#05A34A] hover:bg-[#048a3e] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 text-lg uppercase tracking-wide"
                                                >
                                                    Send Message
                                                </button>
                                            </form>
                                            <div id="response-message" className="mt-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-detail-section">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                             <div className="col-lg-6 mb-4 mb-lg-0">
                                 <div className="feat-txt-block">
                                     <h6 className="sub-feat-title">Product Features <div className="grn-line"></div></h6>
                                     <h2>Assign roles to the entire team</h2>
                                     <p>Make sure all your sub-contractors send invoices in one format and all invoices will be tailor made for your end customer! No extra work needed!</p>
                                     <p>Partial billing, Total Billing has never been faster! Download your completed unit totals from the field at any time with Redline backups and INVOICE your customer.</p>
                                 </div>
                             </div>
                             <div className="col-lg-6">
                                 <div className="feat-img-block text-center">
                                     <img src="images/assign-roles.svg" alt="Assign Roles" className="img-fluid" />
                                 </div>
                             </div>
                        </div>

                        <div className="row align-items-center">
                             <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                                 <div className="feat-txt-block">
                                     <h2>Visualize your RUS<br /> “Units” at a Glance</h2>
                                     <p>As work is completed, you can see daily and weekly how much value is to be change requested or amended to your contract or order.</p>
                                     <p>This way, you and your client are not surprised at the end of the job and most importantly NO WAITING after the job is complete to final bill your customer.</p>
                                 </div>
                             </div>
                             <div className="col-lg-6 order-lg-1">
                                  <div className="feat-img-block text-center">
                                     <img src="images/rus-units.svg" alt="Visualize Units" className="img-fluid" />
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>

                  {/* Product Feature Start */}
                    <div className="product-section pd-100 features-grid-area" id="product-features">
                        <div className="container">
                             <div className="text-center mb-5">
                                <h2 className="heading-1">Key Features</h2>
                            </div>
                            <div className="features-slider-wrapper">
                                <div className="row features-row" onScroll={(e) => {
                                    const target = e.target as HTMLDivElement;
                                    const scrollLeft = target.scrollLeft;
                                    const itemWidth = target.offsetWidth * 0.96; 
                                    const newActive = Math.round(scrollLeft / itemWidth);
                                    if (newActive !== activeFeatureBox && newActive >= 0 && newActive <= 5) {
                                        setActiveFeatureBox(newActive);
                                    }
                                }}>
                                    {[
                                        {
                                            id: "feature-box-0",
                                            icon: "images/Work-Smarter.svg",
                                            title: "Work Smarter",
                                            desc: "Will capture project information on the go and eliminates all mundane activities in spreadsheets and phone calls to manage efficiency in any utility construction project."
                                        },
                                        {
                                            id: "feature-box-1",
                                            icon: "images/all-in-one-solution.svg",
                                            title: "All In One Solution",
                                            desc: "Built to organize field work activity, puts all the units in one place, and allows immediate exports of verifiable records on demand. We can build, record, inspect, and invoice."
                                        },
                                        {
                                            id: "feature-box-2",
                                            icon: "images/customizable-RUS-unit-database.svg",
                                            title: "Customizable RUS Unit Database",
                                            desc: "Existing carriers, you can create customized data bases. Also perfect for USDA Grant awardees can use RUS2BILL to gain access to new databases."
                                        },
                                        {
                                            id: "feature-box-3",
                                            icon: "images/Real-Time-Progress-Reporting.svg",
                                            title: "Real Time Progress Reporting",
                                            desc: "Improves project control with real-time reporting on status and empowers rapid invoicing of construction projects."
                                        },
                                        {
                                            id: "feature-box-4",
                                            icon: "images/Built-For-the-Field.svg",
                                            title: "Built For the Field",
                                            desc: "Field users only enter information they already have to document. In fact, the RUS2BILL helps users who are not familiar with RUS units with descriptions and suggestions of units to add."
                                        },
                                        {
                                            id: "feature-box-5",
                                            icon: "images/Control-Changes-No-Surprises.svg",
                                            title: "Control Changes, No Surprises",
                                            desc: "You’ll have the ability to eliminate unforeseen costs and delayed revenues by monitoring project changes in real time."
                                        }
                                    ].map((feature, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 mb-4" id={feature.id}>
                                            <div className="feature-card">
                                                <div className="feat-icon mb-4">
                                                    <img src={feature.icon} alt={feature.title} />
                                                </div>
                                                <h3>{feature.title}</h3>
                                                <p>{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="feature-box-dots hide-desk text-center mt-4">
                                    {[0, 1, 2, 3, 4, 5].map((index) => (
                                        <span 
                                            key={index} 
                                            className={`dot ${activeFeatureBox === index ? 'active' : ''}`}
                                            onClick={() => {
                                                const element = document.getElementById(`feature-box-${index}`);
                                                if (element) {
                                                    const container = element.parentElement;
                                                    if (container) {
                                                        const offset = element.offsetLeft - (container.clientWidth - element.clientWidth) / 2;
                                                        container.scrollTo({
                                                            left: offset,
                                                            behavior: 'smooth'
                                                        });
                                                        setActiveFeatureBox(index);
                                                    }
                                                }
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="testimonial-section pd-80" id="testimonials">
                        <div className="container">
                             <div className="text-center mb-5">
                                <h2 className="heading-1">Testimonials</h2>
                            </div>
                            
                            <div className="testimonial-wrapper">
                                <button className="nav-arrow-btn" onClick={prevTestimonial}>
                                    <i className="fa fa-chevron-left"></i>
                                </button>
                                
                                <div className="testimonial-slider-container" onScroll={(e) => {
                                    const target = e.target as HTMLDivElement;
                                    const scrollLeft = target.scrollLeft;
                                    const itemWidth = target.offsetWidth;
                                    const newActive = Math.round(scrollLeft / itemWidth);
                                    if (newActive !== activeTestimonial && newActive >= 0 && newActive < testimonials.length) {
                                        setActiveTestimonial(newActive);
                                    }
                                }}>
                                    <div className="testimonial-row">
                                        {testimonials.map((testi, index) => (
                                            <div key={index} className={`testimonial-card-dark ${index === activeTestimonial ? 'active' : ''}`} id={`testimonial-box-${index}`}>
                                                <div className="quote-icon-top">
                                                    <i className="fa fa-quote-left"></i>
                                                </div>
                                                <p className="testi-text">
                                                    {testi.text}
                                                </p>
                                                <h6 className="testi-author">– {testi.author} | {testi.role}</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <button className="nav-arrow-btn" onClick={nextTestimonial}>
                                    <i className="fa fa-chevron-right"></i>
                                </button>
                            </div>
                             
                             <div className="testi-dots">
                                 {testimonials.map((_, index) => (
                                     <span 
                                         key={index} 
                                         className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                                         onClick={() => {
                                            const element = document.getElementById(`testimonial-box-${index}`);
                                            if (element) {
                                                const container = element.parentElement?.parentElement;
                                                if (container) {
                                                    const offset = element.offsetLeft;
                                                    container.scrollTo({
                                                        left: offset,
                                                        behavior: 'smooth'
                                                    });
                                                    setActiveTestimonial(index);
                                                }
                                            }
                                         }}
                                     ></span>
                                 ))}
                             </div>

                        </div>
                    </div>

                 {/* Free Demo  */}
                   <div className="free-demo pd-100" id="free-demo">
                        <div className="container">
                            <div className="text-center mb-5">
                                <h2 className="heading-1">FREE Demo</h2>
                            </div>
                                <div className="row g-0">
                                <div className="col-lg-5">
                                    {/* PC View (Hidden on Mobile) */}
                                    <div className="schd-img pd-box hide-mob">
                                        <img src="images/Rus2bill-logo-drkbg.svg" alt="Rus2bill-logo-drkbg" />
                                        <div className="demo-left-text">
                                            <h2>Schedule a<br /> FREE Demo</h2>
                                        </div>
                                        <div className="contact-info-demo">
                                            <p>Or Call us at</p>
                                            <h4>+1 (214) 983-6686</h4>
                                        </div>
                                    </div>
                            
                                    {/* Mobile View (Hidden on Desktop) */}
                                    <div className="schd-img-mobile pd-box hide-desk">
                                        <div className="demo-header-mobile">
                                            <img src="images/Rus2bill-Icon.svg" alt="R Icon" className="mobile-card-icon" />
                                            <div className="demo-left-text">
                                                <h2>Schedule a<br /> FREE Demo</h2>
                                            </div>
                                        </div>
                                        <div className="scdemon-sec">
                                            <button type="button" id="scheduleShow" onClick={() => setIsScheduleDemoVisible(!isScheduleDemoVisible)} className="btn-green-mobile">Schedule Demo</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={`col-lg-7 sch-frmb ${isScheduleDemoVisible ? 'd-block' : 'd-none d-lg-block'}`}>
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
                {/* <section className="faq-section pd-100">
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
                </section> */}

                {/* Footer */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="foot-left">
                                    <div className="foot-social mb-5 mt-2 hide-desk">
                                        <a href="https://www.instagram.com/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Insta-footer.svg" alt="Insta-footer" className="sc-ft" /></a>
                                        <a href="https://www.linkedin.com/company/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Linkedin-Footer.svg" alt="Linkedin-Footer" className="sc-ft" /></a>
                                        <img src="images/call.svg" alt="Insta-footer" className="sc-ft" /><a href="tel:+1(214)983-6686" className="ft-call">+1 (214) 983-6686</a>
                                    </div>
                                    <img src="images/Rus2bill-logo-drkbg.svg" alt="footer-logo" className="mb-3 footer-logo" />
                                    <h4 className="mb-4 hide-mob">&copy; RUS2BILL is a registered trademark</h4>
                                    <div className="copy-mobile">
                                        <p>&copy;2026 RUS2BILL</p>
                                    </div>
                                    <div className="foot-social hide-mob">
                                        <a href="https://www.instagram.com/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Insta-footer.svg" alt="Insta-footer" className="sc-ft" /></a>
                                        <a href="https://www.linkedin.com/company/rus2bill/" target="_blank" rel="noreferrer"><img src="images/Linkedin-Footer.svg" alt="Linkedin-Footer" className="sc-ft" /></a>
                                        <img src="images/call.svg" alt="Insta-footer" className="sc-ft" /><a href="tel:+1(214)983-6686" className="ft-call">+1 (214) 983-6686</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="foot-right">
                                    <p>We strive to make our website content accessible and user-friendly. If you are having difficulty viewing the content on this website or navigating the site, please contact our Customer Service Team via wajih@rus2bill.com we will be happy to assist you.</p>
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
