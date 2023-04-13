export default function Home() {
    const icon = document.querySelector('#titleIcon');
    icon.href = '/linux.svg';
    document.title = "Home"
  return (
    <>
      <main>
        <div>Home</div>
      </main>
    </>
  );
}
