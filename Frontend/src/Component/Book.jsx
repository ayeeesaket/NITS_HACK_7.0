import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import axios from "axios";
import Navbar from "./Navbar";
const Book = () => {
  const dog = document.getElementById("dog");
  fetch("https://dog-api.kinduff.com/api/facts")
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data.facts[0]))

    .catch((error) => console.log(error));

  // using async await :

  async function consumePromise() {
    try {
      const promise = await fetch("https://dog-api.kinduff.com/api/facts");
      const response = await promise.json();
      console.log(response);
      dog.innerText = response.facts;
    } catch (error) {
      console.log(error);
    }
  }
   

  const backgroundImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/6/61/Constitution_of_India_%28calligraphic%29_109.jpg";

  const pages = [
    {
      // Preamble page
      content: (
        <>
          <div className="preamble">
            <button id="dog" onClick={consumePromise}>
              hello
            </button>
            <img src="./assets/Constitution_of_India.jpg" alt="" />
          </div>
        </>
      ),
    },
    {
      // Act 3-page1
      content: (
        <>
          <h2 className="pt-5">ACT - 3</h2>
          <p
            id="content-3-page1-para1"
            className="pl-11 pr-10 pt-5 text-[85%] text-center"
          ></p>
          <p
            id="content-3-page1-para2"
            className="pl-11 pr-10 text-[85%] pt-5 text-center"
          ></p>
          <p
            id="content-3-page1-para3"
            className="pl-11 pr-10 text-[85%] pt-5 text-center"
          ></p>
        </>
      ),
    },

    {
      // Act 3-page2
      content: (
        <>
          <p
            id="content-3-page2-para1"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-3-page2-para2"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
        </>
      ),
    },
    {
      // Act 4-page1
      content: (
        <>
          <h2 className="pt-5">ACT - 4</h2>
          <p
            id="content-4-page1-para1"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-4-page1-para2"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
          <p
            id="content-4-page1-para3"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
        </>
      ),
    },
    {
      // Act 4-page2
      content: (
        <>
          <p
            id="content-4-page2-para1"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-4-page2-para2"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-4-page2-para3"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-4-page2-para4"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
        </>
      ),
    },
    {
      // Act 4A-page1
      content: (
        <>
          <h2 className="pt-5">ACT - 4A</h2>
          <p
            id="content-4A-page1-para1"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-4A-page1-para2"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
          <p
            id="content-4A-page1-para3"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
          <p
            id="content-4A-page1-para4"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
        </>
      ),
    },
    {
      // Act 4A-page2
      content: (
        <>
          <p
            id="content-4A-page2-para1"
            className="pl-11 pr-10 pt-5 text-[85%] text-left"
          ></p>
          <p
            id="content-4A-page2-para2"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
          <p
            id="content-4A-page2-para3"
            className="pl-11 pr-10 text-[85%] pt-5 text-left"
          ></p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchChapterData = async (title, contentIds) => {
      try {
        const response = await axios.post("/api/v1/book/getChapter", { title });
        console.log(response.data.data.content);
        response.data.data.content.forEach((content, index) => {
          const contentElement = document.getElementById(contentIds[index]);
          if (contentElement) contentElement.innerText = content;
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchChapterData("3", [
      "content-3-page1-para1",
      "content-3-page1-para2",
      "content-3-page1-para3",
      "content-3-page2-para1",
      "content-3-page2-para2",
    ]);

    fetchChapterData("4", [
      "content-4-page1-para1",
      "content-4-page1-para2",
      "content-4-page1-para3",
      "content-4-page2-para1",
      "content-4-page2-para2",
      "content-4-page2-para3",
      "content-4-page2-para4",
    ]);

    fetchChapterData("4A", [
      "content-4A-page1-para1",
      "content-4A-page1-para2",
      "content-4A-page1-para3",
      "content-4A-page1-para4",
      "content-4A-page2-para1",
      "content-4A-page2-para2",
      "content-4A-page2-para3",
    ]);
  }, []);

  return (
    <>
      {" "}
      <Navbar />
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
    </>
  );
};

export default Book;
