export default function UserIcon({ currentMedia }) {
  const iconColor = currentMedia?.cardColor || "white"; // Use only cardColor

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.09 25.5"
      fill={iconColor} // Use cardColor for the fill color
      className="w-[12px] desktop:w-[20px] cursor-pointer hover:scale-110 transition duration-150"
    >
      <g id="Group_2867" data-name="Group 2867">
        <g id="Group_2661" data-name="Group 2661">
          <path
            id="Path_7580"
            data-name="Path 7580"
            strokeWidth="1px"
            d="M10.54,13.49c-3.66,0-6.62-2.96-6.62-6.62S6.89,.25,10.54,.25s6.62,2.96,6.62,6.62c0,3.65-2.96,6.61-6.62,6.62Zm0-11.76c-2.84,0-5.15,2.3-5.15,5.15s2.3,5.15,5.15,5.15,5.15-2.3,5.15-5.15c0-2.84-2.31-5.14-5.15-5.15h0Z"
          />
        </g>
        <g id="Group_2662" data-name="Group 2662">
          <path
            id="Path_7581"
            data-name="Path 7581"
            strokeWidth="1px"
            d="M20.1,25.25c-.41,0-.74-.33-.74-.74h0c0-4.87-3.97-8.82-8.84-8.81-4.58,0-8.39,3.51-8.78,8.07h14.68c.41,0,.74,.33,.74,.74s-.33,.74-.74,.74H.25v-.74c0-5.69,4.61-10.29,10.3-10.29,5.68,0,10.29,4.61,10.29,10.29,0,.41-.33,.73-.73,.73Z"
          />
        </g>
      </g>
    </svg>
  );
}
