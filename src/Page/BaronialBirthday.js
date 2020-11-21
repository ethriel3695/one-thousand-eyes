import React from 'react';
import Button from 'gatsby-theme-contentful/src/components/Button/Button';

export default function ListComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2>Registration</h2>
        <p className="mr-5">
          Please take a moment and register for the event so we can see all the
          wonderful people that are joining us today!
        </p>
        <form name="contact" netlify="true">
          <p>
            <input
              type="text"
              className="w-3/4 form-input p-2 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
              placeholder="Name"
              name="name"
              required
            />
          </p>
          <p>
            <input
              className="w-3/4 form-input p-2 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
              type="text"
              name="persona"
              placeholder="Persona"
              required
            />
          </p>
          <p>
            <input
              className="w-3/4 form-input p-2 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
              type="text"
              name="member-#"
              placeholder="Member #"
            />
          </p>
          <p>
            <input
              className="w-3/4 form-input p-2 sm:text-sm border-solid border-2 border-gray-600 hover:border-gray-800 bg-opacity-100 rounded-md"
              type="text"
              name="branch"
              placeholder="Branch"
            />
          </p>
          <p>
            <Button key={'registration-button'} type="submit">
              Register
            </Button>
          </p>
        </form>
        <h2>Zoom Links</h2>
        <h3>Main Room</h3>
        <p className="mr-5">
          All attendees are encouraged to “hang out” in this room throughout the
          day. A host will be available throughout the day, so if you and a
          group of friends wishes to have a more private discussion simply text
          the host and ask them to provide you a separate room (request your own
          table). We are analogizing this to sitting at your own table in the
          main room and having conversation with those at your table.
        </p>
        <h4>Scheduled Activities</h4>
        <table className="mb-5">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event Name </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-5">12:00pm</td>
              <td className="pr-5">Court</td>
            </tr>
            <tr>
              <td className="pr-5">6:00pm</td>
              <td className="pr-5">Feast</td>
            </tr>
          </tbody>
        </table>

        <Button key={'zoom-main-room'}>
          <a
            href="https://us02web.zoom.us/j/89372336851?pwd=T0E5NVpLRjJmS3EyWlord3NIa1dwdz09"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Main Room
          </a>
        </Button>

        <br />
        <br />
        <h3>A&S Classrooms</h3>
        <p className="mr-5">
          Welcome to the gathering place for all artisans. Please feel free to
          enter this room to converse with others on all things A&S. Scheduled
          classNamees will be placed in a separate room by the room host at the
          listed time. Those who wish to continue their own conversation (or
          informal instructional sessions) may remain in the room while the
          scheduled className is occurring without interfering with each other.
          If people desire a more quiet conversation please reach out to the
          room host who can put you in a separate room with the appropriate
          people (requesting your own table).
        </p>
        <h4>Scheduled Activities </h4>
        <table className="mb-5">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event Name </th>
              <th>Host</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-5">1:00pm</td>
              <td className="pr-5">
                Kingdom Awards (and ratting people out for them)
              </td>
              <td>Maestra Magdalene Lucia Ramberti</td>
            </tr>
            <tr>
              <td className="pr-5">2:00pm</td>
              <td className="pr-5">Turkish Women's Accessories</td>
              <td>Mistress Sumayya bint Suleiman</td>
            </tr>
            <tr>
              <td className="pr-5">3:00pm</td>
              <td className="pr-5">Ask a Peer </td>
              <td>Sir Yuri the Yakslapper</td>
            </tr>
            <tr>
              <td className="pr-5">4:00pm</td>
              <td className="pr-5">Stargazing</td>
              <td>Mistress Malkin Allardson </td>
            </tr>
            <tr>
              <td className="pr-5">5:00pm</td>
              <td className="pr-5">Navigation</td>
              <td>Mistress Malkin Allardson </td>
            </tr>
          </tbody>
        </table>

        <Button key={'zoom-classroom'}>
          <a
            href="https://us02web.zoom.us/j/81375587507?pwd=VFhJT1kwaWZoRjkvUmZISzRWWlJFdz09"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Classroom
          </a>
        </Button>

        <br />
        <br />
        <h3>Games</h3>
        <p className="mr-5">
          Ready to sit back and relax for a while over a friendly game? Come on
          into the Game Room area and enjoy the camaraderie with other gamers. A
          room host will be available to open separate rooms where you can play
          a game with your opponents, or hang out in the room for open
          conversation.
        </p>
        <h4>Scheduled Activities </h4>
        <table className="mb-5">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event Name </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-5">1:00pm</td>
              <td className="pr-5">Registration opens for Cribbage Tourney</td>
            </tr>
            <tr>
              <td className="pr-5">2:00pm</td>
              <td className="pr-5">Cribbage Tourney Begins</td>
            </tr>
          </tbody>
        </table>

        <Button key={'zoom-games'}>
          <a
            href="https://us02web.zoom.us/j/82592387145?pwd=YzEvRjY2U3RFWVBaZCtLcUI5UmlKQT09"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Games
          </a>
        </Button>

        <br />
      </div>
      <div>
        <h4>
          Welcome one and all to the Baronial Birthday event sponsored by the
          Barony of One Thousand Eyes!
        </h4>
        <p>
          We hope you will enjoy the day hanging out with each other and helping
          to make this required virtual reality a little better less isolated.
        </p>
        <p>
          All rooms will open at 11:00am and will remain open throughout the
          event. Upon arriving at the event, please take a moment to sign in!
        </p>
        <p>
          Then click on the link to the Main Room area. People will be able to
          mingle and talk freely until Court begins, at which time all
          participants will be muted in order to reduce background noise.
        </p>
        <p>
          If you have any questions or need any assistance, please feel free to
          message the autocorrect, THL Crestina da Brescia
        </p>
        <Button key={'link-event-support'}>
          <a
            href="https://fb.me/msg/vanessa.michel.984"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            THL Crestina da Brescia
          </a>
        </Button>
        <p>
          Also, if you have Baronial Taxes (Largess) that you wish to drop off
          to Their Excellencies please bring them to 757 Aspen Drive Shelley, ID
          between 1:00 - 4:00 pm{' '}
        </p>
        <p>
          While there, if you have reserved feast you may pick up your Grab and
          Go Feast in a BoxTM kit.
        </p>
        <p>
          If you wish to have words with Their Excellencies, you may also
          message Them as well
        </p>
        <Button key={'link-to-baron'}>
          <a
            href="https://fb.me/msg/joe.clark.315213"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Baron Stephan Sorenson
          </a>
        </Button>
        <Button key={'link-to-baroness'}>
          <a
            href="https://fb.me/msg/DeniseKClark"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Baroness Denise of Amberly
          </a>
        </Button>
        <p>
          The feast will begin at 6:00pm. Please feel free to join us even if
          you did not reserve a Feast to go or are not eating.
        </p>
        <p>
          Please enjoy your day! We, the staff of Baronial Birthday, look
          forward to seeing you throughout the day.
        </p>
      </div>
    </div>
  );
}
