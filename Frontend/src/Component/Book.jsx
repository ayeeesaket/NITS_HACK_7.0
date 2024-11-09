import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";
import Navbar from "./Navbar";
import { SyncLoader } from "react-spinners"; // Import SyncLoader for the spinner

const Book = () => {
  const [IsLoader, setIsLoader] = useState(true);
  const [lang, setLanguage] = useState("English"); // State for selected language
  const backgroundImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/6/61/Constitution_of_India_%28calligraphic%29_109.jpg";

  const [chapterContent, setChapterContent] = useState({
    3: [],
    4: [],
    "4A": [],
  });

  useEffect(() => {
    const fetchChapterData = async (title, contentIds) => {
      try {
        // Set the API URL based on the selected language
        const apiUrl =
          lang === "Hindi"
            ? "https://nits-hacks-backend.onrender.com/api/v1/book/translateChapter"
            : "https://nits-hacks-backend.onrender.com/api/v1/book/getChapter";

        const response = await axios.post(apiUrl, { title, lang });

        const contentMap = contentIds.map((id, index) => ({
          id,
          text: response.data.data.content[index],
        }));

        setChapterContent((prevContent) => ({
          ...prevContent,
          [title]: contentMap,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch all chapters and set loader to false only when all have loaded
    const fetchAllData = async () => {
      await Promise.all([
        fetchChapterData("3", [
          "content-3-page1-para1",
          "content-3-page1-para2",
          "content-3-page1-para3",
          "content-3-page2-para1",
          "content-3-page2-para2",
        ]),
        fetchChapterData("4", [
          "content-4-page1-para1",
          "content-4-page1-para2",
          "content-4-page1-para3",
          "content-4-page2-para1",
          "content-4-page2-para2",
          "content-4-page2-para3",
          "content-4-page2-para4",
        ]),
        fetchChapterData("4A", [
          "content-4A-page1-para1",
          "content-4A-page1-para2",
          "content-4A-page1-para3",
          "content-4A-page1-para4",
          "content-4A-page2-para1",
          "content-4A-page2-para2",
          "content-4A-page2-para3",
        ]),
      ]);
      setIsLoader(false); // Set loader to false after all data is fetched
    };

    fetchAllData();
  }, [lang]); // Refetch content when language changes

  const splitContentInTwo = (contentArray) => {
    const mid = Math.ceil(contentArray.length / 2);
    return [contentArray.slice(0, mid), contentArray.slice(mid)];
  };

  const [act3Page1, act3Page2] = splitContentInTwo(chapterContent["3"]);
  const [act4Page1, act4Page2] = splitContentInTwo(chapterContent["4"]);
  const [act4APage1, act4APage2] = splitContentInTwo(chapterContent["4A"]);

  const pages = [
    {
      content: <div className="preamble">CONSTITUTION</div>,
    },
    {
      content: (
        <>
          <h2 className="pt-5 font-bold">ACT - 3</h2>
          {act3Page1.map((item) => (
            <p
              key={item.id}
              className="pl-11 pr-10 pt-5 text-[85%] text-left"
              id={item.id}
            >
              {item.text}
            </p>
          ))}
        </>
      ),
    },
    {
      content: (
        <>
          {act3Page2.map((item) => (
            <p
              key={item.id}
              className="pl-11 pr-10 pt-5 text-[85%] text-left"
              id={item.id}
            >
              {item.text}
            </p>
          ))}
        </>
      ),
    },
    {
      content: (
        <>
          <h2 className="pt-5">ACT - 4</h2>
          {act4Page1.map((item) => (
            <p
              key={item.id}
              className="pl-11 pr-10 pt-5 text-[85%] text-left"
              id={item.id}
            >
              {item.text}
            </p>
          ))}
        </>
      ),
    },
    {
      content: (
        <>
          {act4Page2.map((item) => (
            <p
              key={item.id}
              className="pl-11 pr-10 pt-5 text-[85%] text-left"
              id={item.id}
            >
              {item.text}
            </p>
          ))}
        </>
      ),
    },
    {
      content: (
        <>
          <h2 className="pt-5">ACT - 4A</h2>
          {act4APage1.map((item) => (
            <p
              key={item.id}
              className="pl-11 pr-10 pt-5 text-[85%] text-left"
              id={item.id}
            >
              {item.text}
            </p>
          ))}
        </>
      ),
    },
    {
      content: (
        <>
          {act4APage2.map((item) => (
            <p
              key={item.id}
              className="pl-11 pr-10 pt-5 text-[85%] text-left"
              id={item.id}
            >
              {item.text}
            </p>
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="language-selection flex justify-center items-center mt-4">
        <label htmlFor="language" className="mr-2 font-semibold">
          Select Language:
        </label>
        <select
          id="language"
          value={lang}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      {IsLoader ? (
        <div
          className="loader-container flex justify-center items-center"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ffffff",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          {/* Display SyncLoader while data is loading */}
          <SyncLoader color="#9bff89" margin={10} size={30} />
        </div>
      ) : (
        <div className="book-container">
          <HTMLFlipBook
            width={300}
            height={350}
            size="stretch"
            minWidth={300}
            maxWidth={600}
            minHeight={400}
            maxHeight={500}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="my-book"
          >
            {pages.map((page, index) => (
              <div
                key={index}
                className="page"
                style={{
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="page-content">{page.content}</div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      )}
    </>
  );
};

export default Book;
