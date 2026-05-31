import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { getNewsPost } from "../../data/newsPosts";
import { formatDate } from "../../utils/formatters";
import { NotFound } from "./NotFound";

export function NewsPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getNewsPost(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[var(--eko-green)] hover:opacity-80 transition-opacity mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span className="mx-2">·</span>
            <span>{post.source}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
            <p className="text-gray-600 mb-4">
              This story was originally published by {post.source}.
            </p>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--eko-green)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Read Full Article on {post.source}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
