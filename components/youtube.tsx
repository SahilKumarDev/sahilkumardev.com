import React from "react";
import YoutubeCard from "./ui/youtube-card";

const Youtube = () => {
  const YoutubeCardData = [
    {
      src: "/youtube/fanta.png",
      title: "Portfolio Design full video",
      link: "https://youtu.be/CAdmmsINWVk?si=EStwqwPryLlLPZEU", // Portfolio
      description: "Processional portfolio built in react.",
    },
    {
      src: "/youtube/movie.png",
      title: "UI interactions of fanta",
      link: "https://youtu.be/_dySCTJd7wY?si=IZgX6xlYehliEsiU", // fanta
      description: "Learn how the Fanta cold drink get built in react.",
    },
    {
      src: "/youtube/fanta.png",
      title: "Movie website UI Clone",
      link: "https://youtu.be/RTjzkYsj4wc?si=bZ8K_Ecpy7szGdeE", // Movie
      description: "Learn how the movie ui get built in react.",
    },
  ];
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title title-text">Youtube</h2>
      </header>
      <ul className="blog-posts-list">
        {YoutubeCardData.map((post) => (
          <YoutubeCard key={post.title} {...post} />
        ))}
      </ul>
    </article>
  );
};

export default Youtube;
