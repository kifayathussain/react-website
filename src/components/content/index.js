import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ImageCard from "../card";
import Footer from "../footer";
import Header from "../header/index";
import data from "../../data";

const Content = () => {
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    console.log("handle filter change", filter);
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredImages([]);
    } else {
      const filteredData = data.filter((image) => image.type === filter);
      setFilteredImages(filteredData);
    }
  };
  const images = filteredImages.length ? filteredImages : data;
  return (
    <React.Fragment>
      <section className="Content">
        <Header activeFilter={activeFilter} handleFilterChange={handleFilter} />
      </section>
      <section className="cards mt-5" style={{ minHeight: "80vh" }}>
        <Container>
          <Row sm={2} md={4}>
            {images.map((item) => {
              return (
                <Col className="mb-4">
                  <ImageCard
                    redirectUrl={item.redirectUrl}
                    title={item.title}
                    imgSrc={item.imgSrc}
                    description={item.description}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <footer className="mt-3">
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Content;
