import React from "react";

const Header = () => {
  return (
    <header className="header header1 sticky-on search-mobi-disable  toggle-mobi-disable  trheader">
      <div id="sticky-placeholder" />
      <div id="navbar-wrap" className="navbar-wrap">
        <div className="header-menu">
          <div className="header-width">
            <div className="container-fluid">
              <div className="inner-wrap">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="site-branding">
                    <div className="header-logo logo-1 logo-light">
                      <a href="/home">
                        <img
                          style={{ height: "200%", width: "500%" }}
                          src="assets/wa.png"
                          className="attachment-full size-full"
                          alt=""
                          decoding="async"
                        />
                      </a>
                    </div>
                    <div className="header-logo logo-2 logo-dark">
                      <a href="https://www.acharya.ac.in/">
                        <img
                          style={{ width: 200, height: 37 }}
                          src="assets/a.svg"
                          className="attachment-full size-full"
                          alt=""
                          decoding="async"
                        />
                      </a>
                    </div>
                  </div>
                  {/* <nav id="dropdown" className="template-main-menu">
                                        <ul id="menu-main-menu" className="main-menu">
                                            <li
                                                id="menu-item-42"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-42"
                                            >
                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/">
                                                    Home
                                                </a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-44"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-44"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/">
                                                            Main Home
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-3169"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3169"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/design-conference/">
                                                            Design Conference
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-3170"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3170"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/web-seminar/">
                                                            Web Seminar
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-4200"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4200"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/digital-event/">
                                                            Digital Event
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-188"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-188"
                                            >
                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/business-conference/">
                                                    Schedules
                                                </a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-190"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-190"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/business-conference/">
                                                            Business Conference
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-189"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/global-conference/">
                                                            Startup Global
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-320"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-320"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/web-design-seminar/">
                                                            Web Design
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-319"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-319"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/event-schedule-4/">
                                                            Web Programming
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-318"
                                                        className="menu-item menu-item-type-post_type menu-item-object-evacon_event menu-item-318"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/event/join-our-web-design-seminar/">
                                                            Event Single Page
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-376"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-376"
                                            >
                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/speakers/">
                                                    Speakers
                                                </a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-377"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-377"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/speakers/">
                                                            Speakers
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-378"
                                                        className="menu-item menu-item-type-post_type menu-item-object-evacon_speaker menu-item-378"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/speaker/cameron-williamson/">
                                                            Speaker Single
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-418"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-418"
                                            >
                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/standard-two-column/">
                                                    Portfolios
                                                </a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-419"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-419"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/standard-two-column/">
                                                            Standard Two Column
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-513"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/standard-three-column/">
                                                            Standard Three Column
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-512"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-512"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/three-column-grid/">
                                                            Three Column Grid
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-511"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-511"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/four-column-grid/">
                                                            Four Column Grid
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-510"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-510"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/four-column-full-wide/">
                                                            Four Column Full Wide
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-420"
                                                        className="menu-item menu-item-type-post_type menu-item-object-evacon_portfolio menu-item-420"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/portfolio/world-heritage-seminar/">
                                                            Portfolio Single
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-6532"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6532"
                                            >
                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/shop/">
                                                    Shop
                                                </a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-6531"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6531"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/shop/">
                                                            Shop
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-6530"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6530"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/cart/">
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-6529"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6529"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/checkout/">
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-672"
                                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-672"
                                            >
                                                <a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-1648"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1648"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/about-us/">
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-673"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-673"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/pricing/">
                                                            Pricing Table
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-850"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-850"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/gallery/">
                                                            Our Gallery
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-2154"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2154"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/venue-info/">
                                                            Venue Info
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-1045"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1045"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/faq/">
                                                            Faq Page
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-929"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-929"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/our-partners/">
                                                            Brand Value
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-1305"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1061 current_page_item menu-item-1305"
                                                    >
                                                        <a
                                                            href="https://radiustheme.com/demo/wordpress/themes/evacon/contact-us/"
                                                            aria-current="page"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-1048"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1048"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/404">
                                                            404 Error
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                id="menu-item-40"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-40"
                                            >
                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/blog/">
                                                    Blog
                                                </a>
                                                <ul className="sub-menu">
                                                    <li
                                                        id="menu-item-75"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/blog/">
                                                            Blog List
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-5497"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5497"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/blog-grid/">
                                                            Blog Grid
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-74"
                                                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-74"
                                                    >
                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/many-of-those-products-offer-the-potential/">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav> */}
                  {/* <ul className="header-action-items">
                                        <li className="search-wrap">
                                            <a href="#template-search" title="Search">
                                                <svg
                                                    width={21}
                                                    height={21}
                                                    viewBox="0 0 21 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </a>

                                            <div id="template-search" className="template-search">
                                                <button type="button" className="close">
                                                    ×
                                                </button>
                                                <form
                                                    id="top-search-form"
                                                    className="search-form"
                                                    action="https://radiustheme.com/demo/wordpress/themes/evacon/"
                                                    method="get"
                                                >
                                                    <input
                                                        type="search"
                                                        name="s"
                                                        defaultValue=""
                                                        className="search-input"
                                                        placeholder="Search here..."
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="search-btn btn-ghost style-1"
                                                    >
                                                        <i className="fas fa-search" />
                                                    </button>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="woo-minicart">
                                            <div className="dropdown-cart">
                                                <div className="header-action-item mini-cart-items header-shop-cart">
                                                    <div className="cart-list-trigger only-count-part">
                                                        <i />
                                                        <div className="cart-wrapper">
                                                            <ul className="minicart">
                                                                <li className="cart-item d-flex align-items-center">
                                                                    <h5>Your cart is empty</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="header-action-item action-btn">
                                            <a
                                                href="/login"
                                                className="item-btn btn-fill style-one"
                                            >
                                                Login
                                            </a>
                                        </li>
                                        <li className="header-action-item toggle-btn">
                                            <button
                                                type="button"
                                                className="offcanvas-menu-btn style-one menu-status-open"
                                            >
                                                <span className="menu-btn-icon">
                                                    <span />
                                                    <span />
                                                    <span />
                                                </span>
                                            </button>
                                        </li>
                                        <li className="mobile-menu-bar">
                                            <div className="rt-mobile-menu mean-container" id="meanmenu">
                                                <div className="mean-bar">
                                                    <span className="sidebarBtn ">
                                                        <span className="bar" />
                                                        <span className="bar" />
                                                        <span className="bar" />
                                                    </span>
                                                </div>
                                                <div className="rt-slide-nav">
                                                    <div className="offscreen-navigation">
                                                        <ul id="menu-main-menu-1" className="main-menu">
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children menu-item-42">
                                                                <a href="/home">
                                                                    Home
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-44">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/">
                                                                            Main Home
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3169">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/design-conference/">
                                                                            Design Conference
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3170">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/web-seminar/">
                                                                            Web Seminar
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4200">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/digital-event/">
                                                                            Digital Event
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-188">
                                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/business-conference/">
                                                                    Schedules
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-190">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/business-conference/">
                                                                            Business Conference
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/global-conference/">
                                                                            Startup Global
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-320">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/web-design-seminar/">
                                                                            Web Design
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-319">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/event-schedule-4/">
                                                                            Web Programming
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-evacon_event menu-item-318">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/event/join-our-web-design-seminar/">
                                                                            Event Single Page
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-376">
                                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/speakers/">
                                                                    Speakers
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-377">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/speakers/">
                                                                            Speakers
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-evacon_speaker menu-item-378">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/speaker/cameron-williamson/">
                                                                            Speaker Single
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-418">
                                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/standard-two-column/">
                                                                    Portfolios
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-419">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/standard-two-column/">
                                                                            Standard Two Column
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-513">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/standard-three-column/">
                                                                            Standard Three Column
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-512">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/three-column-grid/">
                                                                            Three Column Grid
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-511">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/four-column-grid/">
                                                                            Four Column Grid
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-510">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/four-column-full-wide/">
                                                                            Four Column Full Wide
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-evacon_portfolio menu-item-420">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/portfolio/world-heritage-seminar/">
                                                                            Portfolio Single
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6532">
                                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/shop/">
                                                                    Shop
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6531">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/shop/">
                                                                            Shop
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6530">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/cart/">
                                                                            Cart
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6529">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/checkout/">
                                                                            Checkout
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-672">
                                                                <a href="#">Pages</a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1648">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/about-us/">
                                                                            About Us
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-673">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/pricing/">
                                                                            Pricing Table
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-850">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/gallery/">
                                                                            Our Gallery
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2154">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/venue-info/">
                                                                            Venue Info
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1045">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/faq/">
                                                                            Faq Page
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-929">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/our-partners/">
                                                                            Brand Value
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1061 current_page_item menu-item-1305">
                                                                        <a
                                                                            href="https://radiustheme.com/demo/wordpress/themes/evacon/contact-us/"
                                                                            aria-current="page"
                                                                        >
                                                                            Contact Us
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1048">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/404">
                                                                            404 Error
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-40">
                                                                <a href="https://radiustheme.com/demo/wordpress/themes/evacon/blog/">
                                                                    Blog
                                                                </a>
                                                                <ul className="sub-menu">
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/blog/">
                                                                            Blog List
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5497">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/blog-grid/">
                                                                            Blog Grid
                                                                        </a>
                                                                    </li>
                                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-74">
                                                                        <a href="https://radiustheme.com/demo/wordpress/themes/evacon/many-of-those-products-offer-the-potential/">
                                                                            Blog Details
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> */}

                  {/* USER PANEL AND ADMIN PANEL Btn */}
                  {/* <div
                    className="logout-btn"
                    data-wow-delay="1.5s"
                    data-wow-duration="1s"
                  >
                    <a href="/Login" className="btn-fill style-eight">
                      User Login
                    </a>
                    <a href="/Admin" className="btn-fill style-eight">
                      Admin Login
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
