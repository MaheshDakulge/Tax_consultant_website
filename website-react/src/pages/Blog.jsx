import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { blogData } from '../data/blogData';

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPosts = activeFilter === 'all'
    ? blogData
    : blogData.filter(post => post.category === activeFilter);

  // The featured post is the first income-tax post or just the first post in the full list
  const featuredPost = blogData[0];

  // For the grid, we show filtered posts. If 'all' is selected, we exclude the featured post from the grid.
  const gridPosts = (activeFilter === 'all')
    ? filteredPosts.filter(post => post.id !== featuredPost.id)
    : filteredPosts;

  return (
    <>
      <PageHero
        title="Tax Insights & Financial Wisdom"
        subtitle="Expert articles, guides, and regulatory updates written by our team of chartered accountants."
        bgText="Blog"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="blog-filter-bar">
            <div className="blog-filter-tabs">
              <button
                className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All Posts
              </button>
              <button
                className={`filter-tab ${activeFilter === 'income-tax' ? 'active' : ''}`}
                onClick={() => setActiveFilter('income-tax')}
              >
                Income Tax
              </button>
              <button
                className={`filter-tab ${activeFilter === 'gst' ? 'active' : ''}`}
                onClick={() => setActiveFilter('gst')}
              >
                GST
              </button>
              <button
                className={`filter-tab ${activeFilter === 'business' ? 'active' : ''}`}
                onClick={() => setActiveFilter('business')}
              >
                Business
              </button>
              <button
                className={`filter-tab ${activeFilter === 'nri' ? 'active' : ''}`}
                onClick={() => setActiveFilter('nri')}
              >
                NRI
              </button>
            </div>
          </div>

          {/* Featured Post (Only visible when "All Posts" or its category is selected) */}
          {activeFilter === 'all' && featuredPost && (
            <div className="blog-featured-post" data-category={featuredPost.category}>
              <div className="blog-featured-badge">Featured</div>
              <div className="blog-featured-content">
                <div className="blog-featured-text">
                  <div className="blog-meta">
                    <span className="blog-category-tag">{featuredPost.categoryLabel}</span>
                    <span className="blog-date">{featuredPost.date}</span>
                    <span className="blog-author">
                      <i className="fa-solid fa-user-pen"></i> {featuredPost.author}
                    </span>
                  </div>
                  <h2>{featuredPost.title}</h2>
                  <p>{featuredPost.excerpt}</p>
                  <Link to={`/blog/${featuredPost.id}`} className="blog-read-link">
                    Read Full Article <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="blog-featured-thumbnail">
                  <div className="blog-thumb-placeholder">
                    <i className={`fa-solid ${featuredPost.icon}`}></i>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="blog-grid">
            {gridPosts.map((post) => (
              <div key={post.id} className="blog-card" data-category={post.category}>
                <div className="blog-card-img-placeholder">
                  <i className={`fa-solid ${post.icon}`}></i>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-category-tag">{post.categoryLabel}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-read-link">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
            {gridPosts.length === 0 && (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px 0' }}>
                <p style={{ color: 'var(--color-muted)' }}>No articles found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Have a specific tax question? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Ask our experts directly.</a>
        </h2>
      </section>
    </>
  );
}
