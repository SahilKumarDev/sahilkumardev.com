import Image from "next/image";

interface YoutubeCardProps {
  src: string;
  title: string;
  link: string;
  description: string;
}

const YoutubeCard = ({ src, title, link, description }: YoutubeCardProps) => (
  <li className="blog-post-item">
    <a href={link} target="_blank">
      <figure className="blog-banner-box">
        <Image
          src={src}
          alt={title}
          width={100}
          height={100}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>
      <div className="blog-content">
        <h3 className="h3 blog-item-title">{title}</h3>
        <p className="blog-text">{description}</p>
      </div>
    </a>
  </li>
);

export default YoutubeCard;
