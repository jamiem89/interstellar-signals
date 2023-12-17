function App() {
  return (
    <div class="grid md:grid-cols-12 gap-6 max-w-[800px] mx-auto">
      <header class="md:col-span-10 md:col-start-2 mb-6 md:mb-10 border-b border-solid border-black-300 py-5">
        <h1>Interstellar signals</h1>
      </header>
      <body class="md:col-span-10 md:col-start-2">
        <form class="grid gap-4">
            <label class="">Message:</label>
            <textarea class="border border-solid border-black-300 mb-5"></textarea>
            <button class="inline-block p-4 bg-orange-400 text-black rounded-full w-auto">Send message</button>
          </form>
        </body>
    </div>
  );
}

export default App;
