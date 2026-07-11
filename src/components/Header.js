import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_LOGO,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGPTSearchTrue = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-3 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2">
          {isGPTSearchTrue && (
            <select
              className="p-2 bg-gray-900 text-white"
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="py-2 px-10 bg-purple-600 text-white rounded-lg mx-2"
            onClick={handleGPTSearchClick}
          >
            GPT search
          </button>
          <img className="p-1 w-12 h-12" src={USER_LOGO} alt="" />
          <button className="text-white font-bold p-1" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
