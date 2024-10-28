function CopySvg({ color = "fill-current", height = "auto", width = "auto" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      version="1.1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path d="M35 270h45v45c0 8.284 6.716 15 15 15h200c8.284 0 15-6.716 15-15V75c0-8.284-6.716-15-15-15h-45V15c0-8.284-6.716-15-15-15H35c-8.284 0-15 6.716-15 15v240c0 8.284 6.716 15 15 15zm245 30H110V90h170v210zM50 30h170v30H95c-8.284 0-15 6.716-15 15v165H50V30z"></path>
      <path d="M155 120c-8.284 0-15 6.716-15 15s6.716 15 15 15h80c8.284 0 15-6.716 15-15s-6.716-15-15-15h-80zM235 180h-80c-8.284 0-15 6.716-15 15s6.716 15 15 15h80c8.284 0 15-6.716 15-15s-6.716-15-15-15zM235 240h-80c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h80c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z"></path>
    </svg>
  );
}

export default CopySvg;
