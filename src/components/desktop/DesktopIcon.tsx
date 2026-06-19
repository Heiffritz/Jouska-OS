interface DesktopIconProps {
  title: string;
  emoji: string;
}

function DesktopIcon({
  title,
  emoji,
}: DesktopIconProps) {
  return (
    <div className="desktop-icon">
      <div className="icon-image">
        {emoji}
      </div>

      <span>{title}</span>
    </div>
  );
}

export default DesktopIcon;