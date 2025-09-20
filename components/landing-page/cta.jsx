"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta-local bg-light text-body" id="cta">
      <div className="container grid-local">
        <div className="media-local" aria-hidden="true">
          <Image
            src="/cta.svg"
            alt=""
            className="image-local"
            width={420}
            height={520}
            priority
          />
        </div>

        <div className="copy-local">
          <h2 className="font-heading title-local">
            <span className="line">
              Your daily moment of{" "}
              <span className="wordIcon">
                <span>joy</span>
                <Image
                  src="/a-3.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden
                />
              </span>
            </span>
            <span className="line">brewed with neighborhood</span>
            <span className="line">
              <span className="wordIcon">
                <span>love</span>
                <Image
                  src="/a-2.svg"
                  alt=""
                  width={24}
                  height={24}
                  aria-hidden
                />
              </span>{" "}
              at Marcel&apos;s.
            </span>
          </h2>

          <div className="actions-local">
            <a
              href="#recommendations"
              className="relative inline-block px-5 py-3 rounded-lg no-underline font-medium text-base transition-all duration-200 border-2 border-[#654321] bg-[#8b4513] text-[#f5f5dc] shadow-[0_2px_0_#654321] hover:bg-[#a0522d] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#654321] focus:ring-offset-2 mt-6"
              aria-label="Visit Marcel's Window"
            >
              Visit Marcel's Window
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid-local {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
          align-items: center;
          padding: var(--space-4) 0;
        }
        .media-local {
          display: flex;
          justify-content: center;
          order: 1;
        }
        .copy-local {
          order: 2;
          text-align: center;
        }
        .image-local {
          width: clamp(200px, 40vw, 420px);
          height: auto;
          max-height: 40vh;
          object-fit: contain;
        }
        .title-local {
          color: var(--maroon);
          font-size: clamp(1.5rem, 5vw, 2.6rem);
          line-height: 1.15;
          font-weight: 300;
          text-wrap: balance;
          margin-bottom: var(--space-4);
        }
        .line {
          display: inline;
        } /* mobile natural wrap */
        .wordIcon {
          display: inline-flex;
          align-items: center;
          gap: 0.15em;
          white-space: nowrap;
          vertical-align: baseline;
        }
        .actions-local {
          margin-top: var(--space-4);
        }
        @media (min-width: 640px) {
          .grid-local {
            gap: var(--space-8);
            padding: var(--space-6) 0;
          }
          .image-local {
            max-height: 50vh;
          }
          .title-local {
            font-size: clamp(1.8rem, 4vw, 2.6rem);
            margin-bottom: var(--space-6);
          }
          .actions-local {
            margin-top: var(--space-6);
          }
        }
        @media (min-width: 900px) {
          .grid-local {
            grid-template-columns: 0.9fr 1fr;
            gap: var(--space-12);
            padding: var(--space-8) 0;
          }
          .media-local {
            order: 1;
          }
          .copy-local {
            order: 2;
            text-align: left;
          }
          .line {
            display: block;
          } /* force three lines on desktop */
          .title-local {
            margin-bottom: var(--space-8);
          }
          .actions-local {
            margin-top: var(--space-8);
          }
        }
      `}</style>
    </section>
  );
}
