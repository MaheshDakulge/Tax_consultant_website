import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { blogData } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="section-container" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', marginBottom: '16px' }}>Article Not Found</h2>
        <p style={{ color: 'var(--color-muted)', marginBottom: '24px' }}>The blog post you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="btn btn-navy" style={{ borderRadius: '999px', padding: '12px 30px' }}>
          Back to Blog
        </Link>
      </div>
    );
  }

  // Get related articles (exclude current post, max 2)
  const related = blogData.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={`Written by ${post.author} on ${post.date}`}
        bgText="Insight"
        breadcrumbs={[
          { label: 'Blog', path: '/blog' },
          { label: 'Article' }
        ]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="service-detail-grid">
            {/* Article Content Column */}
            <div className="service-main-content">
              <div className="blog-meta" style={{ marginBottom: '24px' }}>
                <span className="blog-category-tag">{post.categoryLabel}</span>
                <span className="blog-date">{post.date}</span>
                <span className="blog-author">
                  <i className="fa-solid fa-user-pen"></i> {post.author}
                </span>
                <span style={{ marginLeft: 'auto', color: 'var(--color-muted)', fontSize: '12px' }}>
                  <i className="fa-regular fa-clock"></i> 5 Min Read
                </span>
              </div>

              <article className="blog-article-body" style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--color-dark)' }}>
                {post.content.map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <p key={index} style={{ fontSize: '17px', fontWeight: '500', lineHeight: '1.6', color: 'var(--color-dark)', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                        {paragraph}
                      </p>
                    );
                  }
                  return <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>;
                })}
              </article>

              <div className="social-share-row" style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-muted)' }}>Share this article:</span>
                <a href="#/" onClick={(e) => e.preventDefault()} className="footer-social-circle" style={{ width: '36px', height: '36px', fontSize: '13px' }} aria-label="Share on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#/" onClick={(e) => e.preventDefault()} className="footer-social-circle" style={{ width: '36px', height: '36px', fontSize: '13px' }} aria-label="Share on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#/" onClick={(e) => e.preventDefault()} className="footer-social-circle" style={{ width: '36px', height: '36px', fontSize: '13px' }} aria-label="Share on Twitter"><i className="fa-brands fa-twitter"></i></a>
                <Link to="/blog" className="btn btn-outline-dark" style={{ marginLeft: 'auto', padding: '8px 18px', fontSize: '12px', borderRadius: '999px' }}>
                  <i className="fa-solid fa-arrow-left"></i> Back to Blog
                </Link>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="service-sidebar">
              <div className="sidebar-widget">
                <h3>Need Tax Planning?</h3>
                <p>Our experienced CAs analyze your investment portfolio and income structure to find the legally optimal tax regime and investments.</p>
                <Link to="/contact" className="btn btn-navy btn-block" style={{ textAlign: 'center', display: 'block', borderRadius: '999px' }}>
                  Consult an Expert
                </Link>
              </div>

              <div className="sidebar-widget">
                <h3>Categories</h3>
                <ul className="sidebar-links-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li><Link to="/blog" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-dark)', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}><span>Income Tax</span> <span style={{ color: 'var(--color-muted)' }}>(3)</span></Link></li>
                  <li><Link to="/blog" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-dark)', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}><span>GST & Indirect Tax</span> <span style={{ color: 'var(--color-muted)' }}>(2)</span></Link></li>
                  <li><Link to="/blog" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-dark)', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}><span>Business Advisory</span> <span style={{ color: 'var(--color-muted)' }}>(2)</span></Link></li>
                  <li><Link to="/blog" style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-dark)', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}><span>NRI Taxation</span> <span style={{ color: 'var(--color-muted)' }}>(2)</span></Link></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>Related Articles</h3>
                <div style={{ display: 'grid', gap: '16px', marginTop: '12px' }}>
                  {related.map(rPost => (
                    <div key={rPost.id} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                      <div style={{ width: '48px', height: '48px', background: '#F4F3F0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-dark)', flexShrink: 0 }}>
                        <i className={`fa-solid ${rPost.icon}`}></i>
                      </div>
                      <div>
                        <Link to={`/blog/${rPost.id}`} style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-dark)', textDecoration: 'none', lineHeight: 1.35, display: 'block', marginBottom: '4px' }}>
                          {rPost.title}
                        </Link>
                        <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>{rPost.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
