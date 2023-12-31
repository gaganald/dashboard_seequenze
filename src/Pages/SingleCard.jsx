import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();
  const [cardDetail, setCardDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=6"
        );
        const data = await response.json();
        const singleCard = data.filter((p) => p.id == id);
        setCardDetail(singleCard[0]);
      } catch (error) {
        console.log("Error Occur");
      }
    };
    fetchData();
  }, [id]);

  const { author, width, height, url, download_url } = cardDetail;

  return (
    <>
      <p className="ml-4 p-2"><Link to={"/myprojects"} className="text-gray-500">My Projects</Link> / {id}</p>
      <div className="max-w-sm h-[460px] rounded p-4 m-5 bg-gray-100">
        <div>
          <img src={download_url} alt="" className="rounded" />
        </div>
        <div>
          <h3 className="text-center font-bold text-2xl py-2">{author}</h3>
          <p className="p-1 text-lg font-semibold">Author: {author}</p>
          <p className="p-1 text-lg font-semibold">Width: {width}</p>
          <p className="p-1 text-lg font-semibold">Height: {height}</p>
          <div className="m-3 text-center">
            <a href={url} className="p-1 bg-red-400 rounded-sm font-medium">
              Image Url
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
