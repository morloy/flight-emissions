import React from "react"

import { Media } from "./Media"

export const Introduction = () => (
  <div className="container">
    <h1>Can I afford to fly?</h1>
    <Media image="world.svg" alt="Connected world">
      <p>
        Airplanes require a large amount of energy to fly. They use fossil fuels
        and burn it in our in the atmosphere. This causes substantial
        environmental damage.
      </p>
      <p>
        In 2018, the German Environment Agency estimated the damage for one ton
        of CO2 emission with a cost of €180.
      </p>
      <div className="note">
        Source:{" "}
        <a
          href="https://www.umweltbundesamt.de/en/press/pressinformation/high-costs-when-environmental-protection-is"
          target="_blank"
          rel="noopener noreferrer"
        >
          Umweltbundesamt
        </a>
      </div>
    </Media>

    <Media image="environment.svg" alt="Environment" reverse>
      <p>
        <strong>
          Would you still take an airplane if you had to pay the real price?
        </strong>
      </p>
      <p>
        Remember, someone has to repair the damage to our environment. If you
        don’t do it, it might be your own children.
      </p>
      <p>
        Scroll down to learn how much flying would cost you at €180 per ton of
        CO
        <sub>2</sub> 👇
      </p>
    </Media>
  </div>
)
