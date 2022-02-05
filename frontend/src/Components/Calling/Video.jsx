import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
export default ({ person }) => {
  const [active, setActive] = useState("remote");
  const [videoCall, setVideoCall] = useState(false);
  const [incoming, setIncoming] = useState(false);
  const [outgoing, setOutgoing] = useState(false);
  const [remotePeerId, setRemotePeerId] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const [peerInstance, setPeerInstance] = useState(null);

  useEffect(() => {
    const peer = new Peer(person);
    peer.on("open", (id) => {
      //do somethibg
    });
    setPeerInstance(peer);
  }, []);

  useEffect(() => {
    //if outgoing call is ended/closed
    if (outgoing)
      outgoing.on("close", () => {
        const tracks = currentUserVideoRef.current.srcObject.getTracks();
        tracks.forEach(function (track) {
          track.stop();
        });
        setVideoCall(false);
      });
    //if incoming call is closed
    if (incoming)
      incoming.on("close", () => {
        const tracks = currentUserVideoRef.current.srcObject.getTracks();
        tracks.forEach(function (track) {
          track.stop();
        });
        setVideoCall(false);
      });
    //if we are getting a call
    if (peerInstance) {
      peerInstance.on("call", (call) => {
        setIncoming(call);
      });
    }
  });

  //function to answer a call
  const answer = () => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia(
      { video: true, audio: true },
      (stream) => {
        setVideoCall(true);
        currentUserVideoRef.current.srcObject = stream;
        currentUserVideoRef.current.play();
        incoming.answer(stream);
        incoming.on("stream", (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      },
      (err) => {
        console.log("Failed to get local stream", err);
      }
    );
  };

  //function to make a call
  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    getUserMedia(
      { video: true, audio: true },
      function (stream) {
        var call = peerInstance.call(remotePeerId, stream);
        setOutgoing(call);
        call.on("stream", (remoteStream) => {
          setVideoCall(true);
          currentUserVideoRef.current.srcObject = stream;
          currentUserVideoRef.current.play();
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      },
      function (err) {
        console.log("Failed to get local stream", err);
      }
    );
  };

  //to end the call
  const endCall = () => {
    if (incoming) incoming.close();
    if (outgoing) outgoing.close();
  };

  return (
    <div>
      <div className="text-lg">
        My peer id: {peerInstance ? peerInstance._id : "not found"}
      </div>
      <input
        className="mx-5 bg-gray-200"
        type="text"
        value={remotePeerId}
        onChange={(e) => setRemotePeerId(e.target.value)}
      />
      <button
        className="px-4 py-2 ml-4 text-white bg-green-500 rounded-lg"
        onClick={() => call(remotePeerId)}
      >
        Call
      </button>
      {incoming && (
        <button
          className="px-4 py-2 ml-4 text-white bg-green-500 rounded-lg"
          onClick={(e) => {
            answer();
          }}
        >
          Answer
        </button>
      )}
      {/* Setting up the video area */}
      {videoCall && (
        <div className="absolute top-0 left-0 z-20 w-screen h-screen bg-slate-700">
          <div
            onClick={() => setActive("remote")}
            className={
              (active === "remote"
                ? "left-1 w-[95vw] h-4/5 z-30 peer "
                : "bottom-1 right-1 w-[30vw] z-40 ") +
              "absolute border border-blue-800 rounded-lg bg-slate-100"
            }
          >
            <span>remote</span>
            <video className="" ref={remoteVideoRef} />
          </div>
          <div
            onClick={() => setActive("current")}
            className={
              (active === "current"
                ? "left-1 w-[95vw] h-4/5 z-30 peer "
                : "bottom-1 right-1 w-[30vw] z-40 ") +
              "absolute border border-blue-800 rounded-lg bg-slate-100"
            }
          >
            <span>current</span>
            <video className="" ref={currentUserVideoRef} />
          </div>
          <div className="absolute z-50 hidden left-[5%] top-[60%] peer-hover:block hover:block">
            <div className="flex">
              <button className="px-3 py-1 mx-3 text-xl border rounded-md bg-slate-700 text-slate-50 border-slate-900 hover:bg-slate-900">
                Hold
              </button>
              <button className="px-3 py-1 mx-3 text-xl border rounded-md bg-slate-700 text-slate-50 border-slate-900 hover:bg-slate-900">
                Video Off
              </button>
              <button className="px-3 py-1 mx-3 text-xl border rounded-md bg-slate-700 text-slate-50 border-slate-900 hover:bg-slate-900">
                Mute
              </button>
              <button
                onClick={endCall}
                className="px-3 py-1 mx-3 text-xl bg-red-600 border border-red-800 rounded-md text-slate-50 hover:bg-red-800"
              >
                Cut
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
