const Monitor = ({ children, className = '', size = 'xl', glow = 'cyan', showStand = true }) => (
  <div className={`ws-monitor-rig ws-monitor-rig-${size} ${className}`}>
    <div className={`ws-rig-glow ws-rig-glow-${glow}`} aria-hidden />
    <div className="ws-ultrawide-frame">
      <div className="ws-ultrawide-screen">{children}</div>
    </div>
    {showStand && (
      <div className="ws-alu-stand" aria-hidden>
        <div className="ws-stand-pillar" />
        <div className="ws-stand-plate" />
      </div>
    )}
  </div>
);

export default Monitor;
