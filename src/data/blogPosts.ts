export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  image?: string;
  tag: string; // 👈 Added for visible tag beside date
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-creativity",
    title: "How AI is Redefining Creativity in the Modern World",
    date: "Nov 2, 2025",
    tag: "Tech",
    preview:
      "Explore how AI is blending with human imagination to create art, music, and designs that push creative boundaries.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    content: `
# Introduction
Artificial Intelligence has moved beyond automation—it’s now shaping creativity itself.

## The Rise of Generative Tools
From DALL·E to ChatGPT, generative models have given artists, writers, and designers a new playground of possibilities.

---
*“AI doesn’t replace creativity; it expands it.”*

## Human + Machine Collaboration
Creative professionals now work with AI as co-pilots—using it to brainstorm, design faster, and explore new artistic dimensions.

## The Future
In the coming years, expect to see more hybrid art forms born from human emotion and machine precision.
    `,
  },
  {
    id: "web3-evolution",
    title: "Web3 and the Evolution of the Internet",
    date: "Oct 20, 2025",
    tag: "Tech",
    preview:
      "Web3 promises decentralization, ownership, and trustless transactions. But how close are we to realizing that vision?",
    image:
      "https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1731",
    content: `
# Understanding Web3
The third generation of the internet—Web3—focuses on decentralization, blockchain, and user empowerment.

## Why It Matters
Unlike Web2, where data is owned by corporations, Web3 gives control back to users.

---
*“Ownership is the foundation of the next digital era.”*

## Real-World Applications
From NFTs to decentralized finance (DeFi), Web3 is influencing industries worldwide.

## The Challenges
Scalability, regulation, and accessibility remain the biggest hurdles to widespread adoption.
    `,
  },
  {
    id: "nextjs-evolution",
    title: "Why Next.js is the Future of Full-Stack Development",
    date: "Oct 15, 2025",
    tag: "Tech",
    preview:
      "Next.js continues to dominate as the go-to React framework for building fast, scalable, and SEO-friendly web apps.",
    image:
      "https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2030",
    content: `
# The Next.js Revolution
Next.js provides developers with hybrid rendering, API routes, and incredible developer experience.

## Performance and SEO
Server-side rendering (SSR) and static generation ensure faster load times and better search ranking.

---
*“Next.js bridges the gap between frontend and backend seamlessly.”*

## Full-Stack Power
With built-in API routes and middleware, developers can manage both UI and logic in one unified codebase.

## Conclusion
Next.js is not just a framework—it’s the future foundation for modern, production-ready applications.
    `,
  },
  {
    id: "minimalism-design",
    title: "Minimalism in Web Design: Why Less Is More",
    date: "Sep 25, 2025",
    tag: "Design",
    preview:
      "Minimalist design is more than white space—it's about clarity, focus, and emotional impact.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
    content: `
# The Essence of Minimalism
In design, minimalism prioritizes content, usability, and emotion over clutter.

## Simplicity Speaks
Simple layouts and clean typography improve readability and user engagement.

---
*“Every pixel should have a purpose.”*

## Modern Implementation
Using Tailwind CSS and subtle animations, modern minimalism feels elegant yet dynamic.

## Conclusion
A minimalist interface communicates trust, confidence, and timeless beauty.
    `,
  },
  {
    id: "mental-wellbeing-devs",
    title: "Mental Well-Being for Developers: Balancing Code and Life",
    date: "Sep 10, 2025",
    tag: "Self Discipline",
    preview:
      "Developers often face burnout and stress. Here’s how to maintain balance while staying productive and happy.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    content: `
# Introduction
In a fast-paced coding world, mental health is often overlooked.

## Recognizing Burnout
Long hours, debugging frustrations, and constant deadlines can drain creativity and focus.

---
*“You can’t pour from an empty cup.”*

## Strategies for Balance
Take mindful breaks, maintain a schedule, and celebrate small wins.

## The Developer’s Mindset
Remember—progress matters more than perfection. A healthy mind builds better code.
    `,
  },
];
