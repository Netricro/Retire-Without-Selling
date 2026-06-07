import { ImageResponse } from 'next/og';

export const alt = 'Retire Without Selling Your Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B0F1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontFamily: 'serif',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#3A7BFF' }}>R</span>
          <span style={{ color: '#ffffff' }}>.</span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontFamily: 'serif',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.1,
            marginTop: 24,
          }}
        >
          Retire Without Selling<br />Your Business
        </div>
        <div
          style={{
            fontSize: 24,
            fontFamily: 'sans-serif',
            color: '#94a3b8',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: 24,
            fontWeight: 300,
          }}
        >
          Build to Retire
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
