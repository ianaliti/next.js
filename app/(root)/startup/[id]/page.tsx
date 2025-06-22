import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import React, { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

// export const experimental_ppr = true;
export const revalidate = 60;

const md = markdownit();

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="startup-hero-container">
        <div className="startup-hero-content">
          <div className="startup-hero-badge">
            <span className="startup-hero-date">
              {formatDate(post._createdAt)}
            </span>
          </div>

          <h1 className="startup-hero-title">{post.title}</h1>

          <p className="startup-hero-description">{post.description}</p>

          <div className="startup-hero-decorations">
            <div className="decoration-circle decoration-1"></div>
            <div className="decoration-circle decoration-2"></div>
            <div className="decoration-circle decoration-3"></div>
          </div>
        </div>
      </section>

      <section className="startup-content-container">
        <div className="startup-image-wrapper">
          <div className="startup-image-container">
            <img
              src={post.image}
              alt={`Thumbnail of ${post.title}`}
              className="startup-featured-image"
            />
            <div className="startup-image-overlay"></div>
          </div>
        </div>

        <div className="startup-content-area">
          <div className="startup-meta-section">
            <Link
              href={`/user/${post.author?._id}`}
              className="startup-author-link"
            >
              <div className="startup-author-avatar-wrapper">
                <Image
                  src={post.author?.image}
                  alt={post.author?.name}
                  width={72}
                  height={72}
                  className="startup-author-avatar"
                />
                <div className="startup-author-status"></div>
              </div>
              <div className="startup-author-info">
                <h4 className="startup-author-name">{post.author?.name}</h4>
                <p className="startup-author-username">
                  @{post.author?.username}
                </p>
              </div>
            </Link>

            <div className="startup-category-wrapper">
              <span className="startup-category-tag">{post.category}</span>
            </div>
          </div>

          <div className="startup-pitch-section">
            <div className="startup-section-header">
              <h3 className="startup-section-title">Pitch Details</h3>

              <div className="startup-section-line"></div>
              <div className="startup-pitch-content">
                {parsedContent ? (
                  <article
                    dangerouslySetInnerHTML={{ __html: parsedContent }}
                    className="startup-pitch-placeholder"
                  />
                ) : (
                  <p className="no-result">No details provided</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<Skeleton />}>
                <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default Page;
