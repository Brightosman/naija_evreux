"use client";

import React from 'react'
import { useState, useEffect } from "react";
import NoticeCard from './NoticeCard';


const NoticeCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 notice_layout'>
      {data.map((post) => (
        <NoticeCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};
const Notice = () => {
    const [allPosts, setAllPosts] = useState([]);

    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/notice");
        const data = await response.json();

        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filterNotices = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return allPosts.filter(
        (item) =>
            regex.test(item.creator.username) ||
            regex.test(item.tag) ||
            regex.test(item.notice)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
        setTimeout(() => {
            const searchResult = filterNotices(e.target.value);
            setSearchedResults(searchResult);
        }, 500)
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);

        const searchResult = filterNotices(tagName);
        setSearchedResults(searchResult);
    };


  return (
    <section className="notice ">
        <form className=" relative w-full flex-center">
            <input
                type='text'
                placeholder='Search for a tag or a username'
                value={searchText}
                onChange={handleSearchChange}
                required
                className='search_input peer'
            />
        </form>

        {/* All Notices */}
        {searchText ? (
            <NoticeCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
            />
        ) : (
            <NoticeCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
    </section>
  )
}

export default Notice