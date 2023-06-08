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
      notified: true
    },
    {
      user: 'Angela Gray',
      avatar: 'avatar-angela-gray.webp',
      action: 'followed you',
      time: '5m ago',
      notified: true
    },
    {
      user: 'Jacob Thompson',
      avatar: 'avatar-jacob-thompson.webp',
      action: 'has joined your group',
      other: 'Chess Club',
      time: '1 day ago',
      notified: true
    },
    {
      user: 'Rizky Hasanuddin',
      avatar: 'avatar-rizky-hasanuddin.webp',
      action: 'sent you a private message',
      other: 'Hello, thanks for setting up the Chess Club ...',
      time: '5 days ago',
      type: 'message',
      notified: false
    },
    {
      user: 'Kimberly Smith',
      avatar: 'avatar-kimberly-smith.webp',
      action: 'commented on your picture',
      time: '1 week ago',
      notified: false
    },
    {
      user: 'Nathan Peterson',
      avatar: 'avatar-nathan-peterson.webp',
      action: 'reacted to your recent post',
      other: '5 end-game strategies ...',
      time: '2 weeks ago',
      notified: false
    },
    {
      user: 'Anna Kim',
      avatar: 'avatar-anna-kim.webp',
      action: 'left the group',
      other: 'Chess Club',
      time: '2 weeks ago',
      notified: false
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
            if (e.type !== 'message') {
              return (
                <div className={e.notified && notifications ? 'gray-bg' : 'notified'}>
                  <img src={e.avatar} alt="avatar" />
                  <div className='noti-text'>
                    <div className="row-noti">
                      <h4>{e.user}</h4>
                      <p className="second-text">{e.action}</p>
                      <h4 className="third-text">{e.other}</h4>
                      {e.notified && notifications ? <div className="noti-symbol"></div> : ''}
                    </div>
                  <p className="time">{e.time}</p>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="dm-container">
                  <img src={e.avatar} alt="avatar" />
                  <div className='dm-text'>
                    <div className="row-noti">
                      <h4>{e.user}</h4>
                      <p className="second-text">{e.action}</p>
                    </div>
                    <p className="time">{e.time}</p>
                    <p className="dm-content">{e.other}</p>
                  </div>
                </div>
              )
            }
          })
          }
        </div>
      </div>
    </>
  );
};

export default App;