import React from "react"

import { Media } from "./Media"
import { Url } from "./Url"
import { Image } from "./Image"

export const Conclusion = () => (
  <section className="conclusion">
    <h2>What Now?</h2>
    <Media image="savings.svg" alt="Savings" large reverse>
      <p>
        <strong>It is up to you to take action now.</strong>
      </p>
      <p>You can ignore what you learnt here and keep going as usual.</p>
      <p>
        But when you plan your next vacation, business trip, or want to visit
        your family—think twice if you would still go if you had to pay the real
        price.
      </p>
      <p>
        If you do take an airplane, consider donating the amount from this
        calculator to a climate compensation organization.
      </p>
      <p>
        We recommend <strong>atmosfair</strong> from Germany. This calculator is
        based on their work.
      </p>
      <div>
        <strong>Donate here:</strong>
      </div>
    </Media>
    <div className="row">
      <div className="col">
        <Url href="https://www.atmosfair.de/en/donate/">
          <Image src="atmosfair.svg" alt="Atmosfair" />
        </Url>
      </div>
      <div className="col">
        <div className="row">
          <div className="about">
            <p>About this project</p>
            <Url href="mailto:timo.horstschaefer@gmail.com">
              <Image src="envelope.svg" alt="email" />
              Give feedback
            </Url>
            <Url href="https://github.com/morloy/flight-emissions">
              <Image src="github.svg" alt="GitHub" />
              View source
            </Url>
            <Url href="https://twitter.com/thrstschfr">
              <Image src="twitter.svg" alt="Twitter" />
              Connect
            </Url>
          </div>
        </div>
      </div>
    </div>
  </section>
)
