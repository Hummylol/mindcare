// articledata.ts
interface Article {
  id: number;
  title: string;
  content: string;
}

export const articles: Record<string, Article[]> = {
  happy: [
    { id: 1, title: "The Science of Happiness", content: "Learn how happiness affects your brain and body." },
    { id: 2, title: "10 Ways to Stay Happy", content: "Practical tips to boost your mood every day." },
  ],
  bored: [
    { id: 1, title: "Fun Things to Do When You're Bored", content: "Engaging activities to beat boredom." },
    { id: 2, title: "Creative Hobbies to Try", content: "Explore new hobbies that bring excitement." },
  ],
  sad: [
    { id: 1, title: "Coping with Sadness", content: "Understand your emotions and find comfort." },
    { id: 2, title: "How to Lift Your Mood", content: "Effective ways to overcome sadness." },
  ],
  angry: [
    { id: 1, title: "Managing Anger Constructively", content: "Healthy ways to express and control anger." },
    { id: 2, title: "The Psychology of Anger", content: "Why we feel angry and how to manage it." },
    { id: 3, title: "Calming Techniques for Anger", content: "Relaxation methods to stay composed." },
  ],
};
