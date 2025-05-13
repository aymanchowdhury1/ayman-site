import React, { useState } from "react";

// Video data with titles and YouTube embed URLs
const videos = [
    {
        id: 1,
        title: "𝙈𝙂𝘿 & 𝙆𝙝𝙖𝙣𝙜𝙈𝙭𝙣𝙚 - 2 𝙋𝙝𝙪𝙩 𝙝𝙤𝙣 𝙁𝙪𝙣𝙠 (𝕭𝖊𝖘𝖙 𝖕𝖆𝖗𝖙 𝖑𝖔𝖔𝖕𝖊𝖉 + 𝕾𝖚𝖕𝖊𝖗 𝖘𝖑𝖔𝖜𝖊𝖉) | 𝐗 𝐒𝐚𝐥𝐞𝐬𝐦𝐚𝐧 𝐞𝐝𝐢𝐭",
        src: "https://www.youtube.com/embed/4NhuoCr3f3k?si=NFP2pO7Ljf1jKWm2L",
    },
    {
        id: 2,
        title: "Gojo edits type #2 :) 👿💀",
        src: "https://www.youtube.com/embed/G7Z4z-WI9rs",
    },
    {
        id: 3,
        title: "How do I look in school vs home ",
        src: "https://www.youtube.com/embed/6HPak74Pkrc",
    },
    {
        id: 4,
        title: "Your fav anime",
        src: "https://www.youtube.com/embed/HfWH88TiEY0",
    },
    {
        id: 5,
        title: "Gojo edits type :) 👿💀",
        src: "https://www.youtube.com/embed/ROJAs7PmSaA",
    },
    {
        id: 6,
        title: "2 bro in 1 frame",
        src: "https://www.youtube.com/embed/NhyvO-M1qiI",
    },
];

export default function VideoSection() {
    const [searchTerm, setSearchTerm] = useState("");

    // Update the search term based on user input
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Filter videos by title based on the search term
    const filteredVideos = videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Search Bar */}
                <div className="mb-8 text-center flex justify-center items-center gap-2">
                    {/* Search Button */}

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search videos by title..."
                        className="py-2 px-4 rounded-md w-1/2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-red-500"
                        onChange={handleSearch}
                    />
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                        onClick={() => alert("Searching...")} // Replace with actual search function if needed
                    >
                        Search
                    </button>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.length > 0 ? (
                        filteredVideos.map((video) => (
                            <div
                                key={video.id}
                                className="flex flex-col items-center"
                            >
                                <iframe
                                    width="300"
                                    height="200"
                                    src={video.src}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg mb-3"
                                ></iframe>
                                <p className="text-lg font-bold">
                                    {video.title}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-3">
                            No videos found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
