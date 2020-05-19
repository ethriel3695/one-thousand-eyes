import React from 'react';

const officers = [
  {
    email: 'archery.marshal@baronyof1000eyes.org',
    position: 'Archery Marshal',
  },
  {
    email: 'baron@baronyof1000eyes.org',
    position: 'Baron',
  },
  {
    email: 'baroness@baronyof1000eyes.org',
    position: 'Baroness',
  },
  // {
  //   email: 'chatelaine@baronyof1000eyes.org',
  //   position: 'Chatelaine',
  // },
  // {
  //   email: 'chronicler@baronyof1000eyes.org',
  //   position: 'Chronicler',
  // },
  {
    email: 'exchequer@baronyof1000eyes.org',
    position: 'Exchequer',
  },
  // {
  //   email: 'deputy.exchequer@baronyof1000eyes.org',
  //   position: 'Deputy Exchequer',
  // },
  {
    email: 'herald@baronyof1000eyes.org',
    position: 'Herald',
  },
  // {
  //   email: 'knight.marshal@baronyof1000eyes.org',
  //   position: 'Knight Marshal',
  // },
  // {
  //   email: 'deputy.knight.marshal@baronyof1000eyes.org',
  //   position: 'Deputy Knight Marshal',
  // },
  // {
  //   email: 'list.mistress@baronyof1000eyes.org',
  //   position: 'List Mistress',
  // },
  {
    email: 'moas@baronyof1000eyes.org',
    position: 'Minister of Arts and Sciences',
  },
  // {
  //   email: 'deputy.moas@baronyof1000eyes.org',
  //   position: 'Deputy Minister of Arts and Sciences',
  // },
  {
    email: 'quartermaster@baronyof1000eyes.org',
    position: 'Quartermaster',
  },
  // {
  //   email: 'deputy.quartermaster@baronyof1000eyes.org',
  //   position: 'Deputy Quartermaster',
  // },
  // {
  //   email: 'rapier.marshal@baronyof1000eyes.org',
  //   position: 'Rapier Marshal',
  // },
  // {
  //   email: 'deputy.rapier.marshal@baronyof1000eyes.org',
  //   position: 'Deputy Rapier Marshal',
  // },
  {
    email: 'seneschal@baronyof1000eyes.org',
    position: 'Seneschal',
  },
  {
    email: 'deputy.seneschal@baronyof1000eyes.org',
    position: 'Deputy Seneschal',
  },
  // {
  //   email: 'thrown.weapons.marshal@baronyof1000eyes.org',
  //   position: 'Thrown Weapons Marshal',
  // },
  // {
  //   email: 'deputy.thrown.weapons@baronyof1000eyes.org',
  //   position: 'Deputy Thrown Weapons Marshal',
  // },
  {
    email: 'web.minister@baronyof1000eyes.org',
    position: 'Web Minister',
  },
  // {
  //   email: 'deputy.web.minister@baronyof1000eyes.org',
  //   position: 'Deputy Web Minister',
  // },
  // {
  //   email: 'youth.marshal@baronyof1000eyes.org',
  //   position: 'Youth Marshal',
  // },
  // {
  //   email: 'youth.minister@baronyof1000eyes.org',
  //   position: 'Youth Minister',
  // },
];

export default function ListComponent() {
  return (
    <div>
      <ul className="text-left list-none" aria-label="barony officers">
        {officers.map(({ email, position }, index) => {
          return (
            <li
              className="my-3"
              custom={index}
              key={`officer_link${index}`}
              variants={position}
            >
              <a className=" no-underline" href={`mailto:${email}`}>
                <span
                  className="font-semibold text-blue-700 text-xl hover:text-blue-800"
                  style={{ textShadow: '2px 2px #ddd' }}
                >{`${position}`}</span>

                <br />
                <span
                  className="text-gray-800 text-base"
                  style={{ textShadow: '2px 2px #ddd' }}
                >{`${email}`}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
