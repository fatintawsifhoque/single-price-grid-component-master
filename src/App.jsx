function App() {
  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center">
        <div className="h-[725px] md:h-[470px] w-[315px] md:w-[640px] rounded-2xl box-border shadow-xl ">
          <div className="h-[270px] md:h-[218px]  p-[25px] md:p-[40px]">
            <h1 className="text-[#00BDBA] font-bold">Join our community</h1>
            <p className="mt-[30px] text-[#C0DF34]">30-day, hassle-free money back guarantee</p>
            <p className="mt-[20px] text-sm md:text-base text-[#ABABAB]">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
          </div>
          <div className="h-[455px] md:h-[252px] flex flex-col md:flex-row">
            <div className="h-[50%] md:h-full md:w-[50%] bg-[#2AB2AF] p-[24px] md:p-[35px]">
              <h2 className="text-white font-bold ">Monthly Subscription</h2>
              <div className="flex items-center gap-4 mt-[20px]">
                <p className="font-bold text-3xl text-white">$29</p>
                <span className="text-gray-300">per month</span>
              </div>
              <p className="mt-1.5 text-sm md:text-base text-gray-200">Full access for less than $1 a day</p>
              <button className="h-[50px] w-full bg-[#C0DF34] text-white mt-5 rounded-lg">Sign Up</button>
              </div>
            <div className="h-[50%] md:h-full md:w-[50%] bg-[#5AC1C1] p-[24px] md:p-[35px]" >
              <h2 className="text-white font-bold ">Why Us</h2>
              <p className="mt-[20px] text-[#DBF1F1] text-[12px]">Tutorials by industry experts</p>
              <p className="text-[#DBF1F1] text-[12px]">Peer & expert code review</p>
              <p className="text-[#DBF1F1] text-[12px]">Coding exercises</p>
              <p className="text-[#DBF1F1] text-[12px]">Access to our GitHub repos</p>
              <p className="text-[#DBF1F1] text-[12px]">Community forum</p>
              <p className="text-[#DBF1F1] text-[12px]">Flashcard decks</p>
              <p className="text-[#DBF1F1] text-[12px]">New videos every week</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
