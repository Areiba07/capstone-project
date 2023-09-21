import React, { useState } from "react";
import Modal from 'react-modal';
import "../assets/styles/index.css";

export default function AccountBookmark() {
  const [bookmarks, setBookmarks] = useState([
    // Sample data for bookmarks
    {
      id: 1,
      title: "Service 1",
      description: "Description of Service 1",
      address: "Cuartero, Jaro, Iloilo",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Service 2",
      description: "Description of Service 2",
      address: "Poblacion, Leganes, Iloilo",
      rating: 3.8,
    },
  ]);

  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
    setSelectedBookmark(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Bookmarks</h1>
      {bookmarks.map((bookmark) => (
        <div
          key={bookmark.id}
          className="rounded-lg bg-white p-4 shadow-md mb-4"
        >
          <div className="bookmark-content">
            <h2 className="text-lg font-semibold mb-2">{bookmark.title}</h2>
            <p className="text-gray-600 mb-2">{bookmark.description}</p>
            <p className="text-gray-500 mb-2">Address: {bookmark.address}</p>
            <p className="text-yellow-500 mb-2">Rating: {bookmark.rating}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              View
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => setSelectedBookmark(bookmark)}
            >
              Remove Bookmark
            </button>
          </div>
        </div>
      ))}
      {/* Modal for bookmark removal */}
      <Modal
        isOpen={selectedBookmark !== null}
        onRequestClose={() => setSelectedBookmark(null)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-xl font-semibold mb-4">Confirm Bookmark Removal</h2>
        {selectedBookmark && (
          <div>
            <p>
              Are you sure you want to remove the bookmark for "
              {selectedBookmark.title}"?
            </p>
            <div className="mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => {
                  removeBookmark(selectedBookmark.id);
                }}
              >
                Remove
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
                onClick={() => setSelectedBookmark(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
