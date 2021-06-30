export default function Header({ text, color = 'black' }) {
  return (
    <div>
      <h1
        style={{
          color: { color },
          fontSize: '60px',
          textTransform: 'uppercase',
          fontWeight: '900',
        }}
      >
        {text}
      </h1>
    </div>
  );
}
