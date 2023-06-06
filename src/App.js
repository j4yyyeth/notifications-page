import { useState } from "react";

const App = () => {
  const [ notifications, setNotifications ] = useState(3);

  const notificationsArr = [
    {
      user: 'Mark Webber',
      avatar: 'avatar-mark-webber.webp',
      action: 'reacted to your recent post',
      other: 'My first tournament today!',
      time: '1m ago'
    },
    {
      user: 'Angela Gray',
      avatar: 'avatar-angela-gray.webp',
      action: 'followed you',
      time: '5m ago'
    },
    {
      user: 'Jacob Thompson',
      avatar: 'avatar-jacob-thompson.webp',
      action: 'has joined your group',
      other: 'Chess Club',
      time: '1 day ago'
    },
    {
      user: 'Rizky Hasanuddin',
      avatar: 'avatar-rizky-hasanuddin.webp',
      action: 'sent you a private message',
      other: 'Hello, thanks for setting up the Chess Club ...',
      time: '5 days ago'
    },
    {
      user: 'Kimberly Smith',
      avatar: 'avatar-kimberly-smith.webp',
      action: 'commented on your picture',
      time: '1 week ago'
    },
    {
      user: 'Nathan Peterson',
      avatar: 'avatar-nathan-peterson.webp',
      action: 'reacted to your recent post',
      other: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago'
    },
    {
      user: 'Anna Kim',
      avatar: 'avatar-anna-kim.webp',
      action: 'left the group',
      other: 'Chess Club',
      time: '2 weeks ago'
    }
  ]

  return (
    <>
      <div id="card">
        <div className="top">
          <h2>Notifications <span className="notifications-number">{notifications}</span></h2>
          <button className="mark-all" onClick={()=>setNotifications(0)}>Mark all as read</button>
        </div>
        {
        notificationsArr.map((e) => {
          return (
            <div className="gray-bg">
              <img src={e.avatar} alt="avatar" />
              <h4>{e.user}</h4>
              <p>{e.action}</p>
              <p>{e.other}</p>
            </div>
          )
        })
        }
          {/* <div className={notifications ? 'gray-bg' : 'notified'}>
            <img src="avatar-mark-webber.webp" alt="user" />
            <h3>Mark Webber <span className="second-noti">a</span> <span className="third-noti">a</span></h3>
            <div className="time"></div>
          </div>
          <div className={notifications ? 'gray-bg' : 'notified'}>
            <img src="avatar-angela-gray.webp" alt="user" />
            <h3>Angela Gray <span className="second-noti">a</span> <span className="third-noti">a</span></h3>
          </div>
          <div className={notifications ? 'gray-bg' : 'notified'}>
            <img src="avatar-jacob-thompson.webp" alt="user" />
            <h3>Jacob Thompson <span className="second-noti">a</span> <span className="third-noti-blue">a</span></h3>
          </div> */}
      </div>
    </>
  );
}

export default App;