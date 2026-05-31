import { Link } from "react-router";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import logo from "../../assets/images/d0244ad2b6eb8456c544a50c842971c30ea8e285.png";
import heroBackground from "../../assets/images/07acd66eead001dce9d6ffedbf0456f7be69a211.png";
import { NEWS_POSTS } from "../../data/newsPosts";
import { formatDate } from "../../utils/formatters";

export function News() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[var(--eko-green)] to-[var(--eko-blue)] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--eko-green)]/95 to-[var(--eko-blue)]/90"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
                News & Media
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl">
                Latest updates, press coverage, and stories about the EKO
                International Trade Expo.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src={logo} alt="EKO Logo" className="w-64 md:w-80 lg:w-96" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {NEWS_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <Link to={`/news/${post.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>

                  <h2 className="text-xl mb-3 leading-snug">
                    <Link
                      to={`/news/${post.slug}`}
                      className="hover:text-[var(--eko-green)] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 flex-1">{post.excerpt}</p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/news/${post.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-[var(--eko-green)] text-white px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Read Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {post.source}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
