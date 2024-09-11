// FloatingButton.js
'use client'
import React, { useState } from 'react';
import OverlayList from './Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

const FloatingButton = ({ onClick }) => {
    const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="fixed bottom-4 right-4 bg-primaryColor text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition ease-in-out duration-300"
      >
                    <FontAwesomeIcon icon={faListCheck} className="text-white    dark:text-white inline-block" width={24} height={24} />

      </button>
        {visible && <OverlayList onClose={() => setVisible(false)} />}
    </>
  );
};
export default FloatingButton;
