export const VideoPlayFromBarIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={20} height={20} {...props}>
      <path d="M18.5 9.14l-12-7A1 1 0 005 3v14a1 1 0 001.5.86l12-7a1 1 0 000-1.73z" fill="#FFF" fillOpacity={0.95} />
    </svg>
  );
};

export const VideoPauseFromBarIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={20} height={20} {...props}>
      <rect x={11} y={2} width={6} height={16} rx={1} ry={1} fill={'#FFF'} fillOpacity={0.95} />
      <rect x={3} y={2} width={6} height={16} rx={1} ry={1} fill="#FFF" fillOpacity={0.95} />
    </svg>
  );
};
