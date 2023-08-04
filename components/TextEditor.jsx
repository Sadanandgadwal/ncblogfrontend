"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor), {
  ssr: false, // Ensure Editor is not rendered on the server-side
});

const TextEditor = () => {
  const [state, setState] = useState({ editorStates: EditorState.createEmpty() });

  const onStateChange = (e) => {
    setState({ editorStates: e });
  };

  const aa = state.editorStates;
  console.log(draftToHtml(aa));

  const toolbarOptions = {
    options: ["inline", "list", "textAlign", "colorPicker", "link", "embedded", "emoji", "image", "remove", "history"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
    font: [20],
  };

  return (
    <div className="w-full text-center">
      <div className="border px-5">
        <Editor
          value={state}
          toolbarClassName="text-black bg-red-400"
          onChange={onStateChange}
          toolbar={toolbarOptions}
        />
      </div>
      <textarea
        className="w-8/12 h-80 mt-5 p-5 bg-white text-white"
        disabled
        value={draftToHtml(state.editorStates)}
      />
    </div>
  );
};

const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <TextEditor />;
};

export default MyComponent;
