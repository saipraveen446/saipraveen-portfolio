import { useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Monitor from './home/Monitor';
import PortfolioScreen from './home/PortfolioScreen';

const MotionDiv = motion.div;

const KB_LAYOUT = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.7],
  [1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.9],
  [1.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.1],
  [2.2, 1, 1, 1, 1, 1, 1, 1, 1, 2.4],
  [1.1, 1.1, 1.1, 4.8, 1.1, 1.1, 1.2],
];

const Home = () => {
  const sceneRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [2, -1.2]), { stiffness: 70, damping: 24 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-2.5, 2.5]), { stiffness: 70, damping: 24 });

  const onPointerMove = useCallback(
    (e) => {
      const el = sceneRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    [mx, my]
  );

  const onPointerLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <section
      id="home"
      className="ws-hero"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="ws-room-bg" aria-hidden>
        <div className="ws-wall-wood" />
        <div className="ws-room-gradient" />
        <div className="ws-ceiling-light" />
        <div className="ws-backlight" />
        <div className="ws-desk-glow" />
        <div className="ws-vignette" />
      </div>

      <div className="ws-particles" aria-hidden>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="ws-particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="ws-stage" ref={sceneRef}>
        <MotionDiv className="ws-scene" style={{ rotateX: rx, rotateY: ry }}>
          <div className="ws-workspace">
            <div className="ws-workstation">
              <div className="ws-desk-scene">
                <div className="ws-desk-rig" aria-hidden>
                  <div className="ws-desk-top">
                    <div className="ws-desk-seat" aria-hidden />
                    <div className="ws-stand-plate-on-desk" aria-hidden>
                      <div className="ws-stand-plate" />
                    </div>
                    <div className="ws-desk-shine" />
                    <div className="ws-desk-stand-zone" aria-hidden />
                    <div className="ws-desk-mat">
                      <div className="ws-peripherals">
                        <div className="ws-keyboard">
                          <div className="ws-keyboard-case">
                            <div className="ws-keyboard-plate">
                              {KB_LAYOUT.map((row, ri) => (
                                <div
                                  key={ri}
                                  className={`ws-kb-row${ri === KB_LAYOUT.length - 1 ? ' ws-kb-row-bottom' : ''}`}
                                >
                                  {row.map((w, ki) => (
                                    <span
                                      key={ki}
                                      className={`ws-kb-key${w > 2 ? ' ws-kb-key-wide' : w > 1.4 ? ' ws-kb-key-mod' : ''}${ri === KB_LAYOUT.length - 1 && ki === 3 ? ' ws-kb-key-space' : ''}`}
                                      style={{ flex: w }}
                                    />
                                  ))}
                                </div>
                              ))}
                            </div>
                            <div className="ws-keyboard-feet">
                              <span /><span /><span /><span />
                            </div>
                          </div>
                        </div>

                        <div className="ws-mouse">
                          <div className="ws-mouse-body">
                            <div className="ws-mouse-left-btn" />
                            <div className="ws-mouse-right-btn" />
                            <div className="ws-mouse-scroll-well">
                              <div className="ws-mouse-scroll" />
                            </div>
                            <div className="ws-mouse-thumb-rest" />
                            <div className="ws-mouse-side-grip" />
                            <div className="ws-mouse-led" />
                            <div className="ws-mouse-foot ws-mouse-foot-l" />
                            <div className="ws-mouse-foot ws-mouse-foot-r" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ws-desk-apron" />
                  </div>
                  <div className="ws-desk-leg ws-desk-leg-l" />
                  <div className="ws-desk-leg ws-desk-leg-r" />

                  <div className="ws-stand-pillar-mount" aria-hidden>
                    <div className="ws-stand-pillar" />
                  </div>
                </div>

                <div className="ws-monitor-on-desk">
                  <Monitor size="xl" glow="cyan" showStand={false}>
                    <PortfolioScreen />
                  </Monitor>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>

      <MotionDiv
        className="ws-scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link
          to="about"
          smooth
          duration={500}
          offset={-80}
          className="ws-scroll-cue-link"
          aria-label="Scroll to about"
        >
          <span>Explore</span>
          <div className="ws-scroll-mouse">
            <MotionDiv
              className="ws-scroll-wheel"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </Link>
      </MotionDiv>
    </section>
  );
};

export default Home;
