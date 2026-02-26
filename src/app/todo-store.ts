import { computed, Injectable, signal } from '@angular/core';

export interface Todo {
  id: string,
  input: string;
  completed: boolean;
}

export type Filter = 'All' | 'Open' | 'Completed';


const TODO_DATA: Todo[] = [
  { id: crypto.randomUUID(), input: 'Do the laundry', completed: true },
  { id: crypto.randomUUID(), input: 'Go to the gym', completed: true },
  { id: crypto.randomUUID(), input: 'Do 20 pushups', completed: false },
];

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
   // -----------------------
  // STATE
  // -----------------------

  private readonly _todos = signal<Todo[]>([...TODO_DATA]);
  private readonly _filter = signal<Filter>('All');

  readonly todos = this._todos.asReadonly();
  readonly filter = this._filter.asReadonly();

  // -----------------------
  // DERIVED STATE
  // -----------------------

  readonly filteredTodos = computed(() => {
    const todos = this._todos();
    const filter = this._filter();

    switch (filter) {
      case 'Open':
        return todos.filter(t => !t.completed);
      case 'Completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  });

  readonly totalCount = computed(() => this._todos().length);

  readonly completedCount = computed(() =>
    this._todos().filter(t => t.completed).length
  );

  readonly openCount = computed(() =>
    this._todos().filter(t => !t.completed).length
  );

  // -----------------------
  // FILTER
  // -----------------------

  setFilter(filter: Filter) {
    this._filter.set(filter);
  }

  // -----------------------
  // CRUD ACTIONS
  // -----------------------

  add(input: string) {
    this._todos.update(current => [
      ...current,
      {
        id: crypto.randomUUID(),
        input,
        completed: false
      }
    ]);
  }

  delete(id: string) {
    this._todos.update(current =>
      current.filter(todo => todo.id !== id)
    );
  }

  edit(id: string, newInput: string) {
    this._todos.update(current =>
      current.map(todo =>
        todo.id === id
          ? { ...todo, input: newInput }
          : todo
      )
    );
  }

  toggle(id: string) {
    this._todos.update(current =>
      current.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  clearCompleted() {
    this._todos.update(current =>
      current.filter(todo => !todo.completed)
    );
  }

}
