import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from "../firebase";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

function Inputbox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    const docRef = await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });
    const imageRef = ref(storage, `posts/${docRef.id}/picture`);
    await uploadString(imageRef, selectedFile, "data_url")?.then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), { image: downloadURL });
      }
    );
    // .then((doc) => {
    //   if (selectedFile) {
    //     const uploadTask = storage
    //       .ref(`posts/${doc.id}`)
    //       .putString(selectedFile, "data_url");
    //     removeImage();
    //     uploadTask.on(
    //       "state_change",
    //       null,
    //       (error) => console.log(error),
    //       () => {
    //         storage
    //           .ref("posts")
    //           .child(doc.id)
    //           .getDownloadURL()
    //           .then((url) => {
    //             db.collection("posts").doc(doc.id).set(
    //               {
    //                 postImage: url,
    //               },
    //               { merge: true }
    //             );
    //           });
    //       }
    //     );
    //   }
    // });

    inputRef.current.value = "";
    removeImage();
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
    setSelectedFile(selectedFile);
  };
  const removeImage = () => {
    setSelectedFile(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img src={session.user.image} alt="profile" className="rounded-full " />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5  focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What is on your mind,${session.user.name}`}
          />
          <button hidden onClick={sendPost} type="submit">
            Post
          </button>
        </form>
        {selectedFile && (
          <div
            onClick={removeImage}
            className="flex flex-col hover:brightness-110 transition duration-150 transform cursor-pointer hover:scale-105"
          >
            <img
              src={selectedFile}
              alt="post"
              className="object-contain h-10"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />{" "}
          <p className="text-xs sm:text-xs xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-xs xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-xs xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
