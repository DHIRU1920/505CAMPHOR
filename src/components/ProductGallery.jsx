/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import './ProductGallery.css';


import img1 from '../assets/img1.png';
import img15 from '../assets/img15.jpg';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/IMG_11.jpg';

const ProductGallery = () => {
    const initialProducts = [
        { id: 1, name: 'Pure Camphor Blocks', weight: 500, img: img1, category: 'Natural' },
        { id: 2, name: 'Refined Camphor Tablets', weight: 300, img: img15, category: 'Processed' },
        { id: 3, name: 'Camphor Essential Oil', weight: 700, img: img3, category: 'Essential Oils' },
        { id: 4, name: 'Camphor Powder', weight: 400, img: img4, category: 'Powder' },
        { id: 5, name: 'Crystalline Camphor', weight: 600, img: img5, category: 'Natural' },
        { id: 6, name: 'Camphor Cubes', weight: 250, img: img6, category: 'Processed' },
        { id: 7, name: 'Organic Camphor Extract', weight: 800, img: img7, category: 'Essential Oils' },
        { id: 8, name: 'Medical Grade Camphor', weight: 450, img: img8, category: 'Medical' },
        { id: 9, name: 'Camphor Bark Chips', weight: 550, img: img9, category: 'Natural' },
        { id: 10, name: 'Synthetic Camphor', weight: 350, img: img10, category: 'Processed' },
    ];

    const [products, setProducts] = useState(initialProducts);
    const [sortOption, setSortOption] = useState('name');
    const [filterCategory, setFilterCategory] = useState('All');

    const sortProducts = (option) => {
        let sortedProducts = [...products];
        if (option === 'name') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'weight') {
            sortedProducts.sort((a, b) => a.weight - b.weight);
        }
        setProducts(sortedProducts);
    };

    const filterProducts = (category) => {
        const filteredProducts =
            category === 'All'
                ? initialProducts
                : initialProducts.filter((product) => product.category === category);
        setFilterCategory(category);
        sortProducts(sortOption);
        setProducts(filteredProducts);
    };

    const categories = ['All', ...new Set(initialProducts.map((p) => p.category))];

    return (
        <div className="pg-gallery-container">
            <div className="pg-header">
                <h1>Camphor Product Collection</h1>
                <p>Discover our range of premium camphor products</p>
            </div>

            <div className="pg-controls">
                <div className="pg-sort">
                    <label>Sort by</label>
                    <select
                        value={sortOption}
                        onChange={(e) => {
                            setSortOption(e.target.value);
                            sortProducts(e.target.value);
                        }}
                        className="pg-select"
                    >
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                    <ChevronDown size={20} className="pg-select-icon" />
                </div>

                <div className="pg-filter">
                    <label>Category</label>
                    <select
                        value={filterCategory}
                        onChange={(e) => filterProducts(e.target.value)}
                        className="pg-select"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <Filter size={20} className="pg-select-icon" />
                </div>
            </div>

            <div className="pg-grid">
                {products.map((product) => (
                    <div key={product.id} className="pg-card">
                        <div className="pg-image-container">
                            <img src={product.img} alt={product.name} className="pg-image" />
                        </div>
                        <div className="pg-details">
                            <h3>{product.name}</h3>
                            <div className="pg-meta">
                                <span className="pg-category">{product.category}</span>
                                <span className="pg-weight">{product.weight}g</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
