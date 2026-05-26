const About = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center px-6 py-24">
      <section className="w-full max-w-5xl">

            <h2
                className="text-3xl  font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
            >
                About
            </h2>

            <p
                className="mb-10 text-base font-semibold"
                style={{ fontFamily: "var(--font-lato)" }}
            >
                A personal space for managing and organizing my anime and manga journey.
            </p>

            <div className="bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-10">

                <p
                    className="leading-8 mb-6"
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    This is a personal anime and manga tracking platform designed to
                    organize and manage my viewing and reading journey. It serves as a
                    centralized space where I document the series I have completed, am
                    currently watching or reading, and plan to explore in the future.
                </p>

                <p
                    className="leading-8 mb-6"
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    It was created to bring structure to my personal collection and
                    make it easier to revisit and manage the series I care about.
                    The platform includes anime and manga across different stages such
                    as completed series, ongoing titles, and planned watch or read
                    lists.
                </p>

                <p
                    className="leading-8"
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    The platform also allows adding, organizing, and updating entries
                    to keep the collection continuously growing and up to date.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

                    <div className="rounded-xl bg-white p-5 shadow-sm border">
                        <h3 className="font-semibold mb-2">
                            Completed
                        </h3>
                        <p className="text-sm">
                            Track finished anime and manga series.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-5 shadow-sm border">
                    <h3 className="font-semibold mb-2">
                        Ongoing
                    </h3>
                    <p className="text-sm">
                        Keep track of currently watching and reading titles.
                    </p>
                    </div>

                    <div className="rounded-xl bg-white p-5 shadow-sm border">
                    <h3 className="font-semibold mb-2">
                        Watchlist
                    </h3>
                    <p className="text-sm">
                        Save future anime and manga plans.
                    </p>
                    </div>

                </div>

            </div>

        </section>
    </main>
  )
}

export default About