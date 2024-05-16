import React, { useCallback, useState } from "react";
import MyTextField from "../../../components/form/MyTextField";
import SubmitButton from "../../../components/buttons/SubmitButton";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});

  const handleTextInput = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    if (title.length === 0) {
      return setErrors({ ...errors, Title: "Field cannot be empty" });
    }
    try {
      await axios.post("http://localhost:4000/pos", { title });
      setTitle("");
      setErrors({});
    } catch (error) {
      setErrors({ ...errors, [title]: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <MyTextField label="Title" value={title} onChange={handleTextInput} errors={errors} />
      <SubmitButton />
    </form>
  );
};

export default PostCreate;
