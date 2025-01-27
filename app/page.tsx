import Form from "./_components/form-todo";
import TodoList from "./_components/todo-list";
import { Todo } from "./types/todo.d";

async function Home() {
  const rest = await fetch(process.env.NEXT_PUBLIC_API as string,{
    next:{
      tags: ["todo"]
    }
  });
  const data = await rest.json();
  return (
    <main>
      <h1>Todos</h1>
      <Form />
      <section className="todo_list">
        {
          !!data && data.map((todo: Todo) => (
            <div key={todo.id} className="card">
              <TodoList todo={todo} />
            </div>
          ))
        }

      </section>
    </main>
  );
}

export default Home;