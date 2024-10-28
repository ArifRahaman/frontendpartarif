// import { useState, useEffect, useRef } from 'react';

// const useOnlineStatus = () => {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);
//   const [webSocket, setWebSocket] = useState(null);
//   const email = localStorage.getItem("email"); // Assuming you are storing email in local storage
//   const reconnectAttempts = useRef(0);
//   const MAX_RECONNECT_ATTEMPTS = 5; // Maximum number of reconnect attempts

//   useEffect(() => {
//     let ws; // Declare WebSocket variable

//     // Function to initialize WebSocket connection
//     const connectWebSocket = () => {
//       ws = new WebSocket('ws://localhost:5173/');
//       setWebSocket(ws);

//       ws.onopen = () => {
//         console.log('WebSocket connection established');
//         reconnectAttempts.current = 0; // Reset reconnect attempts
//         sendStatus(isOnline); // Send initial status when connected
//       };

//       ws.onclose = (event) => {
//         console.warn('WebSocket connection closed:', event);
//         if (reconnectAttempts.current < MAX_RECONNECT_ATTEMPTS) {
//           reconnectAttempts.current += 1;
//           console.log(`Reconnecting... (${reconnectAttempts.current}/${MAX_RECONNECT_ATTEMPTS})`);
//           setTimeout(connectWebSocket, 3000); // Retry connection after 3 seconds
//         } else {
//           console.error('Max reconnection attempts reached.');
//         }
//       };

//       ws.onerror = (error) => {
//         console.error('WebSocket error:', error);
//       };

//       ws.onmessage = (event) => {
//         const data = JSON.parse(event.data);
//         console.log('Received:', data); // Handle received data
//       };
//     };

//     // Function to send online status to the server
//     const sendStatus = (status) => {
//       if (ws && ws.readyState === WebSocket.OPEN && email) { // Ensure WebSocket is open
//         ws.send(JSON.stringify({ email, status })); // Send email and status
//       } else {
//         console.error('WebSocket is not open. Current state:', ws?.readyState);
//       }
//     };

//     // Initialize WebSocket connection
//     connectWebSocket();

//     // Handle online/offline events
//     const handleOnline = () => {
//       setIsOnline(true);
//       sendStatus(true);
//     };

//     const handleOffline = () => {
//       setIsOnline(false);
//       sendStatus(false);
//     };

//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);

//     // Cleanup on component unmount
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//       if (ws) {
//         ws.close(); // Close WebSocket connection on unmount
//       }
//     };
//   }, [isOnline, email]); // Run the effect whenever isOnline or email changes

//   return isOnline;
// };

// export default useOnlineStatus;
