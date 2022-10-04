import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import {
  TasksContainer,
  Wrapper,
  Information,
  TasksList,
  Task,
  EmptyContainer,
} from "./styles";

import {
  PlusCircle,
  Circle,
  Trash,
  ClipboardText,
  CheckCircle,
} from "phosphor-react";
import { Header } from "../../components/Header";

interface Task {
  content: string;
  done: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { content: "Teste", done: true },
  ]);
  const [inputTask, setInputTask] = useState("");
  const [inputFilter, setInputFilter] = useState("");

  const tasksFiltered = tasks.filter((task) =>
    task.content.includes(inputFilter)
  );

  const tasksCompleted = tasks.filter((task) => task.done).length;

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    setTasks([{ content: inputTask, done: false }, ...tasks]);
    setInputTask("");
  }

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setInputTask(event.target.value);
  }

  function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
    setInputFilter(event.target.value);
  }

  function handleTaskDelete(taskIndex: number) {
    let newTasks = tasks;

    newTasks.splice(taskIndex, 1);

    setTasks([...newTasks]);
  }

  function handleTaskComplete(taskIndex: number) {
    let newTasks = tasks;

    newTasks.forEach((task, index) => {
      if (taskIndex === index) {
        task.done = !task.done;
      }
    });

    setTasks([...newTasks]);
  }

  function handleCreateTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Preencha este input");
  }

  return (
    <TasksContainer>
      <Header />

      <Wrapper>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputTask}
            onChange={handleChangeTask}
            onInvalid={handleCreateTaskInvalid}
            required
          />

          <button type="submit">
            Criar <PlusCircle />
          </button>
        </form>

        <Information>
          <input
            type="text"
            placeholder="Pesquise por uma tarefa"
            value={inputFilter}
            onChange={handleChangeFilter}
          />

          <div>
            <strong>
              Tarefas Criadas <span className="created">{tasks.length}</span>
            </strong>
            <strong>
              Tarefas Concluídas{" "}
              <span>
                {tasksCompleted} de {tasks.length}
              </span>
            </strong>
          </div>
        </Information>

        {tasksFiltered.length > 0 ? (
          <TasksList>
            {tasksFiltered.map((task, index) => (
              <Task key={`${index}-${task.content}`}>
                <button type="button" onClick={() => handleTaskComplete(index)}>
                  {task.done ? <CheckCircle size={24} /> : <Circle size={24} />}
                </button>

                <p className={task.done ? "done" : ""}>{task.content}</p>

                <button type="button" onClick={() => handleTaskDelete(index)}>
                  <Trash size={24} />
                </button>
              </Task>
            ))}
          </TasksList>
        ) : (
          <EmptyContainer>
            <ClipboardText size={56} />

            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seis itens a fazer
            </p>
          </EmptyContainer>
        )}
      </Wrapper>
    </TasksContainer>
  );
}
