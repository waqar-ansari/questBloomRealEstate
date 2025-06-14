import MobileMenu from "@/components/common/mobile-menu";
import Partner from "@/components/common/Partner";
import Agents from "@/components/home/home-v2/Agents";
import ApartmentType from "@/components/home/home-v2/ApartmentType";
import ExploreCities from "@/components/home/home-v2/ExploreCities";
import FeaturedListings from "@/components/home/home-v2/FeatuerdListings";
import Header from "@/components/home/home-v2/Header";
import Testimonial from "@/components/home/home-v2/Testimonial";
import React, { useState } from "react";
import Footer from "@/components/common/default-footer";
import Cta from "@/components/home/home-v2/Cta";

import { Link } from "react-router-dom";

import MetaData from "@/components/common/MetaData";
import AutoCarouselHero from "@/components/home/home-v2/hero/AutoCarouselHero";

const metaInformation = {
  title: "Rent, Buy or Sell, Off-plan Residential & Commercial Properties in Dubai. Quest Bloom Realestate also offers Property Consulting Services",
};

const beachAreaProperties = [
  {
    id: 139,
    name: "Al Raha Beach, Abu Dhabi",
  },
  {
    id: 242,
    name: "Dreamland Beach, Bali",
  },
  {
    id: 119,
    name: "Emaar Beachfront",
  },
  {
    id: 63,
    name: "Jumeirah Beach Residence (JBR)",
  },
  {
    id: 162,
    name: "Nai Yang Beach, Phuket",
  },
  {
    id: 175,
    name: "Surin Beach, Phuket",
  },
];

const sobhaDeveloper = {
  id: 56,
  name: "Sobha",
  website: "https://www.sobharealty.com/",
};

const Home_V2 = () => {
  // const [visibleSections, setVisibleSections] = useState(0);
  const sections = [
    {
      title: "Discover Villas",
      paragraph: "Luxury villas with premium amenities and stunning views",
      params: {
        unit_types: "Villa,Villas",
      },
    },
    {
      title: "Discover Apartments",
      paragraph:
        "Modern apartments in prime locations with excellent facilities",
      params: {
        unit_types: "Townhouse",
      },
    },
    {
      title: "Discover Beachfront Properties",
      paragraph: "Premium Beachfront Properties",
      params: {
        areas: beachAreaProperties.map((item) => item.id).join(","),
      },
    },
    {
      title: "Discover Properties by Sobha",
      paragraph: "Premium Properties by Sobha with excellent facilities",
      params: {
        developer: String(sobhaDeveloper.id),
      },
    },
    {
      title: "Discover Properties under 1 Million",
      paragraph:
        "Explore handpicked premium homes that offer great value for less than AED 1 Million",
      params: {
        unit_price_to: 1000000,
      },
    },
    {
      title: "Discover Properties between 1 Million to 2 Million",
      paragraph:
        "Step into luxury with a curated selection of upscale properties priced between AED 1 Million and 2 Million",
      params: {
        unit_price_from: 1000000,
        unit_price_to: 2000000,
      },
    },
  ];
  const handleViewMore = () => {
    setShowAllSections(true);
  };

  // const getButtonText = () => {
  //   if (visibleSections === sections.length) {
  //     return "Collapse All";
  //   }
  //   return "View More Properties";
  // };

  // const getButtonIcon = () => {
  //   if (visibleSections === sections.length) {
  //     return "fa-arrow-up-long";
  //   }
  //   return "fa-arrow-down-long";
  // };

  return (
    <>
      {" "}
      <MetaData meta={metaInformation} />
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}
      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      {/* Home Banner Style V2 */}
      <AutoCarouselHero />
      {/* End Home Banner Style V2 */}
      {/* Explore Apartment */}
      <section className="pb90 pb30-md z-1">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade">
            <div className="col-lg-12">
              <ApartmentType />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}
      {/* Featured Listings */}
      <>
        {/* Main Featured Listings Section */}
        <section className="pt0 pb0 pb0  bgc-white">
          <div className="container ">
            <div className="row align-items-center" data-aos="fade-up">
              <div className="col-lg-9">
                <div className="main-title2">
                  <h2 className="title">Discover Featured Listings</h2>
                  <p className="paragraph">
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-start text-lg-end mb-3">
                  <a className="ud-btn2" href="/off-plan">
                    See All Properties
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="feature-listing-slider ">
                  {/* FeaturedListings component would go here */}
                  <div className="text-center  ">
                    <FeaturedListings />
                  </div>
                </div>
              </div>
            </div>

            {/* View More Button - Only shows when sections are hidden */}
            {/* {!showAllSections && (
              <div style={{ marginTop: "-30px" }} className="row mb20">
                <div className="col-lg-12">
                  <div className="text-end ">
                    <button
                      className="ud-btn2"
                      onClick={handleViewMore}
                      style={{
                        border: "none",
                        transition: "all 0.3s ease",
                      }}
                    >
                      View More Properties
                      <i className="fal fa-arrow-down-long" />
                    </button>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </section>

        {/* Additional Sections - Show all at once with fade animation */}
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              maxHeight: "900px",
              overflow: "hidden",

              opacity: 1,
            }}
          >
            <section className="pt20  pb0 pb10-md bgc-white" data-aos="fade-up">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="main-title2 text-left">
                      <h2 className="title">{section.title}</h2>
                      <p className="paragraph">{section.paragraph}</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="feature-listing-slider">
                      {/* Component would go here */}
                      <div className="text-center ">
                        <FeaturedListings params={section.params} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </>
      {/* Explore Featured Listings */}
      {/* Property Cities */}
      <section className="pt0 pb70 pt40 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Explore Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="cities_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination cities_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="cities_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ExploreCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End property cities */}
      {/* Explore Apartment */}
      {/* <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title">See How Realton Can Help</h2>
                  <p className="paragraph">
                    Aliquam lacinia diam quis lacus euismod
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section> */}
      {/* End Explore Apartment */}
      {/* About Us */}
      {/* <section className="about-us">
        <div className="container">
          <About />
        </div>
      </section> */}
      {/* End About Us */}
      {/* Our Testimonials */}
      <section className="our-testimonial p-0">
        <div className="cta-banner2 bgc-f7 maxw1600 mx-auto pt60 pt60-md pb110 pb60-md bdrs12 position-relative">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="main-title text-center">
                  <h2>Testimonials</h2>
                  <p className="paragraph">What our customers saying</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-8 m-auto"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="testimonial-style2">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}
      {/* Exclusive Agents */}
      {/* <section className="pb90">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Agents</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="agent_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>

                <div className="col-auto">
                  <div className="pagination swiper--pagination agent_pagination__active" />
                </div>

                <div className="col-auto">
                  <button className="agent_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Exclusive Agents */}
      {/* Our Partners */}
      {/* <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>

            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Partner />
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Partners */}
      {/* Our CTA */}
      <Cta />
      {/* End Our CTA */}
      {/* Start Our Footer */}
      <section className="footer-style1 at-home2 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V2;
