import React, { useEffect } from "react";

function Notifications() {
  useEffect(() => {
    const timer = setInterval(() => {
      alert("⏰ Time to check your diet!");
    }, 60000); // every 1 minute for demo
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card">
      <h2>Notifications</h2>
      <p>You will get reminders every minute (demo).</p>
    </div>
  );
}

export default Notifications;
