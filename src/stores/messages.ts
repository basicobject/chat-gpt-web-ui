import { defineStore } from "pinia";

interface Message {
  id: string;
  text: string;
  user: boolean;
}

interface Thread {
  id: string;
  messages: Array<Message>;
}

interface MessageStore {
  currentThreadId: string;
  threads: Array<Thread>;
}

export const useMessageStore = defineStore("messageStore", {
  state: () => {
    const threadId = Date.now().toString();
    const emptyStore: MessageStore = {
      currentThreadId: threadId,
      threads: [
        {
          id: threadId,
          messages: [
            { id: Date.now().toString(), text: "Display panel", user: true },
            {
              id: (Date.now() + 2).toString(),
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae, soluta dicta in quo aliquam! Corrupti magni nisi vel dolorem numquam, repudiandae optio. Minima sequi, amet architecto porro nobis ratione.",
              user: false,
            },
            {
              id: (Date.now() + 1).toString(),
              text: "Display panel",
              user: true,
            },
          ],
        },
      ],
    };
    return emptyStore;
  },
  actions: {
    addMessage(message: string, user: boolean = true) {
      this.threads
        .filter((t) => t.id === this.currentThreadId)
        .map((t) =>
          t.messages.push({
            id: Date.now().toString(),
            text: message,
            user,
          })
        );
    },
    addEmptyThread() {
      const thread = {
        id: Date.now().toString(),
        messages: [],
      };
      this.threads.push(thread);
      this.currentThreadId = thread.id;
    },
    setCurrentThread(id: string) {
      this.currentThreadId = id;
    },
  },
  getters: {
    currentThread: (store) =>
      store.threads.find((t) => t.id === store.currentThreadId),
  },
});
