import React from "react";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import { createUser } from "../../utils/firebase";

export default function Register() {
  const { value, change, reset } = useInput("one");
  return (
    <div>
      <form>
        <input {...change} />
        <Button title={"Sign Up"} />
      </form>
    </div>
  );
}
