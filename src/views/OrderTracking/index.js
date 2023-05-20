import React, { useEffect, useState, useRef } from "react";
import { OrderSummary } from "../Checkout";
import classes from "./tracking.module.scss";

export default function OrderTracking() {
  const STATUSES = {
    1: { label: "Order Confirmed!", color: "hsl(170, 80%, 60%)" },
    2: { label: "Preparing Order...", color: "hsl(120, 80%, 60%)" },
    3: { label: "Items in Transit...", color: "hsl(70, 80%, 70%)" },
    4: { label: "Delivered!", color: "hsl(30, 100%, 70%)" },
  };
  const [progress, setProgress] = useState(1);
  const intervalRef = useRef(null);

  function startInterval(delayMs) {
    // setTimeout(() => {
    //   setProgress((p) => 1 + (p % 4));
    // }, delayMs);
    intervalRef.current = setInterval(() => {
      setProgress((p) => (p % 4) + 1);
    }, delayMs);
  }
  useEffect(() => {
    startInterval(1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={classes["container"]}>
      <div className={classes["container"]} style={{ gap: "1rem" }}>
        <div>
          {STATUSES[progress].label} ({progress}/4)
        </div>
        <div className={classes["progress-container"]}>
          <div
            className={classes["progress-line"]}
            style={{
              width: `${progress * 25}%`,
              backgroundColor: STATUSES[progress].color,
            }}
          />
        </div>
      </div>
      <div>
        <div>Order Summary</div>
        <OrderSummary />
      </div>
    </div>
  );
}
