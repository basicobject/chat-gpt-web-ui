import { defineStore } from "pinia";

interface Message {
  id: string;
  text: string;
  user: boolean;
}
interface MessageStore {
  messages: Array<Message>;
}

export const useMessageStore = defineStore("messageStore", {
  state: () => {
    const emptyStore: MessageStore = {
      messages: [
        { id: Date.now().toString(), text: "Display panel", user: true },
        {
          id: (Date.now() + 2).toString(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae, soluta dicta in quo aliquam! Corrupti magni nisi vel dolorem numquam, repudiandae optio. Minima sequi, amet architecto porro nobis ratione.",
          user: false,
        },
        { id: (Date.now() + 1).toString(), text: "Display panel", user: true },
      ],
    };
    return emptyStore;
  },
  actions: {
    addMessage(message: string, user: boolean = true) {
      this.messages.push({
        id: Date.now().toString(),
        text: message,
        user,
      });
    },
  },
});
