import { useState } from "react";

const App = () => {
  const [ notifications, setNotifications ] = useState(3);

  const notificationsArr = [
    {
      user: 'Mark Webber',
      avatar: 'avatar-mark-webber.webp',
      action: 'reacted to your recent post',
      other: 'My first tournament today!',
      time: '1m ago',
      notified: false
    },
    {
      user: 'Angela Gray',
      avatar: 'avatar-angela-gray.webp',
      action: 'followed you',
      time: '5m ago',
      notified: false
    },
    {
      user: 'Jacob Thompson',
      avatar: 'avatar-jacob-thompson.webp',
      action: 'has joined your group',
      other: 'Chess Club',
      time: '1 day ago',
      notified: false
    },
    {
      user: 'Rizky Hasanuddin',
      avatar: 'avatar-rizky-hasanuddin.webp',
      action: 'sent you a private message',
      other: 'Hello, thanks for setting up the Chess Club ...',
      time: '5 days ago',
      notified: true
    },
    {
      user: 'Kimberly Smith',
      avatar: 'avatar-kimberly-smith.webp',
      action: 'commented on your picture',
      time: '1 week ago',
      notified: true
    },
    {
      user: 'Nathan Peterson',
      avatar: 'avatar-nathan-peterson.webp',
      action: 'reacted to your recent post',
      other: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      notified: true
    },
    {
      user: 'Anna Kim',
      avatar: 'avatar-anna-kim.webp',
      action: 'left the group',
      other: 'Chess Club',
      time: '2 weeks ago',
      notified: true
    }
  ]

  return (
    <>
      <div id="card">
        <div className="top">
          <h2>Notifications <span className="notifications-number">{notifications}</span></h2>
          <button className="mark-all" onClick={()=>setNotifications(0)}>Mark all as read</button>
        </div>
        <div className="bottom">
          {
          notificationsArr.map((e) => {
            return (
              <div className={e.notified ? 'notified' : 'gray-bg'}>
                <img src={e.avatar} alt="avatar" />
                <h4>{e.user}</h4>
                <p>{e.action}</p>
                <p>{e.other}</p>
                <p>{e.time}</p>

              </div>
            )
          })
          }
        </div>
      </div>
    </>
  );
}

export default App;