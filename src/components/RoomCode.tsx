import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.sass";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy button" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
