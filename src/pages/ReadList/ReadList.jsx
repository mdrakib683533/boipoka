import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();

    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type)=>{
    setSort(type);
  }

  return (
    <div className="mt-20">
      <details className="dropdown">
        <summary className="btn m-1">sort by: {sort? sort: ''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=> handleSort('pages')}>pages</a>
          </li>
          <li>
            <a onClick={()=> handleSort('ratings')}>ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-6xl mx-auto">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
