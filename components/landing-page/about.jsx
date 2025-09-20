import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="section bg-light text-body" id="about">
      <div className="container section__inner about">
        <h2 className="font-heading text-heading about__title px-4 sm:px-0">
          About Marcel's
        </h2>

        <div className="about__grid">
          <div className="about__left px-4 sm:px-0">
            <div className="about-item">
              <div className="about-item__head">
                <span className="about-item__icon" aria-hidden="true">
                  <Image src="/a-2.svg" alt="" width={24} height={24} />
                </span>

                <span className="about-item__title font-heading text-heading">
                  A Simple Thought
                </span>
              </div>
              <p className="about-item__body font-body">
                What if a café could feel like a hug? Not just coffee, but
                comfort, something slower, softer, and full of soul.
              </p>
            </div>

            <div className="about-item">
              <div className="about-item__head">
                <span className="about-item__icon" aria-hidden="true">
                  <Image src="/a-1.svg" alt="" width={24} height={24} />
                </span>

                <span className="about-item__title font-heading text-heading">
                  A Place to Belong
                </span>
              </div>
              <p className="about-item__body font-body">
                One with sunlight, familiar faces, and the quiet joy of being
                known. <br></br>So we built it, your friendly neighborhood cafe.
              </p>
            </div>

            <div className="about-item">
              <div className="about-item__head">
                <span className="about-item__icon" aria-hidden="true">
                  <Image src="/a-3.svg" alt="" width={24} height={24} />
                </span>

                <span className="about-item__title font-heading text-heading">
                  Our Mascot
                </span>
              </div>
              <p className="about-item__body font-body">
                Every café needs a little magic. <br></br>Not just a mascot. A
                mood. A reminder to slow down and sip joyfully.
              </p>
            </div>
          </div>

          <div className="about__right px-4 sm:px-0">
            <Image
              src="/about.svg"
              alt="Marcel the bear in a teacup with a muffin"
              className="about__image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
