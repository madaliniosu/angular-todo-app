import { moveItemInArray } from '@angular/cdk/drag-drop';
import { computed, Injectable, signal, effect } from '@angular/core';

export interface Todo {
  id: string,
  input: string;
  completed: boolean;
}

const STORAGE_KEY = 'todos';

export type Filter = 'All' | 'Open' | 'Completed';

function loadTodos(): Todo[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [...TODO_DATA];
}

const TODO_DATA: Todo[] = [
  { id: crypto.randomUUID(), input: 'Nothing to do yet', completed: true },
];

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  // -----------------------
  // STATE
  // -----------------------

  private readonly _todos = signal<Todo[]>(loadTodos());
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

  constructor() {
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._todos()));
    });
  }

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
    this._todos.update(current => {
      const updated = [...current, { id: crypto.randomUUID(), input, completed: false }];
      return updated;
    });
  }

  delete(id: string) {
    this._todos.update(current => {
      const updated = current.filter(todo => todo.id !== id);
      return updated;
    });
  }

  toggle(id: string) {
    this._todos.update(current => {
      const updated = current.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return updated;
    });
  }

  reorder(previousIndex: number, currentIndex: number) {
  this._todos.update(current => {
    const updated = [...current];
    moveItemInArray(updated, previousIndex, currentIndex);
    return updated;
  });
}


}
