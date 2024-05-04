import React, { useState, useEffect } from "react";
import SharedContext from "./SharedContext";
import io from "socket.io-client";

const SharedState = (props) => {
  const [loader, setLoader] = useState(false);
  const [deletedReceiptsData, setDeletedReceiptsData] = useState([]);
  const [socket, setSocket] = useState(null); // Add a socket state
  const email_id=localStorage.getItem('email_id')
  const password=localStorage.getItem('password')

  useEffect(() => {
    console.log("Setting up socket in SharedState");
    // Setup the socket with reconnection options
    const newSocket = io("http://localhost:4200", {
      autoConnect: true, // Auto connect
      reconnection: true, // Enable auto-reconnection
      reconnectionAttempts: Infinity, // Unlimited reconnection attempts
      reconnectionDelay: 1000, // Wait 1 second before attempting to reconnect
      reconnectionDelayMax: 5000, // Maximum delay of 5 seconds
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
    });

    newSocket.on("reconnect_attempt", () => {
      console.log("Attempting to reconnect to the server...");
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
      if (reason === "io server disconnect") {
        // The server disconnected the client, attempt to reconnect manually
        newSocket.connect();
        newSocket.emit("login", { email_id, password });
      }
    });

    return () => {
      console.log("Cleaning up socket");
      newSocket.disconnect();
    };
  }, []);

  return (
    <SharedContext.Provider
      value={{
        loader,
        setLoader,
        deletedReceiptsData,
        setDeletedReceiptsData,
        socket, // Share the socket through context
      }}
    >
      {props.children}
    </SharedContext.Provider>
  );
};

export default SharedState;
