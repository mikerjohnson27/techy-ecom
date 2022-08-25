import React from "react";
import Carousel from "../components/Carousel";
import Category from "../components/Categories";
import Header from "../components/Header";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const images = [
  {"name":"img1", "url": "http://placecorgi.com/600/600", "id":1},
  {"name":"img2", "url": "http://placecorgi.com/600/601", "id":2},
  {"name":"img3", "url": "http://placecorgi.com/600/602", "id":3},
  {"name":"img4", "url": "http://placecorgi.com/600/603", "id":4}
];
// const images = ["img1", "img2", "img3", "img4"];

const Home = () => {
  return (
    <div className="container">
      <Carousel images={images}/>
      <Header />
      <Category category="Category 1" url="/" image="http://placecorgi.com/600/250"/>
      <Category category="Category 2" url="/" image="http://placecorgi.com/600/251"/>
      <Category category="Category 3" url="/" image="http://placecorgi.com/600/252"/>
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
    </div>
  );
};

export default Home;
