"use client";

import Link from "next/link";
import ButtonDelete from "./button-delete";
import { Todo } from "@/app/types/todo";
import { useRouter } from "next/navigation";

type TodoListProps = {
  todo: Todo;
};

function TodoList({ todo }: TodoListProps) {
  const router = useRouter();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    await fetch(`${process.env.NEXT_PUBLIC_API}/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: e.target.checked }),
    });

    router.refresh();
  }

  return (
    <>
      <div className="todo_header">
        <Link href={`/todo/${todo.id}`}>
          <p>{todo.title}</p>
        </Link>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
      </div>
      <ButtonDelete id={todo.id} />
    </>
  )
}

export default TodoList;
