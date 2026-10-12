import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import indexSource from "@/routes/index.tsx?raw";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("keeps both store phone links and labels the offer as proposed", () => {
    expect(indexSource).toContain('href="tel:+919433167181"');
    expect(indexSource).toContain('href="tel:+918777823100"');
    expect(indexSource).toContain("Proposed promotional concept");
    expect(indexSource).toContain("This concept is not yet an active offer");
  });
});
