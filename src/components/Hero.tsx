export default function Hero() {
    return (
        <div className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                {/* Hero Content */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 ">
                    Welcome to{" "}
                    <span className="text-red-500 text-6xl font-bold">
                        TL TOM
                    </span>{" "}
                    Channel!
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Catch all the latest gameplay, tutorials, and live streams
                    of your favorite games.
                </p>

                {/* Subscribe Button */}
                <a
                    href="https://www.youtube.com/@T.L_TOM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
                >
                    Subscribe Now
                </a>

                {/* Video Placeholder or Thumbnail */}
                <div className="mt-10 flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xLQ05_h0oMc?si=t09Vy_NYCSroLyjK"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
