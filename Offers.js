import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Offers() {
  const [seconds, setSeconds] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <section className="offers-page">
      <div className="offer-content">
        <p className="eyebrow">SPECIAL OFFER</p>
        <h1>Hurry...!! Get Extra Discount</h1>
        <p>Limited-time offer on fresh vegetables.</p>

        {seconds > 0 ? (
          <div className="countdown">
            {[
              [days, "Day"],
              [hours, "Hour"],
              [minutes, "Minute"],
              [remainingSeconds, "Second"],
            ].map(([number, label]) => (
              <div className="countdown-item" key={label}>
                <strong>{String(number).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="offer-ended">This offer has ended.</p>
        )}

        <Link to="/vegetables" className="green-button">
          Check The Deal
        </Link>
      </div>
    </section>
  );
}

export default Offers;