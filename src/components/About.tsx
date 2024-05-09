function About() {
  return (
    <section id="about">
      <h2 className="font-medium mb-5 lg:hidden tracking-wider">ABOUT</h2>
      <div className="flex flex-col gap-4 leading-[1.6]">
        <p>Hi there! 👋 I'm Sabbir. </p>
        <p>
          I'm a software engineer with over 2 years of hands-on experience,
          currently working at{" "}
          <a
            href="https://www.relisource.com/"
            className="font-medium text-blue-600"
            target="_blank"
          >
            ReliSource
          </a>{" "}
          in Bangladesh. I deal with things like building the backbones of web
          applications, managing data in the cloud, and making websites look
          good and work smoothly.
        </p>
        <p>
          During my software engineering career, I have worked with multiple
          programming languages, libraries, frameworks, and technologies such as
          Ruby on Rails, Apex, TypeScript, React, Postgres, AngularJS, and AWS.
        </p>
        <p>
          My interests range from distributed systems and big data to AI. I'm
          constantly driven to push my boundaries and explore new technological
          horizons.
        </p>
        <p>
          Outside of work, I'm deeply committed to personal growth and
          self-improvement. I firmly believe in the power of continuous
          learning, both professionally and personally. In my downtime, you will
          find me lost in the pages of a captivating book 📚 or listening to
          podcasts 🎙️
        </p>
      </div>
    </section>
  );
}

export default About;
