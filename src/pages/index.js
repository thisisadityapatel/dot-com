import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faFilePdf,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const [emoji, setEmoji] = useState("🏂");
  const current_Date = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      const emojis = ["🏀", "💱", "🏂", "⚙️"];
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * emojis.length);
      } while (emojis[randomIndex] === emoji);
      setEmoji(emojis[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, [emoji]);

  return (
    <>
      <div
        className="container introDiv portfolioElement"
        style={{ marginTop: "auto", marginBottom: "auto" }}
      >
        <div className="text-center my-5">
          <img
            src="/introProfileImage.webp"
            alt="Aditya Patel Profile Picture"
            className="introProfileImage border border-5 rounded-circle"
          />
        </div>
        <p>
          Hey, I'm Aditya, a{" "}
          <span style={{ textDecoration: "underline" }}>Computer Science</span>{" "}
          undergrad at{" "}
          <Link
            href="https://www.torontomu.ca/about/"
            target="_blank"
            className="introLink hover-underline-animation"
          >
            TMU
          </Link>{" "}
          in my senior year graduating on May 2026. Interested in distributed
          systems, backend engineering and infrastructure, I like challenging
          myself to do things I’ve never accomplished before and I strive to
          learn, build, and engineer stuff.
        </p>
        <p>
          In the past I have interned as a{" "}
          <span style={{ textDecoration: "underline" }}>
            Software Engineer Intern
          </span>{" "}
          at{" "}
          <Link
            href="/experience/wealthsimple"
            className="introLink hover-underline-animation"
          >
            Wealthsimple
          </Link>
          . Before that, I was a{" "}
          <span style={{ textDecoration: "underline" }}>
            Software Engineer Intern
          </span>{" "}
          at{" "}
          <Link
            href="/experience/rbc"
            className="introLink hover-underline-animation"
          >
            Royal Bank of Canada
          </Link>
          , a{" "}
          <span style={{ textDecoration: "underline" }}>
            Trading Floor Software Developer Intern
          </span>{" "}
          at{" "}
          <Link
            href="/experience/scotiabank"
            className="introLink hover-underline-animation"
          >
            Scotiabank GBM
          </Link>
          , and am currently open to 2026 new graduate opportunities.
        </p>
        <p>
          I’m into swimming,{" "}
          <Link href="/blog" className="introLink hover-underline-animation">
            blogging
          </Link>
          , F1, solving physics olympiad questions, and trying different food
          options here in Toronto. Feel free to shoot me an email at{" "}
          <a
            className="hover-underline-animation introLink"
            href="mailto:adityakdpatel@gmail.com"
          >
            adityakdpatel@gmail.com
          </a>
          , coffee chats are always on the table.
        </p>
        <div className="introSocials">
          <Link
            href="https://www.linkedin.com/in/thisisadityapatel/"
            className="introSocialIconLink"
            target="_blank"
            style={{ fontSize: "1.5em", margin: "0 20px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://github.com/thisisadityapatel"
            className="introSocialIconLink"
            target="_blank"
            style={{ fontSize: "1.5em", margin: "0 20px" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="mailto:adityakdpatel@gmail.com"
            className="introSocialIconLink"
            target="_blank"
            style={{ fontSize: "1.5em", margin: "0 20px" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link
            href="https://x.com/adityakdpatel"
            className="introSocialIconLink"
            target="_blank"
            style={{ fontSize: "1.5em", margin: "0 20px" }}
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </div>
        <div
          className="text-secondary text-center mt-5 mb-5"
          style={{ fontSize: "80%" }}
        >
          <span style={{ fontSize: "130%" }} className="wave mx-1">
            {emoji}
          </span>{" "}
          Copyright © {current_Date.getFullYear()}{" "}
          <Link
            href="https://www.linkedin.com/in/thisisadityapatel/"
            style={{ textDecoration: "underline" }}
            className="text-secondary"
          >
            Aditya Patel
          </Link>
        </div>
      </div>
    </>
  );
}
