export function AppHeader({ header }: Readonly<{ header: string }>) {
  return (
    <header>
      <h1 className="text-xl font-bold">{header}</h1>
    </header>
  );
}
