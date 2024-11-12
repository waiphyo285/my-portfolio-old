import { setupWorker, rest } from "msw";

import auth from "../sources/auth.json";
import navlist from "../sources/navlist.json";
import personal from "../sources/personal.json";
import contents from "../sources/content.json";
import projects from "../sources/project.json";
import contacts from "../sources/contact.json";
import banners from "../sources/banner.json";
import socials from "../sources/social.json";

// Session Storage
import ssService from "../services/sessionStorage";

// Add an extra delay to all endpoints
const DELAY_MS = 1000;
const PIN_REPOS = [
  "nodejs-starter-kit",
  "waiphyo-portfolio",
  "next-microfrontend",
  "graphql-examples",
  "microservices-lab",
  "nextjs-signal",
];

const worker = setupWorker(
  rest.post("/mockApi/update_portfolio", (req, res, ctx) => {
    return res(ctx.delay(0), ctx.json(true));
  }),
  rest.post("/mockApi/login", (req, res, ctx) => {
    const { username, password } = req.body;
    const { username: mockUser, password: mockPass } = auth.result;
    const isUser = username === mockUser && password === mockPass;
    const result = isUser ? auth.result : null;

    ssService.setItem("user", result);

    return res(ctx.delay(0), ctx.json(result));
  }),
  rest.post("/mockApi/logout", (req, res, ctx) => {
    ssService.removeItem("user");

    return res(ctx.delay(0), ctx.json(true));
  }),
  rest.get("/mockApi/personal", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(personal.result));
  }),
  rest.get("/mockApi/navlist", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(navlist.result));
  }),
  rest.get("/mockApi/content", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(contents.result));
  }),
  rest.get("/mockApi/project", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(projects.result));
  }),
  rest.get("/mockApi/repository", async (req, res, ctx) => {
    async function fetchRepoJSON(username) {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&pinned=true`
      );
      const repositories = await response.json();
      return repositories.filter((r) => !r.fork && PIN_REPOS.includes(r.name));
    }

    const repositories = await fetchRepoJSON("waiphyo285");

    return res(ctx.delay(DELAY_MS), ctx.json(repositories));
  }),
  rest.get("/mockApi/contact", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(contacts.result));
  }),
  rest.get("/mockApi/banner", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(banners.result));
  }),
  rest.get("/mockApi/social", (req, res, ctx) => {
    return res(ctx.delay(DELAY_MS), ctx.json(socials.result));
  })
);

export default worker;
