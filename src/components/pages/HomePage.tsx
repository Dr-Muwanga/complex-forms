
const HomePage = () => {
  return (
    <main className="font-sans bg-[#f7f9fa] min-h-screen p-8">
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <header className="text-center mb-8">
          
          <h1 className="mt-4 mb-2 text-3xl font-bold text-[#2a3b4c]">Medical Case Reports Hub</h1>
          <p className="text-[#4a90e2] text-lg">
            Explore, share, and learn from real-world scientific case articles and medical breakthroughs.
          </p>
        </header>
        <nav className="flex justify-center gap-8 mb-8">
          <a href="#cases" className="text-[#2a3b4c] no-underline font-semibold hover:underline">Case Articles</a>
          <a href="#journals" className="text-[#2a3b4c] no-underline font-semibold hover:underline">Journals</a>
          <a href="#submit" className="text-[#2a3b4c] no-underline font-semibold hover:underline">Submit Case</a>
        </nav>
        <section id="cases" className="mb-8">
          <h2 className="text-[#4a90e2] text-2xl font-semibold">Featured Case Articles</h2>
          <ul className="list-none p-0">
            <li className="my-4 p-4 bg-[#f0f4f8] rounded-lg">
              <strong>Rare Neurological Disorder in Pediatrics</strong>
              <p className="mt-2 text-gray-700">
                A detailed report on a rare presentation of Guillain-Barré syndrome in a 7-year-old patient.
              </p>
            </li>
            <li className="my-4 p-4 bg-[#f0f4f8] rounded-lg">
              <strong>Innovative Cardiac Surgery Technique</strong>
              <p className="mt-2 text-gray-700">
                Case study on minimally invasive valve replacement with rapid recovery outcomes.
              </p>
            </li>
          </ul>
        </section>
        <section id="journals" className="mb-8">
          <h2 className="text-[#4a90e2] text-2xl font-semibold">Top Medical Journals</h2>
          <ul className="list-none p-0 flex gap-6">
            <li>
              <a href="https://www.nejm.org/" target="_blank" rel="noopener noreferrer" className="text-[#2a3b4c] hover:underline">
                NEJM
              </a>
            </li>
            <li>
              <a href="https://jamanetwork.com/journals/jama" target="_blank" rel="noopener noreferrer" className="text-[#2a3b4c] hover:underline">
                JAMA
              </a>
            </li>
            <li>
              <a href="https://www.thelancet.com/" target="_blank" rel="noopener noreferrer" className="text-[#2a3b4c] hover:underline">
                The Lancet
              </a>
            </li>
          </ul>
        </section>
        <section id="submit" className="text-center mt-8">
          <h2 className="text-[#4a90e2] text-2xl font-semibold">Share Your Case</h2>
          <p>
            Have an interesting case to share?{' '}
            <a href="#" className="text-[#2a3b4c] font-semibold hover:underline">Submit it here</a> and contribute to the medical community.
          </p>
        </section>
      </section>
    </main>
  )
}

export default HomePage