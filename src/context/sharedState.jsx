import React, { useState, useEffect } from "react";
import SharedContext from "./SharedContext";
import io from "socket.io-client";

const SharedState = (props) => {
  const [loader, setLoader] = useState(false);
  const [deletedReceiptsData, setDeletedReceiptsData] = useState([]);
  const [socket, setSocket] = useState(null); // Add a socket state

  useEffect(() => {
    // Connect to your server
    const newSocket = io("http://localhost:4200");//, { path: "/socket.io" }

    setSocket(newSocket);

    // Disconnect the socket when the component unmounts
    return () => newSocket.disconnect();
  }, []);

  return (
    <SharedContext.Provider
      value={{
        loader,
        setLoader,
        deletedReceiptsData,
        setDeletedReceiptsData,
        socket, // Add socket to the shared context
      }}
    >
      {props.children}
    </SharedContext.Provider>
  );
};

export default SharedState;
