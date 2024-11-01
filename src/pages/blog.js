import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './blogpost.js';

const blogPosts = [
    {
        title: 'Odoo Link VS Code To Start',
        link: '/articles/OdooSetup',
        imageUrl: '/logo192.png',
        content: 'A comprehensive guide to setting up Odoo 17 in VS Code for web development by rendering the Odoo server and database in a local environment.',
        category: 'Web Development',
        date: '2024-03-30', // Adding dates for latest posts functionality
    },
    {
        title: 'Nootropics Pitfalls',
        link: '/articles/NootropicsPitfalls',

        imageUrl: '/hero.png',
        content: '',
        category: 'NeuroScience',
        date: '2024-03-29',
    },

];

const Home = () => {
    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Get unique categories
    const categories = useMemo(() => {
        return [...new Set(blogPosts.map(post => post.category))];
    }, []);

    // Get latest posts (top 3)
    const latestPosts = useMemo(() => {
        return [...blogPosts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
    }, []);

    // Filter posts by selected category
    const filteredPosts = useMemo(() => {
        if (!selectedCategory) return [];
        return blogPosts.filter(post => post.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Latest Posts Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestPosts.map((post, index) => (
                        <BlogPost
                            key={`latest-${index}`}
                            title={post.title}
                            imageUrl={post.imageUrl}
                            date={post.date}
                            content={post.content}
                            link={post.link}
                        />
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full transition-colors duration-200 ${selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Selected Category Posts */}
            {selectedCategory && (
                <section>
                    <h2 className="text-2xl font-bold mb-6">
                        Posts in {selectedCategory}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post, index) => (
                            <BlogPost
                                key={`category-${index}`}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                content={post.content}
                                link={post.link}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Home;