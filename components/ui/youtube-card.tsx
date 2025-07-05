import React from "react";
import { YouTubeVideoProps } from "@/lib/youtube";
import Image from "next/image";

const YoutubeCard: React.FC<YouTubeVideoProps> = ({
  src,
  link,
  title,
  description,
  publishedAt,
}) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString();
  };

  const truncateDescription = (desc: string, maxLength: number = 70) => {
    if (desc.length <= maxLength) return desc;
    return desc.substring(0, maxLength) + "...";
  };

  return (
    <li className="blog-post-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <figure className="blog-banner-box">
          <Image
            src={src}
            alt={title}
            loading="lazy"
            height={1000}
            width={1000}
          />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">YouTube</p>
            <span className="dot"></span>
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </div>
          <h3 className="h3 blog-item-title line-clamp-1">{title}</h3>
          <p className="blog-text">{truncateDescription(description)}</p>
        </div>
      </a>
    </li>
  );
};

export default YoutubeCard;
