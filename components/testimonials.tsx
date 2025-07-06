const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Riya Verma",
      avatar: "/avatars/girl.png",
      text: "Sahil kumar dev was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Abhishek Singh",
      avatar: "/avatars/boy.png",
      text: "Sahil kumar dev was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Aditya Pratap Singh",
      avatar: "/avatars/boy.png",
      text: "Sahil kumar dev was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonialsData.map(({ name, avatar, text }) => (
          <li className="testimonials-item" key={name}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={avatar}
                  alt={name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Testimonials;
