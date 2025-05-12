
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PhotoGrid from '@/components/PhotoGrid';
import Categories from '@/components/Categories';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { featuredPhotos, popularPhotos, categories } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <Navbar />
      <Hero />
      <PhotoGrid photos={featuredPhotos} title="Featured Photos" />
      <Categories categories={categories} />
      <PhotoGrid photos={popularPhotos} title="Popular Photos" />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
