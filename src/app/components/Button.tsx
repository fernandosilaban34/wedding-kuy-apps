export default function Button({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <button className={className}>
      <p>
        {name}{" "}
        <svg
          className="h-3 w-3 text-white inline"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      </p>
    </button>
  );
}
